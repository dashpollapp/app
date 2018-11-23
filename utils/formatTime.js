export default function formatTime(date) {

    if (typeof date === typeof "") {
        date = new Date(date);
    }
    current = new Date();
    currentTS = current.getTime() / 1000 | 0;
    dateTS = date.getTime() / 1000 | 0;

    let difference = currentTS - dateTS;

    if (difference < 2) return "gearde eben";

    if (difference < 60) {
        return "vor " + difference + " Sekunden";
    }

    if (difference < 3600) {

        return "vor " + (difference / 60 | 0) + " Minuten";
    }

    if (difference < 86400) {
        return "vor " + (difference / 3600 | 0) + " Stunden";
    }

    return "am " + (date.getDate() < 10 ? "0" + date.getDate() : date.getDate()) +
        "." + ((date.getMonth() + 1) < 10 ? "0" + (date.getMonth() + 1) : (date.getMonth() + 1)) +
        "." + date.getFullYear();


}