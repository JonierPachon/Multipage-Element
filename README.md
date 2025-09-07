<p align="center">
    <img src="https://github.com/JonierPachon/Multipage-Element/blob/main/README/pc1.png" alt="My Image 2" width="600" style="margin: 0 ;">
    <img src="https://github.com/JonierPachon/Multipage-Element/blob/main/README/pc2.png" alt="My Image 1" width="450" style="margin: 0 100px;">
    <img src="https://github.com/JonierPachon/Multipage-Element/blob/main/README/pc3.png" alt="My Image 2" width="450" style="margin: 0 200px;">
</p>


# ✨ Multipage Element

A minimal example demonstrating how to reuse a navigation header and footer across multiple HTML pages using custom elements.

## 🧬 Structure

-  `index.html`, `about.html` and `contact.html` include the shared `<special-header>` and `<special-footer>` elements.
-  `multipage-element.js` defines the custom elements and their markup.
-  `style.css` styles the navigation bar and footer.

## 👨‍💻 Usage

Open any of the HTML files in a web browser to view the pages. The script registers the custom elements so the same navigation and footer appear on each page.

## 💫 Extending

Add more pages by creating new `.html` files and including the existing script tag for `multipage-element.js`. Customize the layout or styles by editing `style.css`.
