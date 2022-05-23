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
let queryString = decodeURIComponent(window.location.search);
queryString = queryString.substring(1);

if (queryString == airforce.shoeid) {
    document.getElementById("name").innerText = airforce.name;
    document.getElementById("shoeImage").src = airforce.shoeImage;
    document.getElementById("desc").innerText = airforce.desc;
    document.getElementById("price").innerText = airforce.price;

    var price = airforce.price;
    Totalprice(price);


} else if (queryString == jordan.shoeid) {
    document.getElementById("name").innerText = jordan.name;
    document.getElementById("shoeImage").src = jordan.shoeImage;
    document.getElementById("desc").innerText = jordan.desc;
    document.getElementById("price").innerText = jordan.price;

    var price = jordan.price;
    Totalprice(price);


} else if (queryString == timber.shoeid) {
    document.getElementById("name").innerText = timber.name;
    document.getElementById("shoeImage").src = timber.shoeImage;
    document.getElementById("desc").innerText = timber.desc;
    document.getElementById("price").innerText = timber.price;

    var price = timber.price;
    Totalprice(price);


}

function Totalprice(price) {
    document.getElementById("price").innerText = "KES." + price;
    document.getElementById("noofitems").onkeyup = function() {
        var noofitems = document.getElementById("noofitems").value;
        var noofitemsInt = parseInt(noofitems);
        var total = noofitemsInt * price;
        document.getElementById("price").innerText = "KES." + total;

        if (noofitems == "") {
            document.getElementById("price").innerText = "KES." + price;
            deliveryPrice(price);
        } else {
            document.getElementById("price").innerText = "KES." + total;
            deliveryPrice(total);
        }
    }

    deliveryPrice(price);
}

function deliveryPrice(itemprice) {
    console.log(itemprice);

    var itempriceInt = parseInt(itemprice);
    document.getElementById("paypal-button-container").innerHTML = "";
    payNow(itempriceInt);

    document.getElementById("Location").onchange = function() {
        var location = document.getElementById("Location").value;
        if (location == "Muranga") {
            document.getElementById("precise").style.display = "block";
            document.getElementById("precise1").style.display = "none";
            document.getElementById("precise2").style.display = "none";
        } else if (location == "Kiambu") {
            document.getElementById("precise").style.display = "none";
            document.getElementById("precise1").style.display = "block";
            document.getElementById("precise2").style.display = "none";

        } else if (location == "Nairobi") {
            document.getElementById("precise").style.display = "none";
            document.getElementById("precise1").style.display = "none";
            document.getElementById("precise2").style.display = "block";
        }
    }
    document.getElementById("precise").onchange = function() {
        var precise = document.getElementById("precise").value;

        if (precise == "Maragua") {
            var deliveryPrice = 300;
            var Grandtotal = itempriceInt + deliveryPrice;
            document.getElementById("price").innerText = "KES." + Grandtotal;

            document.getElementById("paypal-button-container").innerHTML = "";
            payNow(Grandtotal);

        } else if (precise == "Kenol") {
            var deliveryPrice = 250;
            var Grandtotal = itempriceInt + deliveryPrice;
            document.getElementById("price").innerText = "KES." + Grandtotal;

            document.getElementById("paypal-button-container").innerHTML = "";
            payNow(Grandtotal);

        } else if (precise == "Gatanga") {
            var deliveryPrice = 200;
            var Grandtotal = itempriceInt + deliveryPrice;
            document.getElementById("price").innerText = "KES." + Grandtotal;

            document.getElementById("paypal-button-container").innerHTML = "";
            payNow(Grandtotal);
        }
    }
    document.getElementById("precise1").onchange = function() {
        var precise1 = document.getElementById("precise1").value;

        if (precise1 == "Thika") {
            var deliveryPriceBA = 110;
            var GrandtotalBA = itempriceInt + deliveryPriceBA;
            document.getElementById("price").innerText = "KES." + GrandtotalBA;

            document.getElementById("paypal-button-container").innerHTML = "";
            payNow(GrandtotalBA);

        } else if (precise1 == "Juja") {
            var deliveryPriceBB = 90;
            var GrandtotalBB = itempriceInt + deliveryPriceBB;
            document.getElementById("price").innerText = "KES." + GrandtotalBB;

            document.getElementById("paypal-button-container").innerHTML = "";
            payNow(GrandtotalBB);

        } else if (precise1 == "Ruiru") {
            var deliveryPriceBC = 80;
            var GrandtotalBC = itempriceInt + deliveryPriceBC;
            document.getElementById("price").innerText = "KES." + GrandtotalBC;

            document.getElementById("paypal-button-container").innerHTML = "";
            payNow(GrandtotalBC);
        }
    }
    document.getElementById("precise2").onchange = function() {
        var precise2 = document.getElementById("precise").value;

        if (precise2 == "CBD") {
            var deliveryPriceCA = 50;
            var GrandtotalCA = itempriceInt + deliveryPriceCA;
            document.getElementById("price").innerText = "KES." + GrandtotalCA;

            document.getElementById("paypal-button-container").innerHTML = "";
            payNow(GrandtotalCA);

        } else if (precise2 == "Ruaraka") {
            var deliveryPriceCB = 150;
            var GrandtotalCB = itempriceInt + deliveryPriceCB;
            document.getElementById("price").innerText = "KES." + GrandtotalCB;

            document.getElementById("paypal-button-container").innerHTML = "";
            payNow(GrandtotalCB);

        } else if (precise2 == "Kilimani") {
            var deliveryPriceCD = 100;
            var GrandtotalCD = itempriceInt + deliveryPriceCD;
            document.getElementById("price").innerText = "KES." + GrandtotalCD;

            document.getElementById("paypal-button-container").innerHTML = "";
            payNow(GrandtotalCD);
        }
    }
}



function payNow(recAmount) {
    var amtUsd = recAmount / 100;

    paypal.Buttons({
        createOrder: function(data, actions) {
            // Set up the transaction
            return actions.order.create({
                purchase_units: [{
                    amount: {
                        value: 'amtUsd'
                    }
                }]
            });
        },
        onApprove: function(data, actions) {
            alert("Payment Successful");
        },
        onCancel: function(data) {
            alert("Payment Cancelled");
        },
        onError: function(err) {
            alert("Error");
        },


    }).render('#paypal-button-container');
}

payNow()