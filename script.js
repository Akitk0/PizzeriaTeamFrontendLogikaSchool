let payPage = document.querySelector('.pay_page');
payPage.style.display = 'none';
let products = [
    {
        name: 'Mocarela',
        image: 'img/mocarela.jpg',
        description: 'Some description about Mocarela.',
    },
    {
        name: 'Bavarian',
        image: 'img/bavarian.jpg',
        description: 'Some description about Bavarian.',
    },
    {
        name: 'Sicilian',
        image: 'img/sicilian.jpg',
        description: 'Some description about Sicilian.',
    },
    {
        name: 'Italiana',
        image: 'img/Italiana.jpg',
        description: 'Some description about Italiana.',
    },
    {
        name: 'Hawaiian',
        image: 'img/Hawaiian.jpg',
        description: 'Some description about Hawaiian.',
    },
    {
        name: 'Quattro formaggi',
        image: 'img/Quattro_formaggi.jpg',
        description: 'Some description about Quattro formaggi.',
    },
    {
        name: 'Pepperoni',
        image: 'img/Pepperoni.jpg',
        description: 'Some description about Pepperoni.',
    },
    {
        name: 'Caprice',
        image: 'img/Caprice.jpg',
        description: 'Some description about Caprice.',
    },

];


function createProductCard(product) {
    let cardDiv = document.createElement('div');
    cardDiv.classList.add('card');
    cardDiv.innerHTML = `
            <h3>${product.name}</h3>
            <img src="${product.image}" >
            <p>${product.description}</p>
        `;
    return cardDiv;
}


let cardsContainer = document.querySelector('.cards');


products.forEach(product => {
    let card = createProductCard(product);
    cardsContainer.appendChild(card);
});