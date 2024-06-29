document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    const buttons = Array.from(document.getElementsByClassName('btn'));

    buttons.map(button => {
        button.addEventListener('click', (e) => {
            switch(e.target.id) {
                case 'clear':
                    display.innerText = '0';
                    break;
                case 'equals':
                    try {
                        display.innerText = eval(display.innerText);
                    } catch {
                        display.innerText = 'Error';
                    }
                    break;
                default:
                    if(display.innerText === '0') {
                        display.innerText = e.target.innerText;
                    } else {
                        display.innerText += e.target.innerText;
                    }
            }
        });
    });
});
