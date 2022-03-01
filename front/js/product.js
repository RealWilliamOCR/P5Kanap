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

        products.lenses.forEach(test => {
            console.log(test);
            let option = document.createElement('option');
                option.innerHTML = 'coucou';

            let colors = document.getElementById('colors');
        })
        colors.appendChild(option);
})

function testlocal() {
    let nom = document.getElementById('title').innerHTML;
    localStorage.setItem("Nom", nom);

}

/*localStorage.setItem("couleurs", "product-color");
localStorage.setItem("image", "cart__item__img");
localStorage.setItem("description", "cart__item__description");
localStorage.setItem("nom", "productName");*/

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