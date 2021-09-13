/*
// class -> .class
// id -> #idName
// h tag -> h
// attribute -> htag["attribute"]; 
// > -> direct child
*/

/*
request("https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-mumbai-indians-final-1237181/full-scorecard", requestCallback);

function requestCallback (err, res, html) {
    const $ = cheerio.load(html);
    console.log($(".playerofthematch-name").length);
    console.log($($(".playerofthematch-name")[1]).get(0).attribs);
}
*/

let matchlink = "https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-mumbai-indians-final-1237181/live-cricket-score";
const request = require("request");
const cheerio = require("cheerio");
const fs = require('fs');

request(matchlink, callback);

function callback(error, res, html){
    fs.writeFileSync("temp.html", html);
}

