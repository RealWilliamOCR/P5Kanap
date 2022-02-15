fetch('http://localhost:3000/api/products/${url}')
.then(function(res){
    if(res.ok){
        return res.json();
    }
    })
    .then(function (datas){
        datas.forEach(products => {

        let items = document.getElementById('items');
        img = document.createElement('img');
        img.classList.add("productImage")
            img.src = products.imageUrl;
            img.alt = products.altTxt;
            img.name = products.name;
        h1 = document.createElement('h1');
            h1.classList.add("productName");
            h1.innerHTML = products.name;
        p = document.createElement('p');
            p.classList.add("productDescription");
            p.innerHTML = products.description;
            p.price = products.price;
            p.colors = products.colors;
    });
});
