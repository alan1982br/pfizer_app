// JavaScript Document


var iUser = 0;
var idSelected=0;

var UserId, userTipo, userGrupo, userNome, userEmail, userLogin, userSenha, userTelefone, userDataChegada, userOrigem, userCia, userVoo, userSaida, userChegada, userDestino, userLocalizador, userEticket, userTransfer, userStatus;

var nomeUser;


////----------State Machine --------\\\\
function handleStateMachineMain(e)
{
	
	switch(e)
	{
		case 'handleCadUser':
			  handleCadUser();
			  break;
			 
			 
		case 'getUserOnSql':
			  db.transaction(handleGetUserOnDb, handleDbError);
			  break;
			 
			 
		case 'handleGetUsersOnMysql':
			  handleGetUsersOnMysql();
			  break;
			 
			 
		case 'handlerGetDataUserSelected':
			  handlerGetDataUserSelected();
			  break;
			  
		case 'GetUserDataOnSqlLite':
			  db.transaction(GetUserDataOnSqlLite, handleDbError);
			  break;
			 
	}
	
}


///------ Primeiro Passo ------///
function handleGetUserOnDb(tx, result)
{
	
	var sql = "select * from tb_usuarios";
	tx.executeSql(sql, [], handleGetUserOnDbSuccess);
	
	
	function handleGetUserOnDbSuccess(tx, results) {
		
		//console.log('---------USUARIOS---------');
		var len = results.rows.length;
		
		if(len == 0) handleStateMachineMain('handleGetUsersOnMysql');
		else  window.location = "app_home.html";
	 }
	
}


///------ Segundo Passo ------///
function handleGetUsersOnMysql()
{
//	alert(ExternalURL+'adm/lib/php/sm_usuarios.php?acao=select&format=json');
	$.getJSON(ExternalURL+'adm/lib/php/sm_usuarios.php?acao=select&format=json',function(data){
              
		
		if(data.mensagem == 'fail')
		{
			alert('E#002 - Informe o Desenvolvedor');//Erro ao selecionar os usuários no banco- adm/lib/php/sm_usuarios.php
		}
		else
		{
			
			$.each(data.mensagem, function() { 
			
				$('#ulUsuarios')
				.append('<li><a href="#" onClick="handleValidaUser('+data.mensagem[iUser][0]+', \''+data.mensagem[iUser][2]+'\')">'+data.mensagem[iUser][4]+'</a></li>'); 
				
				iUser++;
				});
				
				$('#ulUsuarios').listview('refresh');
			}
	});
}


///------ Terceiro Passo ------///
function handlerGetDataUserSelected()
{
	
	$.getJSON(ExternalURL+'adm/lib/php/sm_login.php?acao=login&login='+idSelected+'&format=json',function(data){//&callback=?
				
				
				if(data.mensagem == 'fail')
				{
					//alert('E-mail incorreto!');
					handleAlert('Alerta!', 'Houve um erro, tente novamente ou informe o técnico.');
				}
				else
				{
					userId = data.mensagem[0]['usuariosId'];
					//userTipo = data.mensagem[0]['usuariosTipo'];
					userNome = data.mensagem[0]['usuariosNome'];
					userEmail = data.mensagem[0]['usuariosEmail'];
					//userTelefone = data.mensagem[0]['usuariosStatus'];
					//userDataChegada = data.mensagem[0]['usuariosDataVolta'];
					//userOrigem = data.mensagem[0]['usuariosOrigem'];
					//userCia = data.mensagem[0]['usuariosCia'];
					//userVoo = data.mensagem[0]['usuariosVoo'];
					//userSaida = data.mensagem[0]['usuariosSaida'];
					//userChegada = data.mensagem[0]['usuariosChegada'];
					//userDestino = data.mensagem[0]['usuariosDestino'];
					//userLocalizador = data.mensagem[0]['usuariosLocalizador'];
					//userEticket = data.mensagem[0]['usuariosEticket'];
					//userTransfer = data.mensagem[0]['usuariosTransfer'];
					userStatus = data.mensagem[0]['usuariosStatus'];
					
					
					/*alert('Id: '+userId+
						  '\nTipo: '+userTipo+
						  '\nNome: '+userNome+
						  '\nEmail: '+userEmail+
						  '\nTelefone: '+userTelefone+
						  '\nData Chegada: '+userDataChegada+
						  '\nOrigem: '+userOrigem+
						  '\nCia: '+userCia+
						  '\nVoo: '+userVoo+
						  '\nSaida: '+userSaida+
						  '\nChegada: '+userChegada+
						  '\nDestino: '+userDestino+
						  '\nLocalizador: '+userLocalizador+
						  '\nETicket: '+userEticket+
						  '\nTransfer: '+userTransfer+
						  '\nStatus: '+userStatus
						  )
						  
						  */
					if(userStatus == 0)
					{
						//handleGetSalas();
						db.transaction(handleInsertDadosDBase, handleDbError);
						
					}
					else
					if(userStatus == 1)
					{
						window.location = "app_home.html";//
						//db.transaction(handleInsertDadosDBabse, handleDbError);
					}
					else
					if(userStatus == 2)
					{
						//handleUpdateDadosDBabse();
					}
				
				}
		});
}


