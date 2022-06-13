let kanapInfos = JSON.parse(localStorage.getItem("Kanap"));

if (kanapInfos){
    for (let Kanap of kanapInfos) {
        let item = {
            Id : Kanap.Id,
            color : Kanap.Color,
            quantity : Kanap.Quantity,
        }

        fetch("http://localhost:3000/api/products/" + item.Id)
        .then(function(res){
            if(res.ok){
            return res.json();
            }
        })

        .then(function (kanap){

            let section = document.getElementById("cart__items");

            let article = document.createElement("article");
                article.classList.add("cart__item");

            let itemImg = document.createElement("div");
                itemImg.classList.add("cart__item__img");

            let image = document.createElement("img");
                image.src = kanap.imageUrl;
                image.alt = kanap.altTxt;

            let itemContent = document.createElement("div");
                itemContent.classList.add("cart__item__content");

            let itemDesc = document.createElement("div");
                itemDesc.classList.add("cart__item__content__description");

            let h2 = document.createElement("h2");
                h2.classList.add("productName");
                h2.innerHTML = kanap.name;

            let color = document.createElement("p");
                    color.innerHTML = item.color;

            let price = document.createElement("p");
                price.innerHTML = kanap.price +(' €');

            let itemSettings = document.createElement("div");
                itemSettings.classList.add("cart__item__content__settings");

            let itemSetQuantity = document.createElement("div");
                itemSetQuantity.classList.add("cart__item__content__settings__quantity");

            let nomQte = document.createElement("p");
                nomQte.innerHTML = ('Qté : ');

            let productQuantity = document.createElement("input");
                itemSetQuantity.appendChild(productQuantity);
                productQuantity.value = item.quantity;
                productQuantity.className = "itemQuantity";
                productQuantity.setAttribute("type", "number");
                productQuantity.setAttribute("min", "1");
                productQuantity.setAttribute("max", "100");
                productQuantity.setAttribute("name", "itemQuantity");

            let itemDelete = document.createElement("div");
                itemDelete.classList.add("cart__item__content__settings__delete");

            let deleteAccept = document.createElement("p");
                deleteAccept.classList.add("itemDelete");
                deleteAccept.innerHTML = ('Supprimer');

            section.appendChild(article);

            article.appendChild(itemImg);
            article.appendChild(itemContent);

            itemImg.appendChild(image);

            itemContent.appendChild(itemDesc);

            itemDesc.appendChild(h2);
            itemDesc.appendChild(color);
            itemDesc.appendChild(price);

            article.appendChild(itemSettings);

            itemSettings.appendChild(itemSetQuantity);

            itemSetQuantity.appendChild(nomQte);
            itemSetQuantity.appendChild(productQuantity);

            article.appendChild(itemDelete);

            itemDelete.appendChild(deleteAccept);  

        //function supprimerProduit() {
            let boutonSupprimer = document.querySelectorAll(".itemDelete");

                boutonSupprimer.addEventListener("click", function() {

                    let idDelete = item.Id;
                    let colorDelete = item.color;

                    kanapInfos = kanapInfos.filter( el => el.Id !== idDelete || el.color !== colorDelete);

                    localStorage.setItem("Kanap", JSON.stringify(kanapInfos));

                    alert("Ce prdouit a bien été supprimé du panier");
                    location.reload();
                })
        })
    }
}
        //supprimerProduit();