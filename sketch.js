var ball;
var database;
var position;
function setup(){
    
    createCanvas(500,500);
    database=firebase.database();
    console.log(database);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    var ballPosition=database.ref('ball/position');
    ballPosition.on('value', readData);
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}
function readData(data){
position=data.val();
ball.x=position.X
ball.y=position.Y
}

function changePosition(x,y){
    database.ref('ball/position').set({
        X:position.X+x,
        Y:position.Y+y,
    })


}
