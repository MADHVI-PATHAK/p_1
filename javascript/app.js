$(document).ready(function($) {
    function animateElements() {
      $('.progressbar').each(function() {
        var elementPos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
        var percent = $(this).find('.circle').attr('data-percent');
        var percentage = parseInt(percent, 10) / parseInt(100, 10);
        var animate = $(this).data('animate');
        if (elementPos < topOfWindow + $(window).height() - 30 && !animate) {
          $(this).data('animate', true);
          $(this).find('.circle').circleProgress({
            startAngle: -Math.PI / 2,
            value: percent / 100,
            thickness: 8,
            fill: {
                color: 'blue'
            }
          }).on('circle-animation-progress', function(event, progress, stepValue) {
            $(this).find('div').text((stepValue * 100).toFixed(1) + "%");
          }).stop();
        }
      });
    }
  
    
    animateElements();
    $(window).scroll(animateElements);
  });


  var a = 0;
  $(window).scroll(function() {
  
    var oTop = $('.counter').offset().top - window.innerHeight;
    if (a == 0 && $(window).scrollTop() > oTop) {
      $('.counter-value').each(function() {
        var $this = $(this),
          countTo = $this.attr('data-count');
        $({
          countNum: $this.text()
        }).animate({
            countNum: countTo
          },
  
          {
  
            duration: 2000,
            easing: 'swing',
            step: function() {
              $this.text(Math.floor(this.countNum));
            },
            complete: function() {
              $this.text(this.countNum);
              //alert('finished');
            }
  
          });
      });
      a = 1;
    }
  
  });

  const navSlide = () =>{
      const bars = document.querySelector('.fa-bars');
      const web = document.querySelector('.web');

      bars.addEventListener('click', () => {
          web.classList.toggle('web-active');
      });
  }
  navSlide();

  AOS.init({
    offset: 400,
    duration: 1000
});
 
function validateemail() {
  var x=document.myform.email.value;
  var atposition=x.indexOf("@");
  var dotposition=x.lastIndexOf(".");
  if(atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length){
    alert("please enter a valid e-mail address \n atposition:"+atposition+"\n dotposition:"+dotposition);
    return false;
  }
}