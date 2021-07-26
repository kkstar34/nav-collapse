$(".nav-itemC").on("click", function(e){
    updateNav($(this));
  });
  
  $(".nav-toggle").on("click", function(e){
      toggleNav();
    });
    
    function updateNav(el){
   
      $(".nav-itemC").removeClass("nav-active");
      $(el).addClass("nav-active");
      
    }
  
      function toggleNav(){
          $(".nav").toggleClass("navcollapse");
          $(".nav-toggle").toggleClass("toggleIcon");
      }