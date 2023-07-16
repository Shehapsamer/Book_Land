let ProductDom2 = document.querySelector(".ProductDom2");
let t_Body = document.querySelector(".t_B");
let productsInDetails = JSON.parse(localStorage.getItem("productsInLocal"));

function productsViweInCart(allProducts = []) {
    let products = JSON.parse(localStorage.getItem("productSave")) || allProducts;

    let productsViwesCart = products.map((item) => {
         
        return `           
            <tr><td><img src="${item.imgUrl}" alt=""></td>

             <td> <h2>${item.title}</h2> </td>

            <td> <del>${item.oldPrice}</del> </td>

            <td> <span>${item.price}</span> </td>

            <td> <h6>${item.Quantity}</h6> </td>

            <td> <h6>$ ${ item.priceInNumper * item.Quantity }</h6> </td>

            <td> <button class="cloce_btn btn-danger" onclick="removeFromCart(${item.id})"><i class="fa-solid fa-trash-can"></i></button> </td>

           </tr>`;
        
    });
    
    t_Body.innerHTML = productsViwesCart.join("");
}
productsViweInCart()

function removeFromCart(id) {
    let productInCart = localStorage.getItem("productSave");
     if (productInCart) {
        let items = JSON.parse(productInCart);
         let fillterItims = items.filter((item) => item.id !== id);
         localStorage.setItem("productSave", JSON.stringify(fillterItims));
        badge.style.display = "block";
         badge.innerHTML = fillterItims.length;
         productsViweInCart(fillterItims);
    }

}

// in Checkout faid 
$(".faid").hide()
$(".faid_Checkout").click(function () {
    $(".faid").slideToggle()

})