 var prev=0;

function change() {
  var quotes = ["El camino de Dios es perfecto@2 Samuel 22:31", "Yo los hice, y cuidaré de ustedes@Isaias 46:4", "Dios es nuestro amparo y nuestra fortaleza @Salmo 46:1", "Ustedes quédense quietos, que el Señor presentará batalla por ustedes. @Exodo 14:14", "Cuídame, oh Dios, porque en ti busco refugio.@Salmo 16:1", "No prevalecerá ninguna arma que se forje contra ti @Isaias 54:17", "No me niegues, Señor, tu misericordia.@Salmo 40:11", "Él cuida el sendero de los justos.@Proverbios 2:8"];
var num=Math.floor(Math.random() * quotes.length);
  while(num==prev){
    num=Math.floor(Math.random() * quotes.length);
  }
  prev=num;
  var quotedisplay = quotes[num].split("@");
  //console.log(quotedisplay[0]);
  //console.log(quotedisplay[1]);

  
  document.getElementById('quote').innerHTML =quotedisplay[0];
  document.getElementById('author').innerHTML = "--" + quotedisplay[1];

}

$(document).ready(function() {

  change();

});
