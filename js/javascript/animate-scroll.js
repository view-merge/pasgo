$(document).ready(function(){
    var previousScroll = 0;
    $(window).scroll(function(){
      var currentScroll = $(this).scrollTop();
      if (currentScroll > previousScroll){
        $('#navfix').removeClass('active');
      } else {
        $('#navfix').addClass('active');
      }
      previousScroll = currentScroll;
    });
  });


// $(document).ready(function() {
//     $(window).scroll(function() {
//         var scroll = $(window).scrollTop();
//         if (scroll > 50) {
//             $("#navfix").removeClass("hidden");
//         }else {
//             $("#navfix").addClass("active");
//         }
//     });
// });
// $(window).scroll(function() {
//     if (s(this).scrollTop() > 300) {
//         $("#navfix").fadeOut();
//     }else {
//         $("#navfix").fadeIn();
//     }
// });

$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop()) {
            $('#backtop').fadeIn();
        } else {
            $('#backtop').fadeOut();
        }
    })
    $("#backtop").click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 500);
    })

});