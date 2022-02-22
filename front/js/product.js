fetch('http://localhost:3000/api/products?id=107fb5b75607497b96722bda5b504926')
.then(function(res){
    if(res.ok){
        return res.json();
    }
    })
    .then(function (datas){
        datas.forEach(products => {

        var items = document.getElementById('title');
            items.innerHTML = products.name;

        var price = document.getElementById('price');
            price.innerHTML = products.price;

        var description = document.getElementById('description');
            description.innerHTML = products.description;

        var img = document.getElementsByClassName('item__img');
            img.classList.add("productImage");
            img.src = products.imageUrl;
            img.alt = products.altTxt;

        var colors = document.getElementById('colors');
            colors.innerHTML = products.colors;
    });
});