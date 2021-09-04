function execute() {
    return Response.success([
        { title: "New Novel", input: "https://jpmtl.com/v2/book/show/new?limit=20&page=", script: "gen.js" },
        { title: "Ranking", input: "https://jpmtl.com/v2/ranking?period=daily&limit=20&page=", script: "gen.js" }, 
        { title: "Trending", input: "https://jpmtl.com/v2/ranking/trending?time=daily&limit=20&page=", script: "gen.js" }, 
        { title: "Update", input: "https://jpmtl.com/v2/book/show/latest?limit=1&structured=true&page=", script: "gen.js" }, 
        { title: "Korean Novels", input: "https://jpmtl.com/v2/book/show/latest?limit=1&structured=true&page=", script: "gen.js" }, 
        { title: "Chinese Novels", input: "https://jpmtl.com/v2/category/760/books?limit=20&page=", script: "gen.js" }, 
        
    ]);

}