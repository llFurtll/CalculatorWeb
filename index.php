<?php 

$pagina = 'home';

if(isset($_GET['pagina'])){
	$pagina = $_GET['pagina'];
}

include 'header.php';

switch ($pagina) {	
	case 'calculadora':
		include 'calculadora.php';
		break;

	default: 
		include 'home.php';	
		break;
}

include 'footer.php';
