$(() => {
  // Enable Bootstrap tooltip
  $('[data-toggle="tooltip"]').tooltip();
  $(".toggle-navbar").click(() => {
    $(".navbar-nav").toggleClass("active");
  });
});

// Ripple Button Effect, Get clicked x and y axise and feed the value to css variables (--ripple-x, --ripple-y)
// const root = document.documentElement;
// document.addEventListener("mousedown", ev => {
// 	const el = ev.target,
// 		top = 0,
// 		left = 0;
// 	do {
// 		top += el.offsetTop;
// 		left += el.offsetLeft;
// 	} while (el = el.offsetParent);
// 	const x = (ev.clientX - left) / ev.target.offsetWidth;
// 	const y = (ev.clientY - top) / ev.target.offsetHeight;
// 	root.style.setProperty("--ripple-x", x);
// 	root.style.setProperty("--ripple-y", y);
// });
