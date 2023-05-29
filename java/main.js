import data from './data.json' assert { type: 'json' };
var productWrapper = document.getElementById("product-wrapper");

for (var i = 0; i < data.length; i++){

    var cardData = data[i];

    var productCard = document.createElement("div");
    productCard.className = "product-data-card";

    var image = document.createElement("img");
    image.className = "product-data-image";
    image.src= cardData.image_url;
    productCard.appendChild(image);

    var name = document.createElement("div");
    name.className = "product-brand-name";
    name.textContent = cardData.name;
    productCard.appendChild(name);

    var price= document.createElement("div");
    price.className= "product-og-price";
    price.textContent= "$" + " " + cardData.price;
    productCard.appendChild(price);

    var btnContainer = document.createElement("div");
    btnContainer.className = "cart-compare-btn-container";
    productCard.appendChild(btnContainer);

    var addToCompare = document.createElement("button");
    addToCompare.className = "add-to-compare";
    addToCompare.textContent = "Add to Compare";
    btnContainer.appendChild(addToCompare);

    var addToCart = document.createElement("button");
    addToCart.className = "add-to-cart";
    addToCart.textContent = "Add to Cart";
    btnContainer.appendChild(addToCart);

    productWrapper.appendChild(productCard);
};

//================== Search =======================
$('#utility-search')


// =============== Accordian ======================
var dispAcc =document.getElementsByClassName("accordion");
for(i = 0; i< dispAcc.length;i++){
    dispAcc[i].addEventListener("click", function(){
        this.classList.toggle("show");

    var section = this.nextElementSibling;
    if (section.style.display === "block"){
        section.style.display = "none";
    } else{
        section.style.display = "block";
    }
});
}
// ================ Add to cart ===========

var addCart = document.getElementsByClassName("add-to-cart");
var cartIkon = document.getElementById("cart-icon");
for(i = 0; i < addCart.length; i++){
    var cartIconCount = 0;
    addCart[i].addEventListener("click", function(){
        cartIconCount++;
        if (cartIconCount > 0){
            var cartBubble = document.createElement("span");
            cartBubble.className = "cart-icon-bubble";
            cartBubble.textContent =cartIconCount;
            console.log("whatsuo");
        };
    });
}

// ================ Comparision =================

$(document).ready(function(){
    var productComparisionList = [];

    $('.add-to-compare').click(function(){
        if (productComparisionList.length >= 5){
            alert("You have already added 5 products.");
            return;
        }
        var productName = $(this).closest('.product-data-card').find('.product-brand-name').text();
        var productIndex = productComparisionList.findIndex(function(item) {
            return item.name === productName;
        });
        if (productIndex == -1){
            var product = {
                name : productName, 
                image: $(this).closest('.product-data-card').find('.product-data-image').attr('src'),
                price: $(this).closest('.product-data-card').find('.product-og-price').text()
            };
            productComparisionList.push(product);
            $('#comparison-modal').fadeIn();
        }

        updateProductComparisionModal();
        
    });
    // close
    $('.close-section').click(function(){
        $('#comparison-modal').fadeOut();
    });
    // compare button
    $('#compare-button').click(function(){
        
        window.location.href = 'comparision.html';
        localStorage.setItem("productComparisionList", JSON.stringify(productComparisionList));
        var storedObject = localStorage.getItem("productComparisionList");
        if (storedObject){
            console.log("success in local storage")
        }else{
            console.log("failed to save in local storage");
        }
    });
    //updating comparision modal with lastest comparsion list
    function updateProductComparisionModal(){
        var modalContent = $('#comparision-products-list');
        modalContent.empty();

        if(productComparisionList.length == 0){
            modalContent.html('<span class="noProds">No Products added for comparison</span>');
            $('#compare-button').prop('disabled',true);
        } else{
            productComparisionList.forEach(function(product){
                var listItem = $('<div class="comparision-item"><span class="close-card"><i class="fa-sharp fa-solid fa-xmark"></i></span></div>' );
                var image = $('<img class="comparision-image">').attr('src', product.image);
                var name = $('<div class="comparision-name"></div>' ).text(product.name);
                var price = $('<div class="comparision-price"></div>' ).text(product.price);
                listItem.append(image,name,price);
                modalContent.append(listItem);
            });
            $('#compare-button').prop('disabled', false);
        };
        
    }
    
});


// 
// $('.close-card').click(function(){
//     $(this).remove(listItem,image,name,price);
// })

