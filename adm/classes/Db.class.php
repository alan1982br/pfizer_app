<?php

	

	/*DATABASE CLASS*/

	class Db{

		

		/*PROPRIEDADAES*/

		private $host;

		private $user;

		private $password;

		private $database;

		

		private $_DATA = array();

		private $fetch;

		private $rows;

		private $sql;

		

		

		/*MÉTOODO CONSTRUTOR*/

		public function __construct(){

			if($_SERVER['HTTP_HOST'] == 'localhost:8888')
			{

				$this->_host = "localhost";

				$this->_user = "root";

				$this->_password = "";

				$this->_database = "pfizer_7_encontro";
			}

			else

			{
				
				
				$this->_host = "localhost";

				$this->_user = "root";

				$this->_password = "";

				$this->_database = "pfizer_7_encontro";

			}

			/*$this->_DATA;

			$this->_fetch;

			$this->_rows;

			$this->_sql;
*/
		}

		

		/*MÉTODOS*/

		

			/*MÉTODO PARA SE CONECTAR COM O BANCO DE DADOS*/

			public function connectDb(){

				mysql_connect($this->_host, $this->_user, $this->_password) or die(mysql_error());

			}

			

			/*MÉTODO PARA SELECIONAR O BANCO DE DADOS*/

			public function selectDb(){

				mysql_select_db($this->_database) or die(mysql_error());

			}

			

			/*MÉTODO PARA EXECUTAR A LINHA SQL*/

			public function query($var){

				return mysql_query($var) or die(mysql_error());

			}

			

			/*MÉTODO PARA EXECUTAR A LINHA SQL*/

			public function fetch($var){

				$this->sql = mysql_query($var) or die(mysql_error());

				while($this->fetch = mysql_fetch_array($this->sql)){

					$this->_DATA[] = $this->fetch;

				}

				return $this->_DATA;

			}	

	}

		

?>