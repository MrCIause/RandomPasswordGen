const passwordOutPut = document.getElementById("output");
const generateBtn = document.getElementById("button1");

const randomPassword = (length) => {
    const charest = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:,.<>?"
    let password = "";

    for(i=0;i<length;i++){
        password += charest.charAt(Math.floor(Math.random()*charest.length));
    }
    passwordOutPut.innerText = password;
    console.log(password);
}

generateBtn.addEventListener("click",() =>{
    const password = randomPassword(12);
});


