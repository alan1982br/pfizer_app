// JavaScript Document
// Js_aulas.js
// por Rafael Alves
// ralves.sql@gmail.com
// @ralves_sql


//-- StateMachine
function StateMachineAulas(strAction)
{
	
	switch(strAction)
	{
		case 'handleGetDadosAulas':
			    db.transaction(handleDbAulasSuccess, handleStartDbAulasError);
			    break;
				
		case 'handleCreateElementsAulas':
			    handleCreateElementsAulas();
			    break;
				
	}
	
}

//-- handleDbAulasSuccess --//
function handleDbAulasSuccess(tx, result)
{
	var sql = "select * from tb_aulas";
	tx.executeSql(sql, [], handleSelectAulasSuccess, handleStartDbAulasError);
}

//-- handleSelectAulasSuccess --//
function handleSelectAulasSuccess(tx, result)
{
	var indiceSelectAulas = 0;
	
	var numItens = result.rows.length;
	
	$('#pageAulasContent').empty();
	
	$('#pageAulasContent').append('<fieldset data-role="controlgroup" id="ulAulas" data-theme="c" data-valido="nao"><legend>Selecione a(s) aula(s) que deseja receber posteiormente por e-mail:</legend>');
	
		while(indiceSelectAulas < numItens)
		{
			var employee = result.rows.item(indiceSelectAulas);
			
				$('#pageAulasContent')
				.append('<input type="checkbox" name="checkbox-1a" id="checkbox'+indiceSelectAulas+'" rel="ulAulas" checked>'+
				'<label for="checkbox'+indiceSelectAulas+'"><em>'+employee.aulasPalestrantesNome+'</em></label>');
				
			indiceSelectAulas++;
		}
		
	$('#pageAulasContent').append('<input type="button" name="" id="" value="Salvar" data-theme="b" onClick="handleValidaEstudos()">');
	$('#pageAulasContent').append('</fieldset>');
	$('#pageAulasContent').trigger('create');
}

//-- handleStartDbNotasError
function handleStartDbAulasError(tx, result)
{
	handleAlert('Erro!', '#Notas: Houve um Erro. Informe um Técnico.');	
}


//-- handleValidaEstudos()
function handleValidaEstudos()
{
	var arrEstudos = Array();
	
	$('fieldset').each(function(){
		$($('input[rel="' + this.id + '"]:checked')).each(function() {
			arrEstudos.push(this.id)
		});
	});
	
	
	$.post(ExternalURL+"adm/lib/php/sm_aulas.php", {user_id: UserId, aulas:arrEstudos, format:'json' }, 
		function(data)
		{
			alert(data.mensagem)
		}
	);
	//alert(arrEstudos)
	//if($('fieldset[data-valido="nao"]').size() > 0)alert('Por favor preencher todas as questões!');
}