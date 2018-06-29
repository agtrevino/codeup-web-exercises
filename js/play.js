"use strict";

$(document).ready(function () {

    // alert('The DOM has finished loading!');
});
$(function () {

    $(".important").mouseover(function () {
        $(this).css("color", "red")
    });

    $("#header").click(function () {
            $(this).css("font-size", "50px")
    });

    $('.codeup, li').css('background-color', '#FF0');
});


// callback function

function logClicked(){
    console.log('clicked');
}

document.getElementById('gsd').addEventListener('click',logClicked);


// double click using this

$('li').dblclick(function () {
    console.log('double clicked')

});

function backgroundChange(){
    $('h1').css('background','blue')

}
$('h1').click(backgroundChange);

function fontChange(){
    $('p').css('font-size','18px')

}
$('p').dblclick(fontChange);

function highlight() {
    $('li').css('color', 'blue');
}

$('li').hover(highlight);
