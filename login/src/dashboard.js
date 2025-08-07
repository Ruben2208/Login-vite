const user = JSON.parse(localStorage.getItem('user'));
const listProduct = document.getElementById('listProducts');

if (!user) {
    window.location.href = '../index.html';
}

if(user.role == 'admin'){
    document.getElementById('adminPanel').style.display = 'block'
}

document.getElementById("welcome").textContent = `Bienvenido ${user.name}!`;

async function loadProducts() {
    const res = await fetch("http://localhost:3000/products");
    const data = await res.json();

    listProduct.innerHTML = '';

    data.forEach((product) => {
        let li = document.createElement('li')
        li.innerHTML = `
        nombre : ${product.name} - precio : ${product.price}`;

        if(user.role == 'admin'){
            const btn = document.createElement('button');
            btn.textContent = "Eliminar"
            btn.onclick = async () =>{
             await fetch(`http://localhost:3000/products/${product.id}`,{ 
                method:"DELETE",
             });
             loadProducts()
            };
            li.appendChild(btn);
        };

        listProduct.appendChild(li);
    });
};

loadProducts();

if (user.role == 'admin'){
    const btn = document.getElementById('addProduct').addEventListener('click', async () =>{
     const name = document.getElementById('productName').value;
     const price = document.getElementById('productPrice').value;

     if(name && price){
        await fetch(`http://localhost:3000/products`,{
            method: "POST",
            headers: {
                'content-type': 'application/josn'
            },
            body: JSON.stringify({name, price})
        });
        loadProducts();
     }
    });
}

document.getElementById('logout').addEventListener('click', () => {
    localStorage.removeItem('user');
    window.location.href = '../index.html';
})