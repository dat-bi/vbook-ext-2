function execute(key, page) {

    if(!page) page = "1"
    var doc = Http.get("https://bato.to/search?word=" + key + "&page=" + page).html()
    var element = doc.select(".series-list > div.item")
    Console.log(element.size())
    var listBook = []
    for(var i in element){
        var book = element[i]
        listBook.push({
            name: book.select(".item-title").text(),
            link: book.select(".item-text a").attr("href").replace("https://bato.to",""),
            cover: book.select("img").attr("src"),
            description: book.select(".item-genre span").toString().replace(/<[^>]+>/g,"").replace(/\n/g,", "),
            host: "https://bato.to"      
        });
    }
    if (listBook.length == 0) next = ""; 
    else next = (parseInt(page) + 1).toString();
    return Response.success(listBook,next)
}