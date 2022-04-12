let params = new URLSearchParams(window.location.search);
const id = params.get('id');
const url = 'http://localhost:3000/api/products/'+id;
fetch(url)

alert ("Votre commande a bien été enregistré !");