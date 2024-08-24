const textArea = document.querySelector('#ingreseTexto'); //lo escrito en textarea
const mensaje = document.querySelector('#mensaje'); //aparece el msj

// Function bttn onEncriptar y onDesencriptar
function onEncriptar() {
    const textoEncriptado = encriptar(ingreseTexto.value)
    mensaje.value = textoEncriptado
    textArea.value = 'Ingrese el texto aquí'//limpiar Campo
    mensaje.style.backgroundImage= "none"
}
function onDesencriptar() {
    const textoDesencript = desencriptar(ingreseTexto.value)
    mensaje.value = textoDesencript
    textArea.value = 'Ingrese el texto aquí'
    mensaje.style.backgroundImage= "none"
    
}

function encriptar(ingreseTexto) {
    var textoReemplazado = ingreseTexto.replaceAll(/e/g, 'enter');
    textoReemplazado = textoReemplazado.replaceAll(/i/g, 'imes');
    textoReemplazado = textoReemplazado.replaceAll(/a/g, 'ai');
    textoReemplazado = textoReemplazado.replaceAll(/o/g, 'ober');
    textoReemplazado = textoReemplazado.replaceAll(/u/g, 'ufat');
    return textoReemplazado;
}
//función para desencriptar
function desencriptar(ingreseTexto) {
    var textoDesencriptado = ingreseTexto.replaceAll(/enter/g, 'e');
    textoDesencriptado = textoDesencriptado.replaceAll(/imes/g, 'i');
    textoDesencriptado = textoDesencriptado.replaceAll(/ai/g, 'a');
    textoDesencriptado = textoDesencriptado.replaceAll(/ober/g, 'o');
    textoDesencriptado = textoDesencriptado.replaceAll(/ufat/g, 'u');
    return textoDesencriptado;
}


