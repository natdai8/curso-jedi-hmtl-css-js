window.onload = function() {
    document.getElementById('formulario').addEventListener("submit", handleSubmit);
}

function handleSubmit (e) {
    e.preventDefault();

    var u = document.getElementById('username').value;
    var p = document.getElementById('pwd').value;

    if (u === "" || p === "") {
        let al = document.createElement('div'); 
        
        // falta quitar wrong credentials y evitar repetir el pop -> solucion -> form_sol.js
        al.innerHTML = "wrong credentials";
        al.className = "alert alert-danger";
        al.style.textAlign = "center";
        document.getElementById('wrapper').appendChild(al);
    }
    else {
        alert("el nombre de usuario es " + u);
        console.log("la contraseña es "+ p);
    }
    return false;
}

