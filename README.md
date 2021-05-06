# pokedex-challenge

Para ver el proyecto en funcionamiento puede visitar la siguiente direccíón: https://pokemon-challenge-1.vercel.app

### Uso

* Clonar el proyecto
* Run `npm install`
* Run `npm run serve`

**Solución:**

En esta oportunidad para resolver este reto empecé analizando las interfaces para aprender más sobre el objetivo principal. Conseguí una buena arquitectura y diseño de código, así como UI visualmente igual, en cada detalle, a la propuesta. La estructura del proyecto y los componentes fueron armados conforme el diseño proporcionado imaginando donde tenían que ir cada componente. Decidí no usar frameworks CSS, ya que aportaban peso y complejidad innecesaria. Cada librería usada en este proyecto está pensada para brindar la mejor compatibilidad entre navegadores, se describe más abajo. Toda la aplicación está probada en distintos dispositivos móviles y navegadores(Chrome, Firefox).

Disfruté mucho el proceso de desarrollo de esta aplicación el cual fue muy entretenido, al aplicar mis conocimientos algo tan bien estructurado. Sobre el diseño de figma me ayudó mucho, estuvo increiblemente claro, gracias por eso.

Entre los puntos a mejorar, de mi parte, en esta versión esta la primera carga de la lista de pokemons ya que al cambiar de pestaña desde favoritos a la lista hay una demora por que se renderizan muchos pokemons al mismo tiempo, la solución que planteo sería añadir **paginación infinita** con un número mínimo de datos iniciales.

Lo que podría quedar como **sugerencias**, para mejorar esta aplicación sería añadir i18n(internacionalización), además vi que faltaron algun botones para regresar a la pantalla principal.

En cuanto a la estructura del proyecto separé la lógica de la vista. A continuación describo cada parte:

* **Pantallas:** Estas las dividí en tres vistas: welcome, list y favorites. Me ayudó a separar la lógica de la vista.
* **CSS**: Los estilos de la aplicación estan basados en SASS, usando la metodología BEM, separados en multiples módulos para que se entiendan por si mismo.
* **CSS en componentes**: Cada componente encapsula sus propias hojas de estilo junto con RWD, si lo require. Ver [main.css](/src/styles/main.scss).
* **Frameworks CSS:** No se utiliza ninguno en este proyecto ya que el proyecto se puede resolver sin aplicar complejidad ni peso extra. Lo que si hice fue basarme en las [buenas prácticas de Bootstrap](/src/styles/_responsive.scss) en sus media queries y [tailwind para el nombre de las variables](/src/styles/_variables.scss).
* **Nombres de variables:** Cada variable sigue una cierta lógica para evitar que el código pueda leerse sin problemas (Clean code: naming, KISS).
* **Funciones:** He tratado, en mayor medida, que cada función haga una única cosa(DRY, S de SOLID). 
* **Servicios:** Llamé al API usando axios, estos fueron separados un modulo pequeño que haga una sola cosa, hacer llamadas ajax GET. Ver [archivo](/src/services/pokemons/index.js).
* **Componentes:** Cada componente ha sido reducido, lo más que se pudo, para conseguir que estos sean leibles facilmente, reutizables y tengan pocas líneas de código. Ejemplo: [components/shared/PokemonButtonFavorite.vue](/src/components/shared/PokemonButtonFavorite.vue), el cual se usa en tres lugares de la app(KISS, DRY).
* **Componentes:** Hay una lista de [componentes base](/src/components/base-ui) , globales, que me permiten reutilizarlos en multiples partes(DRY, KISS). Cada componente cumple una única función.
* **Helpers:** Separé lógica que puede reutilizarse como por ejemplo: removeHyphens y arrayWithCommas (DRY, KISS).


**Librerías usadas:**

Si bien esta aplicación se hizo usando las librías de facto, vue, vuex y vue-router; he añadido tres librerías que me ayudaron a cumplir con el objetivo:

* **axios:** Preferí esta librería por la compatibilidad de navegadores en los llamados a APIs.
* **vuex:** Esta librería me ayudó a centralizar el estado de la aplicación y data mediante propiedades. Además elegí una estructura separada por módulos, por si el proyecto crece más (KISS). 
* **vue-router:** Se separaron las rutas de la lógica principal para que sea más fácil su uso.
* **vue-lazyload:** Usé esta librería para controlar la carga de las imágenes, así como cuando las imágenes llegan con algún error o estan cargando. 
* **vue-simple-portal:** Me ayudó a crear la ventana modal para evitar los problemas con el z-index.
* **vue-clipboard2:** Esta librería me ayudó a copiar contenido en el clipboard de una manera muy simple.


**Sobre las pruebas unitarias:**

En esta oportunidad no apliqué test unitarios. En su lugar lo que apliqué son pruebas e2e usando **Cypress**, las cuales se encuentran en el siguiente [archivo](/cypress/integration/pokedex/pokedex_spec.js).

```
npm run serve
npm run test:e2e
```


Gracias