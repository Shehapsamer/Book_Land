"use strict";
window.addEventListener("scroll", function () {
    let nav = document.querySelector("nav");
    nav.classList.toggle("tranz", window.scrollY > 100);
    nav.classList.toggle("fix", window.scrollY > 150);
}) 
//////////////////////////

//////////////////////////
window.addEventListener("load", function () {
    let loading = document.getElementById("loading");
    document.body.style.overflow = "hidden";
    
    setTimeout(function () {
        loading.style.display = "none";
        document.body.style.overflow = "auto";
    },1000);

})
// /////////////////////


// //////////////
window.addEventListener("scroll", function () {
    let scroll_up = document.querySelector(".scroll_up");
    scroll_up.classList.toggle("tranz_2", window.scrollY > 150);
    scroll_up.classList.toggle("fix_2", window.scrollY > 200);
})
let scroll_up = document.querySelector(".scroll_up");
scroll_up.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
})
// /////////////////////////

window.addEventListener("scroll", function () {
    let nav = document.querySelector(".cart_icon_parint");
    nav.classList.toggle("tranz_3", window.scrollY > 150);
    nav.classList.toggle("fix_3", window.scrollY > 250);
})

// ////////////////////////////
$("#sliderOne").owlCarousel({
    loop:false,
    margin:10,
    navigation: true,
    smartSpeed: 500,
    autoplay: true,
    animateIn:'fadeIn',
    animateOut: 'fadeOut',
    paginationSpeed : 400,
    dots: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

$("#sliderTwo").owlCarousel({
    loop:true,
    margin:5,
    navigation: true,
    smartSpeed: 300,
    autoplay: true,
    paginationSpeed : 400,
    dots: false,
    center:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items: 1,
            
        }
    }           
})

$("#slider_3").owlCarousel({
    loop:false,
    margin:10,
    navigation: true,
    autoplay: true,
    smartSpeed:900,
    animateIn:'fadeIn',
    animateOut: 'fadeOut',
    paginationSpeed : 800,
    dots: false,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
})



$("#slider_5").owlCarousel({
    loop:true,
    margin:20,
    navigation: true,
    autoplay: true,
    smartSpeed:300,
    nav: true,
    navElement: "dots",
    navText:[`<i class="fa-solid fa-chevron-left"></i>`,`<i class="fa-solid fa-chevron-right"></i>`],
    paginationSpeed : 800,
    dots: true,
    dotsEach:true,
    responsive:{
        0:{
            items: 1,
             stagePadding:90
        },
        600:{
            items:2
        },
        1100:{
            items:3
        },
        1200:{
            items:5
        }
    }
})

$("#slider_6").owlCarousel({
    loop:true,
    margin:5,
    navigation: true,
    autoplay: true,
    smartSpeed:800,
    nav: true,
    navElement: "dots",
    navText:[`<i class="fa-solid fa-chevron-left"></i>`,`<i class="fa-solid fa-chevron-right"></i>`],
    paginationSpeed : 800,
    dots: false,
    stagePadding: 250,
    dotsEach:true,
    responsive:{
        0:{
            items: 1,
            stagePadding: 0,
            mergeFit: false,
        },
        600:{
            items: 1,
             stagePadding: 0,
            mergeFit: false,
        },
        1100:{
            items: 1,
             stagePadding: 0,
            mergeFit: false,
        },
        1200:{
            items:1
        }
    }
})

$("#slider_7").owlCarousel({
    loop:false,
    margin:10,
    navigation: true,
    autoplay: true,
    smartSpeed:800,
    nav: true,
    navElement: "dots",
    navText:[`<i class="fa-solid fa-chevron-left"></i>`,`<i class="fa-solid fa-chevron-right"></i>`],
    paginationSpeed : 800,
    dots: false,  
    dotsEach:true,
    responsive:{
        0:{
            items: 1,
        },
        600:{
            items: 2,
        },
        1100:{
            items: 3,
        },
        1200:{
            items:3
        }
    }
})
$("#slider_8").owlCarousel({
    loop:true,
    margin:10,
    navigation: true,
    autoplay: true,
    smartSpeed:800,
    nav: true,
    navElement: "dots",
    navText:[`<i class="fa-solid fa-chevron-left"></i>`,`<i class="fa-solid fa-chevron-right"></i>`],
    paginationSpeed : 800,
    dots: false,  
    dotsEach: true,
    checkVisible: true ,
    stagePadding: 450,
    merge: true,
    center:true,
    responsive:{
        0:{
            items: 1,
            stagePadding: 0,
        },
        700:{
            items: 1,
            stagePadding:150
        },
        1100:{
            items: 1,
            stagePadding:300
        },
        1300:{
            items:1
        }
    }
})

