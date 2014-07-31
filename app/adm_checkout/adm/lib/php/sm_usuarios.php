<?php
include('config.php');

$objUsuarios = new usuarios();

$acao = trim(@$_GET['acao']);
$acao2 = trim(@$_POST['acao']);

if($acao2 == 'insert')
{
	$nome = $_POST['_nome'];
	$email = $_POST['_email'];
	$fone = $_POST['_fone'];
	$crm = $_POST['_crm'];
	
	$objUsuarios->setUsuariosNome(addslashes($nome));
	$objUsuarios->setUsuariosEmail(addslashes($email));
	$objUsuarios->setUsuariosTelefone(addslashes($fone));
	$objUsuarios->setUsuariosCrm(addslashes($crm));
	
	
	$arrReturn = $objUsuarios->insert();
	if(count($arrReturn) >= 1)
	{
		echo 'success';
	}
	else
	{
		echo 'fail';
	}
}
else
if($acao == 'select')
{
	$arrReturn = $objUsuarios->selectUsers();
	
	if (count($arrReturn) >= 1)
	{
		echo json_encode(array('mensagem'=>$arrReturn));
	}
	else
	{
		echo json_encode(array('mensagem'=>'fail'));
	}
}

else
if($acao == 'delete')
{
	$id = $_GET['idUser'];
	
	$sql = mysql_query("delete from tb_usuarios_salas where usuarios_salasUsuariosId = '".$id."'");
	$sql2 = mysql_query("UPDATE tb_usuarios set usuariosStatus=0 where usuariosId = '".$id."'");
	if ($sql2)
	{
		echo json_encode(array('mensagem'=>'success'));
	}
	else
	{
		echo json_encode(array('mensagem'=>'fail'));
	}
}

else
if($acao == 'select2')
{
	$arrReturn = $objUsuarios->selectUsers2();
	
	if (count($arrReturn) >= 1)
	{
		echo json_encode(array('mensagem'=>$arrReturn));
	}
	else
	{
		echo json_encode(array('mensagem'=>'fail'));
	}
}

else
if($acao == 'update')
{
	$id = trim(@$_GET['id']);
	$nome = trim(@$_GET['nome']);
	//$grupo = trim(@$_GET['grupo']);
	$status = trim(@$_GET['status']);
	$checkOut = trim(@$_GET['checkOut']);
	
	$sql = mysql_query("update tb_usuarios set usuariosNome='".$nome."', usuariosStatus='".$status."', usuariosCheckOut='".$checkOut."' where usuariosId=$id");	
	
	if ($sql)
	{
		echo json_encode(array('mensagem'=>'success'));
	}
	else
	{
		echo json_encode(array('mensagem'=>'fail'));
	}
	
}
/*
else
if($acao == 'update')
{
	$id = $_GET['_id'];
	
	$sql = mysql_query("UPDATE tb_usuarios set usuariosStatus=1 where usuariosId = '".$id."'");
	if ($sql)
	{
		echo json_encode(array('mensagem'=>'success'));
	}
	else
	{
		echo json_encode(array('mensagem'=>'fail'));
	}
}*/
?>