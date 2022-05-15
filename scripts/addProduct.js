auth.onAuthStateChanged(user => {
  if(user == null){
      document.location="index.html"
  }
})


const addProductForm = document.getElementById("addProduct-form")

addProductForm.addEventListener("submit", e => {
    e.preventDefault()

    const name = document.getElementById("name").value
    const price = document.getElementById("price").value
    const link = document.getElementById("link").value
    const descreption = document.getElementById("the-textarea").value
    const subCategorie = document.getElementById("categorie").value
    let categorie = ""
    if (subCategorie == "for-the-kitchen" || subCategorie == "cleaning" || subCategorie == "tv games" || subCategorie == "viewing and audio systems" || subCategorie == "heating and cooling the house" || subCategorie == "care and health devices" || subCategorie == "communication" || subCategorie == "office equipment" || subCategorie == "car stereo" || subCategorie == "photography" || subCategorie == "miscellaneous") {
      categorie = "Electronics"
    }
    db.collection("shops").get()
    .then((snapshot) => {
      snapshot.docs.forEach(doc => {
        auth.currentUser.providerData.forEach((profile) => {
          if (profile.email == doc.data().email) {
             db.collection("products").add({
              name: name,
              price: price,
              link: link,
              descreption: descreption,
              shopID: doc.id,
              categorie: categorie,
              subCategorie: subCategorie
          })
          .then(() => {
            var file = new Blob(["text"], {"text/plain": "text/plain"});
            URL.createObjectURL(file);
            document.location="sellerHub.html"
          })
          }
        })
      })
    })
 
    
    


    
  }





)

const input1 = document.getElementById('textarea');
const counterCurrent = document.getElementById('current');

input1.addEventListener('input', function (e) {
    const target = e.target;

    // Get the `maxlength` attribute
    const maxLength = target.getAttribute('maxlength');

    // Count the current number of characters
    const currentLength = target.value.length;

    counterCurrent.innerHTML = `${currentLength}/${maxLength}`;
});