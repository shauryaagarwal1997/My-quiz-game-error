class Question{
    constructor(){
        this.title= createElement ('h1');
        this.input1= createInput ("        Contestant Name");
        this.input2= createInput ("           Correct option");
        this.button= createButton ('Submit');
        this.question= createElement ('h4');
        this.option1= createElement ('h4');
        this.option2= createElement ('h4');
        this.option3= createElement ('h4');
        this.option4= createElement ('h4');
    }
    display(){
        background("lightgreen")
        this.title.html("Quiz Game");
        this.title.position(300,30);
        this.question.html("Question: What is the name of the largest moon of the solar system ?");
        this.question.position(110,100);
        this.option1.html("1: Callisto");
        this.option1.position(130,120);
        this.option2.html("1: Ganymede");
        this.option2.position(130,140);
        this.option3.html("1: Titan");
        this.option3.position(130,160);
        this.option4.html("1: Deimos");
        this.option4.position(130,180);
        
        this.input1.position(130,220);
        this.input2.position(330,220);
        this.button.position(530,240);

        this.button.mousePressed(()=>{
            this.title.hide();
            this.input1.hide();
            this.input2.hide();
            this.button.hide();
            contestant.name = this.input1.value();
            contestant.answer = this.input2.value();
            contestantCount+=1;
            contestant.index = contestantCount;
            contestant.update();
            contestant.updateCount(contestantCount);
          });
    }
    }
    
        