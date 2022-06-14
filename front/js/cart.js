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
                productQuantity.className = "itemQuantity";
                productQuantity.setAttribute("type", "number");
                productQuantity.setAttribute("min", "1");
                productQuantity.setAttribute("max", "100");
                productQuantity.setAttribute("name", "itemQuantity");
                productQuantity.setAttribute("value", item.quantity);

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
            //let boutonSupprimer = document.getElementsByClassName("itemDelete");

            //for (let k = 0; k < boutonSupprimer.length; k++){
                deleteAccept.addEventListener("click" , (event) => {
                    event.preventDefault();

                    //Selection de l'element à supprimer en fonction de son id ET sa couleur
                    let idDelete = item.Id;
                    let colorDelete = item.color;

                    Cart = kanapInfos.filter( el => el.Id !== idDelete || el.Color !== colorDelete );
                    event.target.closest(".cart__item").remove();
                
                    localStorage.setItem("Kanap", JSON.stringify(Cart));

                    //Alerte produit supprimé et refresh
                    alert("Ce produit a bien été supprimé du panier");
                    location.reload();
                })

                productQuantity.addEventListener("change" , (e) => {
                    e.preventDefault();
        
                    //Selection de l'element à modifier en fonction de son id ET sa couleur
                    let qttModifValue = Number(productQuantity.value);
                    let idModif = item.Id;
                    let colorModif = item.color;
                    
                    Cart = kanapInfos.find((el) => el.Id === idModif ) && ((el) => el.Color === colorModif);
                    if(Cart){
                        Cart.quantity = qttModifValue;
                        localStorage.setItem("Kanap", JSON.stringify(Cart));
                    } else {
                        Cart.push(Kanap);
                        localStorage.setItem("Kanap", JSON.stringify(Cart));
                    }
                
                    // refresh rapide
                    //location.reload();
                })
    })}
}