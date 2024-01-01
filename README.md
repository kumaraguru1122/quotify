# Quotify - Quote Generator 
Quotify is a simple, elegant JavaScript application that fetches random quotes from an API and allows the user to copy the quote to their clipboard.

## Screenshot [live site link]()

## Features
- Fetches random quotes from the Quotable API
- Displays the quote and its author on a beautiful, responsive user interface
- Allows the user to copy the quote to their clipboard
- Built with Tailwind CSS for modern and responsive design

## How it works
The application uses the Fetch API to get random quotes from the Quotable API. The quote and its author are then displayed on the webpage.

There are two main functions in the application:

1. generateQuote(): This function fetches a random quote from the Quotable API and updates the quote and author elements on the webpage.

2. copyToClipboard(): This function copies the current quote and its author to the user's clipboard. If the copy is successful, the copy button's text changes to "copied!" for 2 seconds before changing back to "copy".