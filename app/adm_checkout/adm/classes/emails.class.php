<?php
class emails extends Commons
{
	public $emailsId;
	public $emailsNome;
	public $emailsEmail;
	public $emailsEmpresasId;
	public $emailsStatus;
	
	
	public function __construct(){}
	
	public function setEmailsId($var){$this->emailsId = $var; }
	public function setEmailsNome($var){$this->emailsNome = $var; }
	public function setEmailsEmail($var){$this->emailsEmail = $var; }
	public function setEmailsEmpresasId($var){$this->emailsEmpresasId = $var; }
	public function setEmailsStatus($var){$this->emailsStatus = $var; }
		
	public function getEmailsId(){return $this->emailsId; }
	public function getEmailsNome(){return $this->emailsNome; }
	public function getEmailsEmail(){return $this->emailsEmail; }
	public function getEmailsEmpresasId(){return $this->emailsEmpresasId; }
	public function getEmailsStatus(){return $this->emailsStatus; }
	

	
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
	
		
	public function id(){
		return parent::_id();
	}
	
	public function selectEmailGrupo()
	{
		$sql = parent::fetch("SELECT * FROM tb_emails a, tb_grupos c  where emailsEmpresasId = '".$_SESSION['User']['empresaId']."'");
		return $sql;
	}
	
	public function selectEmailLista($idLista)
	{
		$sql = parent::fetch("SELECT * FROM tb_emails a, tb_email_responsaveis b  where a.emailsId = b.email_responsaveisEmailsId
		AND
		b.email_responsaveisListaBaladaId = '".$idLista."'
		AND
		a.emailsStatus = 1");
		return $sql;
	}
	
	public function selectPorEmpresa()
	{
		$sql = parent::fetch("SELECT * FROM tb_emails where emailsEmpresasId = '".$_SESSION['User']['empresaId']."'");
		return $sql;
	}
	
	public function verifyDuplicidadeEmail($email)
	{
		$sql = mysql_query("SELECT * FROM tb_emails where emailsEmail='".$email."' AND emailsEmpresasId = '".$_SESSION['User']['empresaId']."'");
		$num = mysql_num_rows($sql);
		
		if($num > 0)return true;
		else return false;
		
	}
	
	public function handleSearch($tipo, $field, $resp)
	{
		$filtro = '';
		if($tipo == 'nome')$filtro = " AND a.emailsNome like '%".$field."%'";
		if($tipo == 'email')$filtro = " AND a.emailsEmail '%".$field."%'";
		
		$strResp = '';
		if($resp == 0)$strResp = '';
		else $strResp = " AND b.email_responsaveisResponsaveisListaId = $resp";
	
		$sql = parent::fetch("select * from tb_emails a, tb_email_responsaveis b
						WHERE
						a.emailsId = b.email_responsaveisEmailsId
						$strResp
						$filtro
						AND emailsEmpresasId = '".$_SESSION['User']['empresaId']."'");
		return $sql;
	}
	
}
?>