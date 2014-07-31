<?php
class perguntas extends Commons
{
	public $perguntasId;
	public $perguntasUserId;
	public $perguntasNomeUsuario;
	public $perguntasTexto;
	public $perguntasStatus;
	
	
	public function __construct(){}
	
	public function setPerguntasId($var){$this->perguntasId = $var; }
	public function setPerguntasUserId($var){$this->perguntasUserId = $var; }
	public function setPerguntasNomeUsuario($var){$this->perguntasNomeUsuario = $var; }
	public function setPerguntasTexto($var){$this->perguntasTexto = $var; }
	public function setPerguntasStatus($var){$this->perguntasStatus = $var; }
		
	public function getPerguntasId(){return $this->perguntasId; }
	public function getPerguntasUserId(){return $this->perguntasUserId; }
	public function getPerguntasNomeUsuario(){return $this->perguntasNomeUsuario; }
	public function getPerguntasTexto(){return $this->perguntasTexto; }
	public function getPerguntasStatus(){return $this->perguntasStatus; }
	

	
	//MÉTODOS
	public function selectRow($id, $i)
	{
		return parent::selectRow(__CLASS__,$id);
	}
	
	public function insert()
	{
		return parent::insert($this);
	}
	
	/*
	public function select()
	{
		return parent::select(__CLASS__);
	}
	
	
	
	
	
	public function update($id)
	{
		return parent::update($this, $id);
	}
	
	public function delete($id)
	{
		return parent::delete(__CLASS__, $id);
	}
	
	*/
	public function selectPerguntas()
	{
		$sql = parent::fetch("SELECT * FROM tb_perguntas Order By perguntasId ASC");
		return $sql;
	}
	
	public function id(){
		return parent::_id();
	}
	
}
?>