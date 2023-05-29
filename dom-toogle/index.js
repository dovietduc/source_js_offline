function Toogle(options) {
    const container = options.container;
    const containerSelecter = document.querySelector('.' + container);
    
    // 1. save variable can access in function (querySelector, querySelectorAll)
    const buttonSelector = containerSelecter.querySelector('.btn');
    const divSelectorToogle = containerSelecter.querySelector('.mystyle');


    function handleClickToogle() {
        divSelectorToogle.classList.toggle('hide');
    }
    // 2. add event
    function initEvent() {
        buttonSelector.addEventListener('click', handleClickToogle);
    }

    initEvent();

}

let instanceToogle = new Toogle(
    {container: 'container_toogle'}
);

let instanceToogle2 = new Toogle(
    {container: 'container_toogle_2'}
);
