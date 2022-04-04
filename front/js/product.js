/*
Je récupère l'ID du produit et je l'inclus dans une constante appelée url où se trouve l'adresse locale des produits
puis je lui rajoute la constante id qui contient l'ID du produit sélectionné.
*/
let params = new URLSearchParams(window.location.search);
const id = params.get('id');
const url = 'http://localhost:3000/api/products/'+id;
fetch(url)
    .then(function(res){
        if(res.ok){
            return res.json();
        }
    })

/*
Je créé une fonction que j'appelle products et je créé des variables (let) que je nomme de la même manière qu'ils sont nommés
dans la page product.html. Ici j'utilise la propriété innerHTML pour récupérer une valeur se trouvant dans le fichier html concerné.
Pour les autres, je vais chercher les informations dans le Product.js comme pour la source de l'image par exemple.
*/

.then(function (products){

    let items = document.getElementById('title');
        items.innerHTML = products.name;

    let price = document.getElementById('price');
        price.innerHTML = products.price;

    let description = document.getElementById('description');
        description.innerHTML = products.description;

    let item = document.getElementById('imageId');
    let img = document.createElement('img');
            img.classList.add("productImage");
                img.src = products.imageUrl;
                img.alt = products.altTxt;
    item.appendChild(img);

    let colorSelector = document.getElementById('colors');

    products.colors.forEach(color => {
        const colorChoice = document.createElement('option')
        colorChoice.value = color
        colorChoice.innerHTML = color
        colorSelector.appendChild(colorChoice)
    })

    let addToCart = document.getElementById("addToCart");
    addToCart.addEventListener("click", function (){

        var kanapInfos = [];
        kanapInfos[0] = document.getElementById("colors").value;
        kanapInfos[1] = document.getElementById("quantity").value;
        kanapInfos[2] = products.imageUrl;
        kanapInfos[3] = products.altTxt;
        kanapInfos[4] = document.getElementById("title").innerHTML;
        kanapInfos[5] = products.price;

        let produitEnregistre = JSON.parse(localStorage.getItem("kanapInfos"));
        console.log(produitEnregistre);

        if(produitEnregistre){

        }
        else {
        produitEnregistre = [];
        produitEnregistre.push(kanapInfos);

        console.log(produitEnregistre);
        }

        /*localStorage.setItem("Couleurs", document.getElementById("colors").value);
        localStorage.setItem("Quantite", document.getElementById("quantity").value);
        localStorage.setItem("Image", products.imageUrl);
        localStorage.setItem("ImageAlt", products.altTxt);
        localStorage.setItem("Nom", document.getElementById("title").innerHTML);
        localStorage.setItem("Prix", products.price)*/

        /*var registeredKanap = [];

        if (localStorage.getItem("listeKanap") === null) {

        }
        else{
            registeredKanap = localStorage.getItem("listeKanap");
            console.log("cas non null");
            console.log(registeredKanap);
        }
        console.log("canapé sélectionné : " + kanapInfos);
        console.log("canapés enregistrés avant sélection : ");
        console.log(registeredKanap);
        console.log("nb canapés déjà sélectionnés : " + registeredKanap.length);
        let nb = localStorage.getItem("témoinNumber");
                    let str = localStorage.getItem("témoinString");
                    console.log(nb);
                    console.log(str);

        registeredKanap[registeredKanap.length] = kanapInfos;
        registeredKanap[registeredKanap.length] = kanapInfos;

        console.log("taille chaine canapé sélectionné : " + kanapInfos.length);
        console.log("canapés enregistrés après sélection : ");
        console.log(registeredKanap);
        console.log("nb canapés nouvellement sélectionnés : " + registeredKanap.length);
        nb = localStorage.getItem("témoinNumber");
                    str = localStorage.getItem("témoinString");
                    console.log(nb);
                    console.log(str);

        localStorage.setItem("listeKanap", registeredKanap);*/
    })
})



/*
Pour ce test ci-dessous, j'ai essayé de suivre l'instruction que tu m'as proposé par e-mail,
celui-ci me renvoie : Uncaught (in promise) ReferenceError: products is not defined
*/

/*    .then(function (datas){
            datas.forEach(products => {

            let option = document.createElement('option');
                option.innerHTML = 'coucou';

            let colors = document.getElementById('colors');
                colors.appendChild(option);
    });
});*/



/*
Pour ce test ci-dessous, je me suis inspiré de ce que j'avais fait dans script.js à savoir :
.then(function (datas){
    datas.forEach(products => {

Celui-ci me renvoie : Uncaught (in promise) TypeError: Cannot read properties of undefined (reading 'forEach')
*/

    /*.then(function (products){
                products.forEach(products => {

                let option = document.createElement('option');
                    option.innerHTML = products.colors;

                let colors = document.getElementById('colors');
                    colors.appendChild(option);
        });*/