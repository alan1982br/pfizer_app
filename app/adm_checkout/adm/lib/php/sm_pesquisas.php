<?php
include('../../lib/php/config.php');
$acao = trim(@$_POST['acao']);
if($acao == 'insert')
{
	$userId = trim($_POST['user_id']);
	$userNome = trim($_POST['user_nome']);
	
	$perguntas = $_POST['perguntas'];
	$respostas = $_POST['respostas'];
	
	for($i=0; $i<count($perguntas); $i++)
	{
		$sql=  mysql_query("insert into tb_pesquisas (pesquisasUserId, pesquisasUserNome, pesquisasPergunta, pesquisasResposta, pesquisasStatus) VALUES (".$userId.",'".$userNome."','".$perguntas[$i]."', '".$respostas[$i]."',1 )");
		
	}
	echo 'success';
}
?>