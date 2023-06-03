const parent = document.querySelector('.parent_accordion');
const buttonAll = document.querySelectorAll('.accordion');
const panelAll = document.querySelectorAll('.panel');

function handleToogle(event) {
    const clicked = event.target;

    if(clicked.classList.contains('accordion')) {

        buttonAll.forEach(function(elementBtn){
            elementBtn.classList.remove('active');
        });
        // active element click
        if(clicked.classList.contains('active')) {
            clicked.classList.remove('active');
        } else {
            clicked.classList.add('active');
        }
        

        panelAll.forEach(function(panel){
            panel.classList.remove('active');
        });
        const panel = clicked.closest('div').querySelector('.panel');
        panel.classList.toggle('active');

    }
}

parent.addEventListener("click", handleToogle);