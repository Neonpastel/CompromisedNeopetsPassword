const yaml = require("js-yaml");
const fs = require("fs");

const lyricsDir = "lyrics/";

let lyrics = [];


const lyricsFiles = fs.readdirSync(lyricsDir);

lyricsFiles.forEach((lyricsFile) => {
    const content = fs.readFileSync(lyricsDir + lyricsFile);
    let parsedLyrics = yaml.load(content);

    console.log(parsedLyrics.Lyrics.Original)

    parsedLyrics.File = lyricsFile;
    parsedLyrics.Id = `${parsedLyrics.Artist}-${parsedLyrics.Song}`;

    lyrics.push(parsedLyrics)
});






module.exports = {
    locals: {
        lyrics: lyrics
    }
}