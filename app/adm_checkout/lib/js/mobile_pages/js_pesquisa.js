// JavaScript Document
// Js_pesquisa.js
// por Rafael Alves
// ralves.sql@gmail.com
// @ralves_sql

function oiPesquisa()
{
	$('#nomeDrPesquisa').html('Prezado (a) <strong>Dr(a). '+nomeUser+'</strong>,');
	// '+nomeUser+'
}
//-- handleValidaPesquisa
function handleValidaPesquisa()
{
	
	
	
	if($('#pergunta_1').val() == "" ||
	   $('#pergunta_2').val() == "" ||
	   $('#pergunta_3').val() == "" ||
	   $('#pergunta_4').val() == "" ||
	   $('#pergunta_5').val() == "" ||
	   $('#pergunta_6').val() == "" ||
	   $('#pergunta_7').val() == "" ||
	   $('#pergunta_8').val() == "" ||
	   $('#pergunta_9').val() == "" ||
	   $('#textareaPesquisa').val() == "")
	   {
		   alert('Por favor preencher todos os campos.');
	   }
	   else
	   {
		   handleSavePesquisa();
	   }
	   
}


//-- HandleSaveNote
function handleSavePesquisa(a)
{
	
	var pergunta_1 = $('#label_pergunta_1').text();
	var pergunta_2 = $('#label_pergunta_2').text();
	var pergunta_3 = $('#label_pergunta_3').text();
	var pergunta_4 = $('#label_pergunta_4').text();
	var pergunta_5 = $('#label_pergunta_5').text();
	var pergunta_6 = $('#label_pergunta_6').text();
	var pergunta_7 = $('#label_pergunta_7').text();
	var pergunta_8 = $('#label_pergunta_8').text();
	var pergunta_9 = $('#label_pergunta_9').text();
	var pergunta_10 = 'Deixe aqui seus comentários:';
	var arrPerguntas = Array();
	arrPerguntas.push(pergunta_1, pergunta_2, pergunta_3, pergunta_4, pergunta_5, pergunta_6, pergunta_7, pergunta_8, pergunta_9, pergunta_10);
	
	var resposta_1 = $('#pergunta_1').val();
	var resposta_2 = $('#pergunta_2').val();
	var resposta_3 = $('#pergunta_3').val();
	var resposta_4 = $('#pergunta_4').val();
	var resposta_5 = $('#pergunta_5').val();
	var resposta_6 = $('#pergunta_6').val();
	var resposta_7 = $('#pergunta_7').val();
	var resposta_8 = $('#pergunta_8').val();
	var resposta_9 = $('#pergunta_9').val();
	var resposta_10 = $('#textareaPesquisa').val();
	var arrRespostas = Array();
	arrRespostas.push(resposta_1, resposta_2, resposta_3, resposta_4, resposta_5, resposta_6, resposta_7, resposta_8, resposta_9, resposta_10);
	
	$('#btSavePerguntas').hide();
	$('#sleepNote').html('Por favor aguarde...');
	//var texto = a.val();
	
	//alert('Texto: '+texto + ' - Nome: '+ nomeUser + ' - ID: '+ UserId);
	$.post(ExternalURL+"adm/lib/php/sm_pesquisas.php", {
		acao:'insert', 
		user_id:UserId, 
		user_nome:nomeUser, 
		perguntas:arrPerguntas, 
		respostas:arrRespostas, 
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

//-- HandleSaveNote
function handleGetNotas(a)
{

	$.getJSON(ExternalURL+'adm/lib/php/sm_mynote.php?acao=getNotas&userId='+UserId+'&format=json',
		
		function(data){
				
			if(data.mensagem == 'fail')
			{
				handleAlert('Alerta!', 'Houve uma falha ao recuperar as anota&ccedil;&otilde;es. Informe um técnico.');
			}
			else
			{
				
				a.text(data.mensagem);
				//$('#textareaNote').trigger('create');
			}
		
	    });
}

//-- handleCreateElementsNotas
function handleCreateElementsNotas()
{
		$('#pageNotasUl').empty();
		$('#pageNotasUl').append('<li data-role="list-divider">Anota&ccedil;&otilde;es</li>');
		$('#pageNotasUl').append('<li><textarea  name="textarea" id="textareaNote2" style="height:300px; padding:10px; overflow:scroll;"></textarea></li>');
		$('#pageNotasUl').append('<li><input id="btSaveNotas2" type="button" value="Salvar anota&ccedil;&otilde;es"></li>');
		$('#pageNotasUl').append('<li><div id="sleepNote"></div></li>');
		$('#pageNotasUl').trigger("create");
		
		
		handleGetNotas($('#textareaNote2'));
		
		$('#btSaveNotas2').click(function ()
		{
			handleSaveNote($('#textareaNote2'));
		});
		
		$('#pageNotasUl').listview('refresh');
}