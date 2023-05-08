// scroll menu top
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navfix").style.top = "0";
  } else {
    document.getElementById("navfix").style.top = "-80px";
  }
  prevScrollpos = currentScrollPos;
}

// back top scroll
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

// show menu nav bar
function openMenu() {
  document.getElementById("navMenu").style.display = "block";

}
function closeMenu() {
  document.getElementById("navMenu").style.display = "none";
}


// show menu search
function openSearch() {
  document.getElementById("navSearch").style.display = "block";
}

// show menu Filter
function openFilter() {
  document.getElementById("navFilter").style.display = "block";
}



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

// $(document).ready(function () {
//   var prevScrollpos = window.pageYOffset;
//   window.onscroll = function () {
//       var currentScrollPos = window.pageYOffset;
//       if (prevScrollpos > currentScrollPos) {
//           $("#navfix").removeClass("active");
//           // $("#navfix").slideDown(500);
//       } else if (currentScrollPos > 70) {
//           // $("#navfix").slideUp(500);
//           $("#navfix").addClass("active");
//       }
//       prevScrollpos = currentScrollPos;
//   }
// });