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
function myFunction() {
    var testvar, result;
    testvar = document.getElementById('testvar').value;
    if (testvar < 100) {
        result = "Меньше ста";
    } else if (testvar > 100) {
        result = "Большое ста";
    }
    document.getElementById('result').innerHTML = result;
    }
