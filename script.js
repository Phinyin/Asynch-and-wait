console.log("fiyin")
console.log("farouq")
const main = document.querySelector('main')


let allProducts = []
let cart = []



async function getProducts() {
    try{
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json()
        console.log(data)
        allProducts = data.products
        showProduct(allProducts)

    }catch(error){
        console.log(error)
    }
    
    
}

getProducts()



function showProduct(products) {
    main.textContent = ""
    products.map((product) =>{
        const itemDiv = document.createElement('div')
        itemDiv.className = "item-div"
        const image = document.createElement('img')
        const name = document.createElement('h3')
        const price = document.createElement('p')
        const rating = document.createElement('p')
        const bottomDiv = document.createElement("div")
        const priceDiv = document.createElement("div")
        priceDiv.className = "price-div"
        bottomDiv.classList = "bottom-div"
        price.className = "price"
        image.src = product.images[0]
        name.textContent = product.brand
        price.textContent = `$${product.price}`
        rating.textContent = product.rating

        priceDiv.append(price, rating)
        bottomDiv.append(name,priceDiv)
        itemDiv.append(image, bottomDiv)
        main.append(itemDiv)


        //assignment

        itemDiv.addEventListener('click', ()=>{
            // showOneProduct(product)
            localStorage.setItem("product", JSON.stringify(product))
            window.location.href ="/product-des.html"
        })
    })
}

