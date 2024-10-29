const a = document.getElementById("send");
a.addEventListener("click", (event) => {
    event.preventDefault();
    const numeUser = document.getElementById("user-name")
    const emailUser = document.getElementById("user-email")



    const dateUser = document.getElementById("user-tel")
    console.log(numeUser.value);
    console.log(emailUser.value);
    console.log(dateUser.value);

    
});