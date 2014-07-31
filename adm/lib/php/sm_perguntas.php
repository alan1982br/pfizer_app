<?php
include('../../lib/php/config.php');
$acao = trim(@$_POST['acao']);
if($acao == 'insert')
{
	$userId = trim($_POST['user_id']);
	$userNome = trim($_POST['user_nome']);
	$pergunta = $_POST['user_note'];
	
	$sql=  mysql_query("insert into tb_perguntas (perguntasUserId, perguntasNomeUsuario, perguntasTexto, perguntasData, perguntasStatus) VALUES (".$userId.",'".$userNome."','".$pergunta."', now(),1 )");
	if($sql)
	{
		echo 'success';
	}
	else
	{
		echo 'fail';
	}	
}
else
if(@$_GET['acao'] == 'select')
{
	$obj = new perguntas();
	$arrReturn = $obj->selectPerguntas();
	
	if(count($arrReturn) >0)
	{
		echo json_encode(array('mensagem'=>$arrReturn));
	}
	else
	{
		echo 'fail';
	}
}
/*include('../../lib/php/config.php');
$acao = trim(@$_POST['acao']);
if($acao == 'insert')
{
	$userId = trim($_POST['user_id']);
	$userNome = trim($_POST['user_nome']);
	$pergunta = $_POST['user_note'];
	
	$sql=  mysql_query("insert into tb_perguntas (perguntasUserId, perguntasNomeUsuario, perguntasTexto, perguntasData, perguntasStatus) VALUES (".$userId.",'".$userNome."','".$pergunta."', now(),1 )");
	if($sql)
	{
		echo 'success';
	}
	else
	{
		echo 'fail';
	}
}*/
?>