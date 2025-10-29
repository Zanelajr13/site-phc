$(document).ready(function () {
  // ===================== MENU MOBILE =====================
  $("#mobile_btn").on("click", function () {
    $("#mobile_menu").toggleClass("active");
    $("#mobile_btn").find("i").toggleClass("fa-x");
  });

  // ===================== HEADER =====================
  let lastScrollTop = 0;
  const header = $("header");

  $(window).on("scroll", function () {
    const scrollTop = $(this).scrollTop();
    if (scrollTop > lastScrollTop && scrollTop > 100) {
      header.css("top", "-100px");
    } else {
      header.css("top", "0");
    }
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  });

  // ===================== SCROLL SUAVE =====================
  const navLinks = $("#nav_list a, #mobile_nav_list a");
  navLinks.on("click", function (e) {
    e.preventDefault();
    const targetId = $(this).attr("href");
    const targetOffset = $(targetId).offset().top - header.outerHeight();
    $("html, body").animate({ scrollTop: targetOffset }, 600);
  });

  // ===================== DESTACAR SEÇÃO ATIVA =====================
  const sections = $("section");
  $(window).on("scroll", function () {
    const scrollPosition = $(window).scrollTop();
    sections.each(function () {
      const section = $(this);
      const sectionTop = section.offset().top - header.outerHeight() - 10;
      const sectionBottom = sectionTop + section.outerHeight();
      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        const id = section.attr("id");
        navLinks.removeClass("active");
        $(
          `#nav_list a[href="#${id}"], #mobile_nav_list a[href="#${id}"]`
        ).addClass("active");
        return false;
      }
    });
  });
});
