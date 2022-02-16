function produitComplet() {
    fetch("https://localhost:3000/api/products/")
    .then(function(res) {
      if (res.ok) {
        return res.json();
      }
    })
    .then(function(value) {
        a.href="./product.html"+"?id="+products._id;
        let h1 = document.getElementById('title');
                h1.innerHTML = ("Voici le titre");
      })

    /*fetch('http://localhost:3000/api/products/')
    .then(function(res){
        if(res.ok){
            return res.json();
        }
        })*/
        /*function prod (datas){

            let items = document.getElementsByClassName('item__img');
            img.classList.add("productImage")
                img.src = ("../images/logo.png");
                img.alt = ("Photographie d'un canapé");
                img.name = products.name;
            let h1 = document.getElementById('title');
            h1 = document.createElement('h1');
                h1.classList.add("Titre de l'image");
                h1.innerHTML = (products.name);
            p = document.createElement('p');
                p.classList.add("productDescription");
                p.innerHTML = products.description;
                p.price = products.price;
                p.colors = products.colors;*/
            item__content__titlePrice.appendChild(h1);
}