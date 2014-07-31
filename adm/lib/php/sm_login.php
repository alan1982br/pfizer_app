<?php
include('config.php');

$objUsuarios = new usuarios();

$acao = trim(@$_GET['acao']);
if($acao == 'login')
{
	$login = trim(addslashes($_GET['login']));
	
	$arrReturn = $objUsuarios->handlerLogin($login);//, $senha
	
	if (count($arrReturn) == 1)
	{
	
		echo json_encode(array('mensagem'=>$arrReturn));
	}
	else
	{
		echo json_encode(array('mensagem'=>'fail'));
	}
}







/* 
$username = "root";
$password = "";
$hostname = "localhost"; 

//connection to the database
$dbhandle = mysql_connect($hostname, $username, $password) or die("Unable to connect to MySQL");
$selected = mysql_select_db("db_sanofi_diabetes",$dbhandle) or die("Could not select examples");

$login = trim(strtolower($_GET['login']));

$sql = mysql_query("select * from tb_usuarios where usuariosLogin='".$login."'");
$num = mysql_num_rows($sql);
if($num == 1)
{
	
	echo json_encode(array('mensagem'=>'success'));
}
else
{
	echo json_encode(array('mensagem'=>'fail'));
}*/
?>