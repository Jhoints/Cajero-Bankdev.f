var users = {
    'Ana Villanueva': {
        password: '1234',
        saldo: 500
    },
    'Javier Dub': {
        password: 'estonofuetanfacil',
        saldo: 100
    },
    'Ian': {
        password: '4ever',
        saldo: 750
    },
    'sol': {
        password: 'nakagawa',
        saldo: 300
    },
    'Sebastian': {
        password: 'Ramirez',
        saldo: 450
    },
    'Oscar': {
        password: 'Nolastname',
        saldo: 200
    },
    'Chuy': {
        password: 'Gaucin',
        saldo: 670
    },
    'Daniel': {
        password: 'Ordaz',
        saldo: 290
    },
    'Tonatiuh': {
        password: 'Bayardo',
        saldo: 70
    }
};

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    
    if (users.hasOwnProperty(username) && users[username].password === password) {
        // Almacenamos el nombre de usuario y saldo en sessionStorage
        sessionStorage.setItem('loggedInUser', username);
        sessionStorage.setItem('saldo', users[username].saldo.toString());
        
        window.location.href = 'cajero.html';
    } else {
        document.getElementById('loginStatus').textContent = 'Usuario o contraseña incorrectos. Intenta de nuevo.';
    }
});