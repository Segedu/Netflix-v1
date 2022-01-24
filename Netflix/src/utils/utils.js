export function addToList(dataArray, objId, category, setFunction, listKeyName) {
    const filtered = dataArray.filter(obj => obj.id == objId);
    const foundObj = filtered.find(obj => obj.id == objId);
    if (category.indexOf(foundObj) > -1) {
        alert(`already in your ${listKeyName}`)
    }
    else {
        const updatedArray = [foundObj, ...category];
        setFunction(updatedArray);
        localStorage.setItem(listKeyName, JSON.stringify(updatedArray));
    }
}

export const removeFromList = (objId, category, setFunction, listKeyName) => {
    const updatedArrayAfterRemove = [...category].filter(obj => obj.id !== objId);
    setFunction(updatedArrayAfterRemove);
    localStorage.setItem(listKeyName, JSON.stringify(updatedArrayAfterRemove));
    return updatedArrayAfterRemove
}

export const showObjDetails = (objId, dataArray, setFunction, setIsRedirect) => {
    const foundObj = dataArray.find(obj => obj.id === objId);
    setFunction(foundObj);
    setIsRedirect(true);
}

export function searchData(input, dataArray, setArray, setInput) {
    if (input) {
        const search_result = dataArray.filter(element => {
            const regex = new RegExp(`${input}`, "gi");
            return (element.title.match(regex))
        })
        setArray(search_result)
        setInput(input)
    }
}
