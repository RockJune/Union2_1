jQuery(document).ready(function($){
    var width = $('body').outerWidth();
    var height = $('body').outerHeight();
    
  
    var first = $('.fake:first-of-type');
    var b = first.offset();
    var w = first.width();
    var h = first.height();
    
    $('.overlay').css({
      left: b.left,
      top: b.top,
      width: w,
      height: h,
      opacity: 0
    }); 
  
    $('.fake').each(function() {
      
      $(this).on('mouseover', function(){
        var $this = $(this);
        var b = $this.offset();
        var w = $this.width();
        var h = $this.height();
  
        $('.overlay').css({
          left: b.left - $(window).scrollLeft(),
          top: b.top - $(window).scrollTop(),
          width: w,
          height: h
        }); 
      
        // 
        var colour = $this.data('colour');
              $('.load, .overlay').css({
         'background-color' : colour
        });
        
        // Background
        $(this).css({
          'background-color' : colour
        });
        
      });
      
      $(this).on('click', function(){
        
        //$('html, body').animate({scrollTop: 0}, 200);
        // Stop the hovering
        $('.fake').unbind('mouseover');
  
        $('.overlay').css({        
          "width" : '100vw',
          'margin-left' : 0,
          'height' : '100%',
          'opacity' : 1,
          'right' : 0,
          'top' : '0',
          'left' : '0',
          'padding' : 0,
          'margin' : 0,
          'z-index' : 100
        });
  
        // Put the title in the box
        var title = $(this).data('title');
        $('.modal-content').html('Warming up ' + title);
  
        // Fade out the overlay w
        setTimeout(function(){
          $('.modal-content').css({
            opacity: '1'
          });
        }, 1000);
  
        // Fade out the modal content
        setTimeout(function(){
          $('.modal-content').css({
            opacity: '0'
          });
        }, 2000);
  
        var url = $(this).data('link');
        // Load the next page, whereever the fuck that is.
        setTimeout(function(){
          // Load the URL. You'd get $(this).attr('href') here
          $( "#lol" ).load( url , function(){
  
            // get rid of that orange thing
            $('.overlay').css({
              height: 0,
              overflow: 'hidden'
            });
  
          } );
        }, 3100);
       }); // end of each
    });  // end of click the button
  }); // end of document.ready