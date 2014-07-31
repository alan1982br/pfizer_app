// JavaScript Document
// Js_Perguntas.js
// por Rafael Alves
// ralves.sql@gmail.com
// @ralves_sql


//-- StateMachine
function StateMachinePerguntas(strAction)
{
	
	switch(strAction)
	{
		case 'handleGetDadosPerguntas':
			    handleGetPerguntas($('#textareaNote'));
			    break;
				
		case 'handleCreateElementsPerguntas':
			    handleCreateElementsPerguntas();
			  
			    break;
				
	}
}


//-- handleStartDbPerguntasError
function handleStartDbPerguntasError(tx, result)
{
	handleAlert('Erro!', '#Perguntas: Houve um Erro. Informe um Técnico.');	
}


//-- HandleSaveNote
function handleSavePergunta(a)
{
	
	$('#btSavePerguntas').hide();
	$('#sleepNote').html('Por favor aguarde...');
	var texto = a.val();
	
	//alert('Texto: '+texto + ' - Nome: '+ nomeUser + ' - ID: '+ UserId);
	$.post(ExternalURL+"adm/lib/php/sm_perguntas.php", {acao:'insert', user_id:UserId, user_nome:nomeUser, user_note:texto, format:'json' }, 
		function(data)
		{
			
			if(data == 'fail')
				{
					
					alert(html_entity_decode('Houve uma falha ao salvar a pergunta. Informe um t&eacute;cnico.'));
				}
				else
				{
					
					$('#btSavePerguntas').show();
					$('#sleepNote').html('');
					alert(html_entity_decode('Pergunta realizada com sucesso! Obrigado.'));
					handleCreateElementsPerguntas();
					
				}
		});
			
}

//-- handleCreateElementsPerguntas
function handleCreateElementsPerguntas()
{
		$('#pagePerguntasUl').empty();
		$('#pagePerguntasUl').append('<li data-role="list-divider">Envie-nos sua(s) pergunta(s)</li>');
		$('#pagePerguntasUl').append('<li><textarea  name="textarea" id="textareaPergunta2" style="height:300px; padding:10px; overflow:scroll;"></textarea></li>');
		$('#pagePerguntasUl').append('<li><input id="btSavePerguntas2" type="button" value="Enviar Pergunta"></li>');
		$('#pagePerguntasUl').append('<li><div id="sleepNote"></div></li>');
		$('#pagePerguntasUl').trigger("create");
		
		
		$('#btSavePerguntas2').click(function ()
		{
			handleSavePergunta($('#textareaPergunta2'));
		});
		
		$('#pagePerguntasUl').listview('refresh');
}