//load chương
function execute(url) {//khi gửi đi nó clear mất /
    if(url.indexOf('m.xklxsw')!=-1)
        url = url.replace('m.xklxsw','xklxsw')
    var doc = Http.get(url+'/').html();
    var idtruyen = url.match(/http.*book\/(\d+)/)[1];
    Console.log(idtruyen);
    if (doc){
        var list = [];
        //var el = doc.select(".content div.fd-list").get(3).select('a')
        var el = doc.select(".content div.fd-list").get(3).select("span.item.chapter a");
        for (var i = 0; i <= el.size()-1; i++) {
            var e = el.get(i);
            list.push({
                name: e.text(),
                url: "https://www.xklxsw.com/book/"+idtruyen+"/"+ e.attr("href"),
                //url: idtruyen+"/"+ e.attr("href"),
                host: "https://www.xklxsw.com"
                //host: "https://www.xklxsw.com/book/"
            });

        }
  
    }
    return Response.success(list);
}

//Okie rồi đó chạy thử đi