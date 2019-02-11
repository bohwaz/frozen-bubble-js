/*
 *                      [ JIGA - Javascript Edition]
 *
 * Copyright (c) 2007 - Glenn Sanson
 *
 * This code is distributed under the GNU Library General Public License 
 *
 * This library is free software; you can redistribute it and/or
 * modify it under the terms of the GNU Library General Public License
 * as published by the Free Software Foundation; either version 2 of the 
 * License, or (at your option) any later version. 
 * 
 * This library is distributed in the hope that it will be useful, but
 * WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * Library General Public License for more details.
 * 
 * You should have received a copy of the GNU Library General Public License
 * along with this program; if not, write to the Free Software Foundation, Inc., 
 * 675 Mass Ave, Cambridge, MA 02139, USA.
 *
 *               
 *                 [http://glenn.sanson.free.fr/v2/?select=jiga]
 */

// Key management

var currentKey = -1;


function addKeyListener() {
	document.onkeyup = function(evt) {
		if (document.all) {
			if (window.event.keyCode == currentKey) {
				currentKey = -1;
			}
		}
		else {
			if (evt.which == currentKey) {
				currentKey = -1;
			}
		}
	}

	document.onkeydown = function(evt) {
		if (document.all) {
			currentKey = window.event.keyCode;
		}
		else {
			currentKey = evt.which;
		}
	}	
}



// Sprite
function Sprite(_x, _y, _imgSrc, _index) {
	var x = _x;
	var y = _y;
	var imgSrc = _imgSrc;

	var sprDiv = document.createElement('div');
	sprDiv.style.position = 'absolute';
	sprDiv.style.left = _x + 'px';
	sprDiv.style.top = _y + 'px';
	sprDiv.style.zIndex = _index;

	var sprImg = document.createElement('img');
	sprImg.setAttribute('src', _imgSrc);
	sprDiv.appendChild(sprImg);

	currentGame.getDiv().appendChild(sprDiv);
	sprDiv.sprite = this;

	this.setSrc = setSrc;
	this.getSrc = getSrc;
	this.setIndex = setIndex;
	this.refresh = refresh;
	this.moveTo = moveTo;
	this.getX = getX;
	this.getY = getY;
	this.setSize = setSize;
	this.remove = remove;

	function setSrc(newSrc) {
		sprImg.src = newSrc;
	}

	function getSrc() {
		return sprImg.src;
	}


	function setIndex(newIndex) {
		sprDiv.style.zIndex = newIndex;
	}

	function refresh() {
		sprDiv.style.left = x + 'px';
		sprDiv.style.top = y + 'px';
	}

	function moveTo(_x, _y) {
		x = _x;
		y = _y;

		refresh();
	}

	function getX() {
		return x;
	}

	function getY() {
		return y;
	}

	function setSize(_width, _height) {
		sprImg.width = _width;
		sprImg.height = _height;
	}

	function remove() {
		if (sprDiv.parentNode) { // May already have been removed
			sprDiv.parentNode.removeChild(sprDiv);
		}
	}

	return this;
}

