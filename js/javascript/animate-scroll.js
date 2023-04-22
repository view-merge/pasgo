$(document).ready(function () {
  var prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
      var currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
          $("#navfix").removeClass("active");
          // $("#navfix").slideDown(500);
      } else if (currentScrollPos > 70) {
          // $("#navfix").slideUp(500);
          $("#navfix").addClass("active");
      }
      prevScrollpos = currentScrollPos;
  }
});

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