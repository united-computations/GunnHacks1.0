$(document).ready(function(){

  function submitEmail(){
     // Grab the email
    var email = $('#email').val();

    var $this = $(this);

    $this.addClass('loading');

    $.ajax({
      url: "//formspree.io/info@gunnhacks.com", 
      method: "POST",
      data: {message: "hello!"},
      dataType: "json"
    }).done(function() {
      $this.removeClass('loading');

      $('#email').val('');

      $('.hidden').show();

    });
  }

  $('#submit').click(function(e){
    submitEmail();
  });

  $('#email').keyup(function(e){
    if (e.keyCode == 13) {
      submitEmail();
    }
  });

});