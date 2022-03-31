fetch('http://localhost:3000/api/products')
.then(function(res){
    if(res.ok){
        return res.json();
    }
    })

            let section = document.getElementById("cart__items");

            let article = document.createElement("article");
            article.classList.add("cart__item");
            
            let itemImg = document.createElement("div");
            itemImg.classList.add("cart__item__img");

            let image = document.createElement("img");
            image.src = localStorage.getItem("Image");
            image.alt = localStorage.getItem("ImageAlt");

            let itemContent = document.createElement("div");
            itemContent.classList.add("cart__item__content");

            let itemDesc = document.createElement("div");
            itemDesc.classList.add("cart__item__content__description");

            let h2 = document.createElement("h2");
            h2.classList.add("productName");
            h2.innerHTML = localStorage.getItem("Nom");

            let color = document.createElement("p");
            color.innerHTML = localStorage.getItem("Couleurs");

            let price = document.createElement("p");
            price.innerHTML = localStorage.getItem("Prix")+(' €');

            let itemSettings = document.createElement("div");
            itemSettings.classList.add("cart__item__content__settings");

            let itemSetQuantity = document.createElement("div");
            itemSetQuantity.classList.add("cart__item__content__settings__quantity");

            let nomQte = document.createElement("p");
            nomQte.innerHTML = ('Qté : ')+localStorage.getItem("Quantite");

            let itemDelete = document.createElement("div");
            itemDelete.classList.add("cart__item__content__settings__delete");

            let deleteAccept = document.createElement("p");
            deleteAccept.innerHTML = ('Supprimer');

            section.appendChild(article);
            article.appendChild(itemImg);
            article.appendChild(itemContent);
            itemImg.appendChild(image);
            itemContent.appendChild(itemDesc);
            itemDesc.appendChild(h2);
            itemDesc.appendChild(color);
            itemDesc.appendChild(price);
            article.appendChild(itemSettings);
            itemSettings.appendChild(itemSetQuantity);
            itemSetQuantity.appendChild(nomQte);
            article.appendChild(itemDelete);
            itemDelete.appendChild(deleteAccept);

            itemDelete.addEventListener("click", function (){

                localStorage.removeItem("Couleurs");
                localStorage.removeItem("Quantite");
                localStorage.removeItem("Image");
                localStorage.removeItem("ImageAlt");
                localStorage.removeItem("Description");
                localStorage.removeItem("Nom");
                localStorage.removeItem("Prix");

                section.remove("itemcart__item__content__settings__delete");
                });

                function test(){

                    let prenomError = document.getElementById("firstNameErrorMsg"); 
                    let messagePrenomError = 'Le prénom est invalide';
                    let prenom = document.getElementById("firstName").value;
        
                        if (prenom === "William") {
                            prenomError.innerHTML = "";
                        }
                        else{
                            prenomError.innerHTML = messagePrenomError;
                        }

                    let nomError = document.getElementById("lastNameErrorMsg");
                    let messageNomError = 'Le nom de famille est invalide';
                    let nom = document.getElementById("lastName").value;

                        if (nom === "RANC") {
                            nomError.innerHTML = "";
                        }
                        else{
                            nomError.innerHTML = messageNomError;
                        }

                    let adressError = document.getElementById("addressErrorMsg");
                    let messageAdresseError = 'L‘adresse saisie est invalide';
                    let adresse = document.getElementById("address").value;

                        if (adresse === "Chemin des Hermières") {
                            adressError.innerHTML = "";
                        }
                        else{
                            adressError.innerHTML = messageAdresseError;
                        }

                    let villeError = document.getElementById("cityErrorMsg");
                    let messageVilleError = 'La ville indiquée est invalide';
                    let ville = document.getElementById("city").value;

                        if (ville === "Francheville") {
                            messageVilleError.innerHTML = "";
                        }
                        else{
                            villeError.innerHTML = messageVilleError;
                        }
                    
                    let emailError = document.getElementById("emailErrorMsg");
                    let messageEmailError = 'L‘email indiqué est invalide';
                    let email = document.getElementById("email").value;

                        if (email === "Chemin des Hermières") {
                            emailError.innerHTML = "";
                        }
                        else{
                            emailError.innerHTML = messageEmailError;
                        }}

                /*/^([A-Za-zÀ-ÖØ-öø-ÿ][A-Za-zÀ-ÖØ-öø-ÿ ,.'-]*){2}$/;*/