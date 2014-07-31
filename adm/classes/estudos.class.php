<?php
class estudos extends Commons
{
	public $estudosId;
	public $estudosTipoId;
	public $estudosAutor;
	public $estudosTitulo;
	public $estudosDescricao;
	public $estudosStatus;
	
	
	public function __construct(){}
	
	public function setEstudosId($var){$this->estudosId = $var; }
	public function setEstudosTipoId($var){$this->estudosTipoId = $var; }
	public function setEstudosAutor($var){$this->estudosAutor = $var; }
	public function setEstudosTitulo($var){$this->estudosTitulo = $var; }
	public function setEstudosDescricao($var){$this->estudosDescricao = $var; }
	public function setEstudosStatus($var){$this->estudosStatus = $var; }
		
	public function getEstudosId(){return $this->estudosId; }
	public function getEstudosTipoId(){return $this->estudosTipoId; }
	public function getEstudosAutor(){return $this->estudosAutor; }
	public function getEstudosTitulo(){return $this->estudosTitulo; }
	public function getEstudosDescricao(){return $this->estudosDescricao; }
	public function getEstudosStatus(){return $this->estudosStatus; }
	

	
	//MÉTODOS
/*	public function selectRow($id, $i)
	{
		return parent::selectRow(__CLASS__,$id);
	}
	
	public function insert()
	{
		return parent::insert($this);
	}
	
	
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
	public function selectEstudos()
	{
		$sql = parent::fetch("SELECT * FROM tb_estudos Order By estudosId ASC");
		return $sql;
	}
	
	public function id(){
		return parent::_id();
	}
	
}
?>