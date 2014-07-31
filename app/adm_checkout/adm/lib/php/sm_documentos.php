<?php
@session_start();

include('../../lib/php/config.php');
$acao = trim(@$_GET['acao']);
$obj = new documentos();
if($acao == 'getFile')
{
	$arrReturn = $obj->getFiles();
	
	if (count($arrReturn) >= 1)
	{
		echo json_encode(array('mensagem'=>$arrReturn));
	}
	else
	{
		echo json_encode(array('mensagem'=>'erro'));
	}
}
?>