var player1_name=localStorage.getItem("player1_name");
var player2_name=localStorage.getItem("player2_name");
var player1_score=0;
var player2_score=0;
document.getElementById("player1_name").innerHTML=player1_name + " :";
document.getElementById("player2_name").innerHTML=player2_name + " :";
document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;
document.getElementById("player_question").innerHTML="Question turn-" + player1_name;
document.getElementById("player_answer").innerHTML="Answer turn-" + player2_name;
function send(){
    getWord=document.getElementById("Number").value;
    checkButton="<br><br><button onclick='check()' class='btn btn-info'>Check</button>";
    result=questionWord+inputBox+checkButton;
    document.getElementById("output").innerHTML=result;
    document.getElementById("Number").value="";
}
var questionTurn = "player1";
var answerTurn = "player2";
function check(){
    var getAnswer=document.getElementById("input_box").value;
    var answer = getAnswer.toLowerCase();
    if(answer== word){
        if(answerTurn=="player1"){
            player1_score=player1_score+2;
            document.getElementById("player1_score").innerHTML=player1_score;
        }
        else{
            player2_score=player2_score+2;
            document.getElementById("player2_score").innerHTML=player2_score;
        }
    }
    if(questionTurn=="player1"){
        questionTurn="player2";
        document.getElementById("player_question").innerHTML="Question Turn-"+player2_name;
    }
    else{
        questionTurn="player1";
        document.getElementById("player_question").innerHTML="Question Turn-"+player1_name;
    }
    if(answerTurn=="player1"){
        answerTurn="player2";
        document.getElementById("player_answer").innerHTML="Answer Turn-"+player2_name;
    }
    else{
        answerTurn="player1";
        document.getElementById("player_answer").innerHTML="Answer Turn-"+player1_name;
    }
    document.getElementById("output").innerHTML="";