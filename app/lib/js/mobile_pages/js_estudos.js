// JavaScript Document
// Js_estudos.js
// por Rafael Alves
// ralves.sql@gmail.com
// @ralves_sql


//-- StateMachine
function StateMachineEstudos(strAction)
{
	$('#pageEstudosContent').empty();
	switch(strAction)
	{
		case 'handleGetDadosEstudos':
			  db.transaction(handleStartDbEstudosTipoSuccess, handleStartDbEstudosError);
			  break;
	}
}


//-- handleStartDbAgendaError
function handleStartDbEstudosError(tx, result)
{
	
	handleAlert('Erro!', '#Estudos: Houve um Erro. Informe um Técnico.');
}

//-- handleStartDbAgendaSuccess
function handleStartDbEstudosTipoSuccess(tx, result)
{
	var sql = "select * FROM tb_estudos_tipo"
			  " ORDER by estudos_tipoId ASC";
	tx.executeSql(sql, [], handleSelectEstudosTipoSuccess, handleStartDbEstudosError);
}

//-- handleSelectAgendaSuccess

function handleSelectEstudosTipoSuccess(tx, result)
{
	var indiceEstudos = 0;
	var indiceEstudos2 = 0;
	var numItens = result.rows.length;
	var checkk = '';
	handleAppendItens();
	
	
	
	
	
	function handleAppendItens()
	{
		
		if(indiceEstudos < numItens)
		{
			var employee = result.rows.item(indiceEstudos);
			
			$('#pageEstudosContent').append('<li data-role="list-divider">'+employee.estudos_tipoNome+'</li>');
			
			
				var sql = "select * FROM tb_estudos where estudosTipoId = "+employee.estudos_tipoId+""
			  			  " ORDER by estudosId ASC";
						  tx.executeSql(sql, [], handleSelectEstudosSuccess, handleStartDbEstudosError);
				
				
				function handleSelectEstudosSuccess(tx2, result2)
				{
					var numItens2 = result2.rows.length;
					
					while(indiceEstudos2 < numItens2)
					{
						var employee2 = result2.rows.item(indiceEstudos2);
						if(employee2.estudosStatus == 0)
						{
							checkk='';
						}
						else if (employee2.estudosStatus == 1)
						{
							checkk='checked';
						}
						
						$('#pageEstudosContent')
						.append('<li data-theme="c"><input type="checkbox" name="checkbox-1a" id="'+employee2.estudosId+'" rel="ulAulas" '+checkk+' ><label style="font-weight:normal;" for="'+employee2.estudosId+'"><strong>T&iacute;tulo:</strong> '+employee2.estudosDescricao+'<br><strong>Autores:</strong> <em>'+employee2.estudosAutor+'</em></label>'+'</li>');
						
						indiceEstudos2++;
						//console.log('ID: '+employee2.estudosId);
					}
					
					
					indiceEstudos2=0;
					indiceEstudos++;
					handleAppendItens()
				}
		
		
		}
		$('#pageEstudosContent').trigger('create');
		$('#pageEstudosContent').listview('refresh');
	
	}
		
	StateMachineNotas('handleGetDadosNotas');
}




//-- handleValidaEstudos()
function handleValidaEstudos()
{
	var arrEstudos = Array();
	
		$($('input[rel="ulAulas"]:checked')).each(function() {
			arrEstudos.push(this.id)
		});
		
	
	$.post(ExternalURL+"adm/lib/php/sm_estudos.php", {acao:'insertUsuariosEstudos',user_id: UserId, estudos:arrEstudos, format:'json' }, 
		function(data)
		{
			//alert(data);
			if(data == 'success')
			{
				alert('Estudos salvos com sucesso! Obrigado.');	
				db.transaction(handleSaveSuccess, handleSaveError);
				
				function handleSaveError(tx, result)
				{
					alert('Falha ao salvar os Estudos.');
				}
				function handleSaveSuccess(tx, result)
				{
					if(arrEstudos.length == 0)
					{
						tx.executeSql("UPDATE tb_estudos set estudosStatus = 0 WHERE 1");
						
					}
					else
					{
						for(var i=0; i< arrEstudos.length; i++)
						{
							tx.executeSql("UPDATE tb_estudos set estudosStatus = 1 WHERE estudosId="+arrEstudos[i]+"");
						}
					}
				}
			}
		}
	);
	//alert(arrEstudos)
	//if($('fieldset[data-valido="nao"]').size() > 0)alert('Por favor preencher todas as questões!');
}