$(document).ready(function(){

    var headclix =0 ,eyeclix =0,noseclix =0,mouthclix =0;
    lightning_one(4000);
    lightning_one(5000);
    lightning_one(7000);

    $("#head").click(function(){
        if(headclix <9){
            $(this).animate({left:"-=367px"},500);
            headclix +=1;
            //alert(headclix);

        }

        else{
            $(this).animate({left:"0px"},500);
            headclix=0;
        }

    });
	

    $("#eyes").click(function(){
        if(eyeclix <9){
            $(this).animate({left:"-=367px"},500);
            eyeclix +=1;
            //alert(headclix);

        }

        else{
            $(this).animate({left:"0px"},500);
            eyeclix=0;
        }

    });
	
    $("#nose").click(function(){
        if(noseclix <9){
            $(this).animate({left:"-=367px"},500);
            noseclix +=1;
            //alert(headclix);

        }

        else{
            $(this).animate({left:"0px"},500);
            noseclix=0;
        }

    });
	
    $("#mouth").click(function(){
        if(mouthclix <9){
            $(this).animate({left:"-=367px"},500);
            mouthclix +=1;
            //alert(headclix);

        }

        else{
            $(this).animate({left:"0px"},500);
            mouthclix=0;
        }

    });  // end of mouth
	
});//end doc.onready function


function lightning_one(t){
    $("#container #lightning1").fadeIn(250).fadeOut(250);
    setTimeout("lightning_one()",t);
};

function lightning_two(t){
    $("#container #lightning2").fadeIn("fast").fadeOut("fast");
    setTimeout("lightning_two()",t);
};

function lightning_three(t){
    $("#container #lightning3").fadeIn("fast").fadeOut("fast");
    setTimeout("lightning_three()",t);
}; 