class SpecialHeader extends HTMLElement {
   connectedCallback() {
      this.innerHTML = `
         <nav class="site-nav">
            <a href="index.html">Home</a>
            <a href="about.html">About</a>
            <a href="contact.html">Contact</a>
         </nav>
      `;
   }
}

class SpecialFooter extends HTMLElement {
   connectedCallback() {
      this.innerHTML = `
         <footer class="site-footer">
            © Jonier Pachon, 2025
         </footer>
      `;
   }
}

customElements.define("special-header", SpecialHeader);
customElements.define("special-footer", SpecialFooter);