// Text sprite
function TextSprite(_x, _y, _text, _font, _size, _color, _index) {
	var x = _x;
	var y = _y;
	var text = convertText(_text);

	var textWidth = currentGame.getWidth() - _x;

	var sprDiv = document.createElement('div');
	sprDiv.style.position = 'absolute';
	sprDiv.style.left = _x + 'px';
	sprDiv.style.top = _y + 'px';
	sprDiv.style.zIndex = _index;
	sprDiv.style.width = textWidth + 'px';
	sprDiv.style.textAlign = 'left';

	var sprText = document.createTextNode(text);	
	sprDiv.style.fontFamily = _font;
	sprDiv.style.color = _color;
	sprDiv.style.fontSize = _size + 'px';
	sprDiv.appendChild(sprText);

	currentGame.getDiv().appendChild(sprDiv);
	sprDiv.sprite = this;

	this.setText = setText;
	this.getText = getText;
	this.setIndex = setIndex;
	this.refresh = refresh;
	this.moveTo = moveTo;
	this.getX = getX;
	this.getY = getY;
	this.setSize = setSize;
	this.remove = remove;
	this.setFont = setFont;
	this.setSize = setSize;
	this.setColor = setColor;

	function convertText(_label) {

		var index = _label.indexOf(' ');
		while(index != -1) {
			_label = _label.substring(0, index) + '\u00A0' + _label.substring(index+1, _label.length);
			index = _label.indexOf(' ');	
		}
		return _label;
	}

	function setText(newText) {
		sprText.nodeValue = newText;
	}

	function getText() {
		return sprText.nodeValue;
	}


	function setIndex(newIndex) {
		sprDiv.style.zIndex = newIndex;
	}

	function refresh() {
		sprDiv.style.left = x + 'px';
		sprDiv.style.top = y + 'px';
	}

	function moveTo(_x, _y) {
		x = _x;
		y = _y;

		refresh();
	}

	function getX() {
		return x;
	}

	function getY() {
		return y;
	}

	function setSize(_width, _height) {
		sprDiv.width = _width;
		sprDiv.height = _height;
	}

	function remove() {
		if (sprDiv.parentNode) { // May already have been removed
			sprDiv.parentNode.removeChild(sprDiv);
		}
	}

	function setFont(_font) {
		sprDiv.style.fontFamily = _font;
	}

	function setSize(_size) {
		sprDiv.style.fontSize = _size + 'px';
	}

	function setColor(_color) {
		sprDiv.style.fontColor = _color;
	}

	return this;
}




// Ajax obj.
function getAjax() {
	var request;

	if (window.XMLHttpRequest) { // Firefox
		return new XMLHttpRequest();
	}
	else if (window.ActiveXObject) { // IE
		return new ActiveXObject("Microsoft.XMLHTTP");
	}
	else {
		alert('Your browser does not seem to support AJAX');
		return;
	}	
}



// Game
var currentGame = null;

