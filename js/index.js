class ModalWindow{
    constructor(selectorWindow, selectorExitButton){
        this.modalWindow = document.querySelector(selectorWindow);
        //this.html = document.querySelector('body');
    }

    show(){
        this.modalWindow.style.display = 'flex';
        //this.html.style.overflow = 'hidden';
    }

    hidden(){
        this.modalWindow.style.display = 'none';
        //this.html.style.overflow = 'auto';
    }

    submit(){
        console.log('submit');
    }
}


const callBackWindow = new ModalWindow('.call', '.call_button');
const callBackExitButton = document.querySelector('.call_button');
const callBackCallButton = document.querySelector('.back_call');
const submitButton = document.querySelector('.modal_submit');


callBackExitButton.addEventListener(
    'click', 
    () => {
        callBackWindow.modalWindow.style['animation-name'] = 'opacityDown';
        const endAnimate = function(){
            callBackWindow.hidden();
            callBackWindow.modalWindow.style.opacity = '1';            
            callBackWindow.modalWindow.removeEventListener('animationend', endAnimate, false)
            callBackWindow.modalWindow.style['animation-name'] = 'opacityUp';
        } 
        
        callBackWindow.modalWindow.addEventListener('animationend', endAnimate)
       

        
    });

callBackCallButton.addEventListener(
    'click', 
    () => {callBackWindow.show()});

submitButton.addEventListener(
    'click', 
    () => {
        callBackWindow.submit();
        callBackWindow.hidden();
    }
)


