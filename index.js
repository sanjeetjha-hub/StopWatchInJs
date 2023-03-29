class Timer{
    constructor(durationInput, startButton, pauseButton){
        this.durationInput = durationInput;
        this.startButton = startButton;
        this.pauseButton = pauseButton;

        this.durationInput.value = '30';
        this.startButton.addEventListener('click',this.start);
        this.pauseButton.addEventListener('click',this.pause);
    }
    start = () =>
    {
        this.tick();
        this.intervalId = setInterval(() => {       
        this.tick();
        }, 1000); 
    }

    pause = () => {
        clearInterval(this.intervalId);
    }

    tick = () => {
        if(this.timeRemaining <= 0)
        {
            clearInterval(this.intervalId);            
        }
        else
        {
            this.timeRemaining = this.timeRemaining - 1;
        }               
    }

    get timeRemaining(){
        return parseFloat(this.durationInput.value);
    }

    set timeRemaining(time){
        this.durationInput.value = time;
    }
}


const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');

const timer = new Timer(durationInput,startButton,pauseButton);