///------ GetUserDataOnSqlLite ------///
function GetUserDataOnSqlLite(tx, result)
{
	var sql = "select * from tb_usuarios LIMIT 1";
	tx.executeSql(sql, [], handleGetUserOnSqlLiteSuccess);
	
	
	function handleGetUserOnSqlLiteSuccess(tx, results) {
		
		var len = results.rows.length;
		var employee = results.rows.item(0);
		
		
		if(len == 0) handleAlert('Alerta!', '#Main.js: Houve um erro, talvez o usuário não esteja cadastrado.');
		else
		{
			UserId = employee.usuariosId;
			nomeUser = employee.usuariosNome;
		}
	 }
}
function handleInsertDadosDBase(tx, result)
{
	
	tx.executeSql("INSERT INTO tb_usuarios (usuariosId, usuariosNome, usuariosEmail,usuariosStatus) VALUES  ('"+userId+"', '"+userNome+"', '"+userEmail+"', '"+userStatus+"')");
	
	// usuariosTelefone, usuariosDataChegada, usuariosOrigem, usuariosCia, usuariosVoo, usuariosHoraSaida,usuariosHoraChegada, usuariosDestino,usuariosLocalizador, usuariosEticket, usuariosTransfer, 
	//'"+userTelefone+"','"+userDataChegada+"', '"+userOrigem+"','"+userCia+"','"+userVoo+"','"+userSaida+"', '"+userChegada+"','"+userDestino+"', '"+userLocalizador+"','"+userEticket+"', '"+userTransfer+"',
	
	$.getJSON(ExternalURL+"adm/lib/php/sm_usuarios.php", {acao:'update',_id: userId, format:'json' }, 
	function(data)
	{
		if(data.mensagem == 'success')
		{
			window.location = "app_home.html";
		}
		else
		{
			handleAlert('Erro!', 'Erro ao cadastrar o usuário. Informe um técnico.');
		}
	});
	//window.location = "app_home.html";//
	//db.transaction(handleInsertDataUsuarios_Salas, handleDbError);
	/*$.getJSON(ExternalURL+'adm/lib/php/sm_usuarios.php?acao=alocar_dados&id='+userId+'&grupo='+userGrupo+'&format=json',function(data){
		
		//alert(data.mensagem);
		if(data.mensagem == 'fail')
		{
			alert('E#001. Informe o desenvolvedor');//Erro na gravação dos dados - adm/lib/php/sm_usuarios.php
		}
		else
		{	
			//Salvando todos os dados das salas no SqlLite
			dadosSalas = data.mensagem;
			//alert(dadosSalas);
			db.transaction(handleInsertDataUsuarios_Salas, handleDbError);
			
		}
	});*/
	
	
	
}


///---Methods
function handleValidaUser(a,b)
{
	if(confirm('Tem certeza que deseja cadastrar este usuário?'))
	{
		
		//idUser = a;
		
		//$.mobile.changePage( "#PageViewSalas", { transition: "fade"});
		
		idSelected = a;
		
		handleStateMachineMain('handlerGetDataUserSelected');
		//handlerGetUserData(a)
	}
}

function handleDbError(tx, error)
{
	alert('handleDbError');
	handleAlert('Atenção!', 'Houve um erro, tente novamente ou informe o técnico.');
}

function handleCadUser()
{
	var nome = $('#fieldNome').val();
	var email = $('#fieldEmail').val();
	var crm = $('#fieldCrm').val();
	var fone = $('#fieldTelefone').val();
		
	if($("#ulCadastroUser input:text").val() == '')
	{
		handleAlert('Alerta!', 'Por favor preencher todos os campos!');
	}
	else
	{
		
		$.post(ExternalURL+"adm/lib/php/sm_usuarios.php", {acao:'insert',_nome: nome, _email:email, _crm:crm, _fone:fone, format:'json' }, 
		function(data)
		{
			
			if(data == 'fail')
				{
					handleAlert('Erro!', 'Erro ao cadastrar o usuário. Informe um técnico.');
				}
				else
				{
					
					
					handleAlert('Parabéns!', 'Usuário cadastrado com sucesso!', 'index.html');
					
				}
		});
	}
}