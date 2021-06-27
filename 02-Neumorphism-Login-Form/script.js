const select = selector => document.querySelector(selector),
    selectAll = selector => [].slice.call(document.querySelectorAll(selector)),
    switchCtn = select('#switch-ctn'),
    switchC1 = select('#switch-c1'),
    switchC2 = select('#switch-c2'),
    switchCircle = selectAll('.switch__circle'),
    switchBtn = selectAll('.switch-btn'),
    aContainer = select('#a-container'),
    bContainer = select('#b-container'),
    allButtons = selectAll('.submit'),
    getButtons = e => e.preventDefault(),
    toggleClass = (el = el, clase) => el.classList.toggle(clase),
    changeForm = () => {
        switchCtn.classList.add('is-gx');
        setTimeout(() => {
            switchCtn.classList.remove('is-gx');
        }, 1500);
        [switchCtn, ...switchCircle, switchC1, switchC2, aContainer, bContainer].forEach((el, index) => {
            switch (index) {
                case 0:
                case 1:
                case 2:
                    toggleClass(el, 'is-txr');
                    break;
                case 3:
                case 4:
                    toggleClass(el, 'is-hidden');
                    break;
                case 5:
                    toggleClass(el, 'is-txl');
                    break;
                default:
                    ['is-txl', 'is-z200'].forEach(clase => toggleClass(el, clase));
                    break;
            }
        });
    }

allButtons.forEach((element, index) => {
    element.addEventListener('click', getButtons)
    switchBtn[index].addEventListener('click', changeForm);
});

WebFont.load({
    google: {
        families: ['Montserrat']
    },
    active() {
        select('.main').classList.add('fadeIn');
    }
});