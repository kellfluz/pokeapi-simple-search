(function() {
	"use strict";//modo rigoroso ativado
    var searchInput = document.getElementById('search');
    searchInput.addEventListener('change', checkUpInput);

    function checkUpInput() {
    	console.log(searchInput.value);
    }
  
})();
//criada para guardar tudo em um espoco local.