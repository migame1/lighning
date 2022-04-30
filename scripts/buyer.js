const search = document.getElementById("search")
const productList = document.querySelector('#produts-search')
const viewProduct = document.getElementById('produts-search')
const popWindow = document.getElementById('product-window')
const popWindowWright = document.querySelector('.container')


function renderDeitalis(doc) {
  
  let li = document.createElement('li')
  let name = document.createElement('span')
  let price = document.createElement('span')
  let descreption = document.createElement('span')
  let categorie = document.createElement('span')
  let subCategorie = document.createElement('span')
  let link = document.createElement('span')
  let cross = document.createElement('div')


  name.textContent = doc.data().name
  price.textContent = doc.data().price + "$"
  descreption.textContent = doc.data().descreption
  categorie.textContent = doc.data().categorie
  subCategorie.textContent = doc.data().subCategorie
  link.textContent = doc.data().link
  cross.textContent = "x"


  li.appendChild(name)
  li.appendChild(price)
  li.appendChild(descreption)
  li.appendChild(categorie)
  li.appendChild(subCategorie)
  li.appendChild(link)
  li.appendChild(cross)


  popWindowWright.appendChild(li)
  
  cross.addEventListener('click', (e) => {
    e.preventDefault()
    document.getElementById("product-window-inner").innerHTML = ""
    popWindow.style.display = "none"


})


}

function renderProducts(doc) {
  let li = document.createElement('li')
  let name = document.createElement('span')
  let price = document.createElement('span')


  li.setAttribute('data-id', doc.id)
  name.textContent = doc.data().name
  price.textContent = doc.data().price + "$"


  li.appendChild(name)
  li.appendChild(price)


  productList.appendChild(li)



  li.addEventListener('click', (e) => {


    renderDeitalis(doc)
  
    //db.collection("products").doc().get()
  
    popWindow.style.display = "block"
  
  })

}




viewProduct.addEventListener('click', (e) => {


  renderDeitalis()

  db.collection("products").doc().get()

  popWindow.style.display = "block"

})



search.addEventListener("submit", async (e) => {
    e.preventDefault()
    const searchField = document.getElementById("searchField").value
    document.getElementById("produts-search").innerHTML = ""
    const products = [
      (await db.collection("products").where("name", "==", searchField).get()).docs,
      (await db.collection("products").where("subCategorie", "==", searchField).get()).docs,
      (await db.collection("products").where("categorie", "==", searchField).get()).docs
    ].flat()
    products.forEach(doc => {
      renderProducts(doc)
    });

    /*
    .then((snapshot) => {
        snapshot.docs.forEach(doc => {
            renderProducts(doc)
            /*
            } else if (searchField == doc.data().subCategorie) {
                renderProducts(doc)
            } else if (searchField == doc.data().categorie) {
                renderProducts(doc)
                
            }
            
        })
    })
    */
})