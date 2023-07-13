const containerEle = document.getElementById("container");

const thanksmessageEle = document.getElementById("thanks-message");

const emailInput = document.getElementById("email");

function subscribe(){
    console.log(emailInput.value);
    displayThanksMessage();
}

function displayThanksMessage(){
    thanksmessageEle.classList.add('active');
    containerEle.style.display = "none";
    thanksmessageEle.style.display="block";
}

function dismissMessage(){
    thanksmessageEle.style.display="none";
    containerEle.style.display="inline-block";
}


// function submit(){
//     var email = document.getElementById("email");
//     console.log(email.value);
//     const emailRegex = "/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/"
//     console.log(emailRegex.test(email));
//     // if(emailRegex.test(email));
    
// }

// console.log(document.getElementById("email").value);