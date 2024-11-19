import DataUriParser from "datauri/parser.js";
import path from "path";

const getDataUri = (file) => {
    if (!file || !file.originalname || !file.buffer) {
        throw new Error("Invalid file object passed");
    }

    const parser = new DataUriParser();
    const extName = path.extname(file.originalname).toString(); // Ensure originalname is valid
    return parser.format(extName, file.buffer); // Returns data URI
};

export default getDataUri;
