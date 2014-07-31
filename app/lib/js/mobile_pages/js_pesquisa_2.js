// JavaScript Document
// Js_pesquisa.js
// por Rafael Alves
// ralves.sql@gmail.com
// @ralves_sql



 
//-- handleValidaPesquisa
function handleValidaPesquisa2()
{
	
	
	
	if($('#pergunta_2_1').val() == "" ||
	   $('#pergunta_2_2').val() == "" ||
	   $('#pergunta_2_3').val() == "" ||
	   $('#pergunta_2_4').val() == "" ||
	   $('#pergunta_2_5').val() == "" ||
	   $('#pergunta_2_6').val() == "" ||
	   $('#pergunta_2_7').val() == "" ||
	   $('#pergunta_2_8').val() == "" ||
	   
	   $('#textareaPesquisa_2').val() == "")
	   {
		   alert('Por favor preencher todos os campos .');
	   }
	   else
	   {
		   handleSavePesquisa2();
	   }
	   
}


//-- HandleSaveNote
function handleSavePesquisa2(a)
{
	
	var pergunta_2_1 = $('#label_pergunta_2_1').text();
	var pergunta_2_2 = $('#label_pergunta_2_2').text();
	var pergunta_2_3 = $('#label_pergunta_2_3').text();
	var pergunta_2_4 = $('#label_pergunta_2_4').text();
	var pergunta_2_5 = $('#label_pergunta_2_5').text();
	var pergunta_2_6 = $('#label_pergunta_2_6').text();
	var pergunta_2_7 = $('#label_pergunta_2_7').text();
	var pergunta_2_8 = $('#label_pergunta_2_8').text();
	 
	var pergunta_2_10 = 'Deixe aqui seus comentários:';
	var arrPerguntas_2 = Array();
	arrPerguntas_2.push(pergunta_2_1, pergunta_2_2, pergunta_2_3, pergunta_2_4, pergunta_2_5, pergunta_2_6, pergunta_2_7, pergunta_2_8,   pergunta_2_10);
	
	var resposta_2_1 = $('#pergunta_2_1').val();
	var resposta_2_2 = $('#pergunta_2_2').val();
	var resposta_2_3 = $('#pergunta_2_3').val();
	var resposta_2_4 = $('#pergunta_2_4').val();
	var resposta_2_5 = $('#pergunta_2_5').val();
	var resposta_2_6 = $('#pergunta_2_6').val();
	var resposta_2_7 = $('#pergunta_2_7').val();
	var resposta_2_8 = $('#pergunta_2_8').val();
	var typeQuestion_2 = "2_Dia_26/07";
	 
	var resposta_2_10 = $('#textareaPesquisa_2').val();
	var arrRespostas_2 = Array();
	arrRespostas_2.push(resposta_2_1, resposta_2_2, resposta_2_3, resposta_2_4, resposta_2_5, resposta_2_6, resposta_2_7, resposta_2_8,   resposta_2_10);
	
	$('#btSavePerguntas').hide();
	$('#sleepNote').html('Por favor aguarde...');
	//var texto = a.val();
	
	//alert('Texto: '+texto + ' - Nome: '+ nomeUser + ' - ID: '+ UserId);
	$.post(ExternalURL+"adm/lib/php/sm_pesquisas.php", {
		acao:'insert', 
		user_id:UserId, 
		user_nome:nomeUser, 
		perguntas:arrPerguntas_2, 
		respostas:arrRespostas_2,
		typeQuestion:typeQuestion_2,
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
 