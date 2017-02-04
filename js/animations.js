$(document).ready(function (){
  $('#char-count').hide();

  const newTweetTextarea = $('#tweet-content .tweet-compose');
  newTweetTextarea.blur(function(){
    $(this).css('height','2.5em');
    $('#tweet-submit').fadeOut(200);
    $('#char-count').hide();
  });

  $('textarea').blur(function(){
    $(this).css('height','2.5em');
  });
  $('textarea').focus(function(){
    $(this).css('height','5em');
  });

  newTweetTextarea.focus(function(){
    $(this).css('height','5em');
    $('#char-count').show();
    $('#tweet-submit').fadeIn(200);
  });
  newTweetTextarea.keydown(function(e){
    let val = $(this).val();
    let result = val.length;
    $('#char-count').text(140 - val.length);
    console.log(result);
    if (result >= 140) {
      $('.button').prop('disabled',true);
    } else {
      $('.button').prop('disabled',false);
    }
    if (result >= 130) {
      $('#char-count').css('color','red');
    } else {
      $('#char-count').css('color','#999');
    }
  });

  function submit () {
    if (newTweetTextarea.val().length === 0) {
      alert("You need to enter something in first!");
    } else {
      var newTweet = $('.tweet:first').clone();
      // grab string val of new tweet from tweet-content
      // use that string as text for newTweet's .tweet-text
      // then prepend newTweet to stream
      const newTweetText = newTweetTextarea.val();
      newTweet.find('.tweet-text').text(newTweetText);
      newTweetTextarea.val('');
      newTweet.find('.fullname').text('Goofball George');
      newTweet.find('.username').text('@derp');
      newTweet.find('.avatar').prop('src','img/alagoon.jpg');
      newTweet.find('.num-retweets').text(0);
      newTweet.find('.num-favorites').text(0);
      $(newTweet).hide().prependTo('#stream').fadeIn(1000);
    }
  }

    newTweetTextarea.keypress(function(e){
      if (e.which === 13) {
        submit();
      }
    })

    $('#tweet-submit').click(function(){
      submit();
    });

    $('#stream').on('mouseenter','.tweet', function(){
      $(this).find('.tweet-actions').fadeIn();
    });

    $('#stream').on('mouseleave','.tweet', function(){
      $(this).find('.tweet-actions').fadeOut();
    });

    $('#stream').on('click','.tweet', function(){
      $(this).find('.stats').fadeIn();
    });

    $('#stream').on('mouseleave','.tweet', function(){
      $(this).find('.stats').fadeOut();
    });

  });
