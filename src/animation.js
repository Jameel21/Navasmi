// window.onload = function(){
//     setTimeout(()=>function(){
//       document.getElementById('homeBackground').classList.remove('elementClass');
//        setTimeout(()=>function(){
//         document.getElementById('textshow').classList.remove('hidecontent');
//         document.getElementById('textshow').classList.add('showcontent') ;
//         setTimeout(()=>function(){
              
//         },1500)
//        },2000)
//     },1000)
    
//   }
// $(document).ready(function(){ 
//     $('#homeBackground').animate({ width: '1100' }, 4000); });

$(document).ready(function(){
     $('#textshow').hide().delay(2000).fadeIn('fast'); });

     $(document).ready(function(){
         $("#homeBackground").css('transform', 'scale(1.5)').animate({}, { 
            duration: 2000, step: function(now, fx) { if (fx.prop === 'transform') {
                 let scaleValue = 1.1 - (0.1 * now); $(this).css('transform', `scale(${scaleValue})`); } },
                  complete: function() {
         $(this).css('transform', 'scale(0.9)'); // Final scale value for zoom out effect 
         } }); });
