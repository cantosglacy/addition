  var playing = false;
  var score;
var timeremaining;
  var action;
  var x;
  var y;
var correctAnswer;


  
  document.getElementById("startReset").onclick = function(){
if(playing == true){
    location.reload();
    

}else{
    playing = true;
    //set score to 0
    score = 0;
    document.getElementById("scorevalue").innerHTML = score;
    //show timeremaining
    show("timeRemain");
    timeremaining = 60;
    document.getElementById("timeRemainingValue").innerHTML = timeremaining
    document.getElementById("startReset").innerHTML ="Reset Game";
    startCountdown();
    Question();
}
}

//clicking on the boxes

for(i=1; i<5; i++){
    document.getElementById("box"+i).onclick = function(){
        if(playing == true){
            //correct Answer
            if(this.innerHTML == correctAnswer){
                score ++;
                document.getElementById("scorevalue").innerHTML = score;
                show("correct");
                hide("wrong");
    
                setTimeout(function(){
                    hide("correct");
                }, 2000)
    
                Question();
                //document.getElementById("box1")=style.
            }else{
                show("wrong");
                hide("correct");
    
                setTimeout(function(){
                    hide("wrong");
    
    
    
                },2000)
            }
        }
    }
    
    
}


function startCountdown(){
    action = setInterval(function(){
timeremaining -=1;
document.getElementById("timeRemainingValue").innerHTML = timeremaining;

if(timeremaining ==0){
    stopCountdown();
show("gameover");
document.getElementById("gameover").innerHTML = "<p>Game over!</p><p>Your score is "+score+"</p>";
document.getElementById("startReset").innerHTML = "Start Game";
hide('wrong');
hide("correct");
hide("timeRemain")
}

    }, 1000);

}




function Question(){
    //question
   var x = 1 + Math.round(Math.random() * 9);
   var y= 1 + Math.round(Math.random() * 9);
   correctAnswer = x+y;
   document.getElementById("question").innerHTML =`${x} + ${y}`;
    var answerPosition = 1 + Math.round(3*Math.random());
    document.getElementById("box"+answerPosition).innerHTML = correctAnswer;
    var answer = [correctAnswer];

   
    for(i=1; i<5; i++){
      if (i != answerPosition){
        var wrongAnswer;
        do{  wrongAnswer = (1 + Math.round(Math.random() * 9))*(1 + Math.round(Math.random() * 9));

        }while(answer.indexOf(wrongAnswer) > -1)
      
        document.getElementById("box"+i).innerHTML = wrongAnswer;
        answer.push(wrongAnswer);

      }
    }
  


}







function stopCountdown(){
    clearInterval(action);
}

function show(id){
document.getElementById(id).style.display = "block";
}

 
function hide(id){
    document.getElementById(id).style.display = "none";
    }

     
  //if we are playing
        //reload page
        
    //if we are not playing
        //set score to 0
        //show countdown box
        //reduce time by 1 sec in loops
            //timeleft?
                //yes -> continue
                //no -> gameover
        //change button to reset
        //generate new Q&A
        
//if we click on answer box
    //if we are playing
        //correct?
            //yes
                //increase score
                //show correct box for 1 sec
                //generte new Q&A
            //no
                //show try again box for 1 sec