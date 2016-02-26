/*! Font Loader v0.3.1 | © Aspectis | License: MIT | github.com/aspectis/font-loader */

(function() {
	var config = fontLoaderConfig
	var fonts = config.fonts
	var timeout = config.timeout || 3000
	var successClass = config.successClass || 'fonts-loaded'
	var failedClass = config.failedClass || 'fonts-failed'
	var testString = config.testString || 'BESbswy'

	var div = document.createElement('div')
	div.style.cssText = 'font-size:99px;position:fixed;visibility:hidden;white-space:nowrap;z-index:-9'
	div.innerHTML = testString
	document.body.appendChild(div)

	var testTimeout = setTimeout(function() {
		finish(failedClass)
	}, timeout)

	testIfLoaded()

	function testIfLoaded() {
		var differentCount = 0
		for ( i = 0; i < fonts.length; i++ ) {
			div.style.fontStyle = fonts[1] ? fonts[1] : ''
			div.style.fontWeight = fonts[2] ? fonts[2] : ''
			div.style.fontFamily = 'cursive'
			var fallbackWidth = div.clientWidth
			div.style.fontFamily = fonts[0] + ', cursive'
			var currentWidth = div.clientWidth
			if ( currentWidth !== fallbackWidth ) {
				differentCount++
			}
		}
		if ( differentCount === fonts.length ) {
			finish(successClass)
		}
		setTimeout(testIfLoaded, 20)
	}

	function finish(addClass) {
		clearTimeout(testTimeout)
		document.body.removeChild(div);
		var className = document.documentElement.className
		document.documentElement.className = (className ? className + ' ' : '') + addClass
	}
})()
