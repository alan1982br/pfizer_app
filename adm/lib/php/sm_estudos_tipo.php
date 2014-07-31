<?php
@session_start();

include('../../lib/php/config.php');

$obj = new estudos_tipo();

$acao = trim(@$_GET['acao']);
$acao2 = trim(@$_POST['acao']);


if($acao == 'select')
{
	$arrReturn = $obj->selectEstudos_Tipo();
	
	if (count($arrReturn) >= 1)
	{
		echo json_encode(array('mensagem'=>$arrReturn));
	}
	else
	{
		echo json_encode(array('mensagem'=>'fail'));
	}
}


?>