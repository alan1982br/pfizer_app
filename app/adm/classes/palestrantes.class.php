<?php
class palestrantes extends Commons
{
	public $palestrantesId;
	public $palestrantesTipo;
	public $palestrantesNome;
	public $palestrantesDescricao;
	public $palestrantesFoto;
	public $palestrantesStatus;
	
	
	public function __construct(){}
	
	public function setPalestrantesId($var){$this->palestrantesId = $var; }
	public function setPalestrantesTipo($var){$this->palestrantesTipo = $var; }
	public function setPalestrantesNome($var){$this->palestrantesNome = $var; }
	public function setPalestrantesDescricao($var){$this->palestrantesDescricao = $var; }
	public function setPalestrantesFoto($var){$this->palestrantesFoto = $var; }
	public function setPalestrantesStatus($var){$this->palestrantesStatus = $var; }
		
	public function getPalestrantesId(){return $this->palestrantesId; }
	public function getPalestrantesTipo(){return $this->palestrantesTipo; }
	public function getPalestrantesNome(){return $this->palestrantesNome; }
	public function getPalestrantesDescricao(){return $this->palestrantesDescricao; }
	public function getPalestrantesFoto(){return $this->palestrantesFoto; }
	public function getPalestrantesStatus(){return $this->palestrantesStatus; }
	

	
	//MÉTODOS
	/*public function selectRow($id, $i)
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
	public function selectPalestrantes()
	{
		$sql = parent::fetch("SELECT * FROM tb_palestrantes Order By palestrantesId ASC");
		return $sql;
	}
	
	public function id(){
		return parent::_id();
	}
	
}
?>