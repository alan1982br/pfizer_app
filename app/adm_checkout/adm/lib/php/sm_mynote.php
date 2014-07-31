<?php
@session_start();


include('../../lib/php/config.php');
$acao = trim(@$_GET['acao']);



if($acao == 'getNotas')
{
	$userId = trim($_GET['userId']);
	
	$sql = mysql_query("select * from tb_mynote where mynoteUserId = $userId")or die(mysql_error());
	$num = mysql_num_rows($sql);
	
	if($num ==1)
	{
		$texto = mysql_result($sql,0,'mynoteNote');
		
		if($sql)
		{
			echo json_encode(array('mensagem'=>$texto));
		}
		else
		{
			echo json_encode(array('mensagem'=>'fail'));
		}
	}
	
}

else
if($_POST['user_id'])
{
	
	$sql = mysql_query("select * from tb_mynote where mynoteUserId = ".trim($_POST['user_id'])."")or die(mysql_error());
	$num = mysql_num_rows($sql);
	
	if($num <1)
	{
		$sql=  mysql_query("insert into tb_mynote (mynoteUserId, mynoteNote) VALUES ('".trim($_POST['user_id'])."', '".trim($_POST['user_note'])."')")or die(mysql_error());;
		
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
	{
		$sql=  mysql_query("update tb_mynote set mynoteNote='".trim($_POST['user_note'])."' where mynoteUserId = ".trim($_POST['user_id'])."")or die(mysql_error());;
		
		if($sql)
		{
			echo json_encode(array('mensagem'=>'success'));
		}
		else
		{
			echo json_encode(array('mensagem'=>'fail'));
		}
	}
}



?>