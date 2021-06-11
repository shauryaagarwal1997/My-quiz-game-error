var canvas;
var gameState=0;
var database;
var question1;
var startQuiz;
var gameState=0;


function setup(){
    canvas=createCanvas(850,850);
    database=firebase.database();
}

function draw(){    

    if (gameState===0){
        background("orange");
        textSize(50);
        fill("green")
        text("My Quiz",330,400);

        startQuiz=createButton('Start Quiz');
        startQuiz.size(350,50);
        startQuiz.position(260,450);
    }
    startQuiz.mousePressed(()=>{
        
        gameState=1;
    })
    if(gameState===1){
        background("lightgreen");
        question1=new Question();
        question1.display();
        startQuiz.position(600,800);
    }
}