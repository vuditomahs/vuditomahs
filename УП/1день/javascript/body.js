function dis()
{ 
    var abc = "1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        var rs = "";
        while (rs.length < 8) {
            rs += abc[Math.floor(Math.random() * abc.length)];
        }
        alert("Ваш промокод: " + rs);
}
function copyToClipboard() {
  const str = document.getElementById('item-to-copy').innerText;
  const el = document.createElement('textarea');
  el.value = str;
  el.setAttribute('readonly', '');
  el.style.position = 'absolute';
  el.style.left = '-9999px';
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
}
  
