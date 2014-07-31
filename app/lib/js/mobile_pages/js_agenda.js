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
			//   $('#ulAgenda2').refresh();
			console.log(strAction);
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
	/*var sql = "select * from tb_palestras a, tb_palestrantes b, tb_palestras_palestrantes c "+
			  " where a.palestrasId = c.palestras_palestrantesPalestrasId AND "+
			  		" b.palestrantesId = c.palestras_palestrantesPalestrantesId "+
					" OR b.palestrantesId != null GROUP by a.palestrasTitulo ORDER by a.palestrasId ASC";
					*/
	var sql = "select * from tb_palestras  WHERE palestrasData = '25'  ORDER by palestrasId ASC";
	tx.executeSql(sql, [], handleSelectAgendaSuccess, handleStartDbAgendaError);
}

//-- handleSelectAgendaSuccess
var countItens = 0;
var indicePalestrantesDb = 0;
var indicePalestrantesDb2 = 0;

function handleSelectAgendaSuccess(tx, result)
{
	var id;
	var numItens = result.rows.length;
	var arrIds = Array();
	oi()
		function oi()
		{
			if(countItens < numItens)
			{
				
				var employee = result.rows.item(countItens);
				
				$('#ulAgenda').append('<li data-role="list-divider">'+employee.palestrasHora+': '+employee.palestrasDescricao+'</li>');
				if(employee.palestrasTipo != 2 && employee.palestrasTipo != 3)
				{
					$('#ulAgenda')
					.append(
					'<li data-theme="c"><p><strong>Descri&ccedil;&atilde;o: </strong><em>'+employee.palestrasDescricao+'</em></p>'+
					'</a></li>');
				}
                
               
                
				
				id = employee.palestrasId;
				//arrIds.push(employee.palestrasId)
				
				db.transaction(handleStartDbPalestrantesSuccess, handleStartDbAgendaError);
				function handleStartDbPalestrantesSuccess(tx, result)
				{
					//alert('Num Itens: '+id);
					var sql = "select * from tb_palestras a, tb_palestrantes b, tb_palestras_palestrantes c "+
								" where a.palestrasId = c.palestras_palestrantesPalestrasId AND c.palestras_palestrantesPalestrasId = "+id+" AND "+
								" b.palestrantesId = c.palestras_palestrantesPalestrantesId "+
								" OR b.palestrantesId != null ORDER by b.palestrantesId ASC";
						
					tx.executeSql(sql, [], handleSetPalestrantesSuccess, handleStartDbAgendaError);
				}
				countItens++;
				$('#ulAgenda').listview('refresh');
			}
		}
 
    
    
			function handleStartDbAgendaError(tx, result)
			{
				
				alert('Falha ao carregar os palestrantes!');
			}
	
			function handleSetPalestrantesSuccess(tx, result)
			{
				var countItens2 = 0;
				
				var numItens2 = result.rows.length;
				var palestrantesNome = '';
				var tipo = 0;
				var descricao = '';
				
				while(countItens2 < numItens2)
				{
					var employee2 = result.rows.item(countItens2);
					tipo = employee2.palestrasTipo;
					descricao = employee2.palestrasDescricao;
					palestrantesNome += employee2.palestrantesNome+', ';
					//alert('COUNT: '+employee2.palestrasTipo);
					
					
					countItens2++;
				}
				
				if(tipo == 2)
					{
					//	$('#ulAgenda')
					//	.append('<li data-theme="c"><p><em>'+descricao+'</em></p></li>');
                        
                        	$('#ulAgenda')
                        	.append('<li data-theme="c"><p><em></em></p></li>');
					}
					else if(tipo == 3)
					{
						$('#ulAgenda')
						.append('<li data-theme="c"><p><em>'+descricao+'</em></p>'+
						'<p><b>Palestrante(s): </b>'+palestrantesNome+'</p></li>');
					}
					else
					{
						
						$('#ulAgenda')
						.append('<li data-theme="c"><a href="#dadosPalestrantes" onclick="handleGetDetalhesAgenda('+employee2.palestrasId+', \''+employee2.palestrasDescricao+'\')" data-transition="slide">'+
						'<p><b>Palestrante(s): </b>'+palestrantesNome+'</p>'+
						'</a></li>');
                      
					}
					$('#ulAgenda').listview('refresh');
					
					
			oi()
			}
	//handleBuscaPalestrantes(id);
	
	
			
	$('#ulAgenda').listview('refresh');
	
	StateMachineNotas('handleGetDadosNotas');
}
function handleGetDetalhesAgenda(strId,strDescricao)
{
	//userId = strId;
	
	$('#pageDetalheUl').empty();
	$.mobile.changePage( "#page-detalhes", { transition: "fade"});
	
	$("#textPageDetalhe").text('Detalhes da Aula');
	$('#descricao-page-detalhes').html(strDescricao);
	
	
	db.transaction(DbDetalhesAgendaSuccess, handleStartDbAgendaError);
	function DbDetalhesAgendaSuccess(tx, result)
	{
		//alert('Num Itens: '+id);
		var sql = "select * from tb_palestras a, tb_palestrantes b, tb_palestras_palestrantes c "+
					" where a.palestrasId = c.palestras_palestrantesPalestrasId AND c.palestras_palestrantesPalestrasId = "+strId+" AND "+
					" b.palestrantesId = c.palestras_palestrantesPalestrantesId "+
					" OR b.palestrantesId != null ORDER by b.palestrantesId ASC";
			
		tx.executeSql(sql, [], handleGetDataPalestrantesAgendaSuccess, handleStartDbAgendaError);
	}
	
	function handleGetDataPalestrantesAgendaSuccess(tx, result)
	{
		
		var countItens3 = 0;
				
		var numItens3 = result.rows.length;
		
                         


		$('#pageDetalheUl').append('<li data-role="list-divider">Palestrante(s)</li>');
		while(countItens3 < numItens3)
		{
			
              
			var employee3 = result.rows.item(countItens3);
			tipo = employee3.palestrantesTipo;
			
                         var str = employee3.palestrantesDescricao; 
                         var splitted = str.slice(0,100);

			if(tipo == 0)
			{
				
				$('#pageDetalheUl')
						 

						.append('<li><a href="#" onClick="handleViewMinicurriculo(\''+employee3.palestrantesNome+'\', \''+employee3.palestrantesDescricao+'\',\''+employee3.palestrantesFoto+'\')">'+
								'<img src="images/template_ipad/images/palestrantes/'+employee3.palestrantesFoto+'" width="300" height="300">'+
								'<h2>'+employee3.palestrantesNome+'</h2>'+

								'<p>'+splitted+'</p></a>'+
								'</li>');
						$('#pageDetalheUl').listview('refresh');	

						
						console.log("splitted " + splitted);	
			}
			countItens3++;
		}
		
		$('#pageDetalheUl').append('<li data-role="list-divider">Anota&ccedil;&otilde;es</li>');
		$('#pageDetalheUl').append('<li><textarea  name="textarea" id="textareaNote3" style="height:300px; padding:10px; overflow:scroll;"></textarea></li>');
		$('#pageDetalheUl').append('<li><input id="btSaveNotas" type="button" value="Salvar anota&ccedil;&otilde;es"></li>');
		$('#pageDetalheUl').append('<li><div id="sleepNote"></div></li>');
		$('#pageDetalheUl').trigger("create");
		
		handleGetNotas($('#textareaNote3'));
		
		$('#btSaveNotas').click(function ()
		{
			handleSaveNote($('#textareaNote3'));
		});
		$('#pageDetalheUl').listview('refresh');
	}
	
		StateMachineNotas('handleGetDadosNotas');
}

function handleViewMinicurriculo(b, c, d)
{
	$.mobile.changePage( "#page-miniCurriculo", { transition: "slideup"});
	$('#descricao-page-detalhes-mini-curriculo').empty();

	$("#nomePalestrante").text(b);
	$("#descricao-page-detalhes-mini-curriculo").append(c);
	$("#descricao-page-detalhes-mini-curriculo").append('<img src="images/template_ipad/images/palestrantes/'+d+'" style="float:left;padding:40px" width="500"  > ');
	
}


/*
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
	//$("#descricao-page-detalhes-mini-curriculo").append('<img src="images/template_ipad/images/palestrantes/'+a+'" style="float:left;padding:10px;"> '+c);
	
}
*/