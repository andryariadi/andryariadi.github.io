const sideNav = document.querySelectorAll('.sidenav');
M.Sidenav.init(sideNav);

const slider = document.querySelectorAll('.slider');
M.Slider.init(slider, {
    indicators: false,
    height: 750,
    transition: 600,
    interval: 3000
});

document.addEventListener('DOMContentLoaded', function() {
    var parallax = document.querySelectorAll('.parallax');
    var instances = M.Parallax.init(parallax);
  });

  document.addEventListener('DOMContentLoaded', function() {
    var materialboxed = document.querySelectorAll('.materialboxed');
    var instances = M.Materialbox.init(materialboxed);
  });

  document.addEventListener('DOMContentLoaded', function() {
    var scrollspy = document.querySelectorAll('.scrollspy');
    var instances = M.ScrollSpy.init(scrollspy, {
      scrollOffset: 50
    });
  });