localStorage.setItem("ID", "product-ID");
localStorage.setItem("couleurs", "product-color");
localStorage.setItem("image", "cart__item__img");
localStorage.setItem("description", "cart__item__description");
localStorage.setItem("nom", "productName");

let params = new URLSearchParams(window.location.search);
const id = params.get('id');
const url = 'http://localhost:3000/api/products/'+id;
fetch(url)
    .then(function(res){
        if(res.ok){
            return res.json();
        }
    })

    .then(function (datas){
        datas.forEach(products => {

        let article = document.getElementsByClassName("cart__item");
            article = document.createElement("product-ID");
            article = document.createElement("product-color");

        let articleimg = document.getElementsByClassName("cart__item__img");
            articleimg = document.createElement("img");
            img.classList.add("productImage");
            img.src = products.imageUrl;
            img.alt = products.altTxt;

        let articledesc = document.getElementsByClassName("cart__item__content");
            articledesc = document.createElement("cart__item__content__description");

        let h2 = document.createElement("h2");
            h2.classList.add("productName");
            h2.innerHTML = products.name;

        let p = document.createElement("p");
            p.classList.add("productColor");
            p.innerHTML = products.colors;
            p.classList.add("productPrice");
            p.innerHTML = products.price;
        
        article.appendChild(articleimg);
        article.appendChild(articledesc);
        article.appendChild(h2);
        article.appendChild(p);
        });
    });