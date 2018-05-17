// Variable

const sendBtn = document.getElementById('sendBtn'),
      email   = document.getElementById('email'),
      subject = document.getElementById('subject'),
      message = document.getElementById('message'),
      resetBtn = document.getElementById('resetBtn'),
      sendEmail = document.getElementById('email-form');


//Listener
eventListener();


function eventListener(){
  document.addEventListener("DOMContentLoaded",appInit);
  email.addEventListener('blur',validateField);
  subject.addEventListener('blur',validateField);
  message.addEventListener('blur',validateField);
  sendEmail.addEventListener("submit",sendForm);

  resetBtn.addEventListener('click',resetForm);
}



//function

function appInit(){
  sendBtn.disabled = true;
}

function validateField(e){
  let errors = [];
  //validate Email
  if (this.type === 'email'){
        validateEmail(this);
  }else{
      validateLength(this);
  }

  //errors
  errors = document.querySelectorAll('.error');

  //Disable button
  if (email.value !== '' && subject.value !== '' && message.value !== '' ){
     if (errors.length === 0){
       sendBtn.disabled = false;
     }
  }
}


function validateLength(field){
 if (field.value.length > 0){
     field.style.borderBottomColor = "green";
     field.classList.remove('error');
 }else {
   field.style.borderBottomColor = "red";
   field.classList.add('error');
 }
}

function validateEmail(field){
  const emailText = field.value;
  if (emailText.indexOf('@') !== -1){
        field.style.borderBottomColor = "green";
        field.classList.remove('error');
    }else {
      field.style.borderBottomColor = "red";
      field.classList.add('error');
    }
}

function sendForm(e){
  e.preventDefault();

  const spinner = document.querySelector("#spinner");
  const sent = document.querySelector("#sent");
  spinner.style.display = "block";

  setTimeout(function(){
    spinner.style.display = "none";
    sent.style.display = "block";
      setTimeout(function(){
        sent.style.display = "none";
        sendEmail.reset();
      },3000)
  },3000)
}

function resetForm(e){
  sendEmail.reset()
}
