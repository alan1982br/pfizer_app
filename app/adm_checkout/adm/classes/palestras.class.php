<?php
class palestras extends Commons
{
	public $palestrasId;
	public $palestrasTipo;
	public $palestrasTitulo;
	public $palestrasDescricao;
	public $palestrasHora;
	public $palestrasStatus;
	
	
	public function __construct(){}
	
	public function setPalestrasId($var){$this->palestrasId = $var; }
	public function setPalestrasTipo($var){$this->palestrasTipo = $var; }
	public function setPalestrasTitulo($var){$this->palestrasTitulo = $var; }
	public function setPalestrasDescricao($var){$this->palestrasDescricao = $var; }
	public function setPalestrasHora($var){$this->palestrasHora = $var; }
	public function setPalestrasStatus($var){$this->palestrasStatus = $var; }
		
	public function getPalestrasId(){return $this->palestrasId; }
	public function getPalestrasTipo(){return $this->palestrasTipo; }
	public function getPalestrasTitulo(){return $this->palestrasTitulo; }
	public function getPalestrasDescricao(){return $this->palestrasDescricao; }
	public function getPalestrasHora(){return $this->palestrasHora; }
	public function getPalestrasStatus(){return $this->palestrasStatus; }
	

	
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
	public function selectPalestras()
	{
		$sql = parent::fetch("SELECT * FROM tb_palestras Order By palestrasId ASC");
		return $sql;
	}
	
	public function id(){
		return parent::_id();
	}
	
}
?>