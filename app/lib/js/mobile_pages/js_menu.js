// JavaScript Document
$(window).load(function() {
	
	var menu;
	
	menu = '<li>'+
				'<div style="text-align:center; height:25px;" ><a href="#home" data-transition="slide" >'+
                ''+
                '</a></div>'+
			'</li>'+
			
            '<li id="agenda"><a href="#home" data-transition="slide">'+
                '<img src="images/template_ipad/images/img_icon_agenda.png" width="36" height="40" alt="France" class="ui-li-icon ui-corner-none">'+
                'Home</a>'+
			'</li>'+
			
			 '<li id="agenda"><a href="#agenda" data-transition="slide" onClick="StateMachine(\'handleGetDadosAgenda\');">'+
                '<img src="images/template_ipad/images/img_icon_agenda.png" width="36" height="40" alt="France" class="ui-li-icon ui-corner-none">'+
                'Agenda 25/07</a>'+
			'</li>'+
               
               
               '<li id="agenda2"><a href="#agenda2" data-transition="slide" onClick="StateMachineAgenda2(\'handleGetDadosAgenda2\');">'+
               '<img src="images/template_ipad/images/img_icon_agenda.png" width="36" height="40" alt="France" class="ui-li-icon ui-corner-none">'+
               'Agenda 26/07</a>'+
               '</li>'+
                
            '<li id="bloco"><a href="#aulas" data-transition="slide" onClick="StateMachineEstudos(\'handleGetDadosEstudos\');">'+
                '<img src="images/template_ipad/images/img_icon_notas.png" alt="France" class="ui-li-icon ui-corner-none">'+
                'Estudos</a>'+
			'</li>'+
                
            '<li id="bloco"><a href="#notas" data-transition="slide" onClick="StateMachineNotas(\'handleCreateElementsNotas\');">'+
                '<img src="images/template_ipad/images/img_icon_notas.png" alt="France" class="ui-li-icon ui-corner-none">'+
                'Bloco de notas</a>'+
			'</li>'+
                
               
            '<li id="info"><a href="#perguntas" data-transition="slide" onClick="StateMachinePerguntas(\'handleCreateElementsPerguntas\');">'+
                '<img src="images/template_ipad/images/img_icon_interacao.png" alt="France" class="ui-li-icon ui-corner-none">'+
                'Perguntas</a>'+
			'</li>'+
                
            '<li id="palestrantes"><a href="#pesquisa_menu" data-transition="slide" onclick="handleCreateElementsMenuPesquisa2()">'+
                '<img src="images/template_ipad/images/img_icon_notas.png" alt="France" class="ui-li-icon ui-corner-none">'+
                'Pesquisa</a>'+
			'</li>'
                
           
			
			$('#ulMenuHome').append(menu);
			$('#ulMenuAgenda').append(menu);
               $('#ulMenuAgenda2').append(menu);
              
			$('#ulMenuAulas').append(menu);
			$('#ulMenuNotas').append(menu);
			$('#ulMenuPerguntas').append(menu);
			$('#ulMenuPesquisa').append(menu);
			 
			 
				
			$('#ulMenuHome').listview('refresh');
			$('#ulMenuAgenda').listview('refresh');
               $('#ulMenuAgenda2').listview('refresh');
              
			$('#ulMenuAulas').listview('refresh');
			$('#ulMenuNotas').listview('refresh');
			$('#ulMenuPerguntas').listview('refresh');
			$('#ulMenuPesquisa').listview('refresh');
			 
			 
});
