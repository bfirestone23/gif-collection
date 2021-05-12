# GIF Library

A RESTful web application concept built with Ruby on Rails and React + Redux that allows users to search the GIPHY API, create GIF collections, and add/remove GIFs from those collections.

## Demo

[Click here to view a demo!](https://drive.google.com/file/d/1vLhc7g05_5-_sSFYo-FYLX8u3urde-tg/view?usp=sharing) 

## Installation

Fork and clone this repository. Then, in the backend directory, install all dependencies:

```bundle install```

Run the migrations:

```rails db:migrate```

And start up the server:

```rails s```

Then, navigate to the frontend directory, open up a new terminal, and install all dependencies:

```npm install```

Then start up the front-end server: 

```npm start```

You can then navigate to http://localhost:3000 to access the application.

## Usage

Create a GIF collection on the Library page. Then, navigate to Home, select your collection from the dropdown, enter your search, and click the + button to add a GIF to the selected collection. You can then navigate back to the Library page, right click to copy the GIF address to share with friends, or click - to delete that GIF from the collection. You can also click the X on each collection to delete it.

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/bfirestone23/gif-library.

## License

Released under the terms of the [MIT License](https://opensource.org/licenses/MIT).
