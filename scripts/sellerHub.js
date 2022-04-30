auth.onAuthStateChanged(user => {
    if(user == null){
        document.location="index.html"
    }
})

const signOut = document.getElementById("sign-out")

signOut.addEventListener("click", e => {
    auth.signOut()
})