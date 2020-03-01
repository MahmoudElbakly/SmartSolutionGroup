
function load() 
{
    if(window.scrollY>0)
    {
        $("#header").css({"background-color":"#2a3666","height":"70px"}); 
        $("#top").css("display","block");
    }
    else
    {
        $("#header").css({"background-color":"transparent","height":"90px"});
        $("#top").css("display","none");
    }
}

function back_top()
{
   
    var t;
    t=setInterval(function() {
        if(window.scrollY>0)
        {window.scrollBy(0, -100)}
        else{clearInterval(t);}
        
    },20)  
}
$(document).ready(function(){
$(function () {
		
    var filterList = {
    
        init: function () {
        
            // MixItUp plugin
            // http://mixitup.io
            $('#portfoliolist').mixItUp({
              selectors: {
              target: '.portfolio',
              filter: '.filter'	
          },
          load: {
            filter:'.web, .mobile'    
          }     
            });								
        
        }

        

    };
    
    // Run the show!
    filterList.init();

    $("#sliderr").lightslider({
        loop:true,
        keyPress:true,
        auto:true,
        
    });
    $("#content-slider").lightSlider({
        loop:true,
        keyPress:true,
        speed:500,
        auto:true,
        
    });
    $("#b1").click(function(){
        console.log("sdfghjk");
        $("#left_header_content").toggleClass("view");
    
    
    });	
       
    
});

});