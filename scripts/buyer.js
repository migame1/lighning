const search = document.getElementById("search")

search.addEventListener("submit", (e) => {
    e.preventDefault()
    const searchField = document.getElementById("searchField").value
    db.collection("products").get()
    .then((snapshot) => {
        let html = ""
        snapshot.docs.forEach(doc => {

            if (searchField == doc.data().name) {
                html += `<div id="products">
                <div class="product" id=${doc.id}>
                  <h2>${doc.data().name}</h2>
                  <p>Price - ${doc.data().price}$</p>
                  <a href="index.html">View product</a>
                </div>      
              </div>`
              html += "<hr>"
            } else if (searchField == doc.data().subCategorie) {
                html += `<div id="products">
                <div class="product" id=${doc.id}>
                  <h2>${doc.data().name}</h2>
                  <p>Price - ${doc.data().price}$</p>
                  <a href="index.html">View product</a>
                </div>      
              </div>`
              html += "<hr>"
            } else if (searchField == doc.data().categorie) {
                html += `<div id="products">
                <div class="product" id=${doc.id}>
                  <h2>${doc.data().name}</h2>
                  <p>Price - ${doc.data().price}$</p>
                  <a href="index.html">View product</a>
                </div>      
              </div>`
              html += "<hr>"
            }
            
        })
        document.getElementById("produts-search").innerHTML = html
    })
})