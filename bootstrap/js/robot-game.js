

$(function () {
    $('#myTab a:first').tab('show');
    
     $(function() {
        $(window).keypress(function(e) {
            var key = e.which;
            //alert(key);
            // 0 = 48
            // 1 = 49
            // 2 = 50
            // 3 = 51
            // 4 = 52
            // 5 = 53
            // 6 = 54
            // 7 = 55
            // 8 = 56
            // 9 = 57
              
            isCurrentRobotComplete();
            
            if(key == 51){
              useHead("#head-1");
            }
            
            if(key == 55){
              useBody("#body-1");
            }
          
            if(key == 55){
              useArms();
            }
          
            if(key == 53){
              useLegs();
            }
            
            if(key == 57){
              useHead("#head-2");
            }
        
            if(key == 56){
              useBody("#body-2");
              
            }
        });
     });
})


function useHead(whichHead){
  //alert("cheese");
  //$( "#head-1 .item" ).clone().appendTo( "#current-robot-head" );

  $( "#current-robot-head .item" ).replaceWith( $( whichHead + " .item" ) );
}

function useBody(whichBody){
 //alert("cheese"); 
  
  $( "#current-robot-body .item" ).replaceWith( $( whichBody + " .item" ) );
}
  


function useArms(){
  
  $( "#current-robot-arms .item" ).replaceWith( $( "#arms-1 .item" ) );
}

function useLegs(){
  
  $( "#current-robot-legs .item" ).replaceWith( $( "#legs-1 .item" ) );
}




function isCurrentRobotComplete(){
  
  //alert("death has happened here");
}


