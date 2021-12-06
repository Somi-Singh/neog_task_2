var readlinesync=require("readline-sync");
var user=readlinesync.question("Please enter your name")
console.log("***********HEY",user,"🙂","WELCOME TO MY END GAME***********")
let question_list=["What is my name?😇","What is my age? 😇","Where am i living currently?😇","What is my favourit place😇?","Who is my favorite actor?😇","Which is my hobies😇?","Which is my favorite Game😇","Which is my favourit song?😇"]
console.log("-: THIS IS YOUR QUESTION :-")
answer_list=["Somi","22","Bangalore","Paris","My father","Travelling","Chess","Dilbar"]
option_list=[["Somi","Samriddhi","Muskan","Ruchi"],["20","21","22","23"],["Lucknow","Delhi","Bangalore","Punjab"],["Amerika","paris","Agra","Newyark"],["Dhawan","Salman","Siddharth","My father"],["Singing","Travelling","Walking","eating"],["Ludo","Chess","Carrom","Pubg"],["Dilbar","Shakira","Dhoom","chaana song"]]
let score=0
let index=0
let final_score=8
while (index<question_list.length){
console.log(index+1,question_list[index])

let j=0
while (j<option_list[index].length){
    console.log(j+1,option_list[index][j]) 
    j=j+1
}
var input=require("readline-sync")
let answer=input.question("Enter the correct answer:-")
    if (answer===answer_list[index]){
        console.log("congrats!🥳 your answer is correct")
        score+=1
        console.log("Your Score",score)
        console.log("Highest Score",final_score)
        console.log("**************")
    }
    else{
        console.log("oops! your answer is wrongv😞")
        console.log("Your Score",score)
        console.log("Highest Score",final_score)
        console.log("**************")
    }
index++
}
if (final_score===score){
    console.log("**** WOW YOU ARE THE WINNER OF THIS GAME 🥳🥳🥳****")
}
else{
    console.log("****SORRY YOU ARE THE LOOSER OF THIS GAME😞****")
}
console.log("**** THANKS FOR PLAYING THIS GAME😘😘 ****")