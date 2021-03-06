// HTML5 szelektorok.
//Egy elem kiválasztása
document.querySelector( 'form' );
document.querySelector( 'input[type=date]' );

//Gyorsabb megoldás.
var regForm = document.querySelector( '#testform' );
var dateInput = regForm.querySelector( 'input[type=date]' );
dateInput.value='1988-10-22';


//Elemek csoportjának kiválasztása
var inputs = regForm.querySelectorAll('input');
//console.log('inputs', inputs);

//Egyedi fájl input létrehozása
var fileInputs = document.querySelectorAll('.file-input-group');
for( var i = 0; i < fileInputs.length; i++){
	//Beolvassuk a változó értékeket
	var name = fileInputs[i].getAttribute('data-name');
	var label = document.createElement('label');
	
	//létrehozzuk a címkét
	label.setAttribute('for', name);
	label.className = 'col-sm-6 col-xs-offset-2 control-label btn btn-primary file-input-label';
	label.innerHTML = name;
	
	var input = document.createElement('input');
	input.setAttribute('id', name);
	input.type = 'file';
	input.className = 'hidden-file-input';
	
	//Figyeljük az inputérték változását	
	input.addEventListener('change', function(ev){
		var currentLabel = 
			document.querySelector('label[for='+ ev.target.id +']');
		var name = ev.target.value;
		name = name.replace(/\\/g, '/').split('/').pop();
		currentLabel.innerHTML = name;
	});
	
	//Hozzáadjuk az elemeket a divhez
	fileInputs[i].appendChild(input);
	fileInputs[i].appendChild(label);
}