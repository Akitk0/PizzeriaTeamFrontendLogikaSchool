let payPage = document.querySelector('.pay_page');
payPage.style.display = 'none';
let products = [
    {
        name: 'Mozzarela',
        image: 'img/mocarela.jpg',
        description: 'San Marzano tomatoe,Fresh mozzarella cheese,Basil leaves',
    },
    {
        name: 'Bavarian',
        image: 'img/bavarian.jpg',
        description: 'bechamel sauce, mozzarella cheese, ham, Bavarian sausages, bacon'
    },
    {
        name: 'Sicilian',
        image: 'img/sicilian.jpg',
        description: 'tomato sauce, mozzarella cheese, ham',
    },
    {
        name: 'Italiana',
        image: 'img/Italiana.jpg',
        description: 'bechamel sauce, mozzarella cheese, chicken fillet, corn, pineapple, parmesan',
    },
    {
        name: 'Hawaiian',
        image: 'img/Hawaiian.jpg',
        description: 'sweet and sour sauce, mozzarella cheese, pepperoni, parmesan, arugula',
    },
    {
        name: 'Quattro formaggi',
        image: 'img/Quattro_formaggi.jpg',
        description: 'tomato sauce, mozzarella cheese, salami sausage',
    },
    {
        name: 'Pepperoni',
        image: 'img/Pepperoni.jpg',
        description: 'sweet and sour sauce, mozzarella cheese, pepperoni, parmesan, arugula',
    },
    {
        name: 'Caprice',
        image: 'img/Caprice.jpg',
        description: 'tomato sauce, mozzarella cheese, ham, fresh mushrooms',
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