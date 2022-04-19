fetch('http://localhost:3000/api/products')
.then(function(res){
    if(res.ok){
        return res.json();
    }
})

var kanapInfos = JSON.parse(localStorage.getItem("Kanap"));

for (var produit in kanapInfos){
let section = document.getElementById("cart__items");

    let article = document.createElement("article");
    article.classList.add("cart__item");

    let itemImg = document.createElement("div");
    itemImg.classList.add("cart__item__img");

    let image = document.createElement("img");
    image.src = kanapInfos[produit].Image;
    image.alt = kanapInfos[produit].ImageAlt;

    let itemContent = document.createElement("div");
    itemContent.classList.add("cart__item__content");

    let itemDesc = document.createElement("div");
    itemDesc.classList.add("cart__item__content__description");

    let h2 = document.createElement("h2");
    h2.classList.add("productName");
    h2.innerHTML = kanapInfos[produit].Nom;

    let color = document.createElement("p");
    color.innerHTML = kanapInfos[produit].Couleurs;

    let price = document.createElement("p");
    price.innerHTML = kanapInfos[produit].Prix +(' €');

    let itemSettings = document.createElement("div");
    itemSettings.classList.add("cart__item__content__settings");

    let itemSetQuantity = document.createElement("div");
    itemSetQuantity.classList.add("cart__item__content__settings__quantity");

    let nomQte = document.createElement("p");
    nomQte.innerHTML = ('Qté : ')+kanapInfos[produit].Quantite;

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
    article.appendChild(itemDelete);
    itemDelete.appendChild(deleteAccept);

    let iconeSupprimer = document.querySelectorAll(".itemDelete");
    for (let s = 0; s < iconeSupprimer.length; s++) {
        iconeSupprimer[s].addEventListener("click", function(){

        let produitSupprimer = kanapInfos[s].Nom;

        kanapInfos = kanapInfos.filter(
        (element) => element.Nom !== produitSupprimer);

        localStorage.setItem("Kanap",JSON.stringify(kanapInfos));

        alert("Le canapé a bien été supprimé de votre panier !");
        window.location.href = "cart.html";
        })
    }

    function getTotals(){

        let quantiteDuKanap = document.getElementsByClassName('itemQuantity');
        quantiteTotal = kanapInfos[produit].Quantite;

        for (let n = 0; n < length; ++w) {
            quantiteTotal += elemsQtt[n];
        }

        let quantiteFinal = document.getElementById('totalQuantity');
        quantiteFinal.innerHTML = quantiteTotal;

        prixTotal = kanapInfos[produit].Prix;

        for (var n = 0; n < length; ++n) {
            prixTotal += (quantiteDuKanap[n] * kanapInfos[n].Prix);
        }

        let prixFinal = document.getElementById('totalPrice');
        prixFinal.innerHTML = prixTotal;
    }

    getTotals();

    let commande = document.getElementById("order");

    commande.addEventListener("click", function(){

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
    })
}

function confirmation() {
        alert("Votre commande a bien été enregistrée !");
        window.location.href = "confirmation.html";
}