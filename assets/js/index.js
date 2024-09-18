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
