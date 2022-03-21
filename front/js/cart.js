fetch('http://localhost:3000/api/products')
.then(function(res){
    if(res.ok){
        return res.json();
    }
    })

    /*localStorage.getItem("Couleurs", "product-color");
    localStorage.getItem("Image", "image");
    localStorage.getItem("Description", "description");*/

    /*.then(function (products){*/

       /* function test() {*/
            let section = document.getElementById("cart__items");

            let article = document.createElement("article");
            article.classList.add("cart__item");
            
            let itemImg = document.createElement("div");
            itemImg.classList.add("cart__item__img");

            let image = document.createElement("img");
            image.src = localStorage.getItem("Image");

            let h2 = document.createElement("h2");
            h2.classList.add("productName");
            h2.innerHTML = localStorage.getItem("Nom");

            let desc = document.createElement("p");

            section.appendChild(article);
            article.appendChild(itemImg);
            itemImg.appendChild(image);
            article.appendChild(h2);
    /*}*/
    /*});*/

    /* BIEN PENSER A RAJOUTER LE ALT */

    /*.then(function (datas){
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
    });*/