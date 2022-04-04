/*
Je fetch l'url qu'on nous propose où se trouve les produits.
*/

/*if(localStorage.localPanier != null){
let varPanier = JSON.parse(localStorage.localPanier);
}
else {
let varPanier = [];
}

var registeredKanap = [];
localStorage.setItem("témoinNumber", 0);
localStorage.setItem("témoinString", "toto");

        if (localStorage.getItem("listeKanap") === null) {
            console.log("cas null");
            let nb = localStorage.getItem("témoinNumber");
            let str = localStorage.getItem("témoinString");
            console.log(nb);
            console.log(str);
        }
        else{
            registeredKanap = localStorage.getItem("listeKanap");
            console.log("cas non null");
            let nb = localStorage.getItem("témoinNumber");
                        let str = localStorage.getItem("témoinString");
                        console.log(nb);
                        console.log(str);
        }
        localStorage.setItem("listeKanap", registeredKanap);

        console.log("canapés enregistrés : ");
        console.log(registeredKanap);

        let testvalue = localStorage.getItem("listeKanap");
        console.log(testvalue);
        console.log("nb canapés sélectionnés : " + registeredKanap.length);
        let nb = localStorage.getItem("témoinNumber");
                    let str = localStorage.getItem("témoinString");
                    console.log(nb);
                    console.log(str);*/

fetch('http://localhost:3000/api/products')
.then(function(res){
    if(res.ok){
        return res.json();
    }
    })

/*
Je créé une fonction que j'appelle datas.
Ensuite je fais une boucle (forEach) pour récupérer tous les produits et leurs informations, le forEach s'arrête une fois qu'il a récupéré tous les produits.
Puis je créé des variables (let) que je nomme de la même manière qu'ils sont nommés dans la page product.html.
Ici j'utilise la propriété innerHTML pour récupérer une valeur se trouvant dans le fichier html concerné.
Pour les autres, je vais chercher les informations dans le Product.js comme pour la source de l'image par exemple.
*/
    .then(function (datas){
        datas.forEach(products => {

        let items = document.getElementById('items');
        a = document.createElement('a');
            a.href="./product.html"+"?id="+products._id;
        let article = document.createElement('article');
        let img = document.createElement('img');
        img.classList.add("productImage");
            img.src = products.imageUrl;
            img.alt = products.altTxt;
        let h3 = document.createElement('h3');
            h3.classList.add("productName");
            h3.innerHTML = products.name;
        let p = document.createElement('p');
            p.classList.add("productDescription");
            p.innerHTML = products.description;

/*
Juste ici, j'utilise appendChild, cela signifie pour le premier par exemple,
que a est l'enfant de la variable items.
*/
        items.appendChild(a);
        a.appendChild(article);
        article.appendChild(img);
        article.appendChild(h3);
        article.appendChild(p);
    });
}); 
