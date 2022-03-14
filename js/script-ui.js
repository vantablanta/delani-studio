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

    $(".portfolio-image").each(function(){
        $(this).mouseover(function(){
            $(this).addClass("hover-effect")            
        })
        $(this).mouseout(function(){
            $(this).removeClass("hover-effect")
        })
    })

    $("#1").mouseover(function(){
        $(".hover-text-1-show").show()
    })

    $("#1").mouseout(function(){
        $(".hover-text-1-show").hide()
        
    })

    $("#2").mouseover(function(){
        $(".hover-text-2-show").show()
    })

    $("#2").mouseout(function(){
        $(".hover-text-2-show").hide()
    })

    $("#3").mouseover(function(){
        $(".hover-text-3-show").show()
    })

    $("#3").mouseout(function(){
        $(".hover-text-3-show").hide()
    })

    $("#4").mouseover(function(){
        $(".hover-text-4-show").show()
    })

    $("#4").mouseout(function(){
        $(".hover-text-4-show").hide()
    })

    $("#5").mouseover(function(){
        $(".hover-text-5-show").show()
    })

    $("#5").mouseout(function(){
        $(".hover-text-5-show").hide()
    })

    $("#6").mouseover(function(){
        $(".hover-text-6-show").show()
    })

    $("#6").mouseout(function(){
        $(".hover-text-6-show").hide()
    })

    $("#7").mouseover(function(){
        $(".hover-text-7-show").show()
    })

    $("#7").mouseout(function(){
        $(".hover-text-7-show").hide()
    })

    $("#8").mouseover(function(){
        $(".hover-text-8-show").show()
    })

    $("#8").mouseout(function(){
        $(".hover-text-8-show").hide()
    })



})