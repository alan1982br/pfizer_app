// JavaScript Document
$(window).ready(function() {
	
	handlerSetPage()
	
	/* Get Menu
	 $.getJSON('lib/php/sm_getMenu.php',{acao:'getmenu'},function(data){
				
						
						
						if(data.mensagem == 'erro')
						{
							alert('Você não possui links ativos, contate o desenvolvedor. Obrigado!');
							window.location = 'lib/php/sm_logout.php';
						}
						else
						{
							
							var i = 0;
							var iSubModulos=0;
							var iSubLinks=0;
							$.each(data.mensagem, function() { 
							   
							   
							   $("#divMenu").
							   	append("<div class='bg_menu' id='bg_menu_"+i+"' ><div class='labelModulos' id='m_"+i+"'>"+data.mensagem[i][1]+"</div></div>");
							   	
								  //$(".subLabelModulos").hide('fast');//:not(:first)
								  
							   	  $('#m_'+i).mouseover(function () {
									  
									  $(this).css({'textDecoration':'underline', 'opacity':'.7'});
									  
								  }).mouseout(function()
								  {
									  $(this).css({'textDecoration':'none', 'opacity':'1'});
									  
								  }).click(function(){
									  
										  $(".subLabelModulos").slideUp("slow");
										  $(this).next(".subLabelModulos").slideDown('slow');
										
									});
								   
								    
								
									//GET SUBLINKS
									$.getJSON('lib/php/sm_getMenu.php',{acao:'getSubMenu', id:data.mensagem[i][0]},function(data2){
						
											if(data2.mensagem == "erro")
											{
												alert('Não existem SubLinks para o Link: ( '+data2.mensagem[i][1]+' )');
											}
											else
											{	
												var i2=0;
												
												$('#bg_menu_'+iSubModulos).
													append("<div class='subLabelModulos' id='subLabelModulos_"+iSubModulos+"'></div>");
												
												//EACH
												$.each(data2.mensagem, function() { 
													
													
													$('#subLabelModulos_'+iSubModulos).
														append("<div class='subLinkModulos' id='subLink_"+iSubLinks+"' title='"+i2+"'>"+data2.mensagem[i2][2]+"</div>");
														
														$('#subLink_'+iSubLinks).
														mouseover(function () {
										  
										 					 //$(this).css({'textDecoration':'underline', 'opacity':'1'});
															 $(this).addClass('subLinkOver');
										  
														}).
														mouseout(function(){
															  
															 // $(this).css({'textDecoration':'none', 'opacity':'.6'});
															  $(this).removeClass('subLinkOver');
															  
														}).
														click(function(){
															
															//$('#containerDireito').html(data2.mensagem[$(this).attr("title")][3]);
															window.location = '?'+data2.mensagem[$(this).attr("title")][3]+'&act='+data2.mensagem[$(this).attr("title")][4];
															
															//Chamando a página
															handlerSetPage();
															
															for(var c=0; c< $('.subLinkModulos').length; c++)
															{
																	$('#subLink_'+c).removeClass('subLinkClick');
															}
															
															$(this).addClass('subLinkClick');
														});
														  
													i2++;
													iSubLinks++;
												});
												
												
												
											}
											iSubModulos++;
										});
										
									i++;
							}); 
							
							
						}
				   });
	*/
	
	
	$.ajax({
		url: 'lib/php/sm_getMenu.php?acao=getmenu',
		async: false,
		dataType: 'json',
		success: function(data) {
			
			if(data.mensagem == 'erro')
			{
				alert('Você não possui links ativos, contate o desenvolvedor. Obrigado!');
				window.location = 'lib/php/sm_logout.php';
			}
			else
			{
				
				var i = 0;
				var iSubModulos=0;
				var iSubLinks=0;
				
				$.each(data.mensagem, function() { 
							   
							   
				   $("#divMenu").
					append("<div class='bg_menu' id='bg_menu_"+i+"' ><div class='labelModulos' id='m_"+i+"'>"+data.mensagem[i][1]+"</div></div>");
					
					  //$(".subLabelModulos").hide('fast');//:not(:first)
					  
					  $('#m_'+i).mouseover(function () {
						  
						  $(this).css({'textDecoration':'underline', 'opacity':'.7'});
						  
					  }).mouseout(function()
					  {
						  $(this).css({'textDecoration':'none', 'opacity':'1'});
						  
					  }).click(function(){
						  
							  $(".subLabelModulos").slideUp("slow");
							  $(this).next(".subLabelModulos").slideDown('slow');
							
						});
					   
						
					
						//GET SUBLINKS
						$.getJSON('lib/php/sm_getMenu.php',{acao:'getSubMenu', id:data.mensagem[i][0]},function(data2){
			
								if(data2.mensagem == "erro")
								{
									alert('Não existem SubLinks para o Link: ( '+data2.mensagem[i][1]+' )');
								}
								else
								{	
									var i2=0;
									
									$('#bg_menu_'+iSubModulos).
										append("<div class='subLabelModulos' id='subLabelModulos_"+iSubModulos+"'></div>");
									
									//EACH
									$.each(data2.mensagem, function() { 
										
										
										$('#subLabelModulos_'+iSubModulos).
											append("<div class='subLinkModulos' id='subLink_"+iSubLinks+"' title='"+i2+"'>"+data2.mensagem[i2][2]+"</div>");
											
											$('#subLink_'+iSubLinks).
											mouseover(function () {
							  
												 //$(this).css({'textDecoration':'underline', 'opacity':'1'});
												 $(this).addClass('subLinkOver');
							  
											}).
											mouseout(function(){
												  
												 // $(this).css({'textDecoration':'none', 'opacity':'.6'});
												  $(this).removeClass('subLinkOver');
												  
											}).
											click(function(){
												
												//$('#containerDireito').html(data2.mensagem[$(this).attr("title")][3]);
												window.location = '?'+data2.mensagem[$(this).attr("title")][3]+'&act='+data2.mensagem[$(this).attr("title")][4];
												
												//Chamando a página
												handlerSetPage();
												
												for(var c=0; c< $('.subLinkModulos').length; c++)
												{
														$('#subLink_'+c).removeClass('subLinkClick');
												}
												
												$(this).addClass('subLinkClick');
											});
											  
										i2++;
										iSubLinks++;
									});
									
									
									
								}
								iSubModulos++;
							});
							
						i++;
				}); 
			}
		}
	});
			
		
		/////Chamando as páginas
		function handlerSetPage()
		{
			var m=window.location.href.split("?");
			if(m.length == 2){
				var m2 = m[1].split("&");
				var m3 = m2[1].split("=");
				var act = m3[1];
				
				$('#div_label_page').html(m2[0].toUpperCase());
				
				console.log('modulos/'+m2[0]+'/index.php');
				$('#div_insert_page').load('modulos/'+m2[0]+'/index.php?act='+act, function() {
				  //alert('Load was performed.');
				});
			}
		}
		
		
});