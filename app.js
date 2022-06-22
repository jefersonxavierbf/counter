//set initial count
let count = 0;

// select value and buttons
const value = document.querySelector('#value');
const btns = Array.from(document.querySelectorAll('.btn'));

btns.map(btn => {
    const counterSettings = (event) => {
        const clickedTarget = event.currentTarget.classList;
        if(clickedTarget.contains('decrease')) {
            count--;
        } else if(clickedTarget.contains('increase')) {
            count++;
        } else {
            count = 0;
        }
        if(count > 0) {
            value.style.color = 'green';
        }
        if(count < 0) {
            value.style.color = 'red'
        }
        if(count === 0) {
            value.style.color = 'hsl(209, 61%, 16%)';
        }
        value.textContent = count;
    }

    btn.addEventListener('click', counterSettings);

});