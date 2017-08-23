# Spion IO

Focus Group management API that can capture and replay user interaction to improve the UX in everything you build!

## Getting Started

To use our API, there is a easy three-step process,
1. Inject our script into the <head> of your HTML page that you wish to track

```
https://cdn.rawgit.com/morpherious/client-template/master/script.js
```

2. Run our CLI and follow the commands to set up a MongoDB and import our controllers and models into your project directory
3. Clone our interface from http://github.com/SpionInterface

### Installing

Run our CLI to install and setup MongoDB with the correct backend controllers and models into your project directory.

```
Give the example
```

## Features

1. Live - By establishing a connection through Websockets, we open a real-time, highly-concurrent stream of data between the developer's             web page and our interface. This allows for a 'live' stream of the user's interaction and a display to check if a user is live             on your site.
2. Storyboard - When managing click events and console log events, we extract strings from the developer's code or the user's console,                     respectively, and display each event as they happen, which when clicked, will expand to show the exact string of code that                 was seen.
3. Feedback - Our script also injects a feedback input section on the developer's website that allows users to supply feedback that will                 relay back to our interface for the developer to review and take into consideration.
4. Fullscreen - Says it all
5. Geolocation - Script will prompt for user's geolocation and our interface will display their location through the Google Maps API

## Built With

* [React/React-Router](https://facebook.github.io/react/) - The front end framework used
* [Express](https://expressjs.com/) - Server routing and Node.js setup
* [MongoDB](https://www.mongodb.com/) - Non relational database management system

## Contributing

Please check us out and submit issues/pull requests.

## Authors

* **Mustafa** (https://github.com/morpherious)
* **Jerry** (https://github.com/j3rryj)
* **Miranda** (https://github.com/mm0nr0e)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
