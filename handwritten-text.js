class HandwrittenText extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <svg width="600" height="200" viewBox="0 0 600 200" xmlns="http://www.w3.org/2000/svg">
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Homemade+Apple&display=swap');
          
          text {
            font-family: 'Homemade Apple', cursive;
            font-size: 50px;
            fill: none;
            stroke: black;
            stroke-width: 2;
            stroke-dasharray: 800;
            stroke-dashoffset: 800;
            animation: draw 3s forwards ease-in-out;
          }

          @keyframes draw {
            to {
              stroke-dashoffset: 0;
            }
          }
        </style>
        <text x="20" y="100">ARCHI-PRISMA</text>
        <text x="20" y="160">DEZIGN WORKS</text>
      </svg>
    `;
  }
}

customElements.define('handwritten-text', HandwrittenText);
