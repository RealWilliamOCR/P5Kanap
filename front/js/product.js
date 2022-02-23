let params = new URLSearchParams(window.location.search);
let id = params.get('_id');
/*const getId = parametre.get('id');*/
const url = 'http://localhost:3000/api/products/'+params;
fetch(url)
/*fetch("http://localhost:3000/api/products")*/
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

        let img = document.getElementById('img');
            img.src = products.imageUrl;

        let option = document.createElement('option');
            option.value = products.colors;
            option.innerHTML = products.colors;

        let colors = document.getElementById('colors');
        colors.appendChild(option);
    });
});