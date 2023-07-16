let detailsDom = document.querySelector(".details_dom");
let productId = localStorage.getItem("productId");
let productsInDetails = productsData

 
let productDetails = productsInDetails.find((item) => item.id == productId);
let showDetails = `
<div class="row ">
            <div class="col-lg-4 col-md-4">
                <img src="${productDetails.imgUrl}" alt="">
            </div>

            <div class="col-lg-8 col-md-8 card_details">
                <h2>${productDetails.title}</h2>
                <div class="raiting">
                    <ul>
                        <li><i class="fa-solid fa-star"></i></li>
                        <li><i class="fa-solid fa-star"></i></li>
                        <li><i class="fa-solid fa-star"></i></li>
                        <li><i class="fa-solid fa-star"></i></li>
                        <li ><i class="fa-solid act fa-star"></i></li>
                        <li>4.0</li>
                    </ul>
                    <ul class="detal">
                        <li> <img src="${productDetails.byWriting}" alt=""> </li>
                        <li>
                            <p>Writen by</p>
                            <h5>Kevin Smiley</h5>
                        </li>
                        <li>
                            <p>Publisher</p>
                            <h5>Printarea Studios</h5>
                        </li>
                        <li>
                            <p>Year</p>
                            <h5>2019</h5>
                        </li>
                    </ul>

                </div>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non odio eveniet ab quo recusandae, beatae incidunt ratione iusto voluptate numquam totam. Corporis in at esse modi a ut qui recusandae!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos eligendi numquam doloribus dolorem commodi vero laborum exercitationem amet id consequuntur? Quod veritatis saepe expedita accusamus quam commodi mollitia porro. Consectetur.</p>
                   <ul class="spas">
                    <ul>
                        <li><span>${productDetails.price}</span></li>
                        <li><del>${productDetails.oldPrice}</del></li>
                    </ul>
                    <ul >
                        <li><a class="buy mb-0" href="https://shehapsamer.github.io/Book_Land/Shop.html">Back To Shop</a></li>
                    </ul>
                   </ul>
            </div>


        </div>
`

detailsDom.innerHTML = showDetails;
