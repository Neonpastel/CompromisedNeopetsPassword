const yaml = require("js-yaml");
const fs = require("fs");

let lyrics = [];
const lyricsDir = "lyrics/";
const lyricsFiles = fs.readdirSync(lyricsDir);

lyricsFiles.forEach((lyricsFile) => {
    if (!lyricsFile.toLowerCase().endsWith("yaml") && !lyricsFile.toLowerCase().endsWith("yml")) return;

    const path = lyricsDir + lyricsFile;
    const content = fs.readFileSync(path);

    let parsedLyrics = yaml.load(content);

    parsedLyrics.File = path;

    lyrics.push(parsedLyrics)
});


module.exports = {
    locals: {
        lyrics: lyrics
    }
}