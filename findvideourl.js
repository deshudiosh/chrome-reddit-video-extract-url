var t = document.body.innerText;
var q = "fallback_url";
var start = t.search(q) + q.length + 4;
t = t.slice(start);
var end = t.search("/?source");
t = t.slice(0, end-1);
document.body.innerText = t; //testing extracted url
window.location.assign(t); 	