$("#slider_9").owlCarousel({
    loop:true,
    margin:10,
    autoplay: true,
    smartSpeed:300,
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

// ///////////////////////
let nums = document.querySelectorAll(".counter");
let section = document.querySelector(".three");
let started = false; 


window.onscroll = function () {
  if (window.scrollY >= 300) {
    if (!started) {
      nums.forEach((counter) => startCount(counter));
    }
    started = true;
    }

};

function startCount(el) {
    let goal = el.dataset.target;
    let time = 2000 / goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, time);
}

// /////////////////////////////////////
let heart = document.getElementById("heart");

heart.addEventListener("click", function () {
    heart.classList.toggle("onclick-heart");
})
/////////////////////
let dark = document.querySelector("#darkMode");
let darkIcon = document.querySelector("#moon_icon");

dark.addEventListener("click", function () {
    document.body.classList.toggle("dark_mode");
    if (document.body.classList.contains("dark_mode")) {
        darkIcon.src = "img/sun.png";
        darkIcon.classList.add("sun_icon");
    } else {
        darkIcon.src = "img/moon.png";
    }
    
})
// ////////////////////////////////////

$(".forgit").click(function () {
    $(".forgit_pass").css("display" , "block");
    if ( $(".forgit_pass").css("display" , "block")) {
       $(".login_now").css("display" , "none");
   }
})

$(".Back").click(function () {
    $(".login_now").css("display" , "block");
    if ($(".login_now").css("display" , "block")) {
        $(".forgit_pass").css("display" , "none");
    }
})
//////////////////////////////////////////////////
    
// $(".ssffaa").click(function () {
//     $("h6").toggle(300)

// })
  
let btn123 = document.querySelector(".btn123");
let spanDrop_btn = document.querySelector(".span123");

btn123.addEventListener("click", function () {
   spanDrop_btn.classList.toggle("ssm")
})

// ////////////////////////////////




let productsData = [
    {
        id: 1,
        Quantity: 1,
        imgUrl: "img/Recomended_1.jpg" ,
        title: "Terrible Madness",
        categories: "ADVANTURE , SCIENCE",
        price: "$54.78",
        priceInNumper: 54.78,
        oldPrice: "$70.00",
        liked:false,
        byWriting:"img/COMMENTS_2.jpg" 
    },
    {
        id: 2,
        Quantity: 1,
        imgUrl: "img/Recomended_3.jpg" ,
        title: "Take Out Tango",
        categories: "DRAMA, HORROR",
        price: "$14.05",
        priceInNumper: 14.05,
        oldPrice: "$50.00",
        byWriting:"img/COMMENTS_1.jpg"         
    },
    {
        id: 3,
        Quantity: 1,
        imgUrl: "img/Recomended_4.jpg" ,
        title: "Homie",
        categories: "HORROR, DRAMA",
        price: "$15.28",
        priceInNumper: 54.78,
        oldPrice: "$45.00",
        byWriting:"img/COMMENTS_3.jpeg" 
    },
    {
        id: 4,
        Quantity: 1,
        imgUrl: "img/Recomended_2.jpg" ,
        title: "Cat Advan",
        categories: "ADVANTURE , SCIENCE",
        price: "$54.78",
        priceInNumper: 54.78,
        oldPrice: "$70.00",
        byWriting:"img/Testimonials_1.jpg"  
    },
    {
        id: 5,
        Quantity: 1,
        imgUrl: "img/Recomended_5.jpg" ,
        title: "Thunder Stunt",
        categories: "DRAMA, HORROR",
        price: "$54.78",
        priceInNumper: 54.78,
        oldPrice: "$70.00",
        byWriting:"img/COMMENTS_2.jpg" 
    },
        {
        id: 6,
        Quantity: 1,
        imgUrl: "img/Recomended_6.jpg" ,
        title: "Real Life",
        categories: "ADVANTURE , SCIENCE",
        price: "$14.50",
        priceInNumper: 14.50,
        oldPrice: "$35.00",
        byWriting:"img/COMMENTS_3.jpeg" 
    },
    {
        id: 7,
        Quantity: 1,
        imgUrl: "img/Recomended_7.jpg" ,
        title: "A Heavy Lift",
        categories: "ADVANTURE , SCIENCE",
        price: "$22.78",
        priceInNumper: 22.78,
        oldPrice: "$51.00",
        byWriting:"img/Testimonials_4.jpeg" 
    },
    {
        id: 8,
        Quantity: 1,
        imgUrl: "img/Recomended_8.jpg" ,
        title: "ALL GOOD NEWS",
        categories: "DRAMA, HORROR",
        price: "$40.78",
        priceInNumper: 40.78,
        oldPrice: "$68.00",
        byWriting:"img/COMMENTS_1.jpg"  
    },
    {
        id: 9,
        Quantity: 1,
        imgUrl: "img/Recomended_9.jpg" ,
        title: "SECONDS",
        categories: "ADVANTURE , SCIENCE",
        price: "$21.78",
        priceInNumper: 21.78,
        oldPrice: "$56.00",
        byWriting:"img/COMMENTS_2.jpg"
    },
    {
        id: 10,
        Quantity: 1,
        imgUrl: "img/Recomended_10.jpg" ,
        title: "The Missadventure",
        categories: "DRAMA, HORROR",
        price: "$34.78",
        priceInNumper: 34.78,
        oldPrice: "$80.00",
        byWriting:"img/Testimonials_4.jpeg" 
    },
    {
        id: 11,
        Quantity: 1,
        imgUrl: "img/Recomended_11.jpg" ,
        title: "Battler Drive",
        categories: "ADVANTURE , SCIENCE",
        price: "$19.00",
        priceInNumper: 19.00,
        oldPrice: "$40.50",
        byWriting:"img/COMMENTS_1.jpg" 
    },
    {
        id: 12,
        Quantity: 1,
        imgUrl: "img/home-s1-slider-4.jpg" ,
        title: "Pushing Clouds",
        categories: "ADVANTURE , SCIENCE",
        price: "$62.00",
        priceInNumper: 62.00,
        oldPrice: "$120.00",
        byWriting:"img/COMMENTS_2.jpg"
    },
       {
        id: 13,
        Quantity: 1,
        imgUrl: "img/home-s1-slider-3.png" ,
        title: "think",
        categories: "DRAMA, HORROR",
        price: "$80.00",
        priceInNumper: 80.00,
        oldPrice: "$370.13",
        byWriting:"img/Testimonials_4.jpeg" 
    },
 {
        id: 14,
        Quantity: 1,
        imgUrl: "img/Recomended_1.jpg" ,
        title: "Terrible Madness",
        categories: "ADVANTURE , SCIENCE",
        price: "$54.78",
        priceInNumper: 54.78,
        oldPrice: "$70.00",
        byWriting:"img/COMMENTS_2.jpg" 
    },
        {
        id: 15,
        Quantity: 1,
        imgUrl: "img/Recomended_6.jpg" ,
        title: "Real Life",
        categories: "DRAMA, HORROR",
        price: "$14.50",
        priceInNumper: 14.50,
        oldPrice: "$35.00",
        byWriting:"img/COMMENTS_3.jpeg" 
    },
    {
        id: 16,
        Quantity: 1,
        imgUrl: "img/Recomended_10.jpg" ,
        title: "The Missadventure",
        categories: "ADVANTURE , SCIENCE",
        price: "$34.78",
        priceInNumper: 34.78,
        oldPrice: "$80.00",
        byWriting:"img/Testimonials_4.jpeg" 
    },



]


let productsData2 = [
    {
        id: 1,
        Quantity: 1,
        imgUrl: "img/Recomended_1.jpg" ,
        title: "Terrible Madness",
        categories: "ADVANTURE , SCIENCE",
        price: "$54.78",
        priceInNumper: 54.78,
        oldPrice: "$70.00",
        liked:false,
        byWriting:"img/COMMENTS_2.jpg" 
    },
    {
        id: 2,
        Quantity: 1,
        imgUrl: "img/Recomended_3.jpg" ,
        title: "Take Out Tango",
        categories: "DRAMA, HORROR",
        price: "$14.05",
        priceInNumper: 14.05,
        oldPrice: "$50.00",
        byWriting:"img/COMMENTS_1.jpg"         
    },
    {
        id: 3,
        Quantity: 1,
        imgUrl: "img/Recomended_4.jpg" ,
        title: "Homie",
        categories: "HORROR, DRAMA",
        price: "$15.28",
        priceInNumper: 54.78,
        oldPrice: "$45.00",
        byWriting:"img/COMMENTS_3.jpeg" 
    },
    {
        id: 4,
        Quantity: 1,
        imgUrl: "img/Recomended_2.jpg" ,
        title: "Cat Advan",
        categories: "ADVANTURE , SCIENCE",
        price: "$54.78",
        priceInNumper: 54.78,
        oldPrice: "$70.00",
        byWriting:"img/Testimonials_1.jpg"  
    },
    {
        id: 5,
        Quantity: 1,
        imgUrl: "img/Recomended_5.jpg" ,
        title: "Thunder Stunt",
        categories: "DRAMA, HORROR",
        price: "$54.78",
        priceInNumper: 54.78,
        oldPrice: "$70.00",
        byWriting:"img/COMMENTS_2.jpg" 
    },
        {
        id: 6,
        Quantity: 1,
        imgUrl: "img/Recomended_6.jpg" ,
        title: "Real Life",
        categories: "ADVANTURE , SCIENCE",
        price: "$14.50",
        priceInNumper: 14.50,
        oldPrice: "$35.00",
        byWriting:"img/COMMENTS_3.jpeg" 
    }


]
