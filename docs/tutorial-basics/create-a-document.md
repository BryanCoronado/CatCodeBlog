---
sidebar_position: 1
---

# HTML

HTML (HyperText Markup Language) es el lenguaje estándar utilizado para crear la estructura y el contenido de las páginas web.

## Introducción a HTML

HTML proporciona una manera de estructurar el contenido de una página web mediante el uso de elementos y etiquetas. Cada elemento tiene un propósito específico y puede contener texto, imágenes, enlaces y otros elementos multimedia.

## Elementos Básicos de HTML

A continuación, se presentan algunos de los elementos más comunes utilizados en HTML:

- `<html>`: Define el principio y el final de un documento HTML.
- `<head>`: Contiene metadatos sobre el documento, como el título y los enlaces a hojas de estilo y scripts.
- `<body>`: Contiene el contenido principal de la página, como texto, imágenes y otros elementos.
- `<h1>`, `<h2>`, `<h3>`, etc.: Definen los encabezados de distintos niveles.
- `<p>`: Define un párrafo de texto.
- `<a>`: Define un enlace a otra página web o recurso.
- `<img>`: Inserta una imagen en la página.
- `<ul>` y `<ol>`: Definen listas sin orden y listas ordenadas, respectivamente.
- `<li>`: Define un elemento de lista dentro de `<ul>` o `<ol>`.

## Ejemplo de Documento HTML Básico

Aquí hay un ejemplo básico de un documento HTML:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Bienvenido a mi página web</h1>
    <p>Este es un párrafo de texto.</p>
    <a href="https://www.example.com">Enlace a Example.com</a>
    <img src="imagen.jpg" alt="Descripción de la imagen">
    <ul>
        <li>Elemento de lista 1</li>
        <li>Elemento de lista 2</li>
        <li>Elemento de lista 3</li>
    </ul>
</body>
</html>
