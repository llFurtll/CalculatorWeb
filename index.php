<?php 

$pagina = 'home';

if(isset($_GET['pagina'])){
	$pagina = $_GET['pagina'];
}

include 'header.php';

switch ($pagina) {	
	case 'calculadora':
		include 'calculadora.php';
		include 'footer2.php';
		break;

	default: 
		include 'home.php';
		include 'footer.php';	
		break;
}
