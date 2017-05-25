function download(filename,content){
 const elmt = document.createElement('a');
 elmt.setAttribute('href','data:text/plain;charset=utf-8,' + encodeURIComponent(content));
 elmt.setAttribute('download',filename);
 elmt.style.display = 'none';
 document.body.appendChild(elmt);
 elmt.click();
 document.body.removeChild(elmt);
}

window.onload = () => {
 document.getElementById('files').onchange = () => {
  const fr = new FileReader();
  fr.onload = e => {
   document.getElementById('editor').value = e.target.result; 
  };
  const file = document.getElementById('files').files[0];
  fr.readAsText(file);
 };
 document.getElementsByTagName('button')[0].onclick = () => {
  download(document.getElementById('files').files[0].name,document.getElementById('editor').value);
 }
};
