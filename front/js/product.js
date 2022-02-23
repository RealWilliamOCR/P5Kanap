let params = new URLSearchParams(window.location.search);
const id = params.get('id');
const url = 'http://localhost:3000/api/products/'+id;
fetch(url)
    .then(function(res){
        if(res.ok){
            return res.json();
        }
    })
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


        let option = document.createElement('option');
            option.value = products.colors;
            option.innerHTML = products.colors;

        let colors = document.getElementById('colors');
        colors.appendChild(option);
});