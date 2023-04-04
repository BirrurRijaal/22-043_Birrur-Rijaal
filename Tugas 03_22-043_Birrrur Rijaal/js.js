const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('.navbar ul');

menuToggle.addEventListener('click',function(){
    nav.classList.toggle('slide');
});

// function ng(){
//   window.scrollTo({
//     top : 0,
//     behavior:"smooth"
//   })
// }

// var scrollToTopBtn = document.querySelector(".scroll-to-top");

// window.addEventListener("scroll", function() {

// 	function slider(anything){
// 			document.querySelector('.one').src = anything;
// 		};

// 		let menu = document.querySelector('#menu-icon');
// 		let navbar = document.querySelector('.navbar');

// 		menu.onclick = () => {
// 			menu.classList.toggle('bx-x');
// 			navbar.classList.toggle('open');
// 		}
//   // tombol Scroll to Top akan muncul setelah pengguna menggulir ke bawah
//   if (window.pageYOffset > 100) {
//     scrollToTopBtn.style.display = "block";
//   } else {
//     scrollToTopBtn.style.display = "none";
//   }
// });

// scrollToTopBtn.addEventListener("click", function() {
//   window.scrollTo({
//     top: 0,
//     behavior: "smooth"
//   });
// });



var scrollToTopBtn = document.querySelector(".scroll-to-top");

window.addEventListener("scroll", function() {
  // tombol Scroll to Top akan muncul setelah pengguna menggulir ke bawah
  if (window.pageYOffset > 100) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
});

scrollToTopBtn.addEventListener("click", function() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});



//  window.addEventListener("scroll", function() {
//    if (window.pageYOffset > 100) {
//      scrollToTopBtn.style.display = "block";
//    } else {
//      scrollToTopBtn.style.display = "none";
//    }
//  });

//  scrollToTopBtn.addEventListener("click", function() {
//    window.scrollTo({
//      top: 0,
//      behavior: "smooth"
//    });
//  });

//  window.addEventListener("scroll", function() {

//  function slider(anything){
//          document.querySelector('.one').src = anything;
//      };

//      let menu = document.querySelector('#menu-icon');
//      let navbar = document.querySelector('.navbar');

//      menu.onclick = () => {
//          menu.classList.toggle('bx-x');
//          navbar.classList.toggle('open');
//      }