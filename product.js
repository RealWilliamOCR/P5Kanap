fetch('http://localhost:3000/api/products?id=107fb5b75607497b96722bda5b504926')
.then(function(res){
    if(res.ok){
        return res.json();
    }
    })
    .then(function (datas){
        datas.forEach(products => {

        let items = document.getElementById('title');
            items.innerHTML = products.name;

        let price = document.getElementById('price');
            price.innerHTML = products.price;

        let description = document.getElementById('description');
            description.innerHTML = products.description;
    });
});