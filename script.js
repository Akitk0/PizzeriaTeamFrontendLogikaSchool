let payPage = document.querySelector('.pay_page');
payPage.style.display = 'none';
let cards = document.querySelector('.cards');
let pizzaPay;
var id;
let products = [
    {
        name: 'Mocarela',
        image: 'img/mocarela.jpg',
        description: 'Some description about Mocarela.',
        id: 1
    },
    {
        name: 'Bavarian',
        image: 'img/bavarian.jpg',
        description: 'Some description about Bavarian.',
        id: 2

    },
    {
        name: 'Sicilian',
        image: 'img/sicilian.jpg',
        description: 'Some description about Sicilian.',
        id: 3

    },
    {
        name: 'Italiana',
        image: 'img/Italiana.jpg',
        description: 'Some description about Italiana.',
        id: 4

    },
    {
        name: 'Hawaiian',
        image: 'img/Hawaiian.jpg',
        description: 'Some description about Hawaiian.',
        id: 5

    },
    {
        name: 'Quattro formaggi',
        image: 'img/Quattro_formaggi.jpg',
        description: 'Some description about Quattro formaggi.',
        id: 6

    },
    {
        name: 'Pepperoni',
        image: 'img/Pepperoni.jpg',
        description: 'Some description about Pepperoni.',
        id: 7

    },
    {
        name: 'Caprice',
        image: 'img/Caprice.jpg',
        description: 'Some description about Caprice.',
        id: 8

    },

];


function createProductCard(product) {
    let cardDiv = document.createElement('div');
    cardDiv.classList.add('card');
    cardDiv.innerHTML = `
            <h3>${product.name}</h3>
            <img src="${product.image}" >
            <p>${product.description}</p>
            <button class="buy_btn">Buy</button>
        `;
    return cardDiv;
}



let cardsContainer = document.querySelector('.cards');
function showPizzaBuy(){
    cards.style.display = 'none'
    payPage.style.display = 'flex'
    payPage.innerHTML(`
        <div class="buy_sreen">
            <input type="text"> write your Name<br>
            <input type="text"> write your adresss <br>
            <input type="email" value="write your email"> 
            <input type="button" value="Request for pizaza">
        </div>
    `)
    if(createProductCard = products.findIndex == 1){
    return products.findIndex = 1
    }
    else if(createProductCard = products.findIndex == 2){
        return products.findIndex = 2
    }
    else if(createProductCard = products.findIndex == 3){
        return products.findIndex = 3
    }
    else if(createProductCard = products.findIndex == 4){
        return products.findIndex = 4
    }
    else if(createProductCard = products.findIndex == 5){
        return products.findIndex = 5
    }
    else if(createProductCard = products.findIndex == 6){
        return products.findIndex = 6
    }
    else if(createProductCard = products.findIndex == 7){
        return products.findIndex = 7
    }
    else if(createProductCard = products.findIndex == 8){
        return products.findIndex = 8
    }
}
products.forEach(product => {
    let card = createProductCard(product);
    cardsContainer.appendChild(card);
});
