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
        })    

        function supprimerProduit() {
            let boutonSupprimer = document.querySelectorAll(".itemDelete");

            for (let k = 0; k < boutonSupprimer.length; k++){
                boutonSupprimer[k].addEventListener("click" , (event) => {
                    event.preventDefault();

                    //Selection de l'element à supprimer en fonction de son id ET sa couleur
                    let idDelete = kanapInfos[k].Id;
                    let colorDelete = kanapInfos[k].Color;

                    kanapInfos = kanapInfos.filter( el => el.Id !== idDelete || el.Color !== colorDelete );
                
                    localStorage.setItem("Kanap", JSON.stringify(kanapInfos));

                    //Alerte produit supprimé et refresh
                    alert("Ce produit a bien été supprimé du panier");
                    location.reload();
                })
            }
        }
        supprimerProduit();

        function modifyQtt() {
            let qttModif = document.querySelectorAll(".itemQuantity");
        
            for (let k = 0; k < qttModif.length; k++){
                qttModif[k].addEventListener("change" , (event) => {
                    event.preventDefault();
        
                    //Selection de l'element à modifier en fonction de son id ET sa couleur
                    let qttModifValue = qttModif[k].valueAsNumber;
                    let idModif = kanapInfos[k].Id;
                    
                    const resultFind = kanapInfos.find(el => el.Id == idModif );
        
                    resultFind.quantity = qttModifValue;
                    kanapInfos[k].Quantity = resultFind.quantity;
        
                    localStorage.setItem("Kanap", JSON.stringify(kanapInfos));
                
                    // refresh rapide
                    location.reload();
                })
            }
        }
        modifyQtt();

        function totalQuantitePrix(){
            // Récupération du total des quantités
            let quantityElement = document.getElementsByClassName('itemQuantity');
            let monTableau = quantityElement.length,
            totalQuantity = 0;

            for (var i = 0; i < monTableau; ++i) {
                totalQuantity += quantityElement[i].valueAsNumber;
            }

            let productTotalQuantity = document.getElementById('totalQuantity');
            productTotalQuantity.innerHTML = totalQuantity;

            // Récupération du prix total
            prixTotal = 0;

            for (var i = 0; i < monTableau; ++i) {
                prixTotal += (quantityElement[i].valueAsNumber * kanap.price);
            }

            let productprixTotal = document.getElementById('prixTotal');
            productprixTotal = prixTotal;

            let affichagePrixHTML = document.getElementById("totalPrice");
            affichagePrixHTML.innerHTML = prixTotal;
        }
        totalQuantitePrix();
    }
}

    function test(){

        let prenomError = document.getElementById("firstNameErrorMsg");
        let messagePrenomError = 'Le prénom est invalide';
        let prenom = document.getElementById("firstName").value;
        let regexPrenom = /^([A-Za-zÀ-ÖØ-öø-ÿ][A-Za-zÀ-ÖØ-öø-ÿ ,.'-]*){2}$/;

        if (prenom.match(regexPrenom)) {
                prenomError.innerHTML = "";
        }
            else{
                prenomError.innerHTML = messagePrenomError;
            }

        let nomError = document.getElementById("lastNameErrorMsg");
        let messageNomError = 'Le nom de famille est invalide';
        let nom = document.getElementById("lastName").value;

            if (nom.match(regexPrenom)) {
                nomError.innerHTML = "";
            }
            else{
                nomError.innerHTML = messageNomError;
            }

        let adressError = document.getElementById("addressErrorMsg");
        let messageAdresseError = 'L‘adresse saisie est invalide';
        let adresse = document.getElementById("address").value;

            if (adresse.match(regexPrenom)) {
                adressError.innerHTML = "";
            }
            else{
                adressError.innerHTML = messageAdresseError;
            }

        let villeError = document.getElementById("cityErrorMsg");
        let messageVilleError = 'La ville indiquée est invalide';
        let ville = document.getElementById("city").value;

            if (ville.match(regexPrenom)) {
                messageVilleError.innerHTML = "";
            }
            else{
                villeError.innerHTML = messageVilleError;
            }

        let emailError = document.getElementById("emailErrorMsg");
        let messageEmailError = 'L‘email indiqué est invalide';
        let email = document.getElementById("email").value;
        let regexEmail = /(?=^.{5,20}$)^([A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,3})$/;

        if (email.match(regexEmail)) {
            emailError.innerHTML = "";
        }
        else{
            emailError.innerHTML = messageEmailError;
        }
    test();
    }

function postForm(){
    const btn_commander = document.getElementById("order");

    //Ecouter le panier
    btn_commander.addEventListener("click", (event)=>{
    
        //Récupération des coordonnées du formulaire client
        let firstName = document.getElementById('firstName');
        let lastName = document.getElementById('lastName');
        let adress = document.getElementById('address');
        let city = document.getElementById('city');
        let mail = document.getElementById('email');

        //Construction d'un array depuis le local storage
        let idProduits = [];
        for (let i = 0; i<kanapInfos.length;i++) {
            idProduits.push(kanapInfos[i].Id);
        }

        const order = {
            contact : {
                firstName: firstName.value,
                lastName: lastName.value,
                address: adress.value,
                city: city.value,
                email: mail.value,
            },
            products: idProduits,
        } 

        const options = {
            method: 'POST',
            body: JSON.stringify(order),
            headers: {
                'Accept': 'application/json', 
                "Content-Type": "application/json" 
            },
        };

        fetch("http://localhost:3000/api/products/order", options)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            localStorage.clear();
            localStorage.setItem("orderId", data.orderId);

            document.location.href = "confirmation.html";
        })
    })
}
postForm();