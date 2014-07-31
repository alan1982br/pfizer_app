// JavaScript Document
// Js_pesquisa.js
// por Rafael Alves
// ralves.sql@gmail.com
// @ralves_sql



function handleCreateElementsMenuPesquisa2(){

ExternalFileUtil.openWith(
     "http://192.168.0.121/pfizer_app/adm/pdf/teste.pdf",
     "com.adobe.pdf" );

}


function handleCreateElementsMenuPesquisa()
{
	//console.log("elemnts pesquisa");
		 
	 
	 	$('#pagePesquisaMenusUl').empty();
		$('#pagePesquisaMenusUl').append('<li data-role="list-divider">Escolha uma pesquisa:</li>');
		 
		$('#pagePesquisaMenusUl').append('<li><input id="btnPesquisa1" type="button" value="Pesquisa dia 25/07"></li>');
		$('#pagePesquisaMenusUl').append('<li><input id="btnPesquisa2" type="button" value="Pesquisa dia 26/07"></li>');
		$('#pagePesquisaMenusUl').append('<li><input id="btnPesquisa3" type="button" value="AVALIA&Ccedil;&Atilde;O GERAL"></li>');
		$('#pagePesquisaMenusUl').append('<li><div id="sleepNote"></div></li>');
		$('#pagePesquisaMenusUl').trigger("create");
		
		
		$('#btnPesquisa1').click(function ()
		{
			console.log("elemnts btnPesquisa1"); 
			// $('#pagePesquisaMenusUl').empty();
	         $.mobile.changePage( "#pesquisa", { transition: "fade"});
	         oiPesquisa();
		});

		$('#btnPesquisa2').click(function ()
		{
			 console.log("elemnts btnPesquisa2"); 
		 
	         $.mobile.changePage( "#pesquisa_2", { transition: "fade"});
	         oiPesquisa(); 
		});

		$('#btnPesquisa3').click(function ()
		{
			 $.mobile.changePage( "#pesquisa_3", { transition: "fade"});
	         oiPesquisa(); 
		});
		
		$('#pagePesquisaMenusUl').listview('refresh');


}
 

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
 
	var pergunta_10 = 'Deixe aqui seus comentários:';
	var arrPerguntas = Array();
	arrPerguntas.push(pergunta_1, pergunta_2, pergunta_10);
	
	var resposta_1 = $('#pergunta_1').val();
	var resposta_2 = $('#pergunta_2').val();

	var typeQuestion_1 = "1_Dia_25_07";
	 
	var resposta_10 = $('#textareaPesquisa').val();
	var arrRespostas = Array();
	arrRespostas.push(resposta_1, resposta_2, resposta_10);
	
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
		typeQuestion:typeQuestion_1,
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
/*
//-- HandleSaveNote
function handleGetNotas(a)
{

	$.getJSON(ExternalURL+'adm/lib/php/sm_mynote.php?acao=getNotas&userId='+UserId+'&format=json',
		
		function(data){
				alert(data.mensagem);
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
	    });
}
*/
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