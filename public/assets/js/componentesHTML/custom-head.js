class CustomHead extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="assets/css/main.css">
      <meta name="description"
          content="Desarollador web, Estudiante de informatica UMSA y electronica UPEA  - Omar Rodrigo Mamani Capcha - UMSA" />
      <meta name="copyright" content="Portafolio - Omar RMC" />
      <meta name="author" content="Omar Rodrigo Mamani Capcha - UMSA " />
      <meta name="audience" content="all" />
      <meta name="category"
          content="Desarollo web, Desarollo de aplicaciones moviles, Desarollo de aplicaciones de escritorios" />
      <meta itemprop="telephone" content="+591 75240883" />
      <title>Dev Omar Rodrigo Mamani Capcha - UMSA</title>
      </head>
    `;
  }
}

customElements.define('custom-head', CustomHead);