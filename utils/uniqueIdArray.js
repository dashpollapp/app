//Funktioniert nur mit items, die eine ObjectId (_id) haben
export default (arrArg) => {
    arrayOfExistingIds = [];
    return arrArg.filter(item => {
        if (arrayOfExistingIds.includes(item._id)) return false;
        arrayOfExistingIds.push(item._id);
        return true;
    });
}
