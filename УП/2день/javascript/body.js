function changeTheme(isChecked) { /*переключение темной темы*/
    if (isChecked) {
      document.body.setAttribute('dark', '');
    } else {
      document.body.removeAttribute('dark');
    }
  }
  function Go() {
   document.getElementById('scr').src=(document.getElementById('typ').checked)? './image/logo3.png': './image/logo2.png'
} /*конец переключения темы*/
window.onload = function() { /*загрузка*/

		setTimeout(function() {

			document.getElementById("preloader_malc").style.display = "none";

		}, 400);

	}; /*конец загрузки*/