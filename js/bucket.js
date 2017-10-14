$( "#accordion" ).accordion();

 $( function() {
   var state = true;
   $( "#button" ).on( "click", function() {
     if ( state ) {
       $( "#effect" ).animate({
         backgroundColor: "#d6d4d8",
         color: "#fff",
         width: 300
       }, 1000 );
     } else {
       $( "#effect" ).animate({
         backgroundColor: "#fff",
         color: "#000",
         width: 400
       }, 1000 );
     }
     state = !state;
   });
 } );
