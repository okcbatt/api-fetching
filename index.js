// https://dummyjson.com/products
// https://dummyjson.com/posts

async function fetchProducts() {
  try {
    let response = await fetch("https://dummyjson.com/products");
    let translatedProducts = await response.json();
    let actualProducts = translatedProducts.products;
    return actualProducts;
  } catch (error) {
    console.log(error);
  }
}

async function renderData() {
  let productsContainer = document.getElementById("products-container");
  let myProduct = await fetchProducts();
  for (let i = 0; i < myProduct.length; i++) {
    let myCurrProduct = myProduct[i];
    let productSection = document.createElement("p");

    let titleElement = document.createElement("h2");
    titleElement.innerText = myCurrProduct.title;
    productSection.appendChild(titleElement);

    let descriptionElement = document.createElement("p");
    descriptionElement.innerText = myCurrProduct.description;
    productSection.appendChild(descriptionElement);

    
    let priceElement = document.createElement("p");
    priceElement.innerText = `$${myCurrProduct.price}`;
    productSection.appendChild(priceElement);
    productSection.style.border = "1px solid black"
    productSection.style.padding = "1rem"
    
    let checkbox = document.createElement("input")
    checkbox.type = "checkbox"
    checkbox.id = `checkbox-${i}`
    let label = document.createElement("label")
    label.htmlFor = `checkbox-${i}`
    label.innerText = "Select"
    productSection.appendChild(checkbox)
    productSection.appendChild(label)
    
    productsContainer.appendChild(productSection);
    productsContainer.style.border = "1px solid black"
  }
}

renderData();

async function fetchPosts() {
    try {
      let response = await fetch("https://dummyjson.com/posts");
      let translatedPosts = await response.json();
      let actualPosts = translatedPosts.posts;
      return actualPosts;
    } catch (error) {
      console.log(error);
    }
  }

 async function renderPosts(){
    let postsContainer = document.getElementById("posts-container")
    let myPost = await fetchPosts()
    for (let i = 0; i < myPost.length; i++){
        let myCurrPost = myPost[i]
        let postSection = document.createElement("p")

        let postTitleEle = document.createElement("p")
        postTitleEle.innerText = myCurrPost.title
        postSection.appendChild(postTitleEle)

        let postBodyEle = document.createElement("p")
        postBodyEle.innerText = myCurrPost.body
        postSection.appendChild(postBodyEle)
        postSection.style.border = "1px solid black"
        postSection.style.padding = "1rem"

        postsContainer.appendChild(postSection)
        postsContainer.style.border = "1px solid black"
    }
 } 

 renderPosts()

