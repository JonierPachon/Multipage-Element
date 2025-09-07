# Multipage Element

A minimal example demonstrating how to reuse a navigation header and footer across multiple HTML pages using custom elements.

## Structure

-  `index.html`, `about.html` and `contact.html` include the shared `<special-header>` and `<special-footer>` elements.
-  `multipage-element.js` defines the custom elements and their markup.
-  `style.css` styles the navigation bar and footer.

## Usage

Open any of the HTML files in a web browser to view the pages. The script registers the custom elements so the same navigation and footer appear on each page.

## Extending

Add more pages by creating new `.html` files and including the existing script tag for `multipage-element.js`. Customize the layout or styles by editing `style.css`.
