"use strict";$(document).ready(function(){$(".quote-list").slick({prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fal fa-angle-left' aria-hidden='true'></i></button>",nextArrow:"<button type='button' class='slick-next pull-right'><i class='fal fa-angle-right' aria-hidden='true'></i></button>",responsive:[{breakpoint:767,settings:{arrows:!1}}]});var t=document.querySelector(".header-menu"),e=document.querySelector(".header-toggle"),s="is-expand";e.addEventListener("click",function(){t.classList.add(s)}),window.addEventListener("click",function(e){t.contains(e.target)||e.target.classList.contains("header-toggle")||t.classList.remove(s)});var e=$(".wedo-item-heading"),i=$(".wedo-item");e.click(function(e){$(this).parent().hasClass("is-active")?$(this).parent().removeClass("is-active"):(i.removeClass("is-active"),$(this).parent().addClass("is-active"))})});