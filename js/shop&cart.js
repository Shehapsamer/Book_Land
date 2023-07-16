
let ProductDom = document.querySelector(".ProductDom");
let cartIcon = document.querySelector(".cartIcon")
let cart_productDomMenu = document.querySelector(".cart_product");
let cart_productDom = document.querySelector(".cart_product .cunt_pro");
let badge = document.querySelector(".badge");
let searchBar = document.getElementById("search");
let products = productsData
let productsForHome = productsData2

cartIcon.addEventListener("click", openIconMenu);



// section products in home 
let productsViwe2 = (prodect)=> {


    let productsViwesInHome = prodect.map((item) => {
        return (
                `<div class="item">  
                <div class="card_s4">
                <img src="${item.imgUrl}" alt="">
                <div class="body_card">
                    <h3 onclick="saveItemData(${item.id})">${item.title}</h3>
                    <p>${item.price}</p>
                    <button onclick="addedToCart(${item.id})" > <i class="fa-solid act fa-cart-shopping"></i> <i class="fa-solid fa-cart-shopping"></i> Buy Now</button>
                </div>
            </div>
            </div>`
        )

        
        
    });

    document.querySelector("#slider_4").innerHTML= productsViwesInHome.join("");
}

productsViwe2(productsForHome)


// slider in section home
$("#slider_4").owlCarousel({
    loop:true,
    margin:10,
    navigation: true,
    autoplay: true,
    smartSpeed:300,
    animateIn:'fadeIn',
    animateOut: 'fadeOut',
    paginationSpeed : 800,
    dots: false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
         1100:{
            items:3
        },
        1200:{
            items:4
        }
    }
})
// 



// data for shop products
categories = [...new Set(products.map((item) => {return item}))]
    
// search

    document.getElementById("search").addEventListener("keyup", (e)=> {
        let searchData = e.target.value.toLowerCase();
        let filterData = categories.filter((item) => {
            return (
                item.title.toLocaleLowerCase().includes(searchData)
            )
        })
        productsViwe(filterData);
    })

// display data
let productsViwe = (itemss)=> {


    let productsViwesShop = itemss.map((item) => {
        return (
                     `<div class="col-lg-3 col-md-6">
            <div class="card text-center">
                <img src="${item.imgUrl}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 onclick="saveItemData(${item.id})"  class="card-title">${item.title}</h5>
                    <i class="fa-solid fa-heart " onclick="addedTofavorite(${item.id})"></i>
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
        </div>`
        )

        
        
    });
    ProductDom.innerHTML = productsViwesShop.join("");
}


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
// add to cart 
function addedToCart(id) {
    let productClicked = products.find((item) => item.id === id);
    let ifProductInCart = addedItem.some((i) => i.id === productClicked.id )
    if (ifProductInCart) {
        addedItem = addedItem.map((p) => {
            if (p.id === productClicked.id) p.Quantity += 1;
             sweetaAlertssss()
            return p;    
       })
    } else {
        addedItem.push(productClicked)
        products.map((p) => {
            if (p.id === productClicked.id);
             sweetaAlertssss() 
       })
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

function sweetaAlertssss  () {
    swal({
  title: ` Added To Cart`,
  icon: "success",
});
}

function getUniqueArr(arr, filterType) {
  let unique = arr
    .map((item) => item[filterType])
    .map((item, i, final) => final.indexOf(item) === i && i)
    .filter((item) => arr[item])
    .map((item) => arr[item]);

  return unique;
}


// add to favorite
let favoriteItems = localStorage.getItem("favoriteProduct") ? JSON.parse(localStorage.getItem("favoriteProduct")) : [];

function addedTofavorite(id) {

    let productClicked = products.find((item) => item.id === id);
    let ifProductInCart = favoriteItems.some((i) => i.id === productClicked.id )
    if (ifProductInCart) {
        favoriteItems = favoriteItems.map((p) => {
            if (p.id === productClicked.id)
           sweetaAlerts2  ()    
            return p; 
                
             
       })
    } else {
        favoriteItems.push(productClicked)
        sweetaAlerts  ()  
    }
    localStorage.setItem("favoriteProduct", JSON.stringify(favoriteItems));

document.querySelector(".loveProduct").innerHTML = favoriteItems.length

    products.map((item) => {
        if (item.id === productClicked.id) {
            item.liked = true;
        }
    })

}
document.querySelector(".loveProduct").innerHTML = favoriteItems.length




function sweetaAlerts  () {
    swal({
  title: "Added To Favorite",
  icon: "success",
});
}

function sweetaAlerts2  () {
    swal({
  title: "already added To Favorite",

});
}




productsViwe(categories)

