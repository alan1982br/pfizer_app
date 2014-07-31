// JavaScript Document
// Js_agenda.js
// por Rafael Alves
// ralves.sql@gmail.com
// @ralves_sql


//-- StateMachine
function StateMachine(strAction)
{
	
	switch(strAction)
	{
		case 'handleGetDadosAgenda':
			  db.transaction(handleStartDbAgendaSuccess, handleStartDbAgendaError);
			  break;
	}
}


//-- handleStartDbAgendaError
function handleStartDbAgendaError(tx, result)
{
	handleAlert('Erro!', '#Agenda: Houve um Erro. Informe um Técnico.');
}

//-- handleStartDbAgendaSuccess
function handleStartDbAgendaSuccess(tx, result)
{
	var sql = "select * from tb_palestras a, tb_palestrantes b, tb_palestras_palestrantes c "+
			  " where a.palestrasId = c.palestras_palestrantesPalestrasId AND "+
			  		" b.palestrantesId = c.palestras_palestrantesPalestrantesId "+
					" OR b.palestrantesId != null GROUP by a.palestrasTitulo ORDER by a.palestrasId ASC";
	tx.executeSql(sql, [], handleSelectAgendaSuccess, handleStartDbAgendaError);
}

//-- handleSelectAgendaSuccess
var countItens = 0;
function handleSelectAgendaSuccess(tx, result)
{
	var numItens = result.rows.length;
	
		while(countItens < numItens)
		{
			var employee = result.rows.item(countItens);
			
			$('#ulAgenda').append('<li data-role="list-divider">'+employee.palestrasHora+': '+employee.palestrasTitulo+'</li>');
			
				
			if(employee.palestrasTipo == 2)
			{
				$('#ulAgenda')
				.append('<li data-theme="c"><p><em>'+employee.palestrasDescricao+'</em></p></li>');
			}
			else if(employee.palestrasTipo == 3)
			{
				$('#ulAgenda')
				.append('<li data-theme="c"><p><em>'+employee.palestrasDescricao+'</em></p>'+
				'<p><b>Palestrante: </b>'+employee.palestrantesNome+'</p></li>');
			}
			else
			{
				
				$('#ulAgenda')
				.append('<li data-theme="c"><a href="#dadosPalestrantes" onclick="handleGetDetalhesAgenda('+employee.palestrantesId+',\''+employee.palestrantesTipo+'\',\''+employee.palestrantesNome+'\', \''+employee.palestrantesDescricao+'\', \''+employee.palestrantesFoto+'\', \''+employee.palestrasDescricao+'\')" data-transition="slide">'+
				'<p><em>'+employee.palestrasDescricao+'</em></p>'+
				'<p><b>Palestrante: </b>'+employee.palestrantesNome+'</p>'+
				'</a></li>');
			}
			countItens++;
		}
	
	$('#ulAgenda').listview('refresh');
	
	StateMachineNotas('handleGetDadosNotas');
}

function handleGetDetalhesAgenda(strId, strTipo, strNome, strCurriculo, strFoto, strDescricao)
{
	//userId = strId;
	
	$('#pageDetalheUl').empty();
	$.mobile.changePage( "#page-detalhes", { transition: "fade"});
	$("#textPageDetalhe").text('Detalhes da Aula');
	$('#descricao-page-detalhes').html(strDescricao);
	
	
	if(strTipo == 0)
	{
		$('#pageDetalheUl').append('<li data-role="list-divider">Palestrante</li>');
		$('#pageDetalheUl')
				.append('<li><a href="#" onClick="handleViewMinicurriculo(\''+strFoto+'\', \''+strNome+'\', \''+strCurriculo+'\')">'+
        				'<img src="images/template_ipad/images/palestrantes/'+strFoto+'" >'+
						'<h2>'+strNome+'</h2>'+
						'<p>'+strCurriculo+'</p></a>'+
						'</li>');
						
		$('#pageDetalheUl').append('<li data-role="list-divider">Anota&ccedil;&otilde;es</li>');
		$('#pageDetalheUl').append('<li><textarea  name="textarea" id="textareaNote" style="height:300px; padding:10px; overflow:scroll;"></textarea></li>');
		$('#pageDetalheUl').append('<li><input id="btSaveNotas" type="button" value="Salvar anota&ccedil;&otilde;es"></li>');
		$('#pageDetalheUl').append('<li><div id="sleepNote"></div></li>');
		$('#pageDetalheUl').trigger("create");
		
		$('#btSaveNotas').click(function ()
		{
			handleSaveNote($('#textareaNote'));
		});
		StateMachineNotas('handleGetDadosNotas');
	}
	
	$('#pageDetalheUl').listview('refresh');
}

function handleViewMinicurriculo(a, b, c)
{
	$.mobile.changePage( "#page-miniCurriculo", { transition: "slideup"});
	$('#descricao-page-detalhes-mini-curriculo').empty();

	$("#nomePalestrante").text(b);
	$("#descricao-page-detalhes-mini-curriculo").append('<img src="images/template_ipad/images/palestrantes/'+a+'" style="float:left;padding:10px;"> '+c);
	
}