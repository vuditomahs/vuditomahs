function changeTheme(isChecked) { /*переключение темной темы*/
    if (isChecked) {
      document.body.setAttribute('dark', '');
    } else {
      document.body.removeAttribute('dark');
    }
  }
  function Go() {
   document.getElementById('scr').src=(document.getElementById('typ').checked)? '../image/logo3.png': '../image/logo2.png'
} /*конец переключения темы*/
window.onload = function() { /*загрузка*/

		setTimeout(function() {

			document.getElementById("preloader_malc").style.display = "none";

		}, 400);

	}; /*конец загрузки*/

/*по загрузке документа вешаем на кнопку обработчик*/
document.addEventListener('DOMContentLoaded', function(event) {
    document.querySelector('#myButton').addEventListener('click', showMore);
});
 
let countries = ["Абдрахманов.Д", "Барышников.А", "Бузуев.Н", "Вакилов.И", "Вильгаук.Н", "Войцеховский.А", 
    "Гуляев.М", "Казанцев.М", "Киселев.М", "Койнов.Д", "Колыбина.А", "Лукьянов.Е", "Манаев.Е", "Мисник.Е", 
    "Пахомов.Я", "Попов.С", "Привалов.В", "Старов.А", "Титенок.А", "Томашевский.В", "Фалалеев.Н", "Хайруллин.А",
    "Чернышев.Н"];
 
function showMore() {
    let list = document.querySelector('#myList');
/*извлекаем 23 элемента из массива со странами(либо меньше, если нет 23), методом shift из начала или pop - из конца
добавляем к списку на странице*/
    for(let i = 0; i < 23 && countries.length !== 0; i++) {
        let li = document.createElement('li');
        li.innerHTML = countries.shift();
        list.append(li);
        
    }
   
}
