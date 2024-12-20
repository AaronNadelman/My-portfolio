/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,svelte,vue,js,ts,jsx,tsx}'],
  theme: { extend: {} },
  daisyui: {
    themes: [
      {
        light: {
          ...require('daisyui/src/theming/themes')['light'],
          "primary": '#330033',
          "secondary": '#6881EC',
          "background": "linear-gradient(to bottom, #748ffc, #b276ff)",
          "text-color": "#040404"

          
        },
      },
      {
        myDarkTheme: {
          "primary": '#153595',
          "secondary": '#E217FB',
          "accent": '#37cdbe',
          "neutral": '#3d4451',
          "text-color": "#ffffff",
          "color": "#ffffff",
         "background-image": "url(data:image/svg+xml;base64,77u/PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnICB3aWR0aD0nNDAwJyBoZWlnaHQ9JzQwMCcgdmlld0JveD0nMCAwIDgwMCA4MDAnPjxyZWN0IGZpbGw9JyMzMzAwMzMnIHdpZHRoPSc4MDAnIGhlaWdodD0nODAwJy8+PGcgZmlsbD0nbm9uZScgc3Ryb2tlPScjNDA0JyAgc3Ryb2tlLXdpZHRoPScxJz48cGF0aCBkPSdNNzY5IDIyOUwxMDM3IDI2MC45TTkyNyA4ODBMNzMxIDczNyA1MjAgNjYwIDMwOSA1MzggNDAgNTk5IDI5NSA3NjQgMTI2LjUgODc5LjUgNDAgNTk5LTE5NyA0OTMgMTAyIDM4Mi0zMSAyMjkgMTI2LjUgNzkuNS02OS02MycvPjxwYXRoIGQ9J00tMzEgMjI5TDIzNyAyNjEgMzkwIDM4MiA2MDMgNDkzIDMwOC41IDUzNy41IDEwMS41IDM4MS41TTM3MCA5MDVMMjk1IDc2NCcvPjxwYXRoIGQ9J001MjAgNjYwTDU3OCA4NDIgNzMxIDczNyA4NDAgNTk5IDYwMyA0OTMgNTIwIDY2MCAyOTUgNzY0IDMwOSA1MzggMzkwIDM4MiA1MzkgMjY5IDc2OSAyMjkgNTc3LjUgNDEuNSAzNzAgMTA1IDI5NSAtMzYgMTI2LjUgNzkuNSAyMzcgMjYxIDEwMiAzODIgNDAgNTk5IC02OSA3MzcgMTI3IDg4MCcvPjxwYXRoIGQ9J001MjAtMTQwTDU3OC41IDQyLjUgNzMxLTYzTTYwMyA0OTNMNTM5IDI2OSAyMzcgMjYxIDM3MCAxMDVNOTAyIDM4Mkw1MzkgMjY5TTM5MCAzODJMMTAyIDM4MicvPjxwYXRoIGQ9J00tMjIyIDQyTDEyNi41IDc5LjUgMzcwIDEwNSA1MzkgMjY5IDU3Ny41IDQxLjUgOTI3IDgwIDc2OSAyMjkgOTAyIDM4MiA2MDMgNDkzIDczMSA3MzdNMjk1LTM2TDU3Ny41IDQxLjVNNTc4IDg0MkwyOTUgNzY0TTQwLTIwMUwxMjcgODBNMTAyIDM4MkwtMjYxIDI2OScvPjwvZz48ZyAgZmlsbD0nIzUwNSc+PGNpcmNsZSAgY3g9Jzc2OScgY3k9JzIyOScgcj0nNScvPjxjaXJjbGUgIGN4PSc1MzknIGN5PScyNjknIHI9JzUnLz48Y2lyY2xlICBjeD0nNjAzJyBjeT0nNDkzJyByPSc1Jy8+PGNpcmNsZSAgY3g9JzczMScgY3k9JzczNycgcj0nNScvPjxjaXJjbGUgIGN4PSc1MjAnIGN5PSc2NjAnIHI9JzUnLz48Y2lyY2xlICBjeD0nMzA5JyBjeT0nNTM4JyByPSc1Jy8+PGNpcmNsZSAgY3g9JzI5NScgY3k9Jzc2NCcgcj0nNScvPjxjaXJjbGUgIGN4PSc0MCcgY3k9JzU5OScgcj0nNScvPjxjaXJjbGUgIGN4PScxMDInIGN5PSczODInIHI9JzUnLz48Y2lyY2xlICBjeD0nMTI3JyBjeT0nODAnIHI9JzUnLz48Y2lyY2xlICBjeD0nMzcwJyBjeT0nMTA1JyByPSc1Jy8+PGNpcmNsZSAgY3g9JzU3OCcgY3k9JzQyJyByPSc1Jy8+PGNpcmNsZSAgY3g9JzIzNycgY3k9JzI2MScgcj0nNScvPjxjaXJjbGUgIGN4PSczOTAnIGN5PSczODInIHI9JzUnLz48L2c+PC9zdmc+)"
        },
      },
    ],
    darkMode: ['selector', '[data-mode="myDarkTheme"]'],
  },

  plugins: [require('daisyui')],
}
