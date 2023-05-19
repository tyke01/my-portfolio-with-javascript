const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controlls');//parent
const sectBtn = document.querySelectorAll('.control');
const allSelections = document.querySelectorAll('.main-content')

function pageTransitions() {
    //button clock active class
    for (let i = 0; i < sectBtn.length; i++) {
        sectBtn[i].addEventListener('click', function(event){
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
            // this.className += 'active-btn';(very very stubborn to use had to ask chatGPT for the answer below
            event.target.classList.add('active-btn');
        })
    }
    //sections active class
    allSelections.addEventListener('click', function(e){
        console.log(e.target);
    })
}
pageTransitions();

