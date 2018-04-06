(function($) {
  "use strict";

  $(window).load(function(){

    $('#page-loader').delay(3200).fadeOut(3300, function(){

    });
    setTimeout(function(){
      $('#loader-name').addClass('loader-left');
      $('#loader-job').addClass('loader-right');
      $('#loader-animation').addClass('loader-hide');
    }, 3300);
  });

  $(document).ready(function(){
    $('#loading-wraper').fadeIn(300);
  });

})(jQuery);