function Game(_div, _width, _height) {

	var MAX_CONCURRENT_PRELOAD = 8;
	var LOADER_REFRESH_RATE = 40;
	var LOADER_TIMEOUT = 15000;

	var gameDiv = document.getElementById(_div);
	var screenArray = new Array();
	var currentScreen;
	var nextScreen = null;

	var soundSet;
	var soundEmbed;
	var hasSound = true;

	// Remove content (if any)
	for (var i = 0; i < gameDiv.childNodes.length; i++) {
		gameDiv.removeChild(gameDiv.childNodes[i]);
	}

	var divWidth = _width;
	var divHeight = _height;

	gameDiv.style.width = divWidth + 'px';
	gameDiv.style.height = divHeight + 'px';
	
	currentGame = this;

	var divTop = internTop();
	var divLeft = internLeft();

	var cachedSrc = new Array();
	var cachedImages = new Array();
	var imagesToCache = new Array();
	var cacheTimeout = new Object();
	var loader;

	var data = new Object();

	var inputText;
	var inputFocus = false;
	var inputX = 0;
	var inputY = 0;

	this.setBackground = setBackground;
	this.registerScreen = registerScreen;
	this.start = start;
	this.getPreloadItem = getPreloadItem;
	this.run = run;
	this.stop = stop;
	this.setScreen = setScreen;
	this.getDiv = getDiv;
	this.getTop = getTop;
	this.getLeft = getLeft;
	this.getWidth = getWidth;
	this.getHeight = getHeight;
	this.checkPreload = checkPreload;
	this.setLoader = setLoader;
	this.playSound = playSound;
	this.enableSound = enableSound;
	this.isSoundEnabled = isSoundEnabled;

	this.getValue = getValue;
	this.setValue = setValue;

	this.focusLost = focusLost;

	this.showInput = showInput;
	this.hideInput = hideInput;
	this.getInputValue = getInputValue;
	this.resetInputValue = resetInputValue;
	this.getInputX = getInputX;
	this.getInputY = getInputY;

	function start(_name) {
		nextScreen = _name;
		
		preload();
	}

	function getPreloadItem() {
		if (imagesToCache.length && imagesToCache.length > 0) {
			return imagesToCache[0].src;
		}

		return ' ';
	}

	function preload() {
		for (var i in screenArray) {
			if (screenArray[i].preloadImg) {
				var imgSet = screenArray[i].preloadImg();

				for (var j in imgSet) {
					cachedSrc[cachedSrc.length] = imgSet[j];
				}
			}

			/*
			if (screenArray[i].preloadSnd) {
				var sndSet = screenArray[i].preloadSnd();

				for (var j in sndSet) {
					cachedSrc[cachedSrc.length] = sndSet[j];
				}
			}*/
		}

		if (cachedSrc.length != 0) {
			if (loader && loader.show) {
				loader.show();
			}
			if (loader && loader.refresh) {
				loader.refresh(cachedImages.length, imagesToCache.length + cachedSrc.length);
			}

			setTimeout('if (currentGame) { currentGame.checkPreload(); }', LOADER_REFRESH_RATE);
		}
		else {
			setTimeout('if (currentGame) { currentGame.run(); }', 20);
		}
	}

	function checkPreload() {
		// Remove completed images from preload pool
		for (var i in imagesToCache) {
			if (imagesToCache[i].complete || cacheTimeout[imagesToCache[i].src] > LOADER_TIMEOUT) {
				cachedImages[cachedImages.length] = imagesToCache[i];
				cacheTimeout[imagesToCache[i].src] = null;
				imagesToCache.splice(i, 1);
			}
			else {
				cacheTimeout[imagesToCache[i].src] += LOADER_REFRESH_RATE;
			}
		}

		// Complete preload pool
		while (imagesToCache.length < MAX_CONCURRENT_PRELOAD && cachedSrc.length > 0) {
			var newImg = new Image();
			newImg.src = cachedSrc[0];
			cachedSrc.splice(0, 1);

			imagesToCache[imagesToCache.length] = newImg;
			cacheTimeout[newImg.src] = 0;
		}

		if ((cachedSrc.length + imagesToCache.length) == 0) {

			// No more images to load
			// Launch first screen
			if (loader && loader.hide) {
				loader.hide();
			}
			
			setTimeout('if (currentGame) { currentGame.run(); }', 20);
		}
		else {
			if (loader && loader.refresh) {
				loader.refresh(cachedImages.length, imagesToCache.length + cachedSrc.length);
			}

			setTimeout('if (currentGame) { currentGame.checkPreload(); }', LOADER_REFRESH_RATE);
		}
	}

	function run() {
		// Check for screen changes
		if (nextScreen != null) {
			switchTo(nextScreen);
			nextScreen = null;
		}

		var newLeft = internLeft();
		var newTop = internTop();

		// Check for browser resize
		if (divTop != newTop || divLeft != newLeft) {
			divTop = newTop;
			divLeft = newLeft;
			
			for (var i=0 ; i<gameDiv.childNodes.length ; i++) {
				if (gameDiv.childNodes[i].sprite) {
					gameDiv.childNodes[i].sprite.refresh();
				}
			}
		}

		if (!inputFocus) {
			inputText.focus();
			inputFocus = true;
		}

		setTimeout('if (currentGame) { currentGame.run(); }', 20);

		if (currentScreen && currentScreen.run) {
			currentScreen.run();
		}
	}

	function stop() {
		currentScreen = null;
		currentGame = null;
	}

	function switchTo(_name) {
		// Remove content (if any)
		while (gameDiv.childNodes.length > 0) {
			gameDiv.removeChild(gameDiv.childNodes[0]);
		}

		// Set as current
		currentScreen = screenArray[_name];

		// Add input
		var inputDiv = document.createElement('div');
		inputDiv.style.position = 'absolute';
		inputDiv.style.left = '0px';
		inputDiv.style.top = '0px';
		inputDiv.style.height = '1px';
		inputDiv.style.width = '1px';
		inputDiv.style.zIndex = 1;
		inputDiv.sprite = inputDiv;
		inputDiv.refresh = function() {
			if (currentGame) {
				this.style.left = currentGame.getInputX() + 'px';
				this.style.top = currentGame.getInputY() + 'px';
			}
		}

		inputText = document.createElement('input');	
		inputText.type = 'text';
		inputText.maxLength = 0;
		inputText.style.backgroundColor = 'transparent';
		inputText.style.fontFamily = 'Arial';
		inputText.style.color = '#FFFFFF';
		inputText.style.fontSize = '20px';
		inputText.style.borderWidth = '0px';
		inputText.style.height = '1px';
		inputText.style.width = '1px';
		inputText.onblur = function() {
			if (currentGame) { currentGame.focusLost(); };
		}

		inputDiv.appendChild(inputText);
		gameDiv.appendChild(inputDiv);

		inputFocus = false;

		// Load sounds
		if (currentScreen.preloadSnd) {
			soundSet = currentScreen.preloadSnd();
			soundEmbed = new Array();
			for (var i in soundSet) {
				soundEmbed[soundEmbed.length] = addEmbed(soundSet[i]);
			}
		}
		else {
			soundSet = null;
			soundEmbed = null;
		}

		// init
		if (currentScreen.init) {
			currentScreen.init();
		}
	}

	function setScreen(_name) {
		nextScreen = _name;
	}
	
	function getDiv() {
		return gameDiv;
	}

	function registerScreen(_name, _screen) {
		screenArray[_name] = _screen;
	}	

	function setBackground(_img) {
		gameDiv.style.backgroundImage = 'url(' + _img + ')';
	}

	function internTop() {	
		var current = gameDiv;

		var offTop = 0;
		while(current) {
			offTop += current.offsetTop;

			current = current.offsetParent;
		}
		
		return offTop;
	}

	function internLeft() {
		var current = gameDiv;

		var offLeft = 0;
		while(current) {
			offLeft += current.offsetLeft;

			current = current.offsetParent;
		}

		return offLeft;
	}

	function getTop() {
		return divTop;
	}

	function getLeft() {
		return divLeft;
	}

	function getWidth() {
		return divWidth;
	}

	function getHeight() {
		return divHeight;
	}

	function setLoader(_loader) {
		loader = _loader;
	}

	function addEmbed(_src) {
		var embedDiv = document.createElement('div');
		embedDiv.style.position = 'absolute';
		embedDiv.style.visibility = 'hidden';

		embedDiv.innerHTML = '<embed src="' + _src + '" autostart="false" width="0" height="0" enablejavascript="true"></embed>';
		gameDiv.appendChild(embedDiv);

		return embedDiv.firstChild;
	}

	function playSound(_src) {
		if (!soundSet || !hasSound) {
			return;
		}

		var index = 0;
		for (var i in soundSet) {
			if (soundSet[i] == _src) {
				try {
					soundEmbed[index].Stop();
					soundEmbed[index].Rewind();
				}
				catch(ex) {}

				try {
					soundEmbed[index].Play();
				}
				catch(ex) {
					try {
						soundEmbed[index].DoPlay();
					}
					catch(ex2) {
						hasSound = false;
					}
				}
				return;
			}

			index++;
		}
	}

	function focusLost() {
		inputFocus = false;
	}

	function getValue(_key) {
		return data[_key];
	}

	function setValue(_key, _value) {
		data[_key] = _value;
	}

	function enableSound(_bool) {
		hasSound = _bool;
	}

	function isSoundEnabled() {
		return hasSound;
	}

	function showInput(_x, _y, _width, _height, _font, _size, _color, _maxLength) {
		var inputDiv = inputText.parentNode;

		inputX = _x;
		inputY = _y;

		inputDiv.refresh();
		inputDiv.style.width = _width + 'px';
		inputDiv.style.height = _height + 'px';

		inputText.style.fontFamily = _font;
		inputText.style.color = _color;
		inputText.style.fontSize = _size +'px';
		inputText.style.width = _width + 'px';
		inputText.style.height = _height + 'px';
		inputText.value = '';
		inputText.maxLength = _maxLength;
	}

	function hideInput() {
		showInput(0, 0, 1, 1, 'arial', 20, '#FFFFFF', 0);
	}

	function getInputValue() {
		return inputText.value;
	}

	function resetInputValue() {
		inputText.value = '';
	}

	function getInputX() {
		return inputX;
	}

	function getInputY() {
		return inputY;
	}
}

