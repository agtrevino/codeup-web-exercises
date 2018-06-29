"use strict";

$(document).ready(function () {

    alert('The DOM has finished loading!');
});
$(function () {

    $(".important").mouseover(function () {
        $(this).css("color", "red")
    });

    $("#header").click(function () {
            $(this).css("font-size", "50px")
    });

    $(".codeup").css("border","1px black");
});
