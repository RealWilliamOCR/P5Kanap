fetch('http://localhost:3000/api/products')
.then(function(res){
    if(res.ok){
        return res.json();
    }
    })
    .then(function (datas){
        datas.forEach(products => {

        let items = document.getElementById('items');
        a = document.createElement('a');
            a.href="./product.html"+"?id="+products._id;
        let article = document.createElement('article');
        let img = document.createElement('img');
        img.classList.add("productImage");
            img.src = products.imageUrl;
            img.alt = products.altTxt;
        let h3 = document.createElement('h3');
            h3.classList.add("productName");
            h3.innerHTML = products.name;
        let p = document.createElement('p');
            p.classList.add("productDescription");
            p.innerHTML = products.description;

        items.appendChild(a);
        a.appendChild(article);
        article.appendChild(img);
        article.appendChild(h3);
        article.appendChild(p);
    });
});
