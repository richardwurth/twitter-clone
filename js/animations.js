$(document).ready(function (){

  $('#tweet-content .tweet-compose').blur(function(){
    $(this).css('height','2.5em');
    $('#tweet-submit').fadeOut(200);
  });

  $('#tweet-content .tweet-compose').focus(function(){
    $(this).css('height','5em');
    $('#tweet-submit').fadeIn(200);
    $('#char-count').fadeIn(200);
    $(this).keypress(function(){
      console.log($(this).val());
    })
  });
  //
  // $('.tweet-compose').focus(function(){
  //   $('#char-count').fadeIn(200);
  //   $('#char-count').html(function(){
  //     let count = 140;
  //     if ()
  //   });
  // })

});
