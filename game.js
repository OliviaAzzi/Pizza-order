name1=localStorage.getItem("name1");
name2=localStorage.getItem("name2");
score1=0;
score2=0;
document.getElementById("player1_name").innerHTML=name1+"-";
document.getElementById("player2_name").innerHTML=name2+"-";
document.getElementById("player1_score").innerHTML=score1;
document.getElementById("player2_score").innerHTML=score2;
document.getElementById("question_turn").innerHTML="question turn-"+name1;
document.getElementById("answer_turn").innerHTML="answer turn-"+name2;
function function2(){
    var word_input=document.getElementById("word").value;
    final_word=word_input.toLowerCase();
    alpha1=final_word.charAt(1);
    var vordlength=Math.floor(final_word.length/2);
    alpha2=final_word.charAt(vordlength);
    var last_word=final_word.length-1;
    alpha3=final_word.charAt(last_word);
    replace1=final_word.replace(alpha1,"_");
    replace2=replace1.replace(alpha2,"_");
    replace3=replace2.replace(alpha3,"_");
    question_statement="<h4 id='question'>question-"+replace3+"</h4>";
    answer_statement="<br> answer- <input id='answer'>";
    button_statement="<br><br><button id='check_btn'>check</button>";
    row=question_statement+answer_statement+button_statement;
    document.getElementById("output").innerHTML=row;
    document.getElementById("word").value="";
}