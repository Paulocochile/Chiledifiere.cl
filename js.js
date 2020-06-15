function myFunctionRicas() {
  var x = document.getElementById("ImpuestosPersonasRicas");
  if (x.style.display === "block") {
    x.style.display = "none";
    document.getElementById("plusP").innerHTML = "+";
  } else {
    x.style.display = "block";
    document.getElementById("plusP").innerHTML = "-";
  }

}

function myFunctionEmpresas() {
  var x = document.getElementById("ImpuestosEmpresas");
  if (x.style.display === "block") {
    x.style.display = "none";
    document.getElementById("plusE").innerHTML = "+";
  } else {
    x.style.display = "block";
    document.getElementById("plusE").innerHTML = "-";
  }

}

function myFunctionNormal() {
  var x = document.getElementById("ImpuestosPersonasNormales");
  if (x.style.display === "block") {
    x.style.display = "none";
    document.getElementById("plusN").innerHTML = "+";
  } else {
    x.style.display = "block";
    document.getElementById("plusN").innerHTML = "-";
  }

}

function myFunctionSeguridad() {
  var x = document.getElementById("ImpuestosSeguridad");
  if (x.style.display === "block") {
    x.style.display = "none";
    document.getElementById("plusS").innerHTML = "+";
  } else {
    x.style.display = "block";
    document.getElementById("plusS").innerHTML = "-";
  }

}
