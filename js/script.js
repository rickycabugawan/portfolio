$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});




// window.onscroll = () => {
//   var h1 = $(window).height();
//   var h2 = $('.portfolio').height();
//   console.log(h1);
//   console.log(h2);
//   if(this.scrollY > h1) $('.nav-link').css('color','black'); 
//   else if(this.scrollY > h1+h2) $('.nav-link').css('color','white'); 
// };