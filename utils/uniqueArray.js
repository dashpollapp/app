//https://gist.github.com/telekosmos/3b62a31a5c43f40849bb
export default (arrArg) => {
    return arrArg.filter((elem, pos, arr) => {
        return arr.indexOf(elem) == pos;
    });
}
