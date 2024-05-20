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
            <button class="CartBtn">
  <span class="IconContainer"> 
    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512" fill="rgb(17, 17, 17)" class="cart"><path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"></path></svg>
  </span>
  <p class="text">Buy</p>
</button>
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


let buy_btns = document.querySelector('.CartBtn')

buy_btns.forEach(function(button){
        button.addEventlistener("click",showPizzaBuy)
})