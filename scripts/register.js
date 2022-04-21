const registerForm = document.getElementById("register-form")

registerForm.addEventListener('submit', (e) => {

    e.preventDefault()
    const email = document.getElementById("email").value
    const password = document.getElementById("psw").value
    const passwordRepeat = document.getElementById("psw-repeat").value
    const shopName = document.getElementById("shop-name").value


    if (password == passwordRepeat) {
        console.log("a user has created successfully ")
        auth.createUserWithEmailAndPassword(email, password)
        .then(() => {
            return auth.currentUser.sendEmailVerification()
        })
        .then(() => {
            alert("please verified your email and then sing in")
            return db.collection("shops").add({
                name: shopName,
                email: email
            })
            
        })
        .then(() => {

        })
        .catch(err => {
            if (err.code == "auth/email-already-in-use") {
                alert("This email address is already in use by another account.")
            } else {
                alert(err)
            }
        })
        
    } else {
        alert("passwords do not match")
    }
    
    

})
    
