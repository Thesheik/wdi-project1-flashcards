$(document).ready(function() {

  console.log( "ready!" )

    $(".back").hide();

    $(".front").click(function(e){
        $(this).next().show();
        $(this).hide();
     });

    $(".back").click(function(){
        $(this).prev().show();
        $(this).hide();
    });

});
