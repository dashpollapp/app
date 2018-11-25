//https://gist.github.com/telekosmos/3b62a31a5c43f40849bb
export default (arrArg) => {
    arrayOfExistingIds = [];
    return arrArg.filter(item => {
        if (arrayOfExistingIds.includes(item._id)) return false;
        arrayOfExistingIds.push(item._id);
        return true;
    });
}
