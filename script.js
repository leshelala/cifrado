// Binario
function textoABinario(texto) {
    return texto.split('').map(c => c.charCodeAt(0).toString(2).padStart(8, '0')).join(' ');
}
function binarioATexto(binario) {
    return binario.split(' ').map(b => String.fromCharCode(parseInt(b, 2))).join('');
}

// Controlador
function cifrar() {
    const mensaje = document.getElementById('mensaje').value;
    let resultado = textoABinario(mensaje);
    document.getElementById('resultado').textContent = resultado;
}

function descifrar() {
    const mensaje = document.getElementById('mensaje').value;
    let resultado = binarioATexto(mensaje);
    document.getElementById('resultado').textContent = resultado;
}
