let ProductDom2 = document.querySelector(".WishListProductDom");
let rowInDom = document.querySelector(".rowInDom");
let No_Products = document.querySelector(".No_Products");
let productsInDetails = JSON.parse(localStorage.getItem("productsInLocal"));

if (JSON.parse(localStorage.getItem("favoriteProduct")).length === 0) {
    No_Products.innerHTML = `<i class="fa-solid fa-heart"></i> Wishlist is empty`
}
  

function productsViweInCart(allProducts = []) {
    let products = JSON.parse(localStorage.getItem("favoriteProduct")) || allProducts;

    let productsViwesCart = products.map((item) => {
         
        return`<div class="col-lg-3 col-md-6 mt-3">
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
                    <button class="buy mb-1" onclick="removeItemFromCart(${item.id})" >Remove</button> 

                    </div>
                    
                </div>
            </div>
        </div>` 
        
        

    });
    
    rowInDom.innerHTML = productsViwesCart.join("");
}  

    
    

productsViweInCart()

function removeItemFromCart(id) {
  let productsFavorite = localStorage.getItem("favoriteProduct");
  if (productsFavorite) {
    let items = JSON.parse(localStorage.getItem("favoriteProduct"));
      let filteredItems = items.filter((item) => item.id !== id);
    //   seave the new data 
    localStorage.setItem("favoriteProduct", JSON.stringify(filteredItems));
    // cunt of favorite
    document.querySelector(".loveProduct").innerHTML = filteredItems.length

    productsViweInCart(filteredItems);
  }
}



// in Checkout faid 
$(".faid").hide()
$(".faid_Checkout").click(function () {
    $(".faid").slideToggle()

})