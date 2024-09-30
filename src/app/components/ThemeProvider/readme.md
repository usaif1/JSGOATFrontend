ThemeProvider Component

* The component uses the useState hook to track whether the theme has been loaded or not
* themeLoaded: This boolean state variable determines if the theme has been applied. Initially set to false.
* setThemeLoaded: A function to update the themeLoaded state to true once the theme is successfully applied
* The useLayoutEffect hook is used here to ensure that the theme is set as early as possible, even before the rendering process occurs, minimizing any visual delay.

Key Points to Note
* Theme Persistence: The theme is saved in the localStorage under the key "theme", and the current theme is set on every page load.
* No Flickering: The use of useLayoutEffect ensures that the correct theme is applied as soon as possible, minimizing or eliminating flicker when switching themes or loading the page.
* Default Theme: If no theme is found in localStorage, the default theme is set to dark


Potential Enhancements
* Server-Side Theme Handling: If needed, theme detection and setting could be enhanced to work on the server-side using cookies or headers.