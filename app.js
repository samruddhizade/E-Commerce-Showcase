document.addEventListener('DOMContentLoaded', () => {
    const productList = document.getElementById('product-list');

    // Sample product data (you would fetch this from your backend)
    const products = [
        {
            name: 'Product 1',
            description: 'IdeaPad Gaming 3 Gen 6, 39.62cms - AMD R5 (Shadow Black).',
            image: 'https://p1-ofp.static.pub//medias/23498737439_Gaming315ACH6_202104301141091689310298501.png',
            price: 48000.99,
        },
        {
            name: 'Product 2',
            description: 'vivo-v7-mobile-legends-siap-dirilis',
            image: 'https://th.bing.com/th/id/OIP.kZkvVuTi1XyaTMhzaCgeIQHaLO?rs=1&pid=ImgDetMain',
            price: 4900.99,
        },
        // Add more products as needed
    ];

    // Populate the product list
    products.forEach(product => {
        const productCard = createProductCard(product);
        productList.appendChild(productCard);
    });
});

function createProductCard(product) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    const image = document.createElement('img');
    image.src = product.image;
    image.alt = product.name;

    const title = document.createElement('h2');
    title.textContent = product.name;

    const description = document.createElement('p');
    description.textContent = product.description;

    const price = document.createElement('p');
    price.textContent = `$${product.price.toFixed(2)}`;

    productCard.appendChild(image);
    productCard.appendChild(title);
    productCard.appendChild(description);
    productCard.appendChild(price);

    return productCard;
}
