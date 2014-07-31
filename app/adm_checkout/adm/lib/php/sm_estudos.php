<?php
@session_start();

include('../../lib/php/config.php');

$objEstudos = new estudos();

$acao = trim(@$_GET['acao']);
$acao2 = trim(@$_POST['acao']);


if($acao == 'select')
{
	$arrReturn = $objEstudos->selectEstudos();
	
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
if($acao2 == 'insertUsuariosEstudos')
{
	
	$id = @$_POST['user_id'];
	$estudos = @$_POST['estudos'];
	
	if(count($estudos) == 0)
	{
		$sqlSelect = mysql_query('delete from tb_usuarios_estudos where usuarios_estudosUsuariosId = '.$id.'');
		echo 'success';
	}
	else
	{
	$sqlSelect = mysql_query('select * from tb_usuarios_estudos where usuarios_estudosUsuariosId = '.$id.'');
	$num = mysql_num_rows($sqlSelect);
	
	if($num > 0)
	{
		$sqlSelect = mysql_query('delete from tb_usuarios_estudos where usuarios_estudosUsuariosId = '.$id.'');
		for($i=0; $i<count($estudos); $i++)
		{
			$sql = mysql_query("insert into tb_usuarios_estudos (usuarios_estudosUsuariosId, usuarios_estudosEstudosId, usuarios_estudosStatus) VALUES (".$id.", ".$estudos[$i].", 1)");
			
		}
		echo 'success';
	}
	else
	{
		for($i=0; $i<count($estudos); $i++)
		{
			$sql = mysql_query("insert into tb_usuarios_estudos (usuarios_estudosUsuariosId, usuarios_estudosEstudosId, usuarios_estudosStatus) VALUES (".$id.", ".$estudos[$i].", 1)");
			
			
		}
		echo 'success';
	}
	
	}
	
}
/*
if($acao2 == 'getEstudosTipo')
{
	$userId = trim($_POST['userId']);
	$arrAulas = trim($_POST['userId']);
	
	$sql = mysql_query("select * from tb_estudos_tipos ORDER by estudos_tipoId")or die(mysql_error());
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

*/

?>