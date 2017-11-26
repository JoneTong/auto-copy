'use strict';

class DblclickCopy {
	constructor() {
		this.title = document.title;
		this.timer = null;

		this._init = this._init.bind(this);
		this._bindEvent();
	}
	_init() {
		let _this = this;
		try {
			// unselected
			if (window.getSelection().toString().trim().length === 0) return;
			// copy
			document.execCommand('copy');
			// prompt
			document.title = 'copy success!';
			_this.timer = setTimeout(function() {
				document.title = _this.title;
				clearTimeout(_this.timer);
			}, 1000)
		} catch (err) {
			throw Error(err);
		}
	}
	_bindEvent() {
		let _this = this;
		window.addEventListener('dblclick', _this._init, false);
		window.addEventListener('focus', function() {
			window.addEventListener('dblclick', _this._init, false);
		}, false);
		window.addEventListener('blur', function() {
			window.removeEventListener('dblclick', _this._init, false);
		}, false);
	}
}

module.exports = DblclickCopy;