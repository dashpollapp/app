import path from "path";
import fs from "fs";

const allowedEndings = ["jpg", "png", "jpeg"];

export default function searchImages(dir) {
    let images = [];

    fs.readdirSync(dir).forEach(function (filePath) {

        filePath = path.resolve(dir, filePath);

        let fileInfo = fs.statSync(filePath);
        if (fileInfo.isDirectory()) images = images.concat(searchImages(filePath));
        if (fileInfo.isFile()) {

            let fileType = filePath.split(".").pop();
            if (allowedEndings.includes(fileType)) {
                images.push(filePath);
            }
        }
    });
    return images;
};