<?php
class documentos extends Commons
{
	public $documentosId;
	public $documentosTitulo;
	public $documentosPath;
	public $documentosTipo;
	public $documentosStatus;
	
	
	public function __construct(){}
	
	public function setDocumentosId($var){$this->documentosId = $var; }
	public function setDocumentosTitulo($var){$this->documentosTitulo = $var; }
	public function setDocumentosPath($var){$this->documentosPath = $var; }
	public function setDocumentosTipo($var){$this->documentosTipo = $var; }
	public function setDocumentosStatus($var){$this->documentosStatus = $var; }
		
	public function getDocumentosId(){return $this->documentosId; }
	public function getDocumentosTitulo(){return $this->documentosTitulo; }
	public function getDocumentosPath(){return $this->documentosPath; }
	public function getDocumentosTipo(){return $this->documentosTipo; }
	public function getDocumentosStatus(){return $this->documentosStatus; }
	

	/*
	//MÉTODOS
	public function select()
	{
		return parent::select(__CLASS__);
	}
	
	public function selectRow($id)
	{
		return parent::selectRow(__CLASS__,$id);
	}
	
	public function insert()
	{
		return parent::insert($this);
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
	public function id(){
		return parent::_id();
	}
	
	public function getFiles()
	{
		$sql = parent::fetch("SELECT * FROM tb_documentos Order By documentosId DESC");
		return $sql;
	}
	
	public function selectEmailLista($idLista)
	{
		$sql = parent::fetch("SELECT * FROM tb_documentos a, tb_email_responsaveis b  where a.documentosId = b.email_responsaveisDocumentosId
		AND
		b.email_responsaveisListaBaladaId = '".$idLista."'
		AND
		a.documentosStatus = 1");
		return $sql;
	}
	
	public function selectPorEmpresa()
	{
		$sql = parent::fetch("SELECT * FROM tb_documentos where documentosEmpresasId = '".$_SESSION['User']['empresaId']."'");
		return $sql;
	}
	
	public function verifyDuplicidadeEmail($email)
	{
		$sql = mysql_query("SELECT * FROM tb_documentos where documentosEmail='".$email."' AND documentosEmpresasId = '".$_SESSION['User']['empresaId']."'");
		$num = mysql_num_rows($sql);
		
		if($num > 0)return true;
		else return false;
		
	}
	
	public function handleSearch($tipo, $field, $resp)
	{
		$filtro = '';
		if($tipo == 'nome')$filtro = " AND a.documentosNome like '%".$field."%'";
		if($tipo == 'email')$filtro = " AND a.documentosEmail '%".$field."%'";
		
		$strResp = '';
		if($resp == 0)$strResp = '';
		else $strResp = " AND b.email_responsaveisResponsaveisListaId = $resp";
	
		$sql = parent::fetch("select * from tb_documentos a, tb_email_responsaveis b
						WHERE
						a.documentosId = b.email_responsaveisDocumentosId
						$strResp
						$filtro
						AND documentosEmpresasId = '".$_SESSION['User']['empresaId']."'");
		return $sql;
	}
	
}
?>