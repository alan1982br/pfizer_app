// JavaScript Document

$(window).ready(function(e) {
	
 handlerSetPage()

  
 function handlerNew()
 {
	   handlerGetPerfil();
	   
	    $('#bt_cadastrar').click(function()
	  {
		  if($('input').val() == '' || $('select').val() == '')
		  {
			  alert('Por favor preencher todos os campos!');
		  }
		  else
		  {
			 
				  var nome = $('#nome').val();

				  //gravando dados no banco
				  $.getJSON('lib/php/sm_modulos.php',{acao:'newmodulo', _nome:nome},function(data){
					 
					if(data.mensagem == 'error')
					{
						alert('Houve um erro ao cadastrar o módulo.');
						
					}
					else
					{
						
						 var links = $("input[name='link\\[\\]']")
						.map(function(){
							 return $(this).val();
						 }).get();
						 
						 var act = $("input[name='act\\[\\]']")
						.map(function(){
							 return $(this).val();
						 }).get();
						 
						 var check = $('input:checkbox:checked.grPerfil').map(function () {
							  return this.value;
						 }).get();
						 
						 $.getJSON('lib/php/sm_modulos.php',{acao:'newlinks', _links:links, _act:act, _id:data.mensagem, _nomeModulo:nome, _check:check},function(data){
								
							   if(data.mensagem == 'error')
								{
									alert('Houve um erro ao cadastrar os links.');
									
								}
								else
								{
									alert('Módulo cadastrado com Sucesso!');
									window.location = '?modulos&act=new';
								}
						 });
						//alert('Usuário Cadastrado com sucesso!');
						//handlerClean();
					}
	   			  });
		  }
	  });
 }
	  
 
 	  function handlerView()
 {
	  /* VIEW */
	  $.getJSON('lib/php/sm_getMenu.php',{acao:'getperfil'},function(data){
			
			if(data.mensagem == 'erro')
			{
				alert('Nenhum perfil encontrado');
				window.location = 'lib/php/sm_logout.php';
			}
			
			else
			{
				
				var iUser = 0;
				var iSubModulos2=0;
				var iSubLinks2=0;
				
				$.each(data.mensagem, function() { 
				   
				   $("#div_view_users").
					append("<div class='div_perfil' id='div_perfil_"+iUser+"'><div class='labelPerfil' id='p_"+iUser+"'>"+data.mensagem[iUser][6]+"</div>");//<div class='setas_up_dow' id='setas_"+iUser+"'></div>
//<div class='lupa' id='l"+iUser+"' title='"+data.mensagem[iUser][0]+"'></div>
//<div class='lixeira' id='li"+iUser+"' title='"+data.mensagem[iUser][0]+"'></div>				
						
								
						$.getJSON('lib/php/sm_getMenu.php',{acao:'getUsersPorPerfil', id:data.mensagem[iUser][2]},function(data2){
							
							if(data2.mensagem == "erro")
							{
								
								$('#div_perfil_'+iSubModulos2).
									append("<div class='subLabelUser'>Nenhum usuário</div>");
							}
							else
							{
								var ii2=0;
								
								$('#div_perfil_'+iSubModulos2).
									append("<div class='subLabelUser' id='subLabelUser_"+iSubModulos2+"'></div>");
													
								$.each(data2.mensagem, function() { 
								
								
									$('#subLabelUser_'+iSubModulos2).
										append("<div class='div_user_perfil' id='div_user_perfil_"+iSubLinks2+"'>"+data2.mensagem[ii2][2]+"<div class='lupa'   id='lupa"+iSubLinks2+"' title='"+data2.mensagem[ii2][0]+"'></div><div class='lixeira' id='lixeira"+iSubLinks2+"' title='"+data2.mensagem[ii2][0]+"'></div></div>");
										
										$('#div_user_perfil_'+iSubLinks2)
										.mouseover(function () {
										  
											  $(this).css({'opacity':'1'});
											  
												  
											  }).mouseout(function()
											  {
												 $(this).css({'opacity':'.7'});
												  
											  });
										
										$('#lupa'+iSubLinks2)
										.mouseover(function () {
										  
											  $(this).css({'backgroundPosition':'top'});
											  
											  })
										.mouseout(function(){
												  
												$(this).css({'backgroundPosition':'bottom'});
												  
											  })
										.click(function(){
												
												window.location = "?usuarios&act=update&id="+$(this).attr('title');
												//$(this).handlerSetPage().parent();
											
										});
										
										$('#lixeira'+iSubLinks2)
										.mouseover(function () {
										  
											  $(this).css({'backgroundPosition':'top'});
											  
												  
											  })
										.mouseout(function()
											  {
												$(this).css({'backgroundPosition':'bottom'});
												  
											  })
										.click(function(){
											  
												 $.getJSON('lib/php/sm_user.php',{acao:'deleteuser', id:$(this).attr('title')},function(data){
													
													 if(data.mensagem == 'erro')
													 {
														alert('Erro ao deletar o Usuário, tente novamente.');
														window.location = '?usuarios&act=view';
													 }
													 else
													 {
														alert('Usuário removido com sucesso!');
														window.location = '?usuarios&act=view';
													 }
												 });
										});
											
										ii2++;
										iSubLinks2++;
								});
								
								
							}
							iSubModulos2++;
						});
					
						
						iUser++;
				}); 
				
				
			}
	   });
	   
}
	   
 
 	  function handlerUpdate(e)
 {

	
	 $.getJSON('lib/php/sm_user.php',{acao:'getuser', id:e},function(data){
		
		  if(data.mensagem == "erro")
			{
				alert('Nenhum usuário encontrado!');
				
			}
		  else
		  {
			  
		  }
	  });
 }
 
	  function handlerDelete(e)
		 {
			 $.getJSON('lib/php/sm_user.php',{acao:'deleteuser', id:e},function(data){
				 
				 if(data.mensagem == "erro")
				 {
					alert('Erro ao excluir o usuário!');
				 }
				 else
				 {
					 alert('Usuário removido com sucesso');
					 
				 }
					
			 });
		 }
 
	  function handlerClean()
	  {
		  $.each($('input'), function() {
			  $('input').val('');
			   $('input').removeClass('input_down'); 
		  	   $('input').removeClass('input_error'); 
			   $('input').addClass('input_up'); 
		  });
	  }
	  function handlerSetPage()
		{
			
				var m=window.location.href.split("?");
				
				if(m.length == 2){
					var m2 = m[1].split("&");
					
					var m3 = m2[1].split("=");
					var act = m3[1];
					
					
					if(act == 'new')
					{
						handlerNew()
					}
					else if(act == 'view')
					{
						handlerView()
					}
					else if(act == 'update')
					{
						
						var id = m2[2].split("=");
						var idValue = id[1];
						
						handlerUpdate(idValue)
					}
					
					else if(act == 'delete')
					{
						
						var id = m2[2].split("=");
						var idValue = id[1];
						
						handlerDelete(idValue)
					}
				}
				
				
				
		}
	  function handlerGetPerfil(e)
	  {
		  
		  
		/* Get PERFIL*/
		 $.getJSON('lib/php/sm_getMenu.php',{acao:'getperfil'},function(data){
				
				if(data.mensagem == 'erro')
				{
					alert('Nenhum perfil encontrado');
					window.location = 'lib/php/sm_logout.php';
				}
				else
				{
					
					var i = 0;
					var selected = '';
					
					$.each(data.mensagem, function() { 
					   
					  // alert(data.mensagem[i][6])
					  if(e == data.mensagem[i][2]) selected='selected=selected';
					  else selected='';
					  
					   $("#subLabelUser").
						append("<div class='div_user_perfil' id='div_view_users'> <input name='grPerfil' class='grPerfil' type='checkbox' value='"+data.mensagem[i][2]+"'/>"+data.mensagem[i][6]+"</div>");
						i++;
					}); 
					
					
				}
		   }); 
		   
		   
	   ///Effects Input
	   $('input:input')
	   .mouseover(function(){
		   $(this).removeClass('input_up'); 
		  	$(this).addClass('input_down'); 
	   })
	   .mouseout(function(){
		   
		   if($(this).val() ==''){
			    $(this).removeClass('input_down'); 
		  		$(this).addClass('input_up'); 
		   }
		   
		   //validando e-mail
		   if($(this).attr('name') == 'email' && $(this).val() !='')
		   {
			 
			if(!handlerValidaEmail())
			{
				$(this).removeClass('input_down'); 
		  		$(this).removeClass('input_up'); 
				$(this).addClass('input_error'); 
			}
			else
			{
				$(this).removeClass('input_up'); 
		  		$(this).removeClass('input_error');
				$(this).addClass('input_down'); 
				
			}
		   }
	   })
	   .keydown(function(){
		   $(this).removeClass('input_up'); 
		  	$(this).addClass('input_down'); 
	   }); 
	  }
	  
	 
	  
	  ///Adicionar e Subtrair
	  $('#adicionar')
	  .mouseover(function () {
	  
		  $(this).css({'backgroundPosition':'top'});
		  
		  })
	  .mouseout(function(){
			  
			$(this).css({'backgroundPosition':'bottom'});
			  
		  })
	  .click(function(){
			
			addElement()
	  });
	
	   $('#subtrair')
	  .mouseover(function () {
	  
		  $(this).css({'backgroundPosition':'top'});
		  
		  })
	  .mouseout(function(){
			  
			$(this).css({'backgroundPosition':'bottom'});
			  
		  })
	  .click(function(){
			
			remElement()
	  });
	  
	  
	  ////ADD NEW ELEMENT
	  var n = 0;
	  function addElement() {
           
            n++;
            var newdiv = document.createElement('div');
            var divIdName = 'my'+n+'Div';
            newdiv.setAttribute('id',divIdName);
            newdiv.innerHTML = '#'+n+'<div class="label_form"><div class="label_inputs">Link:</div> <input name="link[]" id="link'+n+'" type="text"></div><div class="label_form"><div class="label_inputs">Action:</div> <input name="act[]" id="act'+n+'" type="text"></div>';
          
			$("#subLabelUserLinks").append(newdiv);
        }
		
	  function remElement() {
		if(n > 0)
			removeElement('my'+n+'Div');
	  }

      function removeElement(divNum) {
            var d = document.getElementById('subLabelUserLinks');
            var olddiv = document.getElementById(divNum);
            d.removeChild(olddiv);
            n--;
      }    
});