let orderId = new url(window.location.href).searchParams;
let Id = orderId.get("orderId");

function main() {
    const idNode = document.getElementById("orderId");
    idNode.innerText = Id;
    //localStorage.clear();
}

main();