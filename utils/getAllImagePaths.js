import path from "path";
import fs from "fs";

const allowedEndings = ["jpg", "png", "jpeg"];

export default function searchImages(folder) {
    let images = [];

    fs.readdirSync(folder).forEach(filePath => {

        filePath = path.resolve(folder, filePath);

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