<?php
@session_start();
	function __autoload($class_name) {
		$directories = array(
			"classes/",
			"../classes/",
			"../../classes/",
			"../../../classes/",
			"../../adm/classes/"
		);
		
		foreach($directories as $directory)
		{
			if(file_exists($directory . $class_name . ".class.php"))
			{
				require_once($directory . $class_name . ".class.php");
				return;
			}            
		}
	}
	
	
	$db = new Db();
	$db->connectDb();
	$db->selectDb();
?>