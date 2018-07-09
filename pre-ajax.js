"use strict;"

$(document).ready(function() {

    var people = [
        {
            name: "Fred",
            favColor: "red"
        },
        {
            name: "Sally",
            favColor: "blue"
        },
        {
            name: "Tom",
            favColor: "yellow"
        }
    ];


    $('#add-names-btn').click(function () {
        $('#names-list').append('<ul>');
        people.forEach(function (person) {
            $('#names-list').append("<li style='color:"+ person.favColor + "'>" + person.name + '</li>');
        });
        $('#names-list').append('</ul>');
    })






















});