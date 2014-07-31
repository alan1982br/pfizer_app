<?php
class usuarios extends Commons
{
	public $usuariosId;
	public $usuariosEmpresasId;
	public $usuariosNome;
	public $usuariosEmail;
	public $usuariosLogin;
	public $usuariosSenha;
	public $usuariosTelefone;
	public $usuariosCrm;
	public $usuariosPerfilId;
	public $usuariosStatus;
	
	
	public function __construct(){}
	
	public function setUsuariosId($var){$this->usuariosId = $var; }
	public function setUsuariosEmpresasId($var){$this->usuariosEmpresasId = $var; }
	public function setUsuariosNome($var){$this->usuariosNome = $var; }
	public function setUsuariosEmail($var){$this->usuariosEmail = $var; }
	public function setUsuariosLogin($var){$this->usuariosLogin = $var; }
	public function setUsuariosSenha($var){$this->usuariosSenha = $var; }
	public function setUsuariosTelefone($var){$this->usuariosTelefone = $var; }
	public function setUsuariosCrm($var){$this->usuariosCrm = $var; }
	public function setUsuariosPerfilId($var){$this->usuariosPerfilId = $var; }
	public function setUsuariosStatus($var){$this->usuariosStatus = $var; }
		
	public function getUsuariosId(){return $this->usuariosId; }
	public function getUsuariosEmpresasId(){return $this->usuariosEmpresasId; }
	public function getUsuariosNome(){return $this->usuariosNome; }
	public function getUsuariosEmail(){return $this->usuariosEmail; }
	public function getUsuariosLogin(){return $this->usuariosLogin; }
	public function getUsuariosSenha(){return $this->usuariosSenha; }
	public function getUsuariosTelefone(){return $this->usuariosTelefone; }
	public function getUsuariosCrm(){return $this->usuariosCrm; }
	public function getUsuariosPerfilId(){return $this->usuariosPerfilId; }
	public function getUsuariosStatus(){return $this->usuariosStatus; }
	

	
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
	public function selectUsers()
	{
		$sql = parent::fetch("SELECT * FROM tb_usuarios where usuariosStatus = 0 Order By usuariosNome ASC");
		return $sql;
	}
	
	public function selectUsers2()
	{
		$sql = parent::fetch("SELECT * FROM tb_usuarios Order By usuariosNome ASC");
		return $sql;
	}
	
	public function id(){
		return parent::_id();
	}
	
	
	public function handlerLogin($a)
	{
		$sql = parent::fetch("select * from tb_usuarios
							  where
							  usuariosId='$a'
							  ");
		return $sql;
	}
	
	public function selectUserById($a)
	{
		$sql = parent::fetch("select * from tb_usuarios
							  where
							  usuariosId='$a'
							  ");
		return $sql;
	}
}
?>