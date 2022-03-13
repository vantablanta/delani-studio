$(document).ready(function(){
    $(".design").on('click', function(){
        $(this).slideUp()
        $(".design-description").addClass("description-show").slideDown()
    })
    $(".design-description").on('click', function(){
        $(this).slideUp()
        $(".design").slideDown() 
    })

    $(".dev").on('click', function(){
        $(this).slideUp()
        $(".dev-description").addClass("description-show").slideDown()
    })
    $(".dev-description").on('click', function(){
        $(this).slideUp()
        $(".dev").slideDown() 
    })

        $(".product").on('click', function(){
        $(this).slideUp()
        $(".product-description").addClass("description-show").slideDown()
    })
    $(".product-description").on('click', function(){
        $(this).slideUp()
        $(".product").slideDown() 
    })


})