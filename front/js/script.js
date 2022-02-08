const items = document.getElementById("items");
const h3 = document.getElementsByClassName("productName");
const p = document.getElementsByClassName("productDescription");

fetch("http://localhost:3000/api/products")
	.then(function(res){
		if(res.ok){
			return res.json();
		}
		console.log(res);
	})
	
let lien = document.createElement("a");
lien.setAttribute("href", "http://localhost:3000/api/products")
document.getElementById("items").appendChild("lien");

let article = document.createElement("article");
items.appendChild("article");

let image = document.createElement("img");
image.setAttribute("src", "../back/images/kanap01.jpeg")
article.appendChild("image");

let image = document.createElement("img");
image.setAttribute("alt")
article.appendChild("image");

let titre = document.createElement("h3");
titre.setAttribute("class", "productName");
article.appendChild("h3");

let texte = document.createElement("p");
texte.setAttribute("class", "productDescription");
article.appendChild("p");
