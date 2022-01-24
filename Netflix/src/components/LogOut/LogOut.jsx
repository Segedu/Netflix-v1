import { Fragment } from "react";

const Logout = ({ setAuth }) => {

    setTimeout(() => {
        window.localStorage.removeItem("auth");
    }, 1200000)

    return (<Fragment>
        <button className="LogOutBtn" onClick={() => {
            setAuth(null)
            window.localStorage.removeItem("auth");
        }}>Logout</button>
    </Fragment >)
}

export default Logout;