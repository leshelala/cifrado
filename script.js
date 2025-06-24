// Cifrado César
function cifradoCesar(texto, clave) {
    clave = parseInt(clave, 10);
    let resultado = '';
    for (let i = 0; i < texto.length; i++) {
        let c = texto.charCodeAt(i);
        if (c >= 65 && c <= 90) {
            resultado += String.fromCharCode(((c - 65 + clave) % 26) + 65);
        } else if (c >= 97 && c <= 122) {
            resultado += String.fromCharCode(((c - 97 + clave) % 26) + 97);
        } else {
            resultado += texto.charAt(i);
        }
    }
    return resultado;
}
function descifradoCesar(texto, clave) {
    clave = parseInt(clave, 10);
    return cifradoCesar(texto, (26 - (clave % 26)) % 26);
}

// Binario
function textoABinario(texto) {
    return texto.split('').map(c => c.charCodeAt(0).toString(2).padStart(8, '0')).join(' ');
}
function binarioATexto(binario) {
    return binario.split(' ').map(b => String.fromCharCode(parseInt(b, 2))).join('');
}

// XOR simple// Cifrado César
function cifradoCesar(texto, clave) {
    clave = parseInt(clave, 10);
    let resultado = '';
    for (let i = 0; i < texto.length; i++) {
        let c = texto.charCodeAt(i);
        if (c >= 65 && c <= 90) {
            resultado += String.fromCharCode(((c - 65 + clave) % 26) + 65);
        } else if (c >= 97 && c <= 122) {
            resultado += String.fromCharCode(((c - 97 + clave) % 26) + 97);
        } else {
            resultado += texto.charAt(i);
        }
    }
    return resultado;
}
function descifradoCesar(texto, clave) {
    clave = parseInt(clave, 10);
    return cifradoCesar(texto, (26 - (clave % 26)) % 26);
}

// Binario
function textoABinario(texto) {
    return texto.split('').map(c => c.charCodeAt(0).toString(2).padStart(8, '0')).join(' ');
}
function binarioATexto(binario) {
    return binario.split(' ').map(b => String.fromCharCode(parseInt(b, 2))).join('');
}

// XOR simple
function cifradoXOR(texto, clave) {
    if (!clave) clave = "0";
    let claveNum = 0;
    if (!isNaN(clave)) {
        claveNum = parseInt(clave, 10);
    } else {
        for (let i = 0; i < clave.length; i++) {
            claveNum ^= clave.charCodeAt(i);
        }
    }
    let resultado = '';
    for (let i = 0; i < texto.length; i++) {
        resultado += String.fromCharCode(texto.charCodeAt(i) ^ claveNum);
    }
    return resultado;
}
function descifradoXOR(texto, clave) {
    return cifradoXOR(texto, clave);
}

// Controlador
function cifrar() {
    const mensaje = document.getElementById('mensaje').value;
    const clave = document.getElementById('clave').value;
    const tipo = document.getElementById('tipo').value;
    let resultado = '';
    if (tipo === 'cesar') {
        resultado = cifradoCesar(mensaje, clave);
    } else if (tipo === 'binario') {
        resultado = textoABinario(mensaje);
    } else if (tipo === 'xor') {
        resultado = cifradoXOR(mensaje, clave);
        resultado = Array.from(resultado).map(c => c.charCodeAt(0).toString(16).padStart(2, '0')).join(' ');
    }
    document.getElementById('resultado').textContent = resultado;
}

function descifrar() {
    const mensaje = document.getElementById('mensaje').value;
    const clave = document.getElementById('clave').value;
    const tipo = document.getElementById('tipo').value;
    let resultado = '';
    if (tipo === 'cesar') {
        resultado = descifradoCesar(mensaje, clave);
    } else if (tipo === 'binario') {
        resultado = binarioATexto(mensaje);
    } else if (tipo === 'xor') {
        let bytes = mensaje.trim().split(/\s+/).map(h => String.fromCharCode(parseInt(h, 16)));
        resultado = descifradoXOR(bytes.join(''), clave);
    }
    document.getElementById('resultado').textContent = resultado;
}
function cifradoXOR(texto, clave) {
    if (!clave) clave = "0";
    let claveNum = 0;
    if (!isNaN(clave)) {
        claveNum = parseInt(clave, 10);
    } else {
        for (let i = 0; i < clave.length; i++) {
            claveNum ^= clave.charCodeAt(i);
        }
    }
    let resultado = '';
    for (let i = 0; i < texto.length; i++) {
        resultado += String.fromCharCode(texto.charCodeAt(i) ^ claveNum);
    }
    return resultado;
}
function descifradoXOR(texto, clave) {
    return cifradoXOR(texto, clave);
}

// Controlador
function cifrar() {
    const mensaje = document.getElementById('mensaje').value;
    const clave = document.getElementById('clave').value;
    const tipo = document.getElementById('tipo').value;
    let resultado = '';
    if (tipo === 'cesar') {
        resultado = cifradoCesar(mensaje, clave);
    } else if (tipo === 'binario') {
        resultado = textoABinario(mensaje);
    } else if (tipo === 'xor') {
        resultado = cifradoXOR(mensaje, clave);
        resultado = Array.from(resultado).map(c => c.charCodeAt(0).toString(16).padStart(2, '0')).join(' ');
    }
    document.getElementById('resultado').textContent = resultado;
}

function descifrar() {
    const mensaje = document.getElementById('mensaje').value;
    const clave = document.getElementById('clave').value;
    const tipo = document.getElementById('tipo').value;
    let resultado = '';
    if (tipo === 'cesar') {
        resultado = descifradoCesar(mensaje, clave);
    } else if (tipo === 'binario') {
        resultado = binarioATexto(mensaje);
    } else if (tipo === 'xor') {
        let bytes = mensaje.trim().split(/\s+/).map(h => String.fromCharCode(parseInt(h, 16)));
        resultado = descifradoXOR(bytes.join(''), clave);
    }
    document.getElementById('resultado').textContent = resultado;
}
