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
 document.getElementById('editor').onkeydown = k => {
  if(k.keyCode === 9){
   const _this = document.getElementById('editor');
   k.preventDefault();
   start = _this.selectionStart;
   end = _this.selectionEnd;
   const tab_size = (parseInt(document.getElementById('tabs').value) === NaN) ? 4 : parseInt(document.getElementById('tabs').value);
   const spaces = (() => {
    let str = '';
    for(let i=0;i<tab_size;i++){
     str += ' ';
    }
    return str;
   })();
   _this.value = _this.value.substring(0,start) + spaces + _this.value.substring(end);
   _this.selectionStart = _this.selectionEnd = start + tab_size;
   return false;
  }
 }
};
