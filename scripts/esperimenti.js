var a = "false";
var b = "false";
function DataEdOra(){
  if (a == "true") {
    document.getElementById('DataEdOra').style.display='none';
    document.getElementById('Colori').style.display='none';
    document.getElementById('segnaposto').style.display='block';
    a = "false";
  }
  else {
    document.getElementById('DataEdOra').style.display='block';
    document.getElementById('Colori').style.display='none';
    document.getElementById('segnaposto').style.display='none';
    a = "true";
  }
}
function Colori(){
  if (b == "true") {
    document.getElementById('Colori').style.display='none';
    document.getElementById('DataEdOra').style.display='none';
    document.getElementById('segnaposto').style.display='block';
    b = "false";
  }
  else {
    document.getElementById('Colori').style.display='block';
    document.getElementById('DataEdOra').style.display='none';
    document.getElementById('segnaposto').style.display='none';
    b = "true";
  }
}
