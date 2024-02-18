
# Cat Code 

## Pgina Web sobre Lenguajes de Programación

¡Bienvenido a nuestro espacio dedicado al fascinante mundo del desarrollo web! Aquí encontrarás información detallada y actualizada sobre las tecnologías más relevantes tanto en el front end como en el back end, que están transformando la manera en que interactuamos con la web y construimos aplicaciones increíbles.

![Logo de Markdown](https://i.ibb.co/Yp0LwcB/Captura-de-pantalla-2024-02-18-121128.png)

Demo : **https://bryancoronado.github.io/CatCodeBlog/

### Instalacion

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Despliegue

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```


Si estás utilizando GitHub Pages para alojar tu sitio web, este comando es una forma conveniente de construir el sitio web y hacer push a la rama gh-pages
