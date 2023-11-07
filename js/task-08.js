document.querySelector('.login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Зупиняє перезавантаження сторінки при відправленні форми
  
    var email = this.elements.email.value;
    var password = this.elements.password.value;
  
    if (email === '' || password === '') {
      alert('Всі поля повинні бути заповнені');
    } else {
      var data = {
        email: email,
        password: password
      };
  
      console.log(data);
      this.reset(); // Очищення полів форми
    }
  });
