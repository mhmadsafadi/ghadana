var day = new Date().toLocaleDateString('ar', {weekday:'long'})
document.getElementById('day').innerHTML = day;

var date = new Date();
var d = date.getDate();
var m = date.toLocaleDateString("ar",{month:"long"});
var y = date.getFullYear();
var dateFormat = d + " " + m + " " + y;
document.getElementById('date').innerHTML = dateFormat;

jwplayer("myElement").setup({
  image: "",
  aspectratio: "16:9",
  width: '100%',
  aspectratio: '16:9',
  autostart: false,
  file : 'video/news.mp4',
  abouttext: 'FILMKACA',
  aboutlink: 'http://filmkaca.xyz',
  title: 'السلاح الروسي يجعل جيش الجزائر الأقوى في شمال إفريقيا',
  events: {
    onReady: function() {
      jwplayer('myElement').seek(632);
      this.setFullscreen(true);
    },
    onComplete: function() {
      jwplayer('myElement').remove();
      $('#myElement').html("<img src='http://placehold.it/720x480'/>");
    }
  }
});

$(document).ready(function(){
  
    $('.slider-news').slick({
        dots: false,
        arrows: true,
        prevArrow: '.arrow-prev',
        nextArrow: '.arrow-next',
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        fade: true,
        speed: 300,
        draggable: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        rtl: true,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
                arrows: false,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
                arrows: false,
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
                arrows: false,
              }
            }
          ]
    });


    $('.slider-gallery').slick({
      slidesToShow: 4,
      slidesToScroll: 4,
      infinite: true,
      arrows: true,
      dots:true,
      autoplay: true,
      prevArrow: '.arrow-preve',
      nextArrow: '.arrow-nextt',
      rtl: true,
      responsive: [
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
      ]
    });
});
