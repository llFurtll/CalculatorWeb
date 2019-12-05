//Numeros
$('.btn-digit').click(function() {
	var valor = $(this).val()
		
	$('#resultado').val(
		$('#resultado').val() + valor
	)
});

//Botoes C e CE
$('.btn-outro').click(function() {
	$('#resultado').val('')
});

//Botoes Aritmeticos (+, *, /, -, raiz, ^)
$('.btn-funcao').click(function() {
	var valor = $(this).val()

	$("#resultado").val(
		$('#resultado').val() + valor
	)
});

//Botao igual (=)
$('.btn-final').click(function() {
	var buscando_caracteres_invalidos = $('#resultado').val().match(/[a-zA-Z]/)
	var buscando_raiz_quadrada = $('#resultado').val().match(/[√]/)
	var buscando_potenciacao = $('#resultado').val().match(/[\^]/)

	if (buscando_caracteres_invalidos) {
		alert('Por favor, utilize apenas números!')
	}
	else if (buscando_raiz_quadrada) {
		var string = $('#resultado').val()

		$('#resultado').val(
			Math.sqrt(string.replace('√', ''))
		)
	}
	else if (buscando_potenciacao) {
		var string = $('#resultado').val()

		var final = string.split('^')

		$('#resultado').val(
			Math.pow(final[0], final[1])
		)
	}

	try {
		$('#resultado').val(
			eval($('#resultado').val())	
		)
	}
	catch (e) {
		if(e instanceof SyntaxError)
			alert('Por favor, digite a expressão corretamente!')
	}
});

//Botao apagar
$('.btn-apagar').click(function(event) {
	var display = $('#resultado').val().split('')

	display.pop()

	$('#resultado').val(display.join(''))
}); 