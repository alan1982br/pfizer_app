// JavaScript Document
$(window).load(function() {
	
	var myImage;
	
	//carregando logo bg
	$('#div_botao_acesso').click(function(){
		
		
		$('#div_modal').fadeIn('slow');
		$('#div_base_login').fadeIn(function(){
			
			//complete
			$('#div_Login').bind('click', function(){
			   
			   if($('#sm_login').val() == "" || $('#sm_login').val() == " "  || $('#sm_senha').val() == "" || $('#sm_senha').val() == " ")
			   {
				  $("#message").html("( Preencha todos os campos! )");
			   }
			   else
			   {
				   $("#message").html("");
				   $.getJSON('lib/php/sm_login.php',{acao:'login', login:$('#sm_login').val(), senha:$('#sm_senha').val()},function(data){
			
						if(data.mensagem == 'erro')
						{
							$("#message").html("( Dados incorretos. )");
						}
						else
						{
							window.location = 'sm_pages.php';
						}
				   });
			   }
			});
			
			//SUBMIT ENTER
			$('#sm_senha').keypress(function(event){
				if(event.which == 13)
				{
					 if($('#sm_login').val() == "" || $('#sm_login').val() == " "  || $('#sm_senha').val() == "" || $('#sm_senha').val() == " ")
					   {
						  $("#message").html("( Preencha todos os campos! )");
					   }
					   else
					   {
						   $("#message").html("");
						   $.getJSON('lib/php/sm_login.php',{acao:'login', login:$('#sm_login').val(), senha:$('#sm_senha').val()},function(data){
					
								if(data.mensagem == 'erro')
								{
									$("#message").html("( Dados incorretos. )");
								}
								else
								{
									window.location = 'sm_pages.php';
								}
						   });
					   }
				}
			});
			$('#div_Login').keypress(function(event){
				if(event.which == 13)
				{
					 if($('#sm_login').val() == "" || $('#sm_login').val() == " "  || $('#sm_senha').val() == "" || $('#sm_senha').val() == " ")
					   {
						  $("#message").html("( Preencha todos os campos! )");
					   }
					   else
					   {
						   $("#message").html("");
						   $.getJSON('lib/php/sm_login.php',{acao:'login', login:$('#sm_login').val(), senha:$('#sm_senha').val()},function(data){
					
								if(data.mensagem == 'erro')
								{
									$("#message").html("( Dados incorretos. )");
								}
								else
								{
									window.location = 'sm_pages.php';
								}
						   });
					   }
				}
			});
		});
		
		
	});
	
	
	//Close Base login
	$('#div_x').click(function(){
		$('#div_Login').unbind('click');
		$('#div_modal').fadeOut('slow');
		$('#div_base_login').fadeOut('slow');
	});
	$('#div_modal').click(function(){
		$('#div_Login').unbind('click');
		$('#div_modal').fadeOut('slow');
		$('#div_base_login').fadeOut('slow');
	});
	
	
});