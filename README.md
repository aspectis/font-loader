# Font Loader

A tiny little script that sets a class on the `html` element when webfonts fail to load within a given timeframe, preventing [FOUT, FOIT and FOFT](https://css-tricks.com/fout-foit-foft/). Minified size is less than 1 KB.

Add this code to the **bottom** of your HTML's `body` and adjust the font names and file paths:

```
<script>
	fontLoaderConfig = {
		fonts: [
			['Font Name'],
			['Font Name', 'italic', 'bold']
		]
	}
</script>
<script src="font-loader.js"></script>
```

Define fallback fonts in your stylesheet using the `.fonts-failed … { … }`.

## Options

Font Loader is configured via the `fontLoaderConfig` object which has to be set prior to loading _font-loader.js_.

* `fonts`: An array of arrays denoting the fonts to monitor. The first value of each element is the font name, the second is the font style (optional, defaults to `'normal'`), the third is the font weight (optional, defaults to `'normal'`, too).

* `timeout` (optional, default: `3000`): The time in ms to wait before `failedClass` is applied.

* `successClass` (optional, default: `'fonts-loaded'`): The class applied to the HTML root element when all monitored fonts have been loaded before timing out.

* `failedClass` (optional, default: `'fonts-failed'`): The class applied to the HTML root element when at least one monitored font has failed to load before timing out.

* `testString` (optional, default: `'BESbswy'`): A string whose width is used for testing if a font has loaded.

## Known issues

This method does not work if the loaded font is metrically identical to the browser's default _cursive_ font (which is pretty unlikely).
