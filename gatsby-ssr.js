const React = require('react')

exports.onRenderBody = ({ setHeadComponents }) => {
	setHeadComponents([
		<script
			key='darkmode'
			dangerouslySetInnerHTML={{
				__html: `(function() {  
            function setTheme(theme) {
              window.__theme = theme
              if (theme === 'dark') {
                document.documentElement.className = 'dark'
              } else {
                document.documentElement.className = ''
              }
            }
            window.__setPreferredTheme = function(theme) {
              setTheme(theme);
              try {
                localStorage.setItem('preferred-theme', theme)
              } catch (e) {}
            }
            let preferredTheme
            try {
              preferredTheme = localStorage.getItem('preferred-theme')
            } catch (e) {}
            let darkMode = window.matchMedia('(prefers-color-scheme: dark)')
            setTheme(preferredTheme || (darkMode.matches ? 'dark' : 'light'))
          })()`,
			}}
		/>,
	])
}
