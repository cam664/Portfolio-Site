function logoTilt(){$(document).mousemove(function(e){var a,t,o=$(".tilt-container"),s=$("header"),n=o.offset().left,l=o.offset().top,i=n+o.width()/2,c=l+o.height()/2;e.pageX>s.width()+50||e.pageX<=0||e.pageY>s.height()+50||e.pageY<=0?(a=0,t=0):(a=(e.pageX-i)/90,t=(-e.pageY-c)/90),o.css("transform","rotateX("+t+"deg) rotateY("+a+"deg)")})}$(document).ready(function(){$(".loading-screen").fadeOut("400"),$("#shape-1").addClass("anim-shape-1"),$("#shape-2").addClass("anim-shape-2"),$("#shape-3").addClass("anim-shape-3"),$("#shape-4").addClass("anim-shape-4"),$("#shape-5").addClass("anim-shape-5"),$("#shape-6").addClass("anim-shape-6"),$("body").removeClass("no-scroll")}),setTimeout(function(){logoTilt()},2e3),$(document).on("scroll",function(){var e=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,a=$("body").outerHeight(!0),t=$("nav"),o=350,s=$(".nav-projects"),n=$("#projects"),l=$(".nav-about"),i=$("#about"),c=$(".nav-skills"),d=$("#skills"),r=$(".nav-contact"),p=$("#contact-spacer"),f=$("#school");e>=50?t.css("transform","translate(0, 0)"):t.css("transform","translate(0, -146px)"),console.log(a),e+o>n.offset().top&&e+o<n.offset().top+n.outerHeight(!0)?s.addClass("nav-active"):s.removeClass("nav-active"),e+o>i.offset().top&&e+o<i.offset().top+i.outerHeight(!0)?l.addClass("nav-active"):l.removeClass("nav-active"),e+o>d.offset().top&&e+o<d.offset().top+(d.outerHeight(!0)+f.outerHeight(!0))?c.addClass("nav-active"):c.removeClass("nav-active"),e+o>p.offset().top?r.addClass("nav-active"):r.removeClass("nav-active")}),$('a[href^="#"]').on("click",function(e){var a=$(this.getAttribute("href")),t=50;a.length&&(e.preventDefault(),a.is("#about")&&(t=140),a.is("#contact")&&(t=-5400),$("html, body").stop().animate({scrollTop:a.offset().top-t},1e3))});
//# sourceMappingURL=../maps/main.js.map