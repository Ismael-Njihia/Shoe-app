let airforce = {
    name: "Air Force",
    shoeImage: "airforce.jpg",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing.",
    price: "2500",
    shoeid: "1234"

}
let jordan = {
    name: "jordan",
    shoeImage: "jordan.jpg",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing.",
    price: "2700",
    shoeid: "7688667"

}
let timber = {
    name: "Timberland",
    shoeImage: "timberland.jpg",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing.",
    price: "2900",
    shoeid: "87777"
}

document.getElementById("name").innerText = airforce.name;
document.getElementById("shoeImage").src = airforce.shoeImage;
document.getElementById("desc").innerText = airforce.desc;
document.getElementById("price").innerText = airforce.price;

document.getElementById("name2").innerText = jordan.name;
document.getElementById("shoeImage2").src = jordan.shoeImage;
document.getElementById("desc2").innerText = jordan.desc;
document.getElementById("price2").innerText = jordan.price;

document.getElementById("name3").innerText = timber.name;
document.getElementById("shoeImage3").src = timber.shoeImage;
document.getElementById("desc3").innerText = timber.desc;
document.getElementById("price3").innerText = timber.price;

document.getElementById("Airforce").onclick = function() {
    window.location.href = "buy.html" + "?" + airforce.shoeid;
}

document.getElementById("jordan").onclick = function() {
    window.location.href = "buy.html" + "?" + jordan.shoeid;
}

document.getElementById("timber").onclick = function() {
    window.location.href = "buy.html" + "?" + timber.shoeid;
}