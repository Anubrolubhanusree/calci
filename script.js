let display=document.getElementById('display');
let buttons=Array.from(document.getElementsByClassName('button'));
buttons.map(button=>{
    button.addEventListener('click',(e)=>{
        switch(e.target.innerText){
        case 'C':
        display.innertext=' ';
        break;
        case '←':
            if(display.innerText){
                display.innerText=display.innertext.slice(0,-1);

            }
            break;
            case '=':
                display.innerText=eval(display.innerText);
                break;
                default:
                    display.innerText+=e.target.innerText;
        }
    });
});