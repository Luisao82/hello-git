export class Button extends HTMLElement{
  constructor(){
    super()
    this.innerHTML = /* HTML */ `
    <h1>Esto es una prueba de componente</h1>`
  }

  

}

customElements.define("button-luisao", Button)