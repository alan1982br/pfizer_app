<?php

	

	class Commons extends Db{

		

		/*MÉTODOS*/

		public function par($str)

		{

			echo "<p class=\"style3\">".$str."</p>";

		}

			/*MÉTODOS CRUD*/

			

				/*CREAT - MÉTODOS PARA INSERIR DADOS NO BANCO DE DADOS*/

				public function insert($class){

					$table = get_class($class);

					$vars = get_class_vars($table);

 

 					foreach($vars as $key=>$value){

						$fields[] =  $key;

						$methods[] = 'get'.ucwords($key);

					}

					

					for($i=1; $i<count($methods); $i++){

						$values.="'".$class->$methods[$i]()."',";

						$attributes.="".$fields[$i].",";

					}

					

					$values = substr($values, 0, strlen($values)-1);

					$attributes = substr($attributes, 0, strlen($attributes)-1);

					

					$sql = "insert into tb_".$table." (".$attributes.",".$table."Data) 

					values(".$values.",now())"; 

					return parent::query($sql);

				}

				

				/*RETRIEVE - MÉTODO PARA SELECIONAR OS DADOS DO BANCO DE DADOS*/

				public function fetch($sql)
				{
					return parent::fetch($sql);
				}


				public function select($table){

					$sql = " select * from tb_".$table." order by ".$table.'Id'."";

					return parent::fetch($sql);

				}

				

				/*UPDATE - MÉTODO PARA ATUALIZAR OS DADOS DO BANCO DE DADOS*/

				public function update($class, $id){	

					$table = get_class($class);

					$vars = get_class_vars($table);

										

					foreach($vars as $key=>$value){

						$fields[] =  $key;

						$methods[] = 'get'.ucwords($key);

					}

														

					$sql = "update tb_".$table." set ";

					

					for($i=1; $i<count($fields); $i++){

						//if($class->$methods[$i]() != ""){

							$sql .= $fields[$i] ." = '".$class->$methods[$i]()."',";

						//}

					}

					

					$sql = substr($sql, 0, strlen($sql)-1);

					$sql .= " where ".$table.'Id'." = ".$id." "; 				

					return parent::query($sql);

				}

				
				
				
				/*DELETE - MÉTODO PARA EXCLUÍR DADOS DO BANCO DE DADOS*/

				public function delete($table, $id){					

					$sql = " delete from tb_".$table." where ".$table.'Id'." = ".$id." ";				

					return parent::query($sql);					

				}

				

			/*MÉTODOS DIVERSOS*/	

			

				/*MÉTODO PARA SELECIONAR OS DADOS PELO ID*/
				public function selectRow($table, $id){

					$sql = " select * from tb_".$table." where ".$table.'Id'." = ".$id." ";

					return parent::fetch($sql);

				}
				
					

				/*MÉTODO PARA RETORNAR O ÚLTIMO ID CADASTRADO*/
				public function id(){

					return mysql_insert_id();

				}

				

				/*MÉTODO PARA FAZER  A BUSCA*/

				public function search($class){

					

					$table = get_class($class);

					$vars = get_class_vars($table);

										

					foreach($vars as $key=>$value){

						$fields[] =  $key;

						$methods[] = 'get'.ucwords($key);

					}

										

					for($i=1; $i<count($methods); $i++){

						if($class->$methods[$i]() != ""){

							$values.="'%".$class->$methods[$i]()."%',";

							$attributes.="".$fields[$i].",";

						}

					}

					

					$values = substr($values, 0, strlen($values)-1);

					$attributes = substr($attributes, 0, strlen($attributes)-1);

					

					if($values != ""){

						$sql = " select * from ".$table." where ".$attributes." like ".$values." order by ".$attributes." asc ";

						if(parent::rows($sql)<1){

							echo "Dados não encontrados";

						}

						else{

							return parent::fetch($sql);

						}

					}

					else{

						echo "Dados não encontrados";

						return false;

					}

				}

				

				/* MÉTODO PARA SELECIONAR OS DADOS DO BANCO DE DADOS USANDO CLÁUSULA WHERE*/

				public function selectWhere($tb1, $tb2, $args)

				{

					$sql = "SELECT * FROM tb_" . $tb1 . " TB1, tb_" . $tb2 . " TB2 ";

					if(is_array($args))

					{

						$sql .= "WHERE ";

						for($i=0 ; $i<count($args) ; $i++)

						{

							$sql .= $args[$i][0] . "=" . $args[$i][1];

							if($i != count($args)-1)

								$sql .=" AND ";

						}

					}

					return parent::fetch($sql);

				}
				
				
				//--------------------------------------
				//---Método da Classe :: fotos_linhas_tecidos.class.php
				//--------------------------------------
				/*MÉTODO PARA SELECIONAR AS FOTOS RESPECTIVAS*/
				public function selectRowFotosLinhasTecidos($table, $tecidosId, $linhasId, $table2, $field2){
					
					$sql = "select * from tb_".$table." T1, tb_".$table2." T2, tb_linhas_tecido T3
					where 
					T2.".$table2."Id = T1.".$table.$field2.'Id'."
					AND
					T3.linhas_tecidoId = ".$table.'LinhasId'."
					AND
					".$table.$field2.'Id'." = '".$tecidosId."'
					AND
					".$table.'LinhasId'." = '".$linhasId."'";

					return parent::fetch($sql);

				}
				
				
				public function deletePorCampoEspecifico($table, $id, $campo){					

					$sql = " delete from tb_".$table." 
					where 
					".$table.$campo." = ".$id." ";				

					return parent::query($sql);					

				}
				
				
				//--------------------------------------
				//---Método da Classe :: pedidosdetalhes
				//--------------------------------------
				
				/*MÉTODO PARA SELECIONAR OS DADOS PELO ID*/

				public function selectRowTecidos($table, $id, $field_1){

					$sql = " select * from tb_".$table." where $field_1 = ".$id." ";

					return parent::fetch($sql);

				}
				
				
				//--------------------------------------
				//---Método da Classe :: perfil_adm
				//--------------------------------------
				
				/*MÉTODO PARA SELECIONAR OS DADOS MENOS O ::GOD::*/
				public function selectNotGod($table, $field){

					$sql = " select * from tb_".$table." where ".$field." != '1'";

					return parent::fetch($sql);

				}
				
				
				/*MÉTODO PARA RETORNAR O ÚLTIMO ID CADASTRADO*/
				public function _id(){
					return mysql_insert_id();
				}
				
				
				/*MÉTODO QUE EXCLUI OS IDS De PERFIL DA TABELA PERFIL_TELA*/
				public function deletePerfilTela($table, $id){
					$sql = " delete from tb_".$table." where ".$table.'IdPerfil'." = ".$id." ";				

					return parent::query($sql);
				}
				
	}

?>