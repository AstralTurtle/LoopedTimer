let timer;
let time;
let frames = 0;
let state = 0;
function preload(){
    // put preload code here
    alarm = loadSound('alarm.mp3');
}

function setup() {
    createCanvas(300, 300);
    background(0);
    frameRate(30);
    fill(255)
    input = createInput();
    input.position(20, 65);
    button = createButton('start');
    button.position(input.x + input.width, 65);
    loopBox = createCheckbox('loop', false);
    
    loopBox.position(input.x + input.width + 60,  30);
}


function draw() {
    // put drawing code here
    button.mousePressed(startTimer);
    
    background(0);
    textSize(16)
    text('loop?', input.x + input.width+10, 35);
    textSize(32);
    text('Enter Time', 20, 40);
    if (state == 1){
    text(time, 20, 100);
        if (frames >= 30) {
            time--;
            frames = 0;
        }
        if (time <= 0) {
            alarm.play();
            if (loopBox.checked()) {
                startTimer();
            }
            else {
                state = 0;
            }
        }

    frames++;
    console.log([time, frames])
    }
}

function startTimer() {
    timer = input.value();
    time = timer;
    state = 1;
}
