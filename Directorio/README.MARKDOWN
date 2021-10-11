# Md-Links


## Descripción


**MD-Links** es un Este proyecto trata de mejorar la experiencia de usuario en cuanto al uso de los links que muchas veces se incluyen en el _read me_ de los proyectos ya que varios de esos links están rotos y Md-Links está pensado para detectar todos esos links de una forma rápida y eficiente para hacer el trabajo necesario.
Con Md-links puedes detectar los likns rotos. De tener un link funcional también puees recuperar información de de estos como:

* Url.
* Ruta.
* Texto dentro del link.
* Codigo de respuesta HTTTP.

También tienes la opción de obtener las estadísticas de los lilnks con información como:
* Total de links.
* Links no repetidos.
* Links rotos. 


## Instrucciones

El ejecutable de la aplicación debe poder ejecutarse de la siguiente
manera a través de la **terminal**:

`md-links <path-to-file> [options]`

Por ejemplo:

```sh
$ md-links ./some/example.md
./some/example.md http://algo.com/2/3/ Link a algo
./some/example.md https://otra-cosa.net/algun-doc.html algún doc
./some/example.md http://google.com/ Google
```

Si solo se ingresa como parámetro una ruta se obtendrá:

**Ruta válida:** el programa responderá proporcionando lo siguiente:
* URL encontrada.
* Texto que aparece dentro del link.
* Ruta del archivo dónde se encontró el link.

**Ruta inválida** el programa responderá con un mensaje informando que la ruta ingresada no es válida.

**Se puede ingresar la ruta de un archivo o un directorio**

#### Options

##### `--validate`

Si pasamos la opción `--validate`, el módulo debe hacer una petición HTTP para
averiguar si el link funciona o no. Si el link resulta en una redirección a una
URL que responde ok, entonces consideraremos el link como ok.

Por ejemplo:

```sh
$ md-links ./some/example.md --validate
./some/example.md http://algo.com/2/3/ ok 200 Link a algo
./some/example.md https://otra-cosa.net/algun-doc.html fail 404 algún doc
./some/example.md http://google.com/ ok 301 Google
```

El _output_ en este caso incluye la siguiente información:

* Ruta.
* Url.
* Mensaje.
* Codigo de respuesta HTTTP.
* Texto dentro del link.


##### `--stats`

Si pasamos la opción `--stats` el output (salida) será un texto con estadísticas
básicas sobre los links.

```sh
$ md-links ./some/example.md --stats
Total: 3
Unique: 3
```

* **Total:** se refiere al total de links encontrados.
* **Unique:** nos dice cuantos de estos links son únicos o no estan repetidos.


También podemos combinar `--stats` y `--validate` para obtener estadísticas que
necesiten de los resultados de la validación.

```sh
$ md-links ./some/example.md --stats --validate
Total: 3
Unique: 3
Broken: 1
```

* Combinando las dos opciones podremos obtener también el total de vínculos rotos.


_______________________________________________________________________________________________________



Saludos!, espero que Md-Links te ayuda a ahorrar tiempo y esfuerzo

[Markdown](https://es.wikipedia.org/wiki/Markdown)
[Hello](http://www.dihola.com.mx/)
[paleta](https://www.holland.com/es/turist.htm)
