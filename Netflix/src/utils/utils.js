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


      // function searchData(qurey) {
    //     const temp_result = books.filter(
    //         (book) =>
    //             book.title.toLowerCase().includes(qurey) ||
    //             book.longDescription.toLowerCase().includes(qurey) ||
    //             book.authors.toLowerCase().includes(qurey)
    //     );
    //     setResult(temp_result);
    // }

