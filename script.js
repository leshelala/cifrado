// Cifrado y descifrado César simple (desplazamiento de letras)
function cifradoCesar(texto, clave) {
    let resultado = '';
    for (let i = 0; i < texto.length; i++) {
        let c = texto.charCodeAt(i);
        if (c >= 65 && c <= 90) {
            // Mayúsculas
            resultado += String.fromCharCode(((c - 65 + clave) % 26) + 65);
        } else if (c >= 97 && c <= 122) {
            // Minúsculas
            resultado += String.fromCharCode(((c - 97 + clave) % 26) + 97);
        } else {
            // Otros caracteres
            resultado += texto.charAt(i);
        }
    }
    return resultado;
}

function descifradoCesar(texto, clave) {
    // El descifrado es igual pero restando la clave
    return cifradoCesar(texto, (26 - (clave % 26)) % 26);
}

function cifrar() {
    const mensaje = document.getElementById('mensaje').value;
    const clave = parseInt(document.getElementById('clave').value, 10);
    const resultado = cifradoCesar(mensaje, clave);
    document.getElementById('resultado').textContent = resultado;
}

function descifrar() {
    const mensaje = document.getElementById('mensaje').value;
    const clave = parseInt(document.getElementById('clave').value, 10);
    const resultado = descifradoCesar(mensaje, clave);
    document.getElementById('resultado').textContent = resultado;
}