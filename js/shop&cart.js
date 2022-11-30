
let ProductDom = document.querySelector(".ProductDom");
let cartIcon = document.querySelector(".cartIcon")
let cart_productDomMenu = document.querySelector(".cart_product");
let cart_productDom = document.querySelector(".cart_product .cunt_pro");
let badge = document.querySelector(".badge");

cartIcon.addEventListener("click", openIconMenu);

function productsViwe() {
    let productsViwesShop = products.map((item) => {
         
        return `<div class="col-lg-3 col-md-6">
            <div class="card text-center">
                <img src="${item.imgUrl}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 onclick="saveItemData(${item.id})"  class="card-title">${item.title}</h5>
                    <div class ="hide_price">
                    <p class="card-text">${item.categories}</p>
                    </div>                     
                        <ul>
                    <span class="">${item.price}</span>
                    <del>${item.oldPrice}</del>
                    </ul>
                    <div class ="show_price">
                    <button class="buy mb-1" onclick="addedToCart(${item.id})" >Add To Cart</button>
                    </div>
                    
                </div>
            </div>
        </div>`;
        
        
    });
    ProductDom.innerHTML = productsViwesShop.join("");
}

productsViwe();
let addedItem = localStorage.getItem("productSave") ? JSON.parse(localStorage.getItem("productSave")) : [];


addedItem.map((item) => {
     cart_productDom.innerHTML += `<div  class = "container_cart" >
        <img class ="img_in_car" src="${item.imgUrl}" alt="">
        <p>${item.title}</p> 
        <h6 class = "h6_in_car">${item.Quantity}</h6>
        <hr>
        </div>`; 
});
    
    badge.innerHTML = addedItem.length;
    badge.style.display = "block";
    
function addedToCart(id) {
    let productClicked = products.find((item) => item.id === id);
    let ifProductInCart = addedItem.some((i) => i.id === productClicked.id )
    if (ifProductInCart) {
        addedItem = addedItem.map((p) => {
            if (p.id === productClicked.id) p.Quantity += 1;
            return p;    
       })
    } else {
        addedItem.push(productClicked)
    }
    cart_productDom.innerHTML = ""
    addedItem.forEach((item) => {
        cart_productDom.innerHTML += `<div  class = "container_cart" >
        <img class ="img_in_car" src="${item.imgUrl}" alt="">
        <p>${item.title}</p> 
        <h6 class = "h6_in_car">${item.Quantity}</h6>
        <hr>
        </div>`; 
    })

    
    // local to save the prodect user choseed
    localStorage.setItem("productSave", JSON.stringify(addedItem));
    // cunt of product in shopping car
    let badgeItemLength = document.querySelectorAll(".cart_product .cunt_pro img ")
    badge.style.display = "block";
    badge.innerHTML = badgeItemLength.length;

    sweetaAlert  ()
}

function openIconMenu() {
    if (cart_productDom.innerHTML != "") {
        if ( cart_productDomMenu.style.display == "block") {
          cart_productDomMenu.style.display ="none" 
        } else {
            cart_productDomMenu.style.display = "block"
       }
    }
}
function saveItemData(id) {
    localStorage.setItem("productId", id);
    window.location = "shop details.html" 
}
function sweetaAlert  () {
    swal({
  title: "Product added",
  icon: "success",
});
}