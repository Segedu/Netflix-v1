import axios from "axios";
import { useState } from "react";
import { API_KEY } from '../../../logic/key';
import Spinner from '../../components/Spinner'
import styles from './LogIn.module.css';

const LogIn = ({ setAuth }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorFromServer, setErrorFromServer] = useState(false);
    const [loading, setLoading] = useState(false);
    const LOCAL_STORAGE_AUTH_KEY = "auth";

    const login = () => {
        setLoading(true)
        const url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`;
        axios
            .post(url, {
                email,
                password,
            })
            .then(function (response) {
                setLoading(false)
                setAuth(response.data);
                localStorage.setItem(LOCAL_STORAGE_AUTH_KEY, JSON.stringify(response.data));
            })
            .catch(function (error) {
                console.log(error)
                setErrorFromServer(error)
            });
    }

    return (
        <div className="Form">
            <dialog open>
                <button className={styles.closeDialog}>X</button>
                <h1>LogIn</h1>
                <form onSubmit={(e) => {
                    e.preventDefault(),
                        login()
                }}>
                    <input className={styles.input} type="email" placeholder="Enter Your Email" onChange={(e) => { setEmail(e.target.value) }} /><br></br>
                    <input className={styles.input} type="password" placeholder="Enter Your Password" onChange={(e) => { setPassword(e.target.value) }} /><br></br>
                    <input className={styles.button} type="submit" value="Log-In" />
                </form>
            </dialog>
            <h3>{errorFromServer ? "Error from server during Login" : ""}</h3>
            <section>{loading ? <Spinner /> : ""}</section>
        </div >)
}

export default LogIn;