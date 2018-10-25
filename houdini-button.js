class HoudiniButton extends HTMLElement {
  constructor() {
    super();
    
    var color = this.getAttribute('color');
    this.root = this.attachShadow({mode: 'open'});
    this.root.innerHTML = `
      <style>
        div {
          --div-color: ${color};
          background-image: paint(divPainter);
        }
      </style>
    `;
    
    this.div = document.createElement("div");
    this.div.textContent = "Div painter custom element";
  }
  
  connectedCallback() {
    this.root.appendChild(this.div);
    CSS.paintWorklet.addModule('div-painter.js');
  }
}

customElements.define("houdini-button", HoudiniButton);