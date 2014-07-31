// JavaScript Document
// Js_notas.js
// por Rafael Alves
// ralves.sql@gmail.com
// @ralves_sql


//-- StateMachine
function StateMachineNotas(strAction)
{
	
	switch(strAction)
	{
		case 'handleGetDadosNotas':
			    handleGetNotas($('#textareaNote'));
			    break;
				
		case 'handleCreateElementsNotas':
			    handleCreateElementsNotas();
			    break;
				
	}
}


//-- handleStartDbNotasError
function handleStartDbNotasError(tx, result)
{
	handleAlert('Erro!', '#Notas: Houve um Erro. Informe um Técnico.');	
}


//-- HandleSaveNote
function handleSaveNote(a)
{
	
	$('#btSaveNotas').hide();
	$('#sleepNote').html('Por favor aguarde...');
	var texto = a.val();
	
	$.post(ExternalURL+"adm/lib/php/sm_mynote.php", {user_id: UserId, user_note:texto, format:'json' }, 
		function(data)
		{
			
			if(data.mensagem == 'fail')
				{
					
					alert(html_entity_decode('Houve uma falha ao salvar as Anota&ccedil;&otilde;es. Informe um t&eacute;cnico.'));
				}
				else
				{
					
					$('#btSaveNotas').show();
					$('#sleepNote').html('');
					alert(html_entity_decode('Anota&ccedil;&otilde;es salvas com sucesso!'));
					
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