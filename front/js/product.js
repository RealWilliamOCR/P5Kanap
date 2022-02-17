    const url = 'http://localhost:3000/api/products/a.href="./product.html"+"?id="+products._id;'
    fetch (url)
    .then(function(res){
        if(res.ok){
            return res.json();
        }
        })
            let items = document.getElementsByClassName('item__img');
            		let img = document.createElement('img');
                       	img.classList.add("productImage")
                       	items.appendChild(img);
                            img.src = ("datas.imageUrl");
                            img.alt = ("Photographie d'un canapé");

/*function produitComplet() {
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
      })*/
