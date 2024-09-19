const download = () => {
    
};

const  filter = (param = null) => {
    const menu = document.getElementById(`menu-${param || 'all'}`);

    [...document.getElementsByClassName('menu')].forEach((item) => {
        item.classList.remove('border-b-4', 'border-purple-400', 'pb-2');
    });

    [...document.getElementsByClassName('media')].forEach((item) => {
        item.classList.add('hidden');
    });

    [...document.getElementsByClassName(`media-${param}`)].forEach((item) => {
        item.classList.remove('hidden');
    });

    if (param === 'all') {
        [...document.getElementsByClassName('media')].forEach((item) => {
            item.classList.remove('hidden');
        });
    }

    menu.classList.add('border-b-4', 'border-purple-400', 'pb-2');
}

const detail = (name) => {
    const drawer = document.getElementById('drawer');
    const main = document.getElementsByTagName('main');
    const title = document.getElementById('project-name');
    const nameContainer = document.getElementById('name');
    nameContainer.value = name

    initSwipper();
    hide();

    setTimeout(() => {
        title.innerHTML = '';
        title.innerHTML = `${name.charAt(0).toUpperCase()}${name.slice(1)}`;
        
        drawer.classList.remove('translate-x-full')
        drawer.classList.add('translate-x-0')
        
        main[0].classList.remove('overflow-y-scroll');
        main[0].classList.add('contrast-50', 'overflow-y-hidden');

    }, 400);

    setInterval(() => swipper('right'), 5000);
}

const hide = () => {
    const drawer = document.getElementById('drawer');
    const main = document.getElementsByTagName('main');

    drawer.classList.add('translate-x-full')
    drawer.classList.remove('translate-x-0')
 
    main[0].classList.remove('contrast-50', 'overflow-y-hidden');
    main[0].classList.add('overflow-y-scroll');
}

const initSwipper = () => {
    const images = [];
    const name = document.getElementById('name');
    const container = document.getElementById('swipper');
    const directory = `./assets/project/${name.value}`

    container.innerHTML = '';
    Array(10).fill().map((_, index) => images.push(new Image()));

    images.forEach((img, index) => {
        img.src = `${directory}/${index + 1}.png`;
        img.onload = () => {
            container.insertAdjacentHTML(`beforeend`, `
                <img src="${directory}/${index + 1}.png" class="w-full h-full object-cover hover:scale-125 cursor-zoom-in" id="swipper-image-${index}" />
            `);
        }

        img.onerror = () => {
            console.clear();
        }
    })
}

const swipper = (direction = null) => {
    const container = document.getElementById('swipper');
    const currentIndex = document.getElementById('image-index');

    const current = parseInt(currentIndex.value) + 1
    
    if (direction === 'right') {
        if (current < container.children.length) {
            currentIndex.value = parseInt(currentIndex.value, 10) + 1;
        } else {
            currentIndex.value = 0;
        }
    }

    if (direction === 'left') {
        if (current > 1) {
            currentIndex.value = parseInt(currentIndex.value, 10) - 1;
        } else {
            currentIndex.value = container.children.length - 1;
        }
    }

    const translate = [...container.classList].find((item) => item.includes('translate-x'));
    if (translate) container.classList.remove(translate)
    
    container.classList.add(`translate-x-[-${currentIndex.value * 100}%]`)
}