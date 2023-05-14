const formRef = document.querySelector('.login-form');

formRef.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) { 
  event.preventDefault();
  
  const { email, password } = event.currentTarget.elements;
  let dataObject = {};

  if (!email.value || !password.value) {
    alert('всі поля повинні бути заповнені');
  } else {
    dataObject = {
      email: email.value,
      password: password.value
    }
    
    console.log(dataObject)
  }
  
  formRef.reset();
};
