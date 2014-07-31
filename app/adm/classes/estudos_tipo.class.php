<?php
class estudos_tipo extends Commons
{
	public $estudos_tipoId;
	public $estudos_tipoNome;
	public $estudos_tipoStatus;
	
	
	public function __construct(){}
	
	public function setEstudos_TipoId($var){$this->estudos_tipoId = $var; }
	public function setEstudos_TipoNome($var){$this->estudos_tipoNome = $var; }
	public function setEstudos_TipoStatus($var){$this->estudos_tipoStatus = $var; }
		
	public function getEstudos_TipoId(){return $this->estudos_tipoId; }
	public function getEstudos_TipoNome(){return $this->estudos_tipoNome; }
	public function getEstudos_TipoStatus(){return $this->estudos_tipoStatus; }
	

	
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
	public function selectEstudos_Tipo()
	{
		$sql = parent::fetch("SELECT * FROM tb_estudos_tipo Order By estudos_tipoId ASC");
		return $sql;
	}
	
	public function id(){
		return parent::_id();
	}
	
}
?>