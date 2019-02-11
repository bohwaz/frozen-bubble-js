/*
 *                 [[ Frozen-Bubble ]]
 *
 * Copyright (c) 2000-2007 Guillaume Cottenceau.
 * Java sourcecode - Copyright (c) 2007 Glenn Sanson.
 *
 * This code is distributed under the GNU General Public License 
 *
 * This program is free software; you can redistribute it and/or
 * modify it under the terms of the GNU General Public License
 * version 2, as published by the Free Software Foundation.
 * 
 * This program is distributed in the hope that it will be useful, but
 * WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License along
 * with this program; if not, write to the Free Software Foundation, Inc.,
 * 675 Mass Ave, Cambridge, MA 02139, USA.
 *
 *
 * Artwork:
 *    Alexis Younes <73lab at free.fr>
 *      (everything but the bubbles)
 *    Amaury Amblard-Ladurantie <amaury at linuxfr.org>
 *      (the bubbles)
 *
 * Soundtrack:
 *    Matthias Le Bidan <matthias.le_bidan at caramail.com>
 *      (the three musics and all the sound effects)
 *
 * Design & Programming:
 *    Guillaume Cottenceau <guillaume.cottenceau at free.fr>
 *      (design and manage the project, whole Perl sourcecode)
 *
 * JavaScript version:
 *    Glenn Sanson <glenn.sanson at free.fr>
 *      (whole JavaScript sourcecode, including JIGA classes 
 *             http://glenn.sanson.free.fr/v2/?select=jiga )
 *
 *     [[ http://glenn.sanson.free.fr/v2/?select=fb_js ]]
 *          [[ http://www.frozen-bubble.org/   ]]
 */

var fb_levels = [];
fb_levels[0] = '77553344077553343344775503447755000000000000000000000000000000000000000000000000';
fb_levels[1] = '08888880002222200033330000003000000330000000600000066000000000000000000000000000';
fb_levels[2] = '00800800000828000002300000023200000360000004640000064000000040000000000000000000';
fb_levels[3] = '00011000000612000046270000540780085008500780005427000046020000060000000000000000';
fb_levels[4] = '00111100001222100121121000122210001111000008080000888800000000000000000000000000';
fb_levels[5] = '05557770050000070500007005342347042342300000000000000000000000000000000000000000';
fb_levels[6] = '05557770050000070500007005342347042342300034234000000000000000000000000000000000';
fb_levels[7] = '01100330006000400100070000400010050006000030004003000200004000500000000000000000';
fb_levels[8] = '40000004074357435000000503574357000700000000400000000000000000000000000000000000';
fb_levels[9] = '03020203023032022020303003202303030303030230320220203020033022030302020200000000';
fb_levels[10] = '08800660020000053200005403000004230000450200000582000056088000660000000000000000';
fb_levels[11] = '88000066026000853200005403000004260000850200000582000056086000860000000000000000';
fb_levels[12] = '00011000000612000046270000543730085833500788445427222446022000060000000000000000';
fb_levels[13] = '00100100004404400131131000440440001001000000000000000000000000000000000000000000';
fb_levels[14] = '00022000000333000044440000555550066666600000700000088000000010000000000000000000';
fb_levels[15] = '00036000005400007806300000000450000360870054000078063000000004500000008700000000';
fb_levels[16] = '00066000000040000002000000008000000300000000500000060000000040000000000000000000';
fb_levels[17] = '00012000000138800001280000111100011122000111222001122200001118800088000000000000';
fb_levels[18] = '02000000020000000345876000000002000000200034587002000000020000000345876000000000';
fb_levels[19] = '07000000060000003458763400000005000000800054367008000000070000006345876000000000';
fb_levels[20] = '43211234043212345432234505432345654334560654345676544567076545678765567800000000';
fb_levels[21] = '00066000000040000003500000007000000350000030605021212121040403070000000000000000';
fb_levels[22] = '00002000085460007002000000006458700020070854600000020007000064580000000000000000';
fb_levels[23] = '00008470000484740068474000784780088472000484740067382000000000000000000000000000';
fb_levels[24] = '60000006060777060650056000400040071001700040004000500500000777000000000000000000';
fb_levels[25] = '08100180080101088201102808231328874334780804340808844880000040000000000000000000';
fb_levels[26] = '04020807060808077010604000302060050405000304030000507000000060000000000000000000';
fb_levels[27] = '00002000000004007242325200000700000520000002040000032000000005000007200000000000';
fb_levels[28] = '00065000000521000003400000250330042362500053015000000000000000000000000000000000';
fb_levels[29] = '00002000000020000300206006002001070020500010206000661200000000000000000000000000';
fb_levels[30] = '00074000000437000037430000743740043743700374374374374374000000000000000000000000';
fb_levels[31] = '77777777050000000436875400600000008754360005000000043687000000000000000000000000';
fb_levels[32] = '20800703070207240508308003800050704613080200000202568620000000000000000000000000';
fb_levels[33] = '77700777000707000034430000406040006446000007270005300350000000000000000000000000';
fb_levels[34] = '00066000000600000457700604457606434776600445760604577006000600000006600000000000';
fb_levels[35] = '20000002020333020234432007340437734004370734043744488444016131610000000000000000';
fb_levels[36] = '00888000008338000866680008888880007070000070070007550755000000000000000000000000';
fb_levels[37] = '04404440048657642444044203232323244044420467568434440443022333220000000000000000';
fb_levels[38] = '07600000042400000670000000064000007270000004600000004700000067600000740000000000';
fb_levels[39] = '74856274062748567485627400000000000000000000000000000000000000000000000000000000';
fb_levels[40] = '00000055000888550000005500200080022008000444080040344404003040440300000000000000';
fb_levels[41] = '00500000008500000085000000585000222222200232322033333333000000000000000000000000';
fb_levels[42] = '10000007072548611000000707254861100000070725486100000000000000000000000000000000';
fb_levels[43] = '44577544014575426245541201245421327441120145472672375113000000000000000000000000';
fb_levels[44] = '77000055051000471700005308000008550000670758867508757580001080800000000000000000';
fb_levels[45] = '06000050006000500067750000030300117007220003030000877400008000400800004000000000';
fb_levels[46] = '07000030028222420052250000242820000370000002620000000000000000000000000000000000';
fb_levels[47] = '88888888080000088003163308000147800000510660000054730000013150000000000000000000';
fb_levels[48] = '00200200005006000800222007000080222205000006000000100000004000000200000000000000';
fb_levels[49] = '08800880070505076004400607000007080000800050005000400400000303000006600000000000';
fb_levels[50] = '01100110085777546777377408577754011001100000000000000000000000000000000000000000';
fb_levels[51] = '00000888000003880188808807888000700088880700000053335040055554440000000000000000';
fb_levels[52] = '50080708087800850080080000111114001331750001112400011045000070670000002100000000';
fb_levels[53] = '06000060010010011113311101001001080400800004700000070000004700000400000000000000';
fb_levels[54] = '00076000000374000065820000733450004847000002430000056000000050000000000000000000';
fb_levels[55] = '88033077070070043002003006004003200300200600300370020080060060050000000000000000';
fb_levels[56] = '00077000001555100007700000038300000770000016661000044000000000000000000000000000';
fb_levels[57] = '00524000002002000052452000245005040045200024524000520000000000000000000000000000';
fb_levels[58] = '07504360010000020346057001000002057036400100000206340570000000000000000000000000';
fb_levels[59] = '00077000000875000328524003222224033344400000600000034000000060000033440000000000';
fb_levels[60] = '50600407030403055002100707034605500120070306040550400307070000050000000000000000';
fb_levels[61] = '37166245020030015004700300001000000250000000300000074000000060000005200000000000';
fb_levels[62] = '00006224016216446216216201621627000027620000062700002162000006210000000000000000';
fb_levels[63] = '01840033001840030184003300184042018407560018408101840345001840670000081200000000';
fb_levels[64] = '00088880045600083000000408000005800045670800312370004567012000003450000000000000';
fb_levels[65] = '08000030022000440300005004400066050000700660002207000080000000000000000000000000';
fb_levels[66] = '05000050030020036001100606002007053886500000700000044000000080000000000000000000';
fb_levels[67] = '02003450030041505003420004054100500362000405615000000000000000000000000000000000';
fb_levels[68] = '30022003030444030305503000881880000550000006860074375347060000020000000000000000';
fb_levels[69] = '53468247020020024124354605005005060060060143156107007007080080080000000000000000';
fb_levels[70] = '06502200060520201000001001750053054637470037006500000000000000000000000000000000';
fb_levels[71] = '00077000000665000027750000283640038326400324253804245380004667700000000000000000';
fb_levels[72] = '00840000002870000486260008813515825767680288288200000000000000000000000000000000';
fb_levels[73] = '00200200006726700223322005821285048686400022222000000000000000000000000000000000';
fb_levels[74] = '50006005077870565386337500052063063880850576505300050520011160000000111100000000';
fb_levels[75] = '20001100030012104001331005012221600155100700555080005500000012100001221000000000';
fb_levels[76] = '00400280008500542001310006504000504722700020050208600040000400000000000000000000';
fb_levels[77] = '20002000030003000400440000505050060066000700828080007700000000000000000000000000';
fb_levels[78] = '30070362060505057004000405310006000704700006060000040536000000000000000000000000';
fb_levels[79] = '70005004014007010080204008058030634327040001546508700100054000531000007000000000';
fb_levels[80] = '72362741000000051638273004000000787516370000000272517340010000000156487100000000';
fb_levels[81] = '00012000000181000023310000181810070880700527775206088060000000000000000000000000';
fb_levels[82] = '00067000000444000086480000407040300480020330402201367210000040000004800000000000';
fb_levels[83] = '07000030003717100100000007000000044317110070000100071370003100000000000000000000';
fb_levels[84] = '18000000026000008360000007450000665500000446400023364000021187004466870000000000';
fb_levels[85] = '00377300003221300343313003436383353638310353773103633383003677830033333000000000';
fb_levels[86] = '00100100021121122886688204303034480770840800700855600655000000000000000000000000';
fb_levels[87] = '07400470070303073012210306108016060770600825052880500508031000130300003000000000';
fb_levels[88] = '72000051038666847200005103688864720000510317771472000051000000000000000000000000';
fb_levels[89] = '60022006060505060350053008300038101551010830003803400430060404066007700600000000';
fb_levels[90] = '33000066060000036000000302026204636423630316031604800480000316000000000000000000';
fb_levels[91] = '17634528000002000002200000020000825436710000020000022000000200001763452800000000';
fb_levels[92] = '00200200003503500347643000760760000880000000800020088004030080030456752000000000';
fb_levels[93] = '20033003024848530270073007084807053002400003720005445540000000000000000000000000';
fb_levels[94] = '00067000000040000002300000005000000680000000300076543286000000000000000000000000';
fb_levels[95] = '01020300005060700801030000704070020203000040601003050700004070800000000000000000';
fb_levels[96] = '22334455066787667544332705768742000000000000000000000000000000000000000000000000';
fb_levels[97] = '85023058066030550608805002178713030640200220003372500537064000460000000000000000';
fb_levels[98] = '26211262023606324723327405450545457667540134043134266243000000000000000000000000';
fb_levels[99] = '41386876070203020751456000602050084676400203050375577662000000000000000000000000';

