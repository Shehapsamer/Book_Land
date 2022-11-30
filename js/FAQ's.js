"use strict";

let svg = document.querySelector(".ser1")
let svg2 = document.querySelector(".ser2")
let svg3 = document.querySelector(".ser3")
let svg4 = document.querySelector(".ser4")
let svg5 = document.querySelector(".ser5")
let svg6 = document.querySelector(".ser6")

let btnn = document.querySelector(".btn_jq_1")
let btnn2 = document.querySelector(".btn_jq_2")
let btnn3 = document.querySelector(".btn_jq_3")
let btnn4 = document.querySelector(".btn_jq_4")
let btnn5 = document.querySelector(".btn_jq_5")
let btnn6 = document.querySelector(".btn_jq_6")



btnn.addEventListener("click", function () {
    svg.classList.toggle("ser")
    svg2.classList.remove("ser")
    svg3.classList.remove("ser")
})

btnn2.addEventListener("click", function () {
    svg2.classList.toggle("ser")
    svg.classList.remove("ser")
    svg3.classList.remove("ser")
})

btnn3.addEventListener("click", function () {
    svg3.classList.toggle("ser")
    svg2.classList.remove("ser")
    svg.classList.remove("ser")
})
btnn4.addEventListener("click", function () {
    svg4.classList.toggle("ser")
    svg5.classList.remove("ser")
    svg6.classList.remove("ser")
})
btnn5.addEventListener("click", function () {
    svg5.classList.toggle("ser")
    svg4.classList.remove("ser")
    svg6.classList.remove("ser")
})
btnn6.addEventListener("click", function () {
    svg6.classList.toggle("ser")
    svg5.classList.remove("ser")
    svg4.classList.remove("ser")
})
// ///
$(".btn_jq_1").click(function () {
    $(".hide_text_2 ").slideUp(300)
    $(".hide_text_3 ").slideUp(300)
    $(".hide_text_1").slideToggle(300)
})
$(".btn_jq_2").click(function () {
    $(".hide_text_1 ").slideUp(300)
    $(".hide_text_3 ").slideUp(300)
    $(".hide_text_2").slideToggle(300)
})
$(".btn_jq_3").click(function () {
    $(".hide_text_1 ").slideUp(300)
    $(".hide_text_2").slideUp(300)
    $(".hide_text_3").slideToggle(300)
})
$(".btn_jq_4").click(function () {
    $(".hide_text_6 ").slideUp(300)
    $(".hide_text_5").slideUp(300)
    $(".hide_text_4").slideToggle(300)
})
$(".btn_jq_5").click(function () {
    $(".hide_text_6 ").slideUp(300)
    $(".hide_text_4").slideUp(300)
    $(".hide_text_5").slideToggle(300)
})
$(".btn_jq_6").click(function () {
    $(".hide_text_5 ").slideUp(300)
    $(".hide_text_4").slideUp(300)
    $(".hide_text_6").slideToggle(300)
})
///////////////////////////////////////////////////////////