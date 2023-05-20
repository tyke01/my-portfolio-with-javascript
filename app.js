const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controlls');//parent
const sectBtn = document.querySelectorAll('.control');
const allSelections = document.querySelectorAll('.main-content')

function pageTransitions() {
    //button clock active class
    for (let i = 0; i < sectBtn.length; i++) {
        sectBtn[i].addEventListener('click', function (event) {
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
            // this.className += 'active-btn';(very very stubborn to use had to ask chatGPT for the answer below
            //className replaces the whole class, classList can set attributes to a specific class.
            event.target.classList.add('active-btn');
        })
    }

    //sections active class
    allSelections.forEach(function (element) {
        element.addEventListener('click', function (event) {
            //console.log(event.target);
            /*addEventListener can only be applied to individual elements.Not nodelists*/
            const id = event.target.dataset.id;
            if (id) {
                //reamove selected from the other buttons
                sectBtn.forEach(function (btn) {
                    btn.classList.remove('active');
                })
                event.target.classList.add('active');

                //hide the other sections
                sections.forEach(function (section) {
                    section.classList.remove('active');
                })

                const element = document.getElementById(id);
                element.classList.add('active');
            }
        })
    })

}
pageTransitions();

