export const addToList = (dataArray, objId, category, setFunction, listKeyName) => {
    const filtered = dataArray.filter(obj => obj.id == objId);
    const foundObj = category.find(obj => obj.id == objId)
    if (foundObj === undefined) { return }

    console.log({ filtered });
    if (filtered.indexOf(foundObj) > -1) {
        alert(`already in the ${listKeyName}`)
    }
    else {
        const updatedArray = [foundObj, ...category];
        setFunction(updatedArray);
        //     // localStorage.setItem(listKeyName, JSON.stringify(updatedArray));
    }
}

export const removeFromList = (objId, category, setFunction, listKeyName) => {
    const updatedArrayAfterRemove = [...category].filter(obj => obj.id !== objId);
    setFunction(updatedArrayAfterRemove);
    localStorage.setItem(listKeyName, JSON.stringify(updatedArrayAfterRemove));
    return updatedArrayAfterRemove
}

export const showObjDetails = (objId, dataArray, setFunction) => {
    const foundObj = dataArray.find(obj => obj.id === objId);
    setFunction(foundObj);
    setIsRedirect(true);
}
    // export const moveToCompleted = (bookId, completedList, readingList, setCompletedList, setReadingList) => {
    //     const foundBook = readingList.find(book => book.id == bookId);
    //     const array = [foundBook, ...completedList];
    //     setCompletedList(array);
    //     removeFromList(bookId, readingList, setReadingList);
    //     localStorage.setItem("CompletedList", JSON.stringify(array));
    // }