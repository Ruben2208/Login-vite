document.getElementById('loginForm').addEventListener('submit', async (e) =>{
    e.preventDefault();
    let email = document.getElementById('email').value.trim();
    let password = document.getElementById('password').value.trim();

    const res = await fetch(`http://localhost:3000/users?email=${email}&password=${password}`);
    const data = await res.json();

    if(data.length > 0){
        localStorage.setItem('user', JSON.stringify(data[0]));
        window.location.href = './src/dashboard.html';
    }else{
        alert('credenciales invalidas')
    }
})