/*! Font Loader v0.4.1 | © Aspectis | License: MIT | github.com/aspectis/font-loader */
;(function() {
	var config = fontLoaderConfig
	var div = document.createElement('div')
	var fonts = config.fonts
	var timeout = config.timeout || 3000
	var successClass = config.successClass || 'fonts-loaded'
	var failClass = config.failClass || 'fonts-failed'
	var testString = config.testString || 'BESbswy'
	var testTimeout

	div.style.cssText = 'font-size:99px;position:fixed;visibility:hidden;white-space:nowrap;z-index:-9'
	div.innerHTML = testString
	document.body.appendChild(div)

	testTimeout = setTimeout(finish.bind(null, failClass), timeout)

	testIfLoaded()

	function testIfLoaded() {
		var fallbackWidth
		var currentWidth

		for (i = 0; i < fonts.length; i++) {
			var font = fonts[i];
			div.style.fontStyle = font[1] ? font[1] : ''
			div.style.fontWeight = font[2] ? font[2] : ''
			div.style.fontFamily = 'cursive'
			fallbackWidth = div.clientWidth

			div.style.fontFamily = font[0] + ',cursive'
			currentWidth = div.clientWidth

			if (currentWidth !== fallbackWidth) fonts.splice(i, 1)
		}

		if (fonts.length) {
			setTimeout(testIfLoaded, 20)
		} else {
			finish(successClass)
		}
	}

	function finish(rootClass) {
		var className = document.documentElement.className
		clearTimeout(testTimeout)
		document.body.removeChild(div)
		document.documentElement.className = (className ? className + ' ' : '') + rootClass
	}
})()
