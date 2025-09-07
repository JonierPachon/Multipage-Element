class specialHeader extends HTMLElement {
   connectedCallback() {
      this.innerHTML = `<p
         style="
            display: flex;
            justify-content: space-around;
            background: #eeeeee;
            padding: 10px;
         "
      >
         <a href="index.html">Home</a><a href="about.html">About</a
         ><a href="contact.html">Contact</a>
      </p>`;
   }
}

class specialFooter extends HTMLElement {
   connectedCallback() {
      this.innerHTML = `<p
         style="
            display: flex;
            justify-content: space-around;
            background: #eeeeee;
            padding: 10px;
         "
      >
         © Jonier Pachon, 2025
      </p>`;
   }
}

customElements.define("special-header", specialHeader);
customElements.define("special-footer", specialFooter);
