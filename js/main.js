      // hamburger menu code
      var sidebar = document.getElementById('sidemenu');
      
      function openMenu(){
        sidebar.classList.toggle('extra');
      }

      var swiper = new Swiper('.swiper', {
      slidesPerView: 'auto',
      centeredSlides: true,
      spaceBetween: 30,
      autoplay:true,
      autoplayTimeout:3000,
      autoplayHoverPause:true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });

      
