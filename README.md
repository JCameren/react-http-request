# Http Request from Swapi Starwars API

A simple project fetching data from a dummy api and rendering it to the screen with a handler function tied to a button click. Originally it used useCallback and useEffect for optimization, but it fired when the browser loading and not on button click, so I reverted it, since I like the button click better.

It was good to get a refresher on async functions and getting to work with handling different states using try/catch to display UI depending on the type of response that was given. I think what would be more cool is adding an animation for loading states instead of just text.