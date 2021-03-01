"use strict";

window.addEventListener("DOMContentLoaded", interaction); 

function interaction(){
    document.querySelector(".house-base").addEventListener("click", changeColor); 
}

function changeColor(){
    document.querySelector(".house-base").classList.add("house_kf"); 
}


