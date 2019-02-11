<?php

require_once("config.php");


if (mysql_connect(SQLSERVER, SQLUSER, SQLPASSWD) == 0)
{
	mysql_connect(SQLSERVER, SQLUSER, SQLPASSW2);
}
mysql_select_db(SQLDB);


Header('Content-Type: text/xml');

header('Expires: Mon, 01 Jan 2001 00:00:00 GMT');  // disable IE caching
header('Last-Modified: ' . gmdate('D, d M Y H:i:s') . 'GMT'); 
header('Cache-Control: no-cache, must-revalidate'); 
header('Pragma: no-cache');

echo '<?xml version="1.0" encoding="ISO-8859-1"?' . '>';
echo '<highscore>';
echo '<today';

$time = -1;
if (isset($_POST['time']) && is_numeric($_POST['time'])) {
	$time = $_POST['time'];
	echo ' time="' . $time .'">';
}
else {
	echo '>';	
}


if (isset($_POST['item']))
{
	$item = $_POST['item'];
	if (strlen($item) <= 8 && $item == urlencode($item))
	{
		$game_set = 0;
		if (isset($_POST['game_set']) && is_numeric($_POST['game_set'])) 
		{
			$game_set = $_POST['game_set'];
		}

		// Total for today
		$index = 1;

		if ($time == -1) 
		{
			$query = mysql_query('select name, score from site_highscores where item = \'' . $item . '\' and game_set = ' . $game_set . ' and date(date) = current_date order by score desc, subscore desc, id desc limit 10');
		}
		else 
		{
			$query = mysql_query('select name, score from site_highscores where item = \'' . $item . '\' and game_set = ' . $game_set . ' and date(date) = date(FROM_UNIXTIME(' . $time . ')) order by score desc, subscore desc, id desc limit 10');
		}

		$row = mysql_fetch_object($query);

		while($row) 
		{
			echo '<rank index="' . $index . '" score="' . $row->score . '">' . $row->name . '</rank>';

			$index++;
			$row = mysql_fetch_object($query);
		}
	}
}

echo '</today>';
echo '<all>';

if (isset($_POST['item']))
{
	$item = $_POST['item'];
	if (strlen($item) <= 8 && $item == urlencode($item))
	{
		$game_set = 0;
		if (isset($_POST['game_set']) && is_numeric($_POST['game_set'])) 
		{
			$game_set = $_POST['game_set'];
		}

		// Overall Total
		$index = 1;

		if ($time == -1) 
		{
			$query = mysql_query('select name, score from site_highscores where item = \'' . $item . '\' and game_set = ' . $game_set . ' order by score desc, subscore desc, id desc limit 10');
		}
		else 
		{
			$timeplus = $time + 86400000;
			$query = mysql_query('select name, score from site_highscores where item = \'' . $item . '\' and game_set = ' . $game_set . ' and UNIX_TIMESTAMP(date) < ' . $timeplus . ' order by score desc, subscore desc, id desc limit 10');
		}

		$row = mysql_fetch_object($query);
		while($row) 
		{
			echo '<rank index="' . $index . '" score="' . $row->score . '">' . $row->name . '</rank>';

			$index++;
			$row = mysql_fetch_object($query);
		}
	}
}

echo '</all>';
echo '</highscore>';

mysql_close();

?>