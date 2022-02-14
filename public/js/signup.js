const signupFormHandler = async (event) => {
    event.preventDefault();
    // console.log("Unit")
    const name = document.querySelector('#name-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
    const confirmation = document.querySelector('#password-confirmation').value.trim();
    if (password !== confirmation){
      alert("Passwords do not match");
    }
    else if (name && email && password) {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ name, email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        const loginResponse = await fetch('/api/users/login', {
          method: 'POST',
          body: JSON.stringify({ email, password }),
          headers: { 'Content-Type': 'application/json' },
        });
        if (loginResponse.ok){
          document.location.replace('/home');
        } else {loginResponse.statusText}
      } else {
        alert(response.statusText);
      }
    }
  };

  // signupFormHandler()
document.querySelector('#submitButton').addEventListener('click', signupFormHandler);
// document.querySelector('#signup-form').addEventListener('submit', signupFormHandler);