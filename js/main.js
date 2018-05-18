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
    $(".list").parents().eq(0).css("background", "red");

    


});