function fb(_div) {
	// Adds key listener
	addKeyListener();

	new Game(_div, 640, 480);
	currentGame.registerScreen('intro', new IntroScreen());
	currentGame.registerScreen('fb', new GameScreen());
	currentGame.registerScreen('scores', new HighscoresScreen());
	currentGame.setLoader(new LoadManager());
	currentGame.start('intro');
}


function GameScreen() {

	var CHECK_NEXT_TURN = 1;
	var PART_OF_SET = 2;
	var LINKED_TO_TOP = 3;

	var STATE_RUNNING = 1;
	var STATE_WON = 2;
	var STATE_LOST = 3;

	var launchIndex;
	var Launcher;

	var dirX;
	var dirY;
	var realX;
	var realY;
	
	var bubbles;
	var bubSprites;
	var bubCount;
	var checkBalls;
	var bubFalling;

	var nbBalls;
	var removeCheck;
	var removeCount;

	var fireBubble;
	var fireColor;
	var nextBubble;
	var nextColor;
	var runningBubble;
	var runningColor;	

	var penguin;
	var penguinIndex;
	var waitCount;
	var waitDir;

	var fired;
	
	var compressor;
	var compressorFall;
	var compressorMain;
	var compressorAlt;

	var flashSprite;
	var flashIndex;

	var gameState;
	var endSequence;

	var hurry;
	var hurryTimer;

	var stick;
	var stickIndex;

	var levelIndex = 0;

	var life = 4;
	var LifeSprite;
	var lifeIndex;

	var timer = 0;

	// Colorblind
	var cb;

	// Details
	var details;

	// Level data
	var currentLevel = null;
	var nextLevel = null;
	var readyToLoad;

	// Functions
	this.preloadImg = preloadImg;
	this.preloadSnd = preloadSnd;
	this.init = init;
	this.run = run;

	function preloadImg() {
		return new Array(
			'content_fb/gfx/anim1.png','content_fb/gfx/anim10.png','content_fb/gfx/anim11.png','content_fb/gfx/anim12.png','content_fb/gfx/anim13.png','content_fb/gfx/anim14.png','content_fb/gfx/anim15.png','content_fb/gfx/anim16.png','content_fb/gfx/anim17.png','content_fb/gfx/anim18.png','content_fb/gfx/anim19.png','content_fb/gfx/anim2.png','content_fb/gfx/anim20.png','content_fb/gfx/anim21.png','content_fb/gfx/anim22.png','content_fb/gfx/anim23.png','content_fb/gfx/anim24.png','content_fb/gfx/anim25.png','content_fb/gfx/anim26.png','content_fb/gfx/anim27.png','content_fb/gfx/anim28.png','content_fb/gfx/anim29.png','content_fb/gfx/anim3.png','content_fb/gfx/anim30.png','content_fb/gfx/anim31.png',
			'content_fb/gfx/anim32.png','content_fb/gfx/anim33.png','content_fb/gfx/anim34.png','content_fb/gfx/anim35.png','content_fb/gfx/anim36.png','content_fb/gfx/anim37.png','content_fb/gfx/anim38.png','content_fb/gfx/anim39.png','content_fb/gfx/anim4.png','content_fb/gfx/anim40.png','content_fb/gfx/anim41.png','content_fb/gfx/anim42.png','content_fb/gfx/anim43.png','content_fb/gfx/anim44.png','content_fb/gfx/anim45.png','content_fb/gfx/anim46.png','content_fb/gfx/anim47.png','content_fb/gfx/anim48.png','content_fb/gfx/anim49.png','content_fb/gfx/anim5.png','content_fb/gfx/anim50.png','content_fb/gfx/anim51.png','content_fb/gfx/anim52.png','content_fb/gfx/anim53.png','content_fb/gfx/anim54.png',
			'content_fb/gfx/anim55.png','content_fb/gfx/anim56.png','content_fb/gfx/anim57.png','content_fb/gfx/anim58.png','content_fb/gfx/anim59.png','content_fb/gfx/anim6.png','content_fb/gfx/anim60.png','content_fb/gfx/anim61.png','content_fb/gfx/anim62.png','content_fb/gfx/anim63.png','content_fb/gfx/anim64.png','content_fb/gfx/anim65.png','content_fb/gfx/anim66.png','content_fb/gfx/anim67.png','content_fb/gfx/anim68.png','content_fb/gfx/anim69.png','content_fb/gfx/anim7.png','content_fb/gfx/anim70.png','content_fb/gfx/anim71.png','content_fb/gfx/anim8.png','content_fb/gfx/anim9.png','content_fb/gfx/anime32.png','content_fb/gfx/back_one_player.png','content_fb/gfx/bubble-1.gif',
			'content_fb/gfx/bubble-2.gif','content_fb/gfx/bubble-3.gif','content_fb/gfx/bubble-4.gif','content_fb/gfx/bubble-5.gif','content_fb/gfx/bubble-6.gif','content_fb/gfx/bubble-7.gif','content_fb/gfx/bubble-8.gif','content_fb/gfx/bubble-colourblind-1.gif','content_fb/gfx/bubble-colourblind-2.gif','content_fb/gfx/bubble-colourblind-3.gif','content_fb/gfx/bubble-colourblind-4.gif','content_fb/gfx/bubble-colourblind-5.gif','content_fb/gfx/bubble-colourblind-6.gif','content_fb/gfx/bubble-colourblind-7.gif','content_fb/gfx/bubble-colourblind-8.gif',
			'content_fb/gfx/bubble_lose.png','content_fb/gfx/compressor_ext.png','content_fb/gfx/compressor_main.png','content_fb/gfx/compressor_alt.png','content_fb/gfx/hurry_p1.png','content_fb/gfx/launcher1.png','content_fb/gfx/launcher10.png','content_fb/gfx/launcher11.png','content_fb/gfx/launcher12.png','content_fb/gfx/launcher13.png','content_fb/gfx/launcher14.png','content_fb/gfx/launcher15.png','content_fb/gfx/launcher16.png','content_fb/gfx/launcher17.png','content_fb/gfx/launcher18.png','content_fb/gfx/launcher19.png','content_fb/gfx/launcher2.png','content_fb/gfx/launcher20.png','content_fb/gfx/launcher21.png','content_fb/gfx/launcher22.png',
			'content_fb/gfx/launcher23.png','content_fb/gfx/launcher24.png','content_fb/gfx/launcher25.png','content_fb/gfx/launcher26.png','content_fb/gfx/launcher27.png','content_fb/gfx/launcher28.png','content_fb/gfx/launcher29.png','content_fb/gfx/launcher3.png','content_fb/gfx/launcher30.png','content_fb/gfx/launcher31.png','content_fb/gfx/launcher32.png','content_fb/gfx/launcher33.png','content_fb/gfx/launcher34.png','content_fb/gfx/launcher35.png','content_fb/gfx/launcher36.png','content_fb/gfx/launcher37.png','content_fb/gfx/launcher38.png','content_fb/gfx/launcher39.png','content_fb/gfx/launcher4.png',
			'content_fb/gfx/launcher40.png','content_fb/gfx/launcher41.png','content_fb/gfx/launcher42.png','content_fb/gfx/launcher43.png','content_fb/gfx/launcher44.png','content_fb/gfx/launcher45.png','content_fb/gfx/launcher46.png','content_fb/gfx/launcher47.png','content_fb/gfx/launcher48.png','content_fb/gfx/launcher49.png','content_fb/gfx/launcher5.png','content_fb/gfx/launcher50.png','content_fb/gfx/launcher51.png','content_fb/gfx/launcher52.png','content_fb/gfx/launcher53.png','content_fb/gfx/launcher54.png','content_fb/gfx/launcher55.png','content_fb/gfx/launcher56.png','content_fb/gfx/launcher57.png',
			'content_fb/gfx/launcher58.png','content_fb/gfx/launcher59.png','content_fb/gfx/launcher6.png','content_fb/gfx/launcher7.png','content_fb/gfx/launcher8.png','content_fb/gfx/launcher9.png','content_fb/gfx/loose1.png','content_fb/gfx/loose2.png','content_fb/gfx/loose3.png','content_fb/gfx/loose4.png','content_fb/gfx/loose5.png','content_fb/gfx/loose6.png','content_fb/gfx/loose7.png','content_fb/gfx/loose8.png','content_fb/gfx/loose9.png','content_fb/gfx/loose10.png','content_fb/gfx/loose11.png',
			'content_fb/gfx/loose12.png','content_fb/gfx/loose13.png','content_fb/gfx/loose14.png','content_fb/gfx/loose15.png','content_fb/gfx/loose16.png','content_fb/gfx/loose17.png','content_fb/gfx/loose18.png','content_fb/gfx/loose19.png','content_fb/gfx/loose20.png','content_fb/gfx/loose21.png','content_fb/gfx/loose22.png','content_fb/gfx/loose23.png','content_fb/gfx/loose24.png','content_fb/gfx/loose25.png','content_fb/gfx/loose26.png','content_fb/gfx/loose27.png',
			'content_fb/gfx/loose28.png','content_fb/gfx/loose29.png','content_fb/gfx/loose30.png','content_fb/gfx/loose31.png','content_fb/gfx/loose32.png','content_fb/gfx/loose33.png','content_fb/gfx/loose34.png','content_fb/gfx/loose35.png','content_fb/gfx/loose36.png','content_fb/gfx/loose37.png','content_fb/gfx/loose38.png','content_fb/gfx/loose39.png','content_fb/gfx/loose40.png','content_fb/gfx/loose41.png','content_fb/gfx/loose42.png','content_fb/gfx/loose43.png',
			'content_fb/gfx/loose44.png','content_fb/gfx/loose45.png','content_fb/gfx/loose46.png','content_fb/gfx/loose47.png','content_fb/gfx/loose48.png','content_fb/gfx/loose49.png','content_fb/gfx/loose50.png','content_fb/gfx/loose51.png','content_fb/gfx/loose52.png','content_fb/gfx/loose53.png','content_fb/gfx/loose54.png','content_fb/gfx/loose55.png','content_fb/gfx/loose56.png','content_fb/gfx/loose57.png','content_fb/gfx/loose58.png','content_fb/gfx/loose59.png',
			'content_fb/gfx/loose60.png','content_fb/gfx/loose61.png','content_fb/gfx/loose62.png','content_fb/gfx/loose63.png','content_fb/gfx/loose64.png','content_fb/gfx/loose65.png','content_fb/gfx/loose66.png','content_fb/gfx/loose67.png','content_fb/gfx/loose68.png','content_fb/gfx/loose69.png','content_fb/gfx/loose70.png','content_fb/gfx/loose71.png','content_fb/gfx/loose72.png','content_fb/gfx/loose73.png','content_fb/gfx/loose74.png','content_fb/gfx/loose75.png',
			'content_fb/gfx/loose76.png','content_fb/gfx/loose77.png','content_fb/gfx/loose78.png','content_fb/gfx/loose79.png','content_fb/gfx/loose80.png','content_fb/gfx/loose81.png','content_fb/gfx/loose82.png','content_fb/gfx/loose83.png','content_fb/gfx/loose84.png','content_fb/gfx/loose85.png','content_fb/gfx/loose86.png','content_fb/gfx/loose87.png','content_fb/gfx/loose88.png','content_fb/gfx/loose89.png','content_fb/gfx/loose90.png','content_fb/gfx/loose91.png',
			'content_fb/gfx/loose92.png','content_fb/gfx/loose93.png','content_fb/gfx/loose94.png','content_fb/gfx/loose95.png','content_fb/gfx/loose96.png','content_fb/gfx/loose97.png','content_fb/gfx/loose98.png','content_fb/gfx/loose99.png','content_fb/gfx/loose100.png','content_fb/gfx/loose101.png','content_fb/gfx/loose102.png','content_fb/gfx/loose103.png','content_fb/gfx/loose104.png','content_fb/gfx/loose105.png','content_fb/gfx/loose106.png','content_fb/gfx/loose107.png',
			'content_fb/gfx/loose108.png','content_fb/gfx/loose109.png','content_fb/gfx/loose110.png','content_fb/gfx/loose111.png','content_fb/gfx/loose112.png','content_fb/gfx/loose113.png','content_fb/gfx/loose114.png','content_fb/gfx/loose115.png','content_fb/gfx/loose116.png','content_fb/gfx/loose117.png','content_fb/gfx/loose118.png','content_fb/gfx/loose119.png','content_fb/gfx/loose120.png','content_fb/gfx/loose121.png','content_fb/gfx/loose122.png','content_fb/gfx/loose123.png',
			'content_fb/gfx/loose124.png','content_fb/gfx/loose125.png','content_fb/gfx/loose126.png','content_fb/gfx/loose127.png','content_fb/gfx/loose128.png','content_fb/gfx/loose129.png','content_fb/gfx/loose130.png','content_fb/gfx/loose131.png','content_fb/gfx/loose132.png','content_fb/gfx/loose133.png','content_fb/gfx/loose134.png','content_fb/gfx/loose135.png','content_fb/gfx/loose136.png','content_fb/gfx/loose137.png','content_fb/gfx/loose138.png','content_fb/gfx/loose139.png',
			'content_fb/gfx/loose140.png','content_fb/gfx/loose141.png','content_fb/gfx/loose142.png','content_fb/gfx/loose143.png','content_fb/gfx/loose144.png','content_fb/gfx/loose145.png','content_fb/gfx/loose146.png','content_fb/gfx/loose147.png','content_fb/gfx/loose148.png','content_fb/gfx/loose149.png','content_fb/gfx/loose150.png','content_fb/gfx/loose151.png','content_fb/gfx/loose152.png','content_fb/gfx/loose153.png','content_fb/gfx/loose154.png','content_fb/gfx/loose155.png',
			'content_fb/gfx/loose156.png','content_fb/gfx/loose157.png','content_fb/gfx/loose158.png','content_fb/gfx/lose_panel.png','content_fb/gfx/wait1.png','content_fb/gfx/wait10.png','content_fb/gfx/wait11.png','content_fb/gfx/wait12.png','content_fb/gfx/wait13.png','content_fb/gfx/wait14.png','content_fb/gfx/wait15.png','content_fb/gfx/wait16.png','content_fb/gfx/wait17.png','content_fb/gfx/wait18.png','content_fb/gfx/wait19.png','content_fb/gfx/wait2.png','content_fb/gfx/wait20.png','content_fb/gfx/wait21.png','content_fb/gfx/wait22.png','content_fb/gfx/wait23.png','content_fb/gfx/wait24.png','content_fb/gfx/wait25.png','content_fb/gfx/wait26.png',
			'content_fb/gfx/wait27.png','content_fb/gfx/wait28.png','content_fb/gfx/wait29.png','content_fb/gfx/wait3.png','content_fb/gfx/wait30.png','content_fb/gfx/wait31.png','content_fb/gfx/wait32.png','content_fb/gfx/wait33.png','content_fb/gfx/wait34.png','content_fb/gfx/wait35.png','content_fb/gfx/wait36.png','content_fb/gfx/wait37.png','content_fb/gfx/wait38.png','content_fb/gfx/wait39.png','content_fb/gfx/wait4.png','content_fb/gfx/wait40.png','content_fb/gfx/wait41.png','content_fb/gfx/wait42.png','content_fb/gfx/wait43.png','content_fb/gfx/wait44.png','content_fb/gfx/wait45.png','content_fb/gfx/wait46.png','content_fb/gfx/wait47.png','content_fb/gfx/wait48.png','content_fb/gfx/wait49.png',
			'content_fb/gfx/wait5.png','content_fb/gfx/wait50.png','content_fb/gfx/wait51.png','content_fb/gfx/wait52.png','content_fb/gfx/wait53.png','content_fb/gfx/wait54.png','content_fb/gfx/wait55.png','content_fb/gfx/wait56.png','content_fb/gfx/wait57.png','content_fb/gfx/wait58.png','content_fb/gfx/wait59.png','content_fb/gfx/wait6.png','content_fb/gfx/wait60.png','content_fb/gfx/wait61.png','content_fb/gfx/wait62.png','content_fb/gfx/wait63.png','content_fb/gfx/wait64.png','content_fb/gfx/wait65.png','content_fb/gfx/wait66.png','content_fb/gfx/wait67.png','content_fb/gfx/wait68.png','content_fb/gfx/wait69.png','content_fb/gfx/wait7.png','content_fb/gfx/wait70.png','content_fb/gfx/wait71.png',
			'content_fb/gfx/wait72.png','content_fb/gfx/wait73.png','content_fb/gfx/wait74.png','content_fb/gfx/wait75.png','content_fb/gfx/wait76.png','content_fb/gfx/wait77.png','content_fb/gfx/wait78.png','content_fb/gfx/wait79.png','content_fb/gfx/wait8.png','content_fb/gfx/wait80.png','content_fb/gfx/wait81.png','content_fb/gfx/wait82.png','content_fb/gfx/wait83.png','content_fb/gfx/wait84.png','content_fb/gfx/wait85.png','content_fb/gfx/wait86.png','content_fb/gfx/wait87.png','content_fb/gfx/wait88.png','content_fb/gfx/wait89.png','content_fb/gfx/wait9.png','content_fb/gfx/wait90.png','content_fb/gfx/wait91.png','content_fb/gfx/wait92.png','content_fb/gfx/wait93.png','content_fb/gfx/wait94.png',
			'content_fb/gfx/wait95.png','content_fb/gfx/wait96.png','content_fb/gfx/wait97.png','content_fb/gfx/win1.png','content_fb/gfx/win2.png','content_fb/gfx/win3.png','content_fb/gfx/win4.png','content_fb/gfx/win5.png','content_fb/gfx/win6.png','content_fb/gfx/win7.png','content_fb/gfx/win8.png','content_fb/gfx/win9.png','content_fb/gfx/win10.png','content_fb/gfx/win11.png','content_fb/gfx/win12.png','content_fb/gfx/win13.png','content_fb/gfx/win14.png','content_fb/gfx/win15.png','content_fb/gfx/win16.png',
			'content_fb/gfx/win17.png','content_fb/gfx/win18.png','content_fb/gfx/win19.png','content_fb/gfx/win20.png','content_fb/gfx/win21.png','content_fb/gfx/win22.png','content_fb/gfx/win23.png','content_fb/gfx/win24.png','content_fb/gfx/win25.png','content_fb/gfx/win26.png','content_fb/gfx/win27.png','content_fb/gfx/win28.png','content_fb/gfx/win29.png','content_fb/gfx/win30.png','content_fb/gfx/win31.png','content_fb/gfx/win32.png','content_fb/gfx/win33.png','content_fb/gfx/win34.png',
			'content_fb/gfx/win35.png','content_fb/gfx/win36.png','content_fb/gfx/win37.png','content_fb/gfx/win38.png','content_fb/gfx/win39.png','content_fb/gfx/win40.png','content_fb/gfx/win41.png','content_fb/gfx/win42.png','content_fb/gfx/win43.png','content_fb/gfx/win44.png','content_fb/gfx/win45.png','content_fb/gfx/win46.png','content_fb/gfx/win47.png','content_fb/gfx/win48.png','content_fb/gfx/win49.png','content_fb/gfx/win50.png','content_fb/gfx/win51.png','content_fb/gfx/win52.png',
			'content_fb/gfx/win53.png','content_fb/gfx/win54.png','content_fb/gfx/win55.png','content_fb/gfx/win56.png','content_fb/gfx/win57.png','content_fb/gfx/win58.png','content_fb/gfx/win59.png','content_fb/gfx/win60.png','content_fb/gfx/win61.png','content_fb/gfx/win62.png','content_fb/gfx/win63.png','content_fb/gfx/win64.png','content_fb/gfx/win65.png','content_fb/gfx/win66.png','content_fb/gfx/win67.png','content_fb/gfx/win68.png','content_fb/gfx/win_panel_1player.png',
			'content_fb/gfx/stick_effect_0.png', 'content_fb/gfx/stick_effect_1.png', 'content_fb/gfx/stick_effect_2.png', 'content_fb/gfx/stick_effect_3.png', 'content_fb/gfx/stick_effect_4.png', 'content_fb/gfx/stick_effect_5.png', 'content_fb/gfx/stick_effect_6.png', 'content_fb/gfx/stick_effect_7.png', 'content_fb/gfx/bubble_prelight.png',
			'content_fb/gfx/life1.png', 'content_fb/gfx/life2.png', 'content_fb/gfx/life3.png', 'content_fb/gfx/life4.png', 'content_fb/gfx/life5.png', 'content_fb/gfx/life6.png', 'content_fb/gfx/life7.png', 'content_fb/gfx/life8.png', 'content_fb/gfx/life9.png', 'content_fb/gfx/life10.png', 'content_fb/gfx/life11.png', 'content_fb/gfx/life12.png', 'content_fb/gfx/life13.png', 'content_fb/gfx/life14.png', 'content_fb/gfx/life15.png', 
			'content_fb/gfx/life16.png', 'content_fb/gfx/life17.png', 'content_fb/gfx/life18.png', 'content_fb/gfx/life19.png', 'content_fb/gfx/life20.png', 'content_fb/gfx/life21.png', 'content_fb/gfx/life22.png', 'content_fb/gfx/life23.png', 'content_fb/gfx/life24.png', 'content_fb/gfx/life25.png', 'content_fb/gfx/life26.png', 'content_fb/gfx/life27.png', 'content_fb/gfx/life28.png', 'content_fb/gfx/life29.png', 'content_fb/gfx/life30.png', 'content_fb/gfx/loading.png');
	}

	function preloadSnd() {
		return new Array('content_fb/snd/applause.wav', 'content_fb/snd/destroy_group.wav', 'content_fb/snd/hurry.wav', 'content_fb/snd/launch.wav', 'content_fb/snd/lose.wav', 'content_fb/snd/newroot_solo.wav', 'content_fb/snd/rebound.wav', 'content_fb/snd/stick.wav');
	}

	function init() {
		// Init vars
		if (currentGame.getValue('reset') == 1) {
			life = 4;
			levelIndex = 0;

			currentGame.setValue('reset', 0);
		}

		details = currentGame.getValue('details');

		launchIndex = 30;
		fired = false;

		waitCount = 0;
		waitDir = 1;

		compressor = 0;
		compressorFall = 0;

		// Set background
		currentGame.setBackground('content_fb/gfx/back_one_player.png');

		// Init penguin
		penguin = new Sprite(404, 420, 'content_fb/gfx/anim20.png', 1);
		penguinIndex = 20;

		// Init bubbles
		if (currentGame.getValue('colorBlind')) {
			cb = 'colourblind-';
		}
		else {
			cb = '';
		}

		bubbles = new Array();
		bubSprites = new Array();

		checkBalls = new Array();
		bubCount = new Array();

		bubFalling = new Array();

		nbBalls = 0;

		for (var i = 1; i <= 8; i++) {
			bubCount[i] = 0;
		}

		if (!currentLevel) {
			currentLevel = currentGame.getValue('first_level');
		}

		if (!nextLevel) {
			var nLevel = levelIndex + 1;
			if (!(nLevel in fb_levels))
			{
				nextLevel = 'COMPLETE';
			}
			else
			{
				nextLevel = fb_levels[nLevel] + '000000000000000000000000';
			}
		}

		for (var i = 0; i < 8; i++) {
			bubbles[i] = new Array();
			bubSprites[i] = new Array();

			checkBalls[i] = new Array();
			for (var j = 0; j < 13; j++) {
				bubbles[i][j] = currentLevel.charAt(i + j * 8);
				checkBalls[i][j] = 0;

				if (bubbles[i][j] != 0) {
					// Draw bubble
					bubSprites[i][j] = 
						new Sprite(190 + i * 32 - (j % 2) * 16, 
							44 + j * 28, 
							'content_fb/gfx/bubble-' + cb + bubbles[i][j] + '.gif', 
							3);
					bubCount[bubbles[i][j]]++;

					nbBalls++;
				}
			}
		}

		// Init nextBall
		nextColor = nextBall();
		nextBubble = new Sprite(302, 440, 'content_fb/gfx/bubble-' + cb + nextColor + '.gif', 1);	

		fireColor = nextBall();
		fireBubble = new Sprite(302, 390, 'content_fb/gfx/bubble-' + cb + fireColor + '.gif', 1);

		// Init launcher
		bubbleLaunch = launcher = new Sprite(268, 356, 'content_fb/gfx/launcher30.png', 2);

		// Init compressor
		compressorMain = new Sprite(192, -7, 'content_fb/gfx/compressor_main.png', 2);

		// Init lives
		lifeSprite = new Array();
		lifeIndex = new Array();

		for (var i = 0; i < life; i++) {
			if (details > 2) {
				lifeIndex[i] = ((i * 8) % 30) + 1;
				lifeSprite[i] = new Sprite(6 + i * 40, 436, 'content_fb/gfx/life' + lifeIndex[i] + '.png', 2);
			}
			else {
				lifeSprite[i] = new Sprite(6 + i * 40, 436, 'content_fb/gfx/life20.png', 2);
			}
		}

		gameState = STATE_RUNNING;
		endSequence = 0;
		
		new TextSprite(36, 101, 'Level ' + (levelIndex + 1), 'Arial', 20, '#000000', 1);
		new TextSprite(35, 100, 'Level ' + (levelIndex + 1), 'Arial', 20, '#FFFFFF', 2);

		hurryTimer = 0;
		if (hurry) {
			hurry.remove();
			hurry = null;
		}

		timer = 0;
		readyToLoad = false;
	}

	function run() {
		if (gameState != STATE_RUNNING) {
			if (gameState == STATE_WON) {
				runWon();
			}
			else {
				runLost();
			}

			return;
		}
		else {
			// STATE_RUNNING
			timer++;
		}

		var checkKey = currentKey;
		if (hurryTimer > 820) {
			checkKey = 38;
		}

		switch(checkKey) {
			case 37:
				if (launchIndex > 1) {
					launchIndex--;
					launcher.setSrc('content_fb/gfx/launcher' + launchIndex + '.png');
				}

				if (penguinIndex > 20) {
					penguinIndex = 20;
					penguin.setSrc('content_fb/gfx/anim20.png');
				}
				else if (penguinIndex > 1) {
					penguinIndex--;
					penguin.setSrc('content_fb/gfx/anim' + penguinIndex + '.png');
				}
			
				waitCount = 0;
				waitDir = 1;
			break;
			case 39:
				if (launchIndex < 59) {
					launchIndex++;
					launcher.setSrc('content_fb/gfx/launcher' + launchIndex + '.png');
				}

				if (penguinIndex < 50) {
					penguinIndex = 50;
					penguin.setSrc('content_fb/gfx/anim50.png');
				}
				else if (penguinIndex < 71) {
					penguinIndex++;
					penguin.setSrc('content_fb/gfx/anim' + penguinIndex + '.png');
				}

				waitCount = 0;
				waitDir = 1;
			break;
			case 16:
			case 38:
				if (!fired) {
					fired = true;

					currentGame.playSound('content_fb/snd/launch.wav');

					//compressorFall++;
					penguinIndex = 21;
					penguin.setSrc('content_fb/gfx/anim21.png');

					waitCount = 0;
					waitDir = 1;

					runningColor = fireColor;
					runningBubble = new Sprite(302, 390, 'content_fb/gfx/bubble-' + cb + runningColor + '.gif', 3);					
					fireColor = nextColor;
					fireBubble.setSrc('content_fb/gfx/bubble-' + cb + fireColor + '.gif');
					nextColor = nextBall();
					nextBubble.setSrc('content_fb/gfx/bubble-' + cb + nextColor + '.gif');

					dirX = Math.cos(launchIndex * Math.PI / 60) * -8;
					dirY = Math.sin(launchIndex * Math.PI / 60) * -8;
					realX = 302;
					realY = 390;
					
					// Hurry
					hurryTimer = 0;
					if (hurry) {
						hurry.remove();
						hurry = null;
					}
				}
			// No break
			default:
				if (penguinIndex < 20) {
					penguinIndex++;
					penguin.setSrc('content_fb/gfx/anim' + penguinIndex + '.png');
				}
				else if (penguinIndex > 50) {
					penguinIndex--;
					penguin.setSrc('content_fb/gfx/anim' + penguinIndex + '.png');
				}
				else if (penguinIndex == 20 || penguinIndex == 50) {
					// Wait
					waitCount += waitDir;

					if (waitCount == 97) {
						waitDir = -1;
					}
					else if (waitCount == 1 && waitDir == -1) {
						waitDir = 1;
					}
					if (waitCount > 20) {
						penguin.setSrc('content_fb/gfx/wait' + (waitCount - 20) + '.png');
					}
				}
				else {
					penguinIndex++;
					penguin.setSrc('content_fb/gfx/anim' + penguinIndex + '.png');					
				}
			break;
		}


		// Running bubble
		if (fired) {
			controlBall();

			if (gameState == STATE_WON) {
				// Store data
				currentGame.setValue('level', levelIndex + 1);
				currentGame.setValue('timer', currentGame.getValue('timer') + timer);				
			}
		}

		// Compressor
		if (compressorFall == 10 && !fired && gameState == STATE_RUNNING) {
			currentGame.playSound('content_fb/snd/newroot_solo.wav');

			new Sprite(224, -5 + compressor * 28, 'content_fb/gfx/compressor_ext.png', 1);

			compressor++;
			compressorFall = 0;

			compressorMain.moveTo(192, -7 + 28 * compressor);
			for (var i = 0; i < 8; i++) {
				for (var j = 0; j < 12; j++) {

					if (bubSprites[i][j]) {
						bubSprites[i][j].moveTo(
							190 + i * 32 - (j % 2) * 16,
							44 + (j + compressor) * 28);
					}
				}
			}

			// Check game lost
			for (var i = 0; i < 8; i++) {
				if (bubbles[i][12 - compressor] != 0) {
					gameState = STATE_LOST;
				}
			}
		}

		// Flash
		if ((compressorFall == 8 || compressorFall == 9) && gameState == STATE_RUNNING && details > 1) {
			flashIndex++;
			var checkFlash = flashIndex;
			if (compressorFall == 8) {
				checkFlash = (flashIndex >> 1) + 1;
			}

			if (checkFlash > 15) {
				flashIndex = 1;
				checkFlash = 1;
			}
			
			// Remove old flashing
			for (var i in flashSprite) {
				flashSprite[i].remove();
			}
			flashSprite = new Array();
	
			// Add new flashing
			for (var y = 1 - (checkFlash % 2); y < 13; y += 2) {
				var x = (checkFlash >> 1);

				if (bubSprites[x][y]) {
					flashSprite[flashSprite.length] = 
						new Sprite(190 + x * 32 - (y % 2) * 16, 
							44 + y * 28 + compressor * 28, 
							'content_fb/gfx/bubble_prelight.png', 
							3);
				}
			}
		}

		if (compressorFall == 8 && details == 1 && compressorAlt == null) {
			compressorAlt = new Sprite(29, 7, 'content_fb/gfx/compressor_alt.png', 1);
		}

		if (compressorFall < 8 && details == 1 && compressorAlt != null) {
			compressorAlt.remove();
			compressorAlt = null;
		}

		// Stick
		if (stick != null) {
			stickIndex++;

			if (stickIndex >= 8) {
				stick.remove();
				stick = null;
			}
			else {
				stick.setSrc('content_fb/gfx/stick_effect_' + stickIndex + '.png');
			}
		}

		// Falling balls
		fallingBubbles();

		// Hurry
		if (!fired) {
			hurryTimer++;

			if (hurryTimer >= 600) {
				if ((hurryTimer % 50) == 0 && !hurry) {
					hurry = new Sprite(196, 155, 'content_fb/gfx/hurry_p1.png', 10);
					
					currentGame.playSound('content_fb/snd/hurry.wav');
				}
				else if ((hurryTimer % 50) == 25 && hurry) {
					hurry.remove();
					hurry = null;
				}
			}
		}

		// Life manager
		if (details > 2) {
			showLife();
		}

		// Reset key
		if (gameState != STATE_RUNNING) {
			currentKey = -1;
		}
	}

	function fallingBubbles() {
		for (var i=0 ; i<bubFalling.length ; i++) {
			bubFalling[i].fY += 0.5;

			bubFalling[i].moveTo(bubFalling[i].getX() + bubFalling[i].fX,
					bubFalling[i].getY() + bubFalling[i].fY);

			if (bubFalling[i].getY() > 500) {
				bubFalling[i].remove();
				bubFalling.splice(i, 1);
				i--;
			}
		}
	}

	function showLife() {
		for (var i = 0; i < life; i++) {
			lifeIndex[i]++;
			if (lifeIndex[i] > 30) {
				lifeIndex[i] = 1;
			}

			if (lifeSprite[i]) {
				lifeSprite[i].setSrc('content_fb/gfx/life' + lifeIndex[i] + '.png');
			}
		}
	}

	function runWon() {
		if (currentKey == 13 || currentKey == 32 || readyToLoad) {
			if (nextLevel) {
				currentKey = -1;
				levelIndex++;

				if (nextLevel == 'COMPLETE') {
					currentGame.setScreen('scores');
				}
				else {
					currentLevel = nextLevel;
					nextLevel = null;
					currentGame.setScreen('fb');
				}
			}
			else {
				if (!readyToLoad) {
					new Sprite(201, 30, 'content_fb/gfx/loading.png', 10);
					readyToLoad = true;
				}
			}			
		}

		if (endSequence == 0) {
			currentGame.playSound('content_fb/snd/applause.wav');

			new Sprite(153, 184, 'content_fb/gfx/win_panel_1player.png', 10);
		}

		endSequence++;
		if (endSequence > 68) {
			endSequence = 1;
		}

		penguin.setSrc('content_fb/gfx/win' + endSequence + '.png');

		// Falling balls
		fallingBubbles();

		// Life
		if (details > 2) {
			showLife();
		}
	}

	function runLost() {
		if (currentKey == 13 || currentKey == 32 || readyToLoad) {
			if (nextLevel || life <= 0) {
				currentKey = -1;
				if (life > 0) {
					currentGame.setScreen('fb');
				}
				else {
					currentLevel = null;
					nextLevel = null;
					currentGame.setScreen('scores');
				}
			}
			else {
				if (!readyToLoad) {
					new Sprite(201, 30, 'content_fb/gfx/loading.png', 10);
					readyToLoad = true;
				}				
			}
		}


		if (endSequence == 0) {
			currentGame.playSound('content_fb/snd/lose.wav');
			new Sprite(145, 163, 'content_fb/gfx/lose_panel.png', 10);

			life--;
			lifeSprite[life].fY = 0;
		}

		// Iced effect
		if (endSequence < 104) {
			var iceX = endSequence % 8;
			var iceY = Math.floor(endSequence / 8);

			if (bubbles[iceX][iceY] != 0) {
				new Sprite(189 + iceX * 32 - (iceY % 2) * 16, 
					43 + (iceY + compressor) * 28, 
					'content_fb/gfx/bubble_lose.png', 
					4);
			}
		}

		if (endSequence < 158) {
			endSequence++;
			penguin.setSrc('content_fb/gfx/loose' + endSequence + '.png');

		}

		// Falling balls
		fallingBubbles();

		// Life
		if (details > 2) {
			showLife();
		}
		if (lifeSprite[life]) {
			// falling lost life

			lifeSprite[life].fY += 0.5;
			lifeSprite[life].moveTo(lifeSprite[life].getX(),
					lifeSprite[life].getY() + lifeSprite[life].fY);

			if (lifeSprite[life].getY() > 500) {
				lifeSprite[life].remove();
				lifeSprite.splice(life, 1);
			}

		}
	}



	function controlBall() {
		realX += dirX;
		realY += dirY;

		if (realX < 190 || realX > 414) {
			dirX = -dirX;
			realX += dirX;

			currentGame.playSound('content_fb/snd/rebound.wav');
		}

		// Check if collision occured
		var collision = false;
		
		var topY = Math.floor(((realY - 44) / 28) - compressor);
		var topX = Math.floor((realX - 190 + (topY % 2) * 16) / 32);
		var firstPart = false;
		
		if (topY <= (12 - compressor)) {
			// Check < 0
			if (realY < (44 + 28 * compressor)) {
				topY = -1;
				collision = true;
			}
			
			// Check neighbors
			if (!collision) {
				collision = collide(topX, topY);
			}
			if (!collision) {
				collision = collide(topX + 1, topY);
			}
			if (!collision) {
				collision = collide(topX + 1 - (topY % 2), topY + 1);
			}
			if (!collision) {
				firstPart = (realX - (topX * 32 - (topY % 2) * 16 + 190)) < 16;
				if (firstPart) {
					collision = collide(topX - (topY % 2), topY + 1);
				}
				else {
					collision = collide(topX + 2 - (topY % 2), topY + 1);
				}
			}
		}

		var posY;

		if (collision) {

			fired = false;
			nbBalls++;

			if (topY < 0) {
				topY = 0;
			}
			
			var posX = 0;
			posY = 0;
			
			// Find min distance
			var min = 0;
			var minVal = getDistance(topX, topY);
			var cmpMinVal = getDistance(topX + 1, topY);
			if (cmpMinVal < minVal) {
				min = 1;
				minVal = cmpMinVal;
			}
			cmpMinVal = getDistance(topX + 1 - (topY % 2), topY + 1);
			if (cmpMinVal < minVal) {
				min = 2;
				minVal = cmpMinVal;
			}
			if (firstPart) {
				cmpMinVal = getDistance(topX - (topY % 2), topY + 1);
			}
			else {
				cmpMinVal = getDistance(topX + 2 - (topY % 2), topY + 1);
			}
			if (cmpMinVal < minVal) {
				min = 3;
				minVal = cmpMinVal;
			}
			
			// Position ball on it
			switch(min) {
			case 0:
				posX = topX;
				posY = topY;
				break;
			case 1:
				posX = topX + 1;
				posY = topY;
				break;
			case 2:
				posX = topX + 1 - (topY % 2);
				posY = topY + 1;
				break;
			case 3:
				if (firstPart) {
					posX = topX - (topY % 2);
				}
				else {
					posX = topX + 2 - (topY % 2);
				}
				posY = topY + 1;
				break;
			}

			// Reposition
			realX = 190 + posX * 32 - (posY % 2) * 16;
			realY = 44 + (posY + compressor) * 28;

			bubbles[posX][posY] = runningColor;
			bubSprites[posX][posY] = runningBubble;
			bubCount[runningColor]++;
			checkBalls[posX][posY] = CHECK_NEXT_TURN;
			removeCheck = 1;
			removeCount = 0;
		}


		runningBubble.moveTo(Math.floor(realX), Math.floor(realY));

		if (collision) {

			// Check remove

			while (removeCheck != 0) {
				for (var j=0 ; j<13 ; j++) {
					for (var i=0 ; i<8 ; i++) {
						if (checkBalls[i][j] == CHECK_NEXT_TURN) {
							if (bubbles[i][j] == runningColor) {
								checkBalls[i][j] = PART_OF_SET;
								removeCount++;
								
								// Check neighbors
								checkNeighbors(i, j, checkBalls);
							}
							else {
								checkBalls[i][j] = 0; // No action
							}
							
							removeCheck--;
						}
					}
				}
			}
			
			if (removeCount >= 3) {

				currentGame.playSound('content_fb/snd/destroy_group.wav');

				// Ball set is removed
				for (var i=0 ; i<8 ; i++) {
					if (bubbles[i][0] != 0 && checkBalls[i][0] != PART_OF_SET) {
						checkBalls[i][0] = CHECK_NEXT_TURN;
						removeCheck++;
					}
				}
				
				while (removeCheck != 0) {
					for (var j=0 ; j<13 ; j++) {
						for (var i=0 ; i<8 ; i++) {
							if (checkBalls[i][j] == CHECK_NEXT_TURN) {
								checkBalls[i][j] = LINKED_TO_TOP;
								removeCheck--;	
								
								// Check neighbors
								checkNeighbors(i, j, checkBalls);
							}
						}
					}
				}
				
				// Physically remove balls
				for (var j=0 ; j<13 ; j++) {
					for (var i=0 ; i<8 ; i++) {
						if (bubbles[i][j] != 0 
							&& (checkBalls[i][j] == 0 || checkBalls[i][j] == PART_OF_SET)) {
							
							//addFallingBall(i, j, bubbles[i][j]);
							
							bubCount[bubbles[i][j]]--;
							bubbles[i][j] = 0;
							
							// Set falling values
							bubSprites[i][j].fX = (Math.random() * 8 - 4);
							bubSprites[i][j].fY = -5;
							bubSprites[i][j].setIndex(5);
							bubFalling[bubFalling.length] = bubSprites[i][j];
							
							bubSprites[i][j] = null;

							//removing++;
							nbBalls--;
						}		

						checkBalls[i][j] = 0;
					}
				}

				if (nbBalls == 0) {
					gameState = STATE_WON;
				}
			}
			else {
				currentGame.playSound('content_fb/snd/stick.wav');

				for (var j=0 ; j<13 ; j++) {
					for (var i=0 ; i<8 ; i++) {
						checkBalls[i][j] = 0;
					}
				}

				if ((posY + compressor) >= 12) {
					gameState = STATE_LOST;
				}

				if (gameState == STATE_RUNNING) {
					if (compressorFall == 9) {
						stick = new Sprite(Math.floor(realX), Math.floor(realY) + 28, 'content_fb/gfx/stick_effect_0.png', 3);
					}
					else {
						stick = new Sprite(Math.floor(realX), Math.floor(realY), 'content_fb/gfx/stick_effect_0.png', 3);
					}

					stickIndex = -1;
				}
			}

			compressorFall++;
			// Flash
			if (compressorFall >= 8) {
				if (flashSprite) {
					for (var i in flashSprite) {
					flashSprite[i].remove();
					}
				}
				flashSprite = new Array();
				flashIndex = 0;
			}
		}
	}

	function collide(x, y) {
		
		if (y < 0 || y > 12 || x < 0 || x >= 8) {
			return false;
		}

	
		if (bubbles[x][y] == 0) {
			return false;
		}
				
		return getDistance(x, y) < 784;
	}


	function getDistance(x, y) {
		if (y < 0 || y > 12 || x < 0 || x >= 8) {
			return 1000;
		}
		
		var vX = x * 32 - (y % 2) * 16 + 190;
		var vY = (y + compressor) * 28 + 44;
		
		vX -= realX;
		vY -= realY;
				
		return (vX * vX + vY * vY); 		
	}

	function nextBall() {
		var color = 0;
		
		do {
			color = Math.floor(Math.random() * 8) + 1;
		}		
		while (bubCount[color] == 0);
		
		return color;
	}

	function checkNeighbors(x, y) {
		if (x > 0) {
			changeState(x-1, y, checkBalls);
		}
		
		if (x < 7) {
			changeState(x+1, y, checkBalls);
		}
		
		if (y > 0) {
			changeState(x, y-1, checkBalls);
			if (y % 2 == 0) {
				if (x < 7) {
					changeState(x+1, y-1, checkBalls);
				}
			}
			else {
				if (x > 0) {
					changeState(x-1, y-1, checkBalls);
				}				
			}
		}
		
		if (y < 11) {
			changeState(x, y+1, checkBalls);
			if (y % 2 == 0) {
				if (x < 7) {
					changeState(x+1, y+1, checkBalls);
				}
			}
			else {
				if (x > 0) {
					changeState(x-1, y+1, checkBalls);
				}				
			}
		}
	}
	
	function changeState(x, y) {
		if (checkBalls[x][y] == 0 && bubbles[x][y] != 0) {
			checkBalls[x][y] = CHECK_NEXT_TURN;
			removeCheck++;
		}
	}
}







function IntroScreen() {

	var menuSprite;
	var currentMenu;

	var menuMotion;
	var motionMax;

	var previousKey;

	var sound;
	var soundPenguin;
	var colorBlind;
	var colorPenguin;
	var details;
	var detailsPenguin;

	var eyesGreen;
	var countGreen;

	var playGame;

	// Functions
	this.preloadImg = preloadImg;
	//this.preloadSnd = preloadSnd;
	this.init = init;
	this.run = run;

	function nextRand() {
		return 40 + Math.round(Math.random() * 100);
	}

	function preloadImg() {
		return new Array(
			'content_fb/gfx/menu1.png', 'content_fb/gfx/menu1_off.png', 'content_fb/gfx/menu2.png', 'content_fb/gfx/menu2_off.png', 'content_fb/gfx/menu3.png', 'content_fb/gfx/menu3_off.png', 'content_fb/gfx/menu4.png', 'content_fb/gfx/menu4_off.png', 'content_fb/gfx/menu5.png', 'content_fb/gfx/menu5_off.png', 'content_fb/gfx/back_start.png',
			'content_fb/gfx/checked.png', 'content_fb/gfx/unchecked.png', 'content_fb/gfx/gfx_1.png', 'content_fb/gfx/gfx_2.png', 'content_fb/gfx/gfx_3.png', 'content_fb/gfx/closedeyes_green.png', 'content_fb/gfx/loading.png');
	}

	function init() {
		// Set background
		currentGame.setBackground('content_fb/gfx/back_start.png');

		// Init menus
		menuSprite = new Array();
		menuMotion = new Array();
		motionMax = new Array();

		currentMenu = 0;

		menuSprite[0] = new Sprite(89, 72, 'content_fb/gfx/menu1.png', 1);
		menuMotion[0] = 0;
		motionMax[0] = 0;

		for (var i = 2; i <= 5; i++) {
			menuSprite[i - 1] = new Sprite(89, i * 72, 'content_fb/gfx/menu' + i + '_off.png', 1);
			menuMotion[i - 1] = 0;
			motionMax[i - 1] = 0;
		}

		// Sound
		sound = currentGame.getValue('sound');
		if (sound == null) {
			sound = false;
			currentGame.setValue('sound', sound);
		}

		currentGame.enableSound(sound);

		if (sound) {
			soundPenguin = new Sprite(menuSprite[2].getX() + 165, menuSprite[2].getY() - 1, 'content_fb/gfx/checked.png', 2);
		}
		else {
			soundPenguin = new Sprite(menuSprite[2].getX() + 165, menuSprite[2].getY() - 1, 'content_fb/gfx/unchecked.png', 2);
		}

		// Colorblind
		colorBlind = currentGame.getValue('colorBlind');
		if (colorBlind == null) {
			colorBlind = false;
			currentGame.setValue('colorBlind', colorBlind);
		}
		
		if (colorBlind) {
			colorPenguin = new Sprite(menuSprite[3].getX() + 165, menuSprite[3].getY() - 1, 'content_fb/gfx/checked.png', 2);
		}
		else {
			colorPenguin = new Sprite(menuSprite[3].getX() + 165, menuSprite[3].getY() - 1, 'content_fb/gfx/unchecked.png', 2);
		}

		// Details
		details = currentGame.getValue('details');
		if (details == null) {
			details = 3;
			currentGame.setValue('details', details);
		}
		detailsPenguin = new Sprite(menuSprite[4].getX() + 165, menuSprite[4].getY() - 1, 'content_fb/gfx/gfx_' + details + '.png', 2);

		// Init/reset previously stored record
		currentGame.setValue('level', 0);
		currentGame.setValue('timer', 0);
		currentGame.setValue('reset', 1);

		// Load first level
		if (!currentGame.getValue('first_level')) {

			currentGame.setValue('first_level', fb_levels[0] + '000000000000000000000000');
		}

		countGreen = nextRand();

		previousKey = currentKey;
		playGame = false;
	}

	function run() {

		// Blink
		countGreen--;
		if (countGreen <= 0) {
			if (eyesGreen == null) {
				eyesGreen = new Sprite(412, 380, 'content_fb/gfx/closedeyes_green.png', 1);
				countGreen = 10;
			}
			else {
				eyesGreen.remove();
				eyesGreen = null;
				countGreen = nextRand();
			}
		}

		if (playGame) {
			if (currentGame.getValue('first_level')) {
				currentGame.setScreen('fb');
			}
			else {
				return;
			}
		}

		if (currentKey != previousKey) {
			switch (currentKey) {
				case 38 : 
					menuSprite[currentMenu].setSrc('content_fb/gfx/menu' + (currentMenu + 1) + '_off.png');
					menuMotion[currentMenu] = 5;
					motionMax[currentMenu] = 5;
					
					currentMenu--;
					if (currentMenu < 0) {
						currentMenu = menuSprite.length - 1;
					}
					menuSprite[currentMenu].setSrc('content_fb/gfx/menu' + (currentMenu + 1) + '.png');
					menuMotion[currentMenu] = -5;
					motionMax[currentMenu] = 5;
				break;
				case 40 :
					menuSprite[currentMenu].setSrc('content_fb/gfx/menu' + (currentMenu + 1) + '_off.png');
					menuMotion[currentMenu] = -5;
					motionMax[currentMenu] = 5;
					currentMenu++;
					if (currentMenu >= menuSprite.length) {
						currentMenu = 0;
					}
					menuSprite[currentMenu].setSrc('content_fb/gfx/menu' + (currentMenu + 1) + '.png');
					menuMotion[currentMenu] = 5;
					motionMax[currentMenu] = 5;
				break;
				case 13 :
				case 32 :
					switch (currentMenu) {
						case 0:
							if (currentGame.getValue('first_level')) {
								currentGame.setScreen('fb');
							}
							else if (!playGame) {
								new Sprite(201, 170, 'content_fb/gfx/loading.png', 10);
								playGame = true;
							}
						break;
						case 1:
							currentGame.setScreen('scores');
						break;
						case 2:
							sound = !sound;
							currentGame.enableSound(sound);

							if (sound) {
								// TODO : Play sound to test
							}

							sound = currentGame.isSoundEnabled();

							if (sound) {
								soundPenguin.setSrc('content_fb/gfx/checked.png');
							}
							else {
								soundPenguin.setSrc('content_fb/gfx/unchecked.png');
							}

							currentGame.setValue('sound', sound);
						break;
						case 3:
							colorBlind = !colorBlind;

							if (colorBlind) {
								colorPenguin.setSrc('content_fb/gfx/checked.png');
							}
							else {
								colorPenguin.setSrc('content_fb/gfx/unchecked.png');
							}	

							currentGame.setValue('colorBlind', colorBlind);						
						break;
						case 4:
							details++;
							if (details > 3) {
								details = 1;
							}
							detailsPenguin.setSrc('content_fb/gfx/gfx_' + details + '.png');

							currentGame.setValue('details', details);
						break;
					}
					
				break;
			}
		}

		// Animate Menu
		for (var i = 0; i < 5; i++) {
			if (menuMotion[i] != null) {
				menuSprite[i].moveTo(menuSprite[i].getX(), menuSprite[i].getY() + menuMotion[i]);
			}

			var dist = menuSprite[i].getY() - ((i + 1) * 72)

			if (dist < 0) {
				menuMotion[i] = Math.min(motionMax[i], menuMotion[i] + 1);
				if (menuMotion[i] == 0) {
					motionMax[i] = Math.max(0, motionMax[i] - 1);
				}
			}
			else if (dist > 0) {
				menuMotion[i] = Math.max(-motionMax[i], menuMotion[i] - 1);
				if (menuMotion[i] == 0) {
					motionMax[i] = Math.max(0, motionMax[i] - 1);
				}
			}

			switch (i) {
				case 2 :
					soundPenguin.moveTo(menuSprite[2].getX() + 165, menuSprite[2].getY() - 1);
				break;
				case 3 :
					colorPenguin.moveTo(menuSprite[3].getX() + 165, menuSprite[3].getY() - 1);
				break;
				case 4 :
					detailsPenguin.moveTo(menuSprite[4].getX() + 165, menuSprite[4].getY() - 1);
				break;
			}
		}

		previousKey = currentKey;
	}
}







function HighscoresScreen() {

	var previousKey;

	var newHighscoreLevel;
	var newHighscoreTimer;
	var newHighscoreInput;

	var highSprites = new Array();

	var eyesGreen;
	var countGreen;

	// Functions
	this.preloadImg = preloadImg;
	this.init = init;
	this.run = run;

	function nextRand() {
		return 40 + Math.round(Math.random() * 100);
	}


	function preloadImg() {
		return new Array(
			'content_fb/gfx/back_start.png', 'content_fb/gfx/closedeyes_green.png');
	}

	function init() {
		// Set background
		currentGame.setBackground('content_fb/gfx/back_start.png');

		newHighscoreLevel = currentGame.getValue('level');
		newHighscoreTimer = currentGame.getValue('timer');

		if (newHighscoreLevel > 0) {
			// Init 'Enter your name'
			newHighscoreSpriteBack = new TextSprite(374, 12, 'Enter your name', 'Arial', 20, '#000000', 1);
			newHighscoreSprite = new TextSprite(373, 11, 'Enter your name', 'Arial', 20, '#FFFFFF', 2);

			currentGame.showInput(312, 76, 277, 24, 'arial', 20, '#FFFFFF', 20);
		}

		highSprites[highSprites.length] = new TextSprite(99, 14, 'Loading...', 'Arial', 20, '#000000', 1);
		highSprites[highSprites.length] = new TextSprite(98, 13, 'Loading...', 'Arial', 20, '#FFFFFF', 2);

		showScores();

		countGreen = nextRand();

		previousKey = currentKey;
	}

	function run() {

		if (currentKey != previousKey) {

			var key = currentKey; // Avoid change during use

			if (newHighscoreLevel != 0) 
			{
				if (key == 13) {
					var player = currentGame.getInputValue();
					if (player.replace(/(^\s*)|(\s*$)/g,'') == '') {
						player = 'Anonymous';
					}

					var params = 'item=fb_js';
					params += '&name=' + escape(player);
					params += '&score=' + newHighscoreLevel;
					params += '&subscore=' + (4320000 - newHighscoreTimer);

					// Reset values
					newHighscoreLevel = 0;
					if (currentGame) { currentGame.hideInput() };
					newHighscoreSpriteBack.setText('Loading...');
					newHighscoreSprite.setText('Loading...');
					
					// Request to server
					var updateReq = getAjax();

					updateReq.open('POST', 'storeScore.php', true); // Async.
					updateReq.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

					updateReq.onreadystatechange = function() {
						if (updateReq.readyState == 4) {
							if (updateReq.responseXML) {
								// Remove 'Loading...'
								newHighscoreSpriteBack.remove();	
								newHighscoreSprite.remove();

								// Add current Rank (Today)
								var todayNode = updateReq.responseXML.getElementsByTagName('today')[0];
								if (todayNode && todayNode.childNodes.length > 0) {
									new TextSprite(314, 54, 'Today\'s Rank', 'Arial', 20, '#000000', 1);
									new TextSprite(313, 53, 'Today\'s Rank', 'Arial', 20, '#FFFFFF', 2);

									var todayRank = '-';
									for (var i = 0; i < todayNode.childNodes.length; i++) {
										var current = todayNode.childNodes[i];

										if (current.nodeName == 'rank') {
											todayRank = current.getAttribute('index');
										}
									}

									new TextSprite(475, 45, todayRank, 'Arial', 30, '#000000', 1);
									new TextSprite(474, 44, todayRank, 'Arial', 30, '#FFFFFF', 2);
								}


								// Add current Rank (All-Time)
								var allTimeNode = updateReq.responseXML.getElementsByTagName('all')[0];
								if (allTimeNode && allTimeNode.childNodes.length > 0) {
									new TextSprite(314, 144, 'All-Time Rank', 'Arial', 20, '#000000', 1);
									new TextSprite(313, 143, 'All-Time Rank', 'Arial', 20, '#FFFFFF', 2);

									var allTimeRank = '-';
									for (var i = 0; i < allTimeNode.childNodes.length; i++) {
										var current = allTimeNode.childNodes[i];

										if (current.nodeName == 'rank') {
											allTimeRank = current.getAttribute('index');
										}
									}

									new TextSprite(475, 135, allTimeRank, 'Arial', 30, '#000000', 1);
									new TextSprite(474, 134, allTimeRank, 'Arial', 30, '#FFFFFF', 2);
								}
								

								showScores();
							}
						}
					}

					updateReq.send(params);
				}
			}
			else {
				// Back to first screen
				if (key == 13 || key == 32) {
					currentGame.setScreen('intro');
				}
			}
		}
	
		// Blink
		countGreen--;
		if (countGreen <= 0) {
			if (eyesGreen == null) {
				eyesGreen = new Sprite(412, 380, 'content_fb/gfx/closedeyes_green.png', 1);
				countGreen = 10;
			}
			else {
				eyesGreen.remove();
				eyesGreen = null;
				countGreen = nextRand();
			}
		}

		previousKey = currentKey;
	}

	function showScores() {
		var request = getAjax();

		request.open('POST', 'showScores.php', true); // Async.
		request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

		request.onreadystatechange = function() {
			if (request.readyState == 4) {
				if (request.responseXML) {
					// Remove previous content
					while (highSprites.length != 0) {
						if (highSprites[0].remove) {
							highSprites[0].remove();
						}

						highSprites.splice(0, 1);
					}

					// Today
					var todayNode = request.responseXML.getElementsByTagName('today')[0];
					if (todayNode) {
						highSprites[highSprites.length] = new TextSprite(99, 14, 'Today\'s High Scores', 'Arial', 20, '#000000', 1);
						highSprites[highSprites.length] = new TextSprite(98, 13, 'Today\'s High Scores', 'Arial', 20, '#FFFFFF', 2);
						
						if (todayNode.childNodes.length == 0) {
							highSprites[highSprites.length] = new TextSprite(121, 114, 'None yet today', 'Arial', 20, '#000000', 1);
							highSprites[highSprites.length] = new TextSprite(120, 113, 'None yet today', 'Arial', 20, '#FFFFFF', 2);
						}

						var currentRank = 0;
						for (var i = 0; i < todayNode.childNodes.length; i++) {
							var currentNode = todayNode.childNodes[i];

							if (currentNode.nodeName == 'rank') {
								var index = currentNode.getAttribute('index');
								var score = currentNode.getAttribute('score');
								var name = currentNode.firstChild.nodeValue;

								var line = index + ' - ' + unescape(name).replace(/[+]/g, ' ') + ' - ' + score;

								highSprites[highSprites.length] = new TextSprite(91, 46 + currentRank * 16, line, 'Arial', 14, '#000000', 1);
								highSprites[highSprites.length] = new TextSprite(90, 45 + currentRank * 16, line, 'Arial', 14, '#FFFFFF', 2);

								currentRank++;
							}
						}
					}

					// All time
					var allTimeNode = request.responseXML.getElementsByTagName('all')[0];
					if (allTimeNode) {
						highSprites[highSprites.length] = new TextSprite(99, 239, 'All-Time High Scores', 'Arial', 20, '#000000', 1);
						highSprites[highSprites.length] = new TextSprite(98, 238, 'All-Time High Scores', 'Arial', 20, '#FFFFFF', 2);

						if (allTimeNode.childNodes.length == 0) {
							highSprites[highSprites.length] = new TextSprite(121, 339, 'None at all', 'Arial', 20, '#000000', 1);
							highSprites[highSprites.length] = new TextSprite(120, 338, 'None at all', 'Arial', 20, '#FFFFFF', 2);
						}

						var currentRank = 0;
						for (var i = 0; i < allTimeNode.childNodes.length; i++) {
							var currentNode = allTimeNode.childNodes[i];

							if (currentNode.nodeName == 'rank') {
								var index = currentNode.getAttribute('index');
								var score = currentNode.getAttribute('score');
								var name = currentNode.firstChild.nodeValue;

								var line = index + ' - ' + unescape(name).replace(/[+]/g, ' ') + ' - ' + score;

								highSprites[highSprites.length] = new TextSprite(91, 271 + currentRank * 16, line, 'Arial', 14, '#000000', 1);
								highSprites[highSprites.length] = new TextSprite(90, 270 + currentRank * 16, line, 'Arial', 14, '#FFFFFF', 2);

								currentRank++;
							}
						}
					}
				}
			}
		}

		request.send('item=fb_js');
	}
}








function LoadManager() {
	this.show = show;
	this.hide = hide;
	this.refresh = refresh;

	var loading = new Image();
	loading.src = 'content_fb/gfx/loading.png';

	var blank = new Image();
	blank.src = 'content_fb/gfx/blank.png';

	var loadingSprite;
	var blankSprite;
	//var loadingText;

	function show() {
		loadingSprite = new Sprite(201, 170, 'content_fb/gfx/loading.png', 1);
		blankSprite = new Sprite(220, 252, 'content_fb/gfx/blank.png', 2);
		//if (currentGame) {
		//	loadingText = new TextSprite(0, 0, currentGame.getPreloadItem(), 'Arial', 10, '#000000', 1);
		//}
	}

	function hide() {
		loadingSprite.remove();
		blankSprite.remove();
		//loadingText.remove();
	}

	function refresh(_cached, _toCache) {
		blankSprite.setSize(Math.floor(199 * _cached / (_cached + _toCache)), 20);

		//if (currentGame) {
		//	loadingText.setText(currentGame.getPreloadItem());
		//}
	}
}















