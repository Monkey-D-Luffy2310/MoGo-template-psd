"use strict";$(document).ready(function(){$(".quote-list").slick({prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fal fa-angle-left' aria-hidden='true'></i></button>",nextArrow:"<button type='button' class='slick-next pull-right'><i class='fal fa-angle-right' aria-hidden='true'></i></button>",responsive:[{breakpoint:767,settings:{arrows:!1}}]})});var headerMenu=document.querySelector(".header-menu"),toggleMenu=document.querySelector(".header-toggle"),classExpand="is-expand";toggleMenu.addEventListener("click",function(){headerMenu.classList.add(classExpand)}),window.addEventListener("click",function(e){headerMenu.contains(e.target)||e.target.classList.contains("header-toggle")||headerMenu.classList.remove(classExpand)});