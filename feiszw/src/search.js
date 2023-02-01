function execute(key, page) {
    let response = fetch('https://m.feiazw.com/search.aspx', {
        method: "GET",
        queries: {
            s : key,
        }
    });

    if (response.ok) {
        let doc = response.html();
        const data = [];
        
		doc.select("#h div.nlist").forEach(e => {
            data.push({
                name: e.select("h3").first().text(),
                link: e.select("a").first().attr("href"),
                cover: "https://images.weserv.nl/?url=https://www.feiazw.com" + e.select("img").first().attr("src") + "&output=jpg",
                description: e.select("span.author").text().trim(),
                host: "https://m.feiazw.com"
            })
        });

        return Response.success(data);
    }
    return null;
}