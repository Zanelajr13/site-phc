$(document).ready(function () {
  // ===================== MENU MOBILE =====================
  $("#mobile_btn").on("click", function () {
    $("#mobile_menu").toggleClass("active");
    $("#mobile_btn").find("i").toggleClass("fa-x");
  });

  // ===================== HEADER QUE DESAPARECE =====================
  let lastScrollTop = 0;
  const header = $("header");

  $(window).on("scroll", function () {
    const scrollTop = $(this).scrollTop();

    // Header some ao descer e reaparece ao subir
    if (scrollTop > lastScrollTop && scrollTop > 100) {
      header.css("top", "-100px"); // esconde
    } else {
      header.css("top", "0"); // mostra
    }
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // para não ficar negativo
  });

  // ===================== SCROLL SUAVE =====================
  const navLinks = $("#nav_list a, #mobile_nav_list a");

  navLinks.on("click", function (e) {
    e.preventDefault();
    const targetId = $(this).attr("href");
    const targetOffset = $(targetId).offset().top - header.outerHeight(); // centraliza a seção abaixo do header

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

  // ===================== CALCULADORA =====================
  const $formulario = $("#form-solar");

  // Abrir ao clicar em qualquer botão (desktop ou mobile)
  $(document).on("click", "#abrirCalc, .abrirCalc", function (e) {
    e.preventDefault();
    $formulario.addClass("ativo");

    // Se o menu mobile estiver aberto, fecha ele
    $("#mobile_menu").removeClass("active");
  });

  // Fechar ao clicar fora do iframe
  $formulario.on("click", function (e) {
    if (!$(e.target).closest("iframe").length) {
      $formulario.removeClass("ativo");
    }
  });

  // ===================== SCROLLREVEAL =====================
  ScrollReveal().reveal("#cta", {
    origin: "left",
    duration: 2000,
    distance: "20%",
  });
  ScrollReveal().reveal("#form-solar", {
    origin: "right",
    duration: 2000,
    distance: "20%",
  });
  ScrollReveal().reveal(".projeto", {
    origin: "left",
    duration: 2000,
    distance: "20%",
  });
  ScrollReveal().reveal("#testimonial_phc", {
    origin: "left",
    duration: 1000,
    distance: "20%",
  });
  ScrollReveal().reveal(".feedback", {
    origin: "right",
    duration: 1000,
    distance: "20%",
  });
});
