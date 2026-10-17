const productDesDiv = document.querySelector('#product-div')
const product = JSON.parse(localStorage.getItem("product"))
console.log(product)
function showOneProduct(product){
    console.log(product)

    productDesDiv.textContent = ""

    const itemDiv = document.createElement('div')
    itemDiv.className = "single-product"

    const image = document.createElement('img')
    image.src = product.images[0]

    const detailsDiv = document.createElement('div')
    detailsDiv.className = "details-div"

    const name = document.createElement('h2')
    name.textContent = product.title

    const description = document.createElement('p')
    description.textContent = product.description

    const price = document.createElement('h3')
    price.textContent = `$${product.price}`

    const rating = document.createElement('p')
    rating.textContent = `Rating: ${product.rating} / 5`

    const stock = document.createElement('p')
    stock.textContent = `Stock available: ${product.stock}`

    const backBtn = document.createElement('button')
    backBtn.textContent = "Back to products"

    const cartBtn = document.createElement('button')
    cartBtn.textContent = "Add to cart"

    backBtn.addEventListener('click', ()=>{
        showProduct(allProducts)
    })

    cartBtn.addEventListener('click', ()=>{
        cart.push(product)
        cartBtn.textContent = `Added to cart (${cart.length})`
    })

    detailsDiv.append(name, description, price, rating, stock, cartBtn)
    itemDiv.append(image, detailsDiv, backBtn)
    productDesDiv.append(itemDiv)
}

showOneProduct(product)