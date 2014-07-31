<?php
require_once('lib/php/config.php');
if(isset($_SESSION['User']['login'])){
	echo "<script>window.location='sm_pages.php';</script>";	
}
?>
<!DOCTYPE>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<title>SingMail - Marketing</title>
<link rel="stylesheet" type="text/css" href="lib/css/css_index.css">
<script type="text/javascript" src="lib/js/src/uncompressed/TimelineMax.js"></script>
<script type="text/javascript" src="lib/js/jquery.js"></script>
<script type="text/javascript" src="lib/js/sm_index.js"></script>

</head>

<body>
<div class="mainPrincipal" id="mainPrincipal">
	
    <div class="div_logo_home"><img src="images/img_logo.png" width="418" height="250" />
      <div class="div_info_phone">11 96446-7420</div>
      <div class="div_info_mail" style="margin-left:28px;">atendimento@singmail.com.br</div>
      <div style="clear:both"></div><br />
      
      <div class="div_botao_acesso bt_login_index" id="div_botao_acesso" align="center"> 
      	<div class="left_bt"></div>
        <div class="repeat_bt">LOGIN</div>
        <div class="rigth_bt"></div>
      </div>
      
   </div>
   
   
   <!-- Alpha -->
   <div id="div_modal" class="div_modal"></div>
   
   <!-- Base Login -->
   <div class="div_base_login" id="div_base_login">
   <div class="div_x" id="div_x"></div>
       <div class="div_base_itens_Login">
            <ul>
                <li class="label_login">
                	Login
                    <div class="div_input"><input name="sm_login" type="text" id="sm_login" /></div>
                </li>
                <li class="label_login">
                	Senha
                    <div class="div_input"><input name="sm_senha" type="password" id="sm_senha" /></div>
                </li>
            </ul>
        </div>
        
        <div class="div_botao_acesso bt_login" id="div_Login" align="center" style="top:100px; left:50px;"> 
            <div class="left_bt"></div>
            <div class="repeat_bt">></div>
            <div class="rigth_bt"></div>
          </div>
          
          <div class="message" id="message"></div>
   </div>
   
</div>
</body>
</html>