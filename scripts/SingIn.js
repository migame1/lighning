const singInForm = document.getElementById("singIn-form")
const sendEmailAgaing = document.getElementById("send-email-againg")


singInForm.addEventListener('submit', (e) => {

    e.preventDefault()
    const email = document.getElementById("email").value
    const password = document.getElementById("psw").value
    
    auth.signInWithEmailAndPassword(email, password)
    .then(() => {
        if (auth.currentUser.emailVerified) {
            console.log("user loged in successfully")
            document.location="sellerHub.html"
        }  else {
            //sendEmailAgaing.style.display = "block"
            alert("email is not verified")
        }
        
        
    })
    .catch((err) => {
        /*
        if (err.code = "auth/user-not-found"){
            alert("Wrong Email or Password")
            
        }
        */
        alert(err)


    })
    

})
/*
sendEmailAgaing.addEventListener('click', (e) => {
    auth.sendEmailVerification(email)
    
})
*/