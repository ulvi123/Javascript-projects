function animatedForm () {
    const arrows = document.querySelectorAll('.fa-arrow-right');

    arrows.forEach(arrow => {
        arrow.addEventListener("click",(e) => {
            const input = arrow.previousElementSibling;//getting the details of the clicked object(arrow)
            const parent = arrow.parentElement;
            const nextForm = parent.nextElementSibling;

            //Check for validation
            if(input.type === "text" && validateUser(input)){
                nextSlide(parent,nextForm);
            }else if(input.type === "email" && validateEmail(input)){
                nextSlide(parent,nextForm);
            }else if(input.type === "password" && validatePassword(input)){
                nextSlide(parent,nextForm);
            }
            else{
                parent.style.animation = "shake 0.5s ease";
            }

            //get rid of animation
            parent.addEventListener('animationend',function(){
                parent.style.animation = "";
            })
        
            
                
            
        });
    });
}


function validateUser(user){
    if(user.value.length < 6){
        console.log('Not enough characters');
        error("rgb(189,87,87)");
    }
    else{
        success("rgb(87,189,130)");
        return true;
    }
}

function validateEmail(email) {
    if (email.value.length < 6){
        console.log("The length is not enough");
        error("rgb(189,87,87)");
    }

    else {
        console.log("The email is correct");
        success("rgb(87,189,130)");
        return true;
    }
}


function validatePassword(password) {
    if (password.value.length < 6){
        console.log("The length is not enough");
        error("rgb(189,87,87)");
    }

    else if( password.value === `${this.password}`) {
        console.log("The password is repeated");
        error(color);
        
    }

    else{
        console.log("Password is correct");
        success("rgb(87,189,130)");
        return true;

    }
}


function error(color){
   document.body.style.backgroundColor = color;
}

function success(color){
    document.body.style.backgroundColor = color;
}

function nextSlide(parent, nextForm) {
   parent.classList.add('innactive');
   parent.classList.remove('active');
   nextForm.classList.add('active')
}



animatedForm();

