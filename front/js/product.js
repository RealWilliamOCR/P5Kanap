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

        let kanapDetails = {
            Id: id,
            Couleurs:("Couleurs", document.getElementById("colors").value),
            Quantite:("Quantite", document.getElementById("quantity").value)
        }

        let kanapInfos = JSON.parse(localStorage.getItem("Kanap"));
         //Si le panier comporte déjà au moins 1 article
        if (kanapInfos) {
            const resultFind = kanapInfos.find(
                (el) => el.Id === id && el.Couleurs === document.getElementById("colors").value);
                //Si le produit commandé est déjà dans le panier
                if (resultFind) {
                    let newQuantite =
                    parseInt(kanapDetails.Quantite) + parseInt(resultFind.Quantite);
                    resultFind.Quantite = newQuantite;
                    localStorage.setItem("Kanap", JSON.stringify(kanapInfos));
                //Si le produit commandé n'est pas dans le panier
                } else {
                    kanapInfos.push(kanapDetails);
                    localStorage.setItem("Kanap", JSON.stringify(kanapInfos));
                }
            //Si le panier est vide
            } else {
                kanapInfos =[];
                kanapInfos.push(kanapDetails);
                localStorage.setItem("Kanap", JSON.stringify(kanapInfos));
        }
    })
})