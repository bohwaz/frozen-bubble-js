<?php

require_once("config.php");


if (mysql_connect(SQLSERVER, SQLUSER, SQLPASSWD) == 0)
{
	mysql_connect(SQLSERVER, SQLUSER, SQLPASSW2);
}
mysql_select_db(SQLDB);

$rank_today = -1;
$rank_all = -1;

// Insert message
if (isset($_POST['item']) && isset($_POST['name']) && isset($_POST['score']))
{
	$item = $_POST['item'];
	if (strlen($item) <= 8 && $item == urlencode($item))
	{
		$name = $_POST['name'];
		if (strlen($name) > 40)
		{
			$name = substr($name, 0, 40);
		}
		$name = urlencode($name);
		if (strlen($name) > 120)
		{
			$name = 'Anonymous';
		}

		if (is_numeric($_POST['score'])) 
		{
			$score = $_POST['score'];

			$game_set = 0;
			if (isset($_POST['game_set']) && is_numeric($_POST['game_set'])) 
			{
				$game_set = $_POST['game_set'];
			}

			$subscore = 0;
			if (isset($_POST['subscore']) && is_numeric($_POST['subscore'])) 
			{
				$subscore = $_POST['subscore'];
			}

			// Insert new highscore
			mysql_query('insert into site_highscores (item, name, game_set, score, subscore) values (\'' . $item . '\', \'' . $name . '\', ' . $game_set . ', ' . $score . ', ' . $subscore . ')');

			// Total for today
			$query = mysql_query('select count(1)+1 total from site_highscores where item = \'' . $item . '\' and game_set = ' . $game_set . ' and (score > ' . $score . ' or (score = ' . $score . ' and subscore > ' . $subscore . ')) and date(date) = current_date');
			$row = mysql_fetch_object($query);
			$rank_today = $row->total;

			// Overall Total
			$query = mysql_query('select count(1)+1 total from site_highscores where item = \'' . $item . '\' and game_set = ' . $game_set . ' and (score > ' . $score . ' or (score = ' . $score . ' and subscore > ' . $subscore . '))');
			$row = mysql_fetch_object($query);
			$rank_all = $row->total;

		}
	}
}

mysql_close();

// Show results

Header('Content-Type: text/xml');

header('Expires: Mon, 01 Jan 2001 00:00:00 GMT');  // disable IE caching
header('Last-Modified: ' . gmdate('D, d M Y H:i:s') . 'GMT'); 
header('Cache-Control: no-cache, must-revalidate'); 
header('Pragma: no-cache');


$body = '<?xml version="1.0" encoding="ISO-8859-1"?' . '>';


$body .= '<highscore>';

if ($rank_today != -1) 
{
	$body .= '<today>';
	$body .= '<rank index="' . $rank_today . '"></rank>';
	$body .= '</today>';
	$body .= '<all>';
	$body .= '<rank index="' . $rank_all . '"></rank>';
	$body .= '</all>';
}

$body .= '</highscore>';

Header('Content-Length: ' . strlen($body));

echo $body;

?>