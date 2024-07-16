function fun(data){
    var aa = document.getElementsByClassName(data)[0];
    aa.style.width="150px";
    aa.style.display="flex"
}
function fun1(data){
    var aa = document.getElementsByClassName(data)[0];
    aa.style.width="0px"
    aa.style.display="none"
}
function chating() {
    var form = document.createElement('form');
    form.classList.add('login-form-container');

    var label1 = document.createElement('label');
    label1.textContent = 'Username:';
    label1.classList.add('login-label');

    var usernameInput = document.createElement('input');
    usernameInput.type = 'text';
    usernameInput.name = 'username';
    usernameInput.placeholder = 'Enter your username';
    usernameInput.classList.add('login-input');

    var label2 = document.createElement('label');
    label2.textContent = 'Password:';
    label2.classList.add('login-label');

    var passwordInput = document.createElement('input');
    passwordInput.type = 'password';
    passwordInput.name = 'password';
    passwordInput.placeholder = 'Enter your password';
    passwordInput.classList.add('login-input');

    var submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.textContent = 'Submit';
    submitButton.classList.add('login-submit');

    form.appendChild(label1);
    form.appendChild(usernameInput);
    form.appendChild(document.createElement('br'));
    form.appendChild(label2);
    form.appendChild(passwordInput);
    form.appendChild(document.createElement('br'));
    form.appendChild(submitButton);

    var photo = document.createElement('div');
    photo.classList.add('photo-circle');

    var container = document.createElement('div');
    container.classList.add('container');
    container.appendChild(photo);
    container.appendChild(form);

    var body = document.getElementsByTagName('body')[0];
    body.appendChild(container);

    form.onsubmit = function(event) {
        event.preventDefault(); 
        var username = usernameInput.value;
        var password = passwordInput.value;
        console.log(['Username:', username, 'Password:', password]);
        body.removeChild(container); 
    };
}
