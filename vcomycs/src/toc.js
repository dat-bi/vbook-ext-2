load('config.js');
function execute(url) {
    //url = url.replace("vcomycs.net","vcomycs.co")
    url = url.replace(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n?]+)/img, BASE_URL);
    var doc = Http.get(url).html();

    if (doc){
        var list_chapter = [];
        var title = doc.select(".info-title").text()
        var el = doc.select("tbody td a");
        for (var i = el.size()-1 ; i >= 0 ; i--) {
            var e = el.get(i);
            list_chapter.push({
                //name: e.select("span")[0].text().replace('[...] – ',''),
                name: title + " - " + e.select("span").first().text().match(/Chap.+/)[0],
                url: e.attr("href"),
                host: BASE_URL
            });
        }
    }
    return Response.success(list_chapter);
}