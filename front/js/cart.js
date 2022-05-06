fetch('http://localhost:3000/api/products')
.then(function(res){
    if(res.ok){
        return res.json();
    }
    })

var kanapInfos = JSON.parse(localStorage.getItem("Kanap"));

for (let produit in kanapInfos){
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
    nomQte.innerHTML = ('Qté : ');

    let productQuantity = document.createElement("input");
    productQuantity.value = kanapInfos[produit].Quantite;
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

    let iconeSupprimer = document.querySelectorAll(".itemDelete");
    for (let s = 0; s < iconeSupprimer.length; s++) {
        iconeSupprimer[s].addEventListener("click", function(){

        let produitSupprimer = kanapInfos[s].IdCouleur;

        kanapInfos = kanapInfos.filter(
        (element) => element.IdCouleur !== produitSupprimer);

        localStorage.setItem("Kanap",JSON.stringify(kanapInfos));

        alert("Le canapé a bien été supprimé de votre panier !");
        window.location.href = "cart.html";
        })
    }

function totalFinal(){
let modificationQuantite = document.querySelectorAll(".itemQuantity");

        for (let k = 0; k < modificationQuantite.length; ++k){
            modificationQuantite[k].addEventListener("change" , () => {

                //Selection de l'element à modifier en fonction de son id ET sa couleur
                let nouvelleQuantite = kanapInfos[k].Quantite;
                let valeurModifie = modificationQuantite[k].valueAsNumber;

                const resultFind = kanapInfos.find((element) => element.valeurModifie !== nouvelleQuantite);
                resultFind.Quantite = valeurModifie;
                kanapInfos[k].Quantite = resultFind.Quantite;

                localStorage.setItem("Kanap", JSON.stringify(kanapInfos));

                if(productQuantity.value > 1 && productQuantity.value <= 100){
                   productQuantity.value--;
                }else{
                productQuantity.value = 1;
                }

                if(productQuantity.value >= 1 && productQuantity.value < 100){
                   productQuantity.value++;
                }else{
                productQuantity.value = 1;
                }

                // refresh rapide
                location.reload();
            })
        }
    }
    totalFinal();

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
        prixTotal += (quantityElement[i].valueAsNumber * kanapInfos[i].Prix);
    }

    let productprixTotal = document.getElementById('prixTotal');
    productprixTotal = prixTotal;

    let affichagePrixHTML = document.getElementById("totalPrice");
        affichagePrixHTML.innerHTML = prixTotal;
totalFinal();
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
};

let btnFormulaire = document.getElementById("order");

btnFormulaire.addEventListener("click", function(){
        let kanapInfos = JSON.parse(localStorage.getItem("Kanap"));
        let produitsCommandes = [];
        produitsCommandes.push(kanapInfos);

        let commandeFinal = {
            infosClient: {
                firstName:firstName.value,
                lastName: lastName.value,
                address: address.value,
                city: city.value,
                email: email.value,
            },
        products: produitsCommandes,
    };
    fetch('http://localhost:3000/api/products/order', {
        method: "POST",
        body: JSON.stringify(commandeFinal),
        headers: {"Content-Type": "application/json"}
    })
    .then(response => response.json())
})