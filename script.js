// Función para encriptar el texto
function encriptar() {
  var texto = document.getElementById("texto").value.toLowerCase(); // Obtener el texto ingresado y convertirlo a minúsculas
  var resultado = ""; // Variable para almacenar el resultado

  // Recorrer cada letra del texto y reemplazarla según las reglas de encriptación
  for (var i = 0; i < texto.length; i++) {
    switch (texto[i]) {
      case "e":
        resultado += "enter";
        break;
      case "i":
        resultado += "imes";
        break;
      case "a":
        resultado += "ai";
        break;
      case "o":
        resultado += "ober";
        break;
      case "u":
        resultado += "ufat";
        break;
      default:
        resultado += texto[i]; // Si la letra no está en la lista de encriptación, se agrega tal cual al resultado
    }
  }

  document.getElementById("resultado").value = resultado; // Mostrar el resultado en el segundo textarea
}

// Función para desencriptar el texto
function desencriptar() {
  var texto = document.getElementById("texto").value.toLowerCase(); // Obtener el texto ingresado y convertirlo a minúsculas
  var resultado = ""; // Variable para almacenar el resultado

  // Recorrer cada letra del texto y reemplazarla según las reglas de desencriptación
  for (var i = 0; i < texto.length; i++) {
    if (
      texto[i] == "e" &&
      texto[i + 1] == "n" &&
      texto[i + 2] == "t" &&
      texto[i + 3] == "e" &&
      texto[i + 4] == "r"
    ) {
      resultado += "e";
      i += 4; // Saltar 4 posiciones para evitar procesar la palabra completa
    } else if (
      texto[i] == "i" &&
      texto[i + 1] == "m" &&
      texto[i + 2] == "e" &&
      texto[i + 3] == "s"
    ) {
      resultado += "i";
      i += 3; // Saltar 3 posiciones para evitar procesar la palabra completa
    } else if (texto[i] == "a" && texto[i + 1] == "i") {
      resultado += "a";
      i += 1; // Saltar 1 posición para evitar procesar la palabra completa
    } else if (
      texto[i] == "o" &&
      texto[i + 1] == "b" &&
      texto[i + 2] == "e" &&
      texto[i + 3] == "r"
    ) {
      resultado += "o";
      i += 3; // Saltar 3 posiciones para evitar procesar la palabra completa
    } else if (
      texto[i] == "u" &&
      texto[i + 1] == "f" &&
      texto[i + 2] == "a" &&
      texto[i + 3] == "t"
    ) {
      resultado += "u";
      i += 3; // Saltar 3 posiciones para evitar procesar la palabra completa
    } else {
      resultado += texto[i]; // Si la letra no está en la lista de desencriptación, se agrega tal cual al resultado
    }
  }

  document.getElementById("resultado").value = resultado; // Mostrar el resultado en el segundo textarea
}

// Función para copiar el mensaje desencriptado
function copiar() {
  var resultado = document.getElementById("resultado").value;
  if (resultado === "") {
    alert("El campo 'Resultado' está vacío, no hay nada para copiar.");
  } else {
    navigator.clipboard.writeText(resultado)
      .then(function() {
        alert("El mensaje desencriptado se ha copiado correctamente.");
      })
      .catch(function(error) {
        alert("Ocurrió un error al intentar copiar el mensaje desencriptado: " + error.message);
      });
  }
}


//----------------------------------------------------------
