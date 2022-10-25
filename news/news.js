API_KEY = '7031b4857e444bdbb23dd2663451bfc9';

async function News(category){
    var typeOfNews;
    if(category === 'business' || category === 'entertainment' || category === 'general' || category === 'science' || category ==='health' || category === 'technology' || category === 'sports'){
         typeOfNews = "top-headlines";
         beforeCategory = "country=IN&category=";
    }
    else{
        typeOfNews = "everything";
        beforeCategory = "q=";
    }

    URL = `https://newsapi.org/v2/${typeOfNews}?${beforeCategory}${category}&from=2022-03-22&sortBy=publishedAt&apiKey=${API_KEY}`;

    console.log(URL);

    let response = await fetch(URL);
    let data = await response.json();
    let articles = data.articles;
    return articles;
}

function retriveNews(category){
    News(category).then(articles => {

        let htmlCode = "";

        for(i=0;i<articles.length;i++){
            htmlCode = htmlCode + constructionOfHTML(articles[i]);
        }

        document.getElementById("htmlContent").innerHTML = htmlCode;
    });
    
}

function searchItem(){
    if(document.getElementById('searchCategory')){
        retriveNews(document.getElementById('searchCategory').value);
    }
}

function constructionOfHTML(article){
    let theCode = 
    `<div class="col-sm-6 my-3">
        <div class="card bg-light">
                <img src="${article.urlToImage}" class="card-img-top" alt="${article.title}">
                <div class="card-body">
                    <h5 class="card-title">${article.title}</h5>
                    <p class="card-text">${article.description}</p>
                </div>
                <div class="card-body">
                    <a href="${article.url}" class="card-link" target="_blank">${article.source.name}</a>
                </div>
        </div>
    </div>`;
    return theCode;
}