<?php
include('config.php');


$acao = trim(@$_GET['acao']);

if($acao == 'insert')
{
	$cho = trim($_GET['opc1']);
	$insulina = trim($_GET['opc2']);
	$userId = trim($_GET['userId']);
	$questao = trim($_GET['questao']);
	
	
	$sqlCheckUserSalas = mysql_query("insert into tb_votacao (votacaoCho, votacaoInsulina, votacaoUsuariosId, votacaoQuestaoId) VALUES ('".$cho."', '".$insulina."', '".$userId."', '".$questao."')")or die(mysql_error());
	
	if($sqlCheckUserSalas)
		echo json_encode(array('mensagem'=>'success'));
	else
		echo json_encode(array('mensagem'=>'fail'));
	
}
?>