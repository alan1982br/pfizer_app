// JavaScript Document
// Js_agenda.js
// por Rafael Alves
// ralves.sql@gmail.com
// @ralves_sql


//-- StateMachine
function StateMachineAgenda2(strAction)
{
	
	switch(strAction)
	{
		case 'handleGetDadosAgenda2':
		console.log(strAction);
			  db.transaction(handleStartDbAgendaSuccess2, handleStartDbAgendaError2);
          //  $('#ulAgenda').empty();
            //handleAlert('ok', '#Agenda2: agenda2');
			  break;
	}
}


//-- handleStartDbAgendaError
function handleStartDbAgendaError2(tx, result)
{
	handleAlert('Erro!', '#Agenda: Houve um Erro. Informe um Técnico.');
}

//-- handleStartDbAgendaSuccess
function handleStartDbAgendaSuccess2(tx, result)
{
	/*var sql = "select * from tb_palestras a, tb_palestrantes b, tb_palestras_palestrantes c "+
			  " where a.palestrasId = c.palestras_palestrantesPalestrasId AND "+
			  		" b.palestrantesId = c.palestras_palestrantesPalestrantesId "+
					" OR b.palestrantesId != null GROUP by a.palestrasTitulo ORDER by a.palestrasId ASC";
					*/
	var sql = "select * from tb_palestras  WHERE palestrasData = '26'  ORDER by palestrasId ASC";
	tx.executeSql(sql, [], handleSelectAgendaSuccess2, handleStartDbAgendaError2);
}

//-- handleSelectAgendaSuccess
var countItens2 = 0;
var indicePalestrantesDb = 0;
var indicePalestrantesDb2 = 0;

function handleSelectAgendaSuccess2(tx, result)
{
	var id;
	var numItens = result.rows.length;
	var arrIds = Array();
	oi2()
		function oi2()
		{
			if(countItens2 < numItens)
			{
				
				var employee = result.rows.item(countItens2);
				
				$('#ulAgenda2').append('<li data-role="list-divider">'+employee.palestrasHora+': '+employee.palestrasDescricao+'</li>');
				if(employee.palestrasTipo != 2 && employee.palestrasTipo != 3)
				{
					$('#ulAgenda2')
					.append(
					'<li data-theme="c"><p><strong>Descri&ccedil;&atilde;o: </strong><em>'+employee.palestrasDescricao+'</em></p>'+
					'</a></li>');
				}
 
				id = employee.palestrasId;
				//arrIds.push(employee.palestrasId)
				console.log(employee.palestrasData);
				db.transaction(handleStartDbPalestrantesSuccess2, handleStartDbAgendaError2);
				function handleStartDbPalestrantesSuccess2(tx, result)
				{
					//alert('Num Itens: '+id);
					var sql = "select * from tb_palestras a, tb_palestrantes b, tb_palestras_palestrantes c "+
								" where a.palestrasId = c.palestras_palestrantesPalestrasId AND c.palestras_palestrantesPalestrasId = "+id+" AND "+
								" b.palestrantesId = c.palestras_palestrantesPalestrantesId "+
								" OR b.palestrantesId != null ORDER by b.palestrantesId ASC";
						
					tx.executeSql(sql, [], handleSetPalestrantesSuccess2, handleStartDbAgendaError2);
				}
                
				countItens2++;
				$('#ulAgenda2').listview('refresh');
			}
		}
 
    
    
			function handleStartDbAgendaError2(tx, result)
			{
				
				alert('Falha ao carregar os palestrantes!');
			}
	
			function handleSetPalestrantesSuccess2(tx, result)
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
                        
                        	$('#ulAgenda2')
                        	.append('<li data-theme="c"><p><em></em></p></li>');
					}
					else if(tipo == 3)
					{
						$('#ulAgenda2')
						.append('<li data-theme="c"><p><em>'+descricao+'</em></p>'+
						'<p><b>Palestrante(s): </b>'+palestrantesNome+'</p></li>');
					}
					else
					{
						
						$('#ulAgenda2')
						.append('<li data-theme="c"><a href="#dadosPalestrantes" onclick="handleGetDetalhesAgenda2('+employee2.palestrasId+', \''+employee2.palestrasDescricao+'\')" data-transition="slide">'+
						'<p><b>Palestrante(s): </b>'+palestrantesNome+'</p>'+
						'</a></li>');
					}
					$('#ulAgenda2').listview('refresh');
					
					
			oi2();
			}
	//handleBuscaPalestrantes(id);
	
	
			
	$('#ulAgenda2').listview('refresh');
	
	//StateMachineNotas('handleGetDadosNotas');
}
function handleGetDetalhesAgenda2(strId,strDescricao)
{
	//userId = strId;
	
	$('#pageDetalheUl').empty();
	$.mobile.changePage( "#page-detalhes", { transition: "fade"});
	
	$("#textPageDetalhe").text('Detalhes da Aula');
	$('#descricao-page-detalhes').html(strDescricao);
	
	
	db.transaction(DbDetalhesAgendaSuccess2, handleStartDbAgendaError2);
	function DbDetalhesAgendaSuccess2(tx, result)
	{
		//alert('Num Itens: '+id);
		var sql = "select * from tb_palestras a, tb_palestrantes b, tb_palestras_palestrantes c "+
					" where a.palestrasId = c.palestras_palestrantesPalestrasId AND c.palestras_palestrantesPalestrasId = "+strId+" AND "+
					" b.palestrantesId = c.palestras_palestrantesPalestrantesId "+
					" OR b.palestrantesId != null ORDER by b.palestrantesId ASC";
			
		tx.executeSql(sql, [], handleGetDataPalestrantesAgendaSuccess2, handleStartDbAgendaError2);
	}
	
	function handleGetDataPalestrantesAgendaSuccess2(tx, result)
	{
		
		var countItens3 = 0;
				
		var numItens3 = result.rows.length;
		$('#pageDetalheUl').append('<li data-role="list-divider">Palestrante(s)</li>');
		while(countItens3 < numItens3)
		{
			var employee3 = result.rows.item(countItens3);
			tipo = employee3.palestrantesTipo;


			  var str2 = employee3.palestrantesDescricao; 
                         var splitted2 = str2.slice(0,100);
			
				if(tipo == 0)
			{
				
				$('#pageDetalheUl')
						 

						.append('<li><a href="#" onClick="handleViewMinicurriculo(\''+employee3.palestrantesNome+'\', \''+employee3.palestrantesDescricao+'\',\''+employee3.palestrantesFoto+'\')">'+
								'<img src="images/template_ipad/images/palestrantes/'+employee3.palestrantesFoto+'" width="300" height="300">'+
								'<h2>'+employee3.palestrantesNome+'</h2>'+

								'<p>'+splitted2+'</p></a>'+
								'</li>');
						$('#pageDetalheUl').listview('refresh');	

						
						//console.log("splitted " + splitted2);	
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
	
		//StateMachineNotas('handleGetDadosNotas');
}

function handleViewMinicurriculo2(b, c, d)
{
	$.mobile.changePage( "#page-miniCurriculo", { transition: "slideup"});
	$('#descricao-page-detalhes-mini-curriculo').empty();
	

	$("#nomePalestrante").text(b);
	$("#descricao-page-detalhes-mini-curriculo").append(c);
	$("#descricao-page-detalhes-mini-curriculo").append('<img src="images/template_ipad/images/palestrantes/'+d+'" style="float:left;padding:10px" width="500"  > ');
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