function ready(callback)
{
    if (/^(interactive|complete)$/i.test(doc.readyState)) {
        callback();
    } else {
        doc.addEventListener('DOMContentLoaded', callback);
    }
}

function loadDoc(url, callback, error)
{
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        callback(this.responseText);
    } else if (error) {
        error(this.status);
    }
  };
  xhttp.open("GET", url, true);
  xhttp.send();
}

//Equivale ao $.ready do jQuery
ready(function() {
    var botao1 = document.getElementById("fa");


    botao1.onclick = function() {
        loadDoc("ajax_info1.txt", function(resposta) {
            document.getElementById("vote").innerHTML = resposta;
        });
    };
});