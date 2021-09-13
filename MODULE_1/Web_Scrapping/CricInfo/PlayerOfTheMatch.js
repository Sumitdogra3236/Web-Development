/*
// class -> .class
// id -> #idName
// h tag -> h
// attribute -> htag["attribute"]; 
// > -> direct child
*/

let matchlink = "https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-mumbai-indians-final-1237181/live-cricket-score";
const request = require("request");
const cheerio = require("cheerio");
const fs = require('fs');

request(matchlink, callback);

function callback(error, res, html){
    fs.writeFileSync("temp.html", html);
}

