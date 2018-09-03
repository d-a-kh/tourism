const content = {
    "nav-menu" : [
            {
                to: './index.html',
                text: 'главная'
            },
            {
                to: './news.html',
                text: 'новости'
            },
            {
                to: './about.html',
                text: 'о нас'
            },
            {
                to: './remember.html',
                text: 'памятка туриста'
            },
            {
                to: './select-tour.html',
                text: 'подбор тура'
            },
            {
                to: './hot-tour.html',
                text: 'горящие туры'
            },
            {
                to: './contacts.html',
                text: 'контакты'
            },
        ]
}

const elements = {};

function setElements (obj) {
    obj.navMenu = document.querySelectorAll('.nav-menu');

}

function setConent () {
    setElements(elements);
    Array.from(elements.navMenu, 
        el => {
            console.log(el);
            Array.from(el.querySelectorAll('a'),
            (e, i) => {
                e.setAttribute('src', content["nav-menu"][i].to);
                e.textContent = content["nav-menu"][i].text;
            }
        )}
    );

}


document.addEventListener("DOMContentLoaded", setConent);