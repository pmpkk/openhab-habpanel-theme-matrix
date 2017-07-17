# openhab-habpanel-theme-matrix
A custom theme for OpenHab HabPanel

<h1>Prerequisites</h1>

* Installed OpenHab 2.1
* Installed UI HabPanel 2.1

<h1>Assumptions</h1>

<h2>Environment</h2>

In  my setup I'm running on a Raspberry Pi 3, the folder structure is:

* domain name & port = openhabianpi.local:8080
* openhab root = /etc/openhab2/
* openhab html = /etc/openhab2/html
* theme folder = /etc/openhab2/html/matrix-theme (create this folder)

You may need to adjust your folder structure according to your environment.

<h2>Icons</h2>

All icons used in the theme are in SVG format.

There are three sets of icons used in this theme:

* appicons.svg = App Icons to display logos for Netflix, Spotify, Apple TV, etc. in the TV and Music widget. I created those SVGs and included the file AppIcons.svg in the repository.
* matrixicons.svg = A small number of default icons (on, off, none, etc.) are included in the file matrixicons.svg.
* squidink.svg = All other icons are purchased from http://thesquid.ink/line-icons/ and are not included in the repository. If you want to use those icons, you will need to purchase them yourself and follow the instructions here to use them. SquidInk delivers the icons as individual svg file. You will need to combine the svg files of the icons you like into a single file called "squidink.svg".

*SVG Symbols and Styling*

The theme uses CSS to set the color/stroke width of the icons (explained here: https://css-tricks.com/almanac/properties/f/fill/).

It also uses a technique to combine different icons into a single SVG file. This allows for faster loading and better organization of the icons. Within HTML, the icons are then accessed using the "use" tag and specifying the file and symbol id as such:

```html
<svg viewBox="0 0 48 48"><use xlink:href="/static/matrix-theme/matrixicons.svg#off"></use></svg>
```

*Use of Squid Ink Icons*

1. Purchase the icons here http://thesquid.ink/line-icons/
2. Download the icons to your desktop
3. Since there are 2000+ icons in the package you don't want to load them all in HabPanel
4. Find the icons you want to use, in my examples, I use the following symbols:

```
symbols = { 'line-visuals',
			'connection-arw-l', 
			'controal-4',
			'double-arrow',
			'down-arrow-2',
			'reload',
			'volume-close',
			'volume-increase',
			'volume',
			'right-arrow-2',
			'right-play',
			'left-arrow-2',
			'stop_1_',
			'top-arrow-2',
			'battery',
			'box',
			'charging-2',
			'charging-3',
			'charging-1',
			'drive-3',
			'drive',
			'flat-tv',
			'floppy',
			'plug',
			'processor',
			'sim-card',
			'window',
			'globe',
			'navigate',
			'clock',
			'direction-n',
			'drop',
			'drops',
			'half-moon',
			'half-light',
			'shade',
			'stars',
			'sun',
			'thermometer-3',
			'wind',
			'umberla',
			'sun-nwave',
			'tree-3' }
```

5. Open the file "squidink.svg" from the pepository, it should look like this:

```xml
<?xml version='1.0' encoding='utf8'?>
<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 48 48" version="1.1" viewBox="0 0 48 48" x="0px" xml:space="preserve" xmlns:xlink="http://www.w3.org/1999/xlink" y="0px">

<!--Paste your icons below-->


<!--Paste your icons above-->

</svg>
```

6. Open the SVG file of the icon you want, for example the "wind" icon from the file "Weather_wind.svg" and look for the group with the id "wind".

For example:

```xml
<g id="wind">
	<g>
		<path fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="
			M35.5,36c5.2,0,9.5-4.3,9.5-9.5c0-3.2-1.6-6-4-7.8c0-0.2,0-0.5,0-0.7c0-6.6-5.4-12-12-12s-12,5.4-12,12c0,1.2,0.2,2.4,0.5,3.5
			C16,20,13.9,19,11.5,19C6.8,19,3,22.8,3,27.5"/>
		<path fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="
			M31.7,23.3c0.8,0.8,1.3,1.9,1.3,3.2s-0.5,2.4-1.3,3.2c-0.8,0.8-1.9,1.3-3.2,1.3H3"/>
		
			<line fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="29" y1="34" x2="9" y2="34"/>
		<path fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="
			M31,40c0-1.7-1.3-3-3-3H13"/>
	</g>
</g>
```

7. Copy & paste the content of the group with id="wind" into a squidink.svg file, but remove the attributes "stroke" and "stroke-width":

For example as such:

```xml
<g id="wind">
	<g>
		<path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="
			M35.5,36c5.2,0,9.5-4.3,9.5-9.5c0-3.2-1.6-6-4-7.8c0-0.2,0-0.5,0-0.7c0-6.6-5.4-12-12-12s-12,5.4-12,12c0,1.2,0.2,2.4,0.5,3.5
			C16,20,13.9,19,11.5,19C6.8,19,3,22.8,3,27.5"/>
		<path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="
			M31.7,23.3c0.8,0.8,1.3,1.9,1.3,3.2s-0.5,2.4-1.3,3.2c-0.8,0.8-1.9,1.3-3.2,1.3H3"/>
		
			<line fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="29" y1="34" x2="9" y2="34"/>
		<path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="
			M31,40c0-1.7-1.3-3-3-3H13"/>
	</g>
</g>
```

8. Repeat until you have a file squidink.svg with all your symbols you need.

*Alternative Approach for SquidInk (Auto-Combiner)*

The manual combination described above works for squidink and for any other svg based icons, but may be a lot of work. For that reason I created a helper python script that does that job for you:

```
svg_combiner.py
```

To use this file:

a) Simple put this file into the script folder of your openhab.
b) Add ALL SVG files from SquidInk to the html/matrix-theme/original-svgs folder
c) Open the svg_combiner.py file and specify which symbols should be combined (edit the JSON object "symbols" at the top of the script)
d) Run the script and wait a few seconds/minutes.
e) The result will be a squidink.svg file in your html/matrix-theme folder, auto-combined with the unwanted stroke attributes removed.

You can rerun the script as often as you want when you want to add/remove icons from the file.

<h1>Installation</h1>

1. Add Files to your OpenHab installation

Create a sub folder called "matrix-theme" in your /etc/openhab2/html folder.

Copy the follwing files from the repository to your openhab installation into the folder "html/matrix-theme":

Filename | Description
-------- | -----------
AppIcons.svg | Icons for App Logos (Netflix, Apple TV, Spotify, etc.)
matrixicons.svg | Basic Icons for On/Off/None, etc.
matrix-theme.css | CSS file with theme
Roboto-Light.ttf | Roboto Font Light (Google Font)
Roboto-Regular.ttf | Roboto Font Regular (Google Font)
Roboto-Thin.ttf | Roboto Font Thin (Google Font)

2. Select Theme

Open HabPanel, goto settings and set the setting "Additional Stylesheet (optional)" to:

```
/static/matrix-theme/matrix-theme.css
```

3. Create or Go to a dashboard in HabPanel

4. Click Edit, then Add Widget

5. Click the Cog-Wheel to add a Custom Widget

6. Import the Custom Widgets from the repository and add them:

* System Widget.widget.json
* Outdoor Widget.widget.json
* Cars Widget.widget.json
* Ground Floor Widget.widget.json
* Home Widget.widget.json

7. Go back to Dashboard, click Add Widgets and chose the widget you just imported.

Note, the design doesn't support the gridster layout of HabPanel. It overrides it. You need to make the widget the width of the page and select both options "Don't Wrap in Container" and "No Background" in the widget config.


