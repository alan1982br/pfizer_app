<?php
class palestras_palestrantes extends Commons
{
	public $palestras_palestrantesId;
	public $palestras_palestrantesPalestrasId;
	public $palestras_palestrantesPalestrasPalestrantesId;
	public $palestras_palestrantesStatus;
	
	
	public function __construct(){}
	
	public function setPalestrasPalestrantesId($var){$this->palestras_palestrantesId = $var; }
	public function setPalestrasPalestrantesPalestrasId($var){$this->palestras_palestrantesPalestras = $var; }
	public function setPalestrasPalestrantesPalestrantesId($var){$this->palestras_palestrantesPalestrantes = $var; }
	public function setPalestrasPalestrantesStatus($var){$this->palestras_palestrantesStatus = $var; }
		
	public function getPalestrasPalestrantesId(){return $this->palestras_palestrantesId; }
	public function getPalestrasPalestrantesPalestrasId(){return $this->palestras_palestrantesPalestrasId; }
	public function getPalestrasPalestrantesPalestrantesId(){return $this->palestras_palestrantesPalestrantesId; }
	public function getPalestrasPalestrantesStatus(){return $this->palestras_palestrantesStatus; }
	

	
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
	public function selectPalestrasPalestrantes()
	{
		$sql = parent::fetch("SELECT * FROM tb_palestras_palestrantes Order By palestras_palestrantesId ASC");
		return $sql;
	}
	
	public function id(){
		return parent::_id();
	}
	
}
?>