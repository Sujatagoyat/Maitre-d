const menuIcon = document.querySelector(".menuIcon")
const menulist = document.querySelector(".menulist")


menuIcon.addEventListener("click", function () {
    menulist.classList.toggle("show");
    document.body.classList.toggle("overFlowHidden")
    document.querySelector(".menuIcon").classList.toggle("cross")
})
// ================== slider =================================
$('.responsive').slick({
    dots: false,
    infinite: true,
    
    speed: 300,
    prevArrow: ".prev",
    nextArrow: ".next",
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          autoplay:true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay:true,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay:true,
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  const turnBtn = document.querySelector(".turnBtn");
  turnBtn.addEventListener("click", function () {
    turnBtn.classList.toggle("justify-content-end");
    document.querySelector(".month").classList.toggle("d-none");
    document.querySelector(".monthprice").classList.toggle("d-none")
    document.querySelector(".monthplan").classList.toggle("d-none")
    document.querySelector(".yearplan").classList.toggle("d-block")
    document.querySelector(".yearlyprice").classList.toggle("d-block")
    document.querySelector(".yearly").classList.toggle("d-block"); 

});

const topBtn = document.querySelector(".topBtn");
const show = document.querySelector(".show"); 

window.addEventListener("scroll", function () {
    if (window.scrollY >2000) {
        topBtn.classList.add("show");
    } else {
        topBtn.classList.remove("show");
    }
})
topBtn.addEventListener("click", function () {
    document.documentElement.scrollTop = 0;
})


//