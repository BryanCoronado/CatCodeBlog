---
sidebar_position: 2
---

# CSS



CSS (Cascading Style Sheets) es un lenguaje de estilo utilizado para controlar la presentación y el diseño de páginas web.

## Introducción a CSS

CSS permite a los desarrolladores y diseñadores web aplicar estilos visuales a los elementos HTML en una página web. Esto incluye el control del color, la tipografía, el diseño de la página, el espaciado, los bordes y mucho más.

## Selección de Elementos

Una de las características clave de CSS es su capacidad para seleccionar elementos HTML y aplicar estilos específicos a esos elementos. Algunos de los selectores más comunes incluyen:

- Selectores de tipo: `p`, `h1`, `div`, etc.
- Selectores de clase: `.clase`, `.destacado`, etc.
- Selectores de ID: `#id-elemento`, `#encabezado`, etc.

## Propiedades CSS Populares

CSS ofrece una amplia gama de propiedades para personalizar la apariencia de los elementos HTML. Algunas de las propiedades más populares incluyen:

- `color`: Define el color del texto.
- `font-family`: Especifica la fuente utilizada para el texto.
- `margin`: Controla el espacio exterior alrededor de un elemento.
- `padding`: Controla el espacio interior alrededor de un elemento.
- `background-color`: Define el color de fondo de un elemento.
- `border`: Establece el estilo, el ancho y el color del borde de un elemento.

## Box Model

El modelo de caja (Box Model) es fundamental en CSS y describe cómo se representan los elementos HTML en el navegador. Consiste en el contenido, el padding, el borde y el margen de un elemento.

## Ejemplo de Estilos CSS Básicos

Aquí hay un ejemplo básico de cómo se vería un archivo CSS:

```css
/* Estilos para el cuerpo de la página */
body {
    font-family: Arial, sans-serif;
    background-color: #f0f0f0;
}

/* Estilos para los encabezados */
h1 {
    color: #333;
    border-bottom: 1px solid #ccc;
}

/* Estilos para los párrafos */
p {
    margin-bottom: 20px;
}
