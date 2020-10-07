const {body} = document;

function setPervBackground() {
    const pervBackground = localStorage.getItem('background');
    if (pervBackground) {
        body.classList.add(pervBackground);
    }
}

function changeBackground(number) {

    // check if background already showing
    let previousBackground;
    if (body.className) {
        previousBackground = body.className;
    }
    // reset css class for body and current number
    body.className = '';
    // set the current background as localstorage
    localStorage.setItem('background', previousBackground ? '' : `background-${number}`);
    // if background already on, turn off, else turn on background
    switch (number) {
        case '1':
            // the only way we can use ternary operator here is  () and false is mean to do nothing
            return (previousBackground === 'background-1' ? false : body.classList.add('background-1'));
        case '2':
            return (previousBackground === 'background-2' ? false : body.classList.add('background-2'));
        case '3':
            return (previousBackground === 'background-3' ? false : body.classList.add('background-3'));
        default:
            break;
    }
}

// on load
setPervBackground();