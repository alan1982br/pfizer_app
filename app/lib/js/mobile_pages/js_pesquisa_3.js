// JavaScript Document
// Js_pesquisa.js
// por Rafael Alves
// ralves.sql@gmail.com
// @ralves_sql



 
//-- handleValidaPesquisa
function handleValidaPesquisa3()
{
	
	
	
	if($('#pergunta_3_1').val() == "" ||
	   $('#pergunta_3_2').val() == "" ||
	   $('#pergunta_3_3').val() == "" ||
	   $('#pergunta_3_4').val() == "" ||
	   $('#pergunta_3_5').val() == "" ||
	   $('#pergunta_3_6').val() == "" ||
	   $('#pergunta_3_7').val() == "" ||
	   $('#pergunta_3_8').val() == "" ||
	   
	   $('#textareaPesquisa_3').val() == "")
	   {
		   alert('Por favor preencher todos os campos .');
	   }
	   else
	   {
		   handleSavePesquisa3();
	   }
	   
}


//-- HandleSaveNote
function handleSavePesquisa3(a)
{
	
	var pergunta_3_1 = $('#label_pergunta_3_1').text();
	var pergunta_3_2 = $('#label_pergunta_3_2').text();
	var pergunta_3_3 = $('#label_pergunta_3_3').text();
	var pergunta_3_4 = $('#label_pergunta_3_4').text();
	var pergunta_3_5 = $('#label_pergunta_3_5').text();
	var pergunta_3_6 = $('#label_pergunta_3_6').text();
	 
	 
	var pergunta_3_10 = 'Deixe aqui seus comentários:';
	var arrPerguntas_3 = Array();
	arrPerguntas_3.push(pergunta_3_1, pergunta_3_2, pergunta_3_3, pergunta_3_4, pergunta_3_5, pergunta_3_6, pergunta_3_10);
	
	var resposta_3_1 = $('#pergunta_3_1').val();
	var resposta_3_2 = $('#pergunta_3_2').val();
	var resposta_3_3 = $('#pergunta_3_3').val();
	var resposta_3_4 = $('#pergunta_3_4').val();
	var resposta_3_5 = $('#pergunta_3_5').val();
	var resposta_3_6 = $('#pergunta_3_6').val();
 
	var typeQuestion_3 = "3_Avaliacao_Geral";
	 
	var resposta_3_10 = $('#textareaPesquisa_3').val();
	var arrRespostas_3 = Array();
	arrRespostas_3.push(resposta_3_1, resposta_3_2, resposta_3_3, resposta_3_4, resposta_3_5, resposta_3_6, resposta_3_10);
	
	$('#btSavePerguntas').hide();
	$('#sleepNote').html('Por favor aguarde...');
	//var texto = a.val();
	
	//alert('Texto: '+texto + ' - Nome: '+ nomeUser + ' - ID: '+ UserId);
	$.post(ExternalURL+"adm/lib/php/sm_pesquisas.php", {
		acao:'insert', 
		user_id:UserId, 
		user_nome:nomeUser, 
		perguntas:arrPerguntas_3, 
		respostas:arrRespostas_3,
		typeQuestion:typeQuestion_3,
		format:'json' }, 
		function(data)
		{
			
			if(data == 'fail')
				{
					
					alert(html_entity_decode('Houve uma falha ao salvar a pesquisa. Informe um t&eacute;cnico.'));
				}
				else
				{
					
					$('#btSavePerguntas').show();
					$('#sleepNote').html('');
					alert(html_entity_decode('Pesquisa realizada com sucesso! Obrigado.'));
					
				}
		});
			
}
 