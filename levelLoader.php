<?php

require_once('config.php');


if (mysql_connect(SQLSERVER, SQLUSER, SQLPASSWD) == 0)
{
	mysql_connect(SQLSERVER, SQLUSER, SQLPASSW2);
}
mysql_select_db(SQLDB);


$set = '0';

if (isset($_POST['set']))
{
	if (is_numeric($_POST['set'])) 
	{
		$set = $_POST['set'];
	}
}


$level = "";

if (isset($_POST['level'])) 
{
	if (is_numeric($_POST['level'])) 
	{
		$level = $_POST['level'];
	}	
}

Header('Content-Type: text/xml');

header('Expires: Mon, 01 Jan 2001 00:00:00 GMT');  // disable IE caching
header('Last-Modified: ' . gmdate('D, d M Y H:i:s') . 'GMT'); 
header('Cache-Control: no-cache, must-revalidate'); 
header('Pragma: no-cache');


echo '<?xml version="1.0" encoding="ISO-8859-1"?' . '>';


if (strlen($level) != 0) 
{
	$query = mysql_query('select grid from fb_js_levels where game_set=' . $set . ' and level=' . $level);
	$row = mysql_fetch_object($query);

	if ($row) 
	{
		echo '<level>' . $row->grid .'000000000000000000000000</level>';
	}
	else
	{
		echo '<level type="COMPLETE" />';
	}

	mysql_close();
}
else
{
	echo '<level type="INVALID" />';
}

?>