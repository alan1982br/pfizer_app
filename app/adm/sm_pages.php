<?php

require_once('lib/php/config.php');
include('lib/php/sm_verify_login.php');
?>
<!DOCTYPE>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<title>SingMail - <?php echo $_SESSION['User']['empresaNome'];?>
</title>


<link rel="stylesheet" type="text/css" href="lib/css/css_pages.css">

<script type="text/javascript" src="lib/js/src/uncompressed/TimelineMax.js"></script>
</head>

<body>
<div class="mainPrincipal" id="mainPrincipal">
  <div class="container">
   		
        <!-- container esquerdo -->
      <div class="conteinerEsquerda">
        	<!-- Logotipo -->
            <div class="logoInterno"><img src="images/img_logo_interno.png" width="196" height="65"></div>
            
            <!-- Bem vindo -->
            <div class="bemvindo">
           	  <ul >
                	<li class="ulBemvindo">Empresa: <?php echo $_SESSION['User']['empresaNome'];?></li>
                    <li class="ulBemvindo">Bem vindo: <?php echo $_SESSION['User']['nome'];?></li>
                    <li class="ulBemvindo">Renovação:</li>
                    <li class="ulBemvindo"><a href="lib/php/sm_logout.php">Logout</a></li>
              </ul>
            </div>
            
            <!-- Menu -->
            <div class="divMenu" id="divMenu" align="right"> </div>
            
            
      </div>
      
      	<!-- Container DIREITO -->
        <div class="containerDireito" id="containerDireito">
        	<div class="div_label_page" id="div_label_page">PAGE</div>
            <div class="div_insert_page" id="div_insert_page"></div>
        </div>
        
    </div>
    
</div>


<script type="text/javascript" src="lib/js/jquery.js"></script>
<script type="text/javascript" src="lib/js/sm_pages.js"></script>
</body>
</html>