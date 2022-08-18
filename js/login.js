// adding class to section
function addClassToSction(sectionId){
    const section = document.getElementById(sectionId);
    section.classList.add('hidden');
}

// removing class from section
function removeClassFromSection(sectionId){
    const section = document.getElementById(sectionId);
    section.classList.remove('hidden');
}

document.getElementById('login-btn').addEventListener('click', function(){
    // step-2: get the email address inside the email input fueld
    // always remember to use .value to get text from an input field
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    // step-3: get password
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    // console.log(email, password);

    //DANGER: do not varify email password on the client side
    // step-4: veryfy email and password and check whether valid user or not
    if(email === 'sontan@baap.com' && password === 'secret'){

        // adding class to login section
        addClassToSction('login-header');

        addClassToSction('login-dection');

        addClassToSction('login-footer');

        // removing class from Bank
        removeClassFromSection('bank-section-1');
        removeClassFromSection('bank-section-2');
    }else{
        alert('Invalid User');
    }
});