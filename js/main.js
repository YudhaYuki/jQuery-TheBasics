$(document).ready(function() {

    // console.log(document.querySelectorAll('p'));




    // SELCT ELEMENT
    // $('form, ul, p').css('fontSize', '30px');





    // SELECT ID/CLASS
    // $("#list").css('fontSize', '30px');
    // $(".text").css('fontSize', '30px');





    // SELECT OTHER ELEMENT
    // $("input[type='password']").css("background", 'pink');
    // $("input:text").css("background", 'yellow');
    // $("input[type='radio']").css("margin", '30px');
    // $("input:checked").css("margin", '30px');

    // $("li:first").css("background", "red")
    // $("li:last").css("background", "red")
    // $("li:odd").css("background", "yellow")

    // $("tr:odd").css("background", "red");






    // SELECT CHILDREN
    // $(".parent p").css("background", "red");
    // $(".parent p:first-child").css("background", "red");
    // $(".parent p:first-of-type").css("background", "red");

    // $(".parent p:nth-child(2)").css("background", "red");
    // $(".parent p:nth-last-child(1)").css("background", "red");





    // FINDING ELEMENT
    // $(".parent").find("span").css("background", "red");
    // $(".parent").find("#text").css("background", "red");
    // $(".parent").find(".par").css("background", "red");

    // $(".parent").children("p").css("background", "red");




    // GETTING THE PARENTS
    // $('.user').parent().css("background", "red");

    // $('.user').parents(".parent").css("background", "red");

    // $('.user').parents().css("background", "red");


    


    // PREVIOUS AND NEXT
    // $('.second').next().css("background", "blue");






    // USING EQ
    // $(".list li:eq(1)").css("background", "red");

    // the EQ grabs the wrapper in this case
    // $(".list").parents().eq(0).css("background", "red");







    // FIRST, LAST, FILTER and NOT
    // $('div').first().css("background", "red");

    // $('div').last().css("background", "red");

    // $('div').not(".different").css("background", "red");

    //$('div').filter(".different").css("background", "red");



    


    // DOM - APPENDING and PREPENDING
    /* Pure JavaScript Way
        var parent = document.querySelector('.parent');
        var newElement = document.createElement('div');

        newElement.className = "newDiv";
        newElement.innerText = "Mi new element";

        parent.appendChild(newElement);
    */

    // $('.parent').append('<div class="newDiv">Mi new Div</div>');
    // $('<div class="newDiv">Mi new Div</div>').appendTo('.parent');

    // $('.parent').prepend('<div class="newDiv">Mi new Div</div>');
    // $('<div class="newDiv">Mi new Div</div>').prependTo('.parent');









    // DOM - BEFORE AND AFTER
    // $('.element').before('<div>Before</div>');
    // $('.element').after('<div>After</div>');

    // Example in real world use
    // $('input').after('<div class="error">Missing Message</div>')











    // DOM - REPLACING ELEMENTS

    // $('.replaceMe').replaceWith('<div>Replaced</div>');
    // $('<div>Replaced</div>').replaceAll("div")
    $('<div>Replaced</div>').replaceAll(".replaceMe, replaceMeAgaon")






});