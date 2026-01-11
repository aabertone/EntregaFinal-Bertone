# Proyecto Tienda DC

## Breve Descripción

Esta pagina es un tienda de prueba E-Commerce donde se pueden seleccionar elementos que se encontrarían en un DataCenter y se pueden, la pagina cuenta con filtros para cambiar por categoría de elemento o un catalogo general en su landing donde se pueden agregar, cada elemento aparece de forma general ya se en landing o en category y al hacer el click en ver detalles se puede visualizar el producto en detalle con mayor descripcion y se permite agregar al carrito seleccionado la cantidad necesaria.
La base de datos de productos vive en FireBase.

## Contexto

La aplicación posee un contexto muy complejo que contiene dentro 5 funciones distintas las cuales están siendo exportadas a toda la aplicacion

- additem:

Es una funcion que permite agregar elementos al carrito se corre en itemdetail y tambien en el carrito mismo pudiendo manipular al carrito desde ambas ubicaciones, basicamente su estructura es un StateUplift que trae elementos de los componenetes hijos basados en los paramentros que ellos envían, tiene cargadas algunas seguridades para comprobar si el elemento que se envia ya existe o no. Si no existe agrega todos los items enviados por lo hijos y si ya existe solo suma la cantidad de items eviados.

- removeOne

Esta funcione es exclusiva del carrito y se usa al pulsar el boton - que estará presente en cada elemento. Lo que hace es eliminar 1 cantidad del elemento, si ya no quedan mas lo elimina por completo.

- removeItem

Esta funcion ex exclusiva del carrito y se usa al pulsar el boton Eliminar, basicamente elimina al elemento basado en su ID del carrito.

- ClearCart

Esta funcion es exclusiva del carrito y permite eliminar todos los objetos del carrito basicamente setenado su array en vacío. Se usa al vaciar el carrito o al finalizar la compra

- GetTotalprice

Esta funcion es automatica y es exclusiva del carrito basicamente es una calculadora que puede sumarizar todos los elementos del carrito pero solo trae sus precios y muestra en la base del carrito el costo total.



## Componentes

- NavBar

El navbar esta compuesto por Links de browser router, contiene un Logo que es un link, secciones y un icono de carrito que se integra como CartWidget.

- Cart Widget

El cart widget contiene un SVG y un Span, el SVG es de autoría de bootstrap, y el span está recolentando valores de un contexto para mostrar la cantidad de elementos en carrito

- Articulo

Es un componente que recibe elementos de la base de datos y los estrucutra como un card.

- ItemListContainer, ItemDetailContainer, ItemFilterContainer, CarritoContainer

Estos componentes son padres tipo cajas y contienen en su interior al elemento hijo que renderizan en su interior se encuentran distintas funciones

-- ItemlistConntainer: Contiene la pagina de landing on un titutlo y directamente carga a ItemList

-- Itemdetailcontainer: Contiene a la pagina de detalle y ne particular tiene algunas fucniones con params para poder filtrar en la base de datos, contiene a ItemDetail

-- ItemFilterContainer: Es el contenedor de las paginas por categoría contiene a ItemFilter y ademas posee funciones con params para poder filtrar al traer datos de la base

-- CarritoContainer: Es un contenedor muy simple que solo mantiene la estructura de componentes e incluye al carrito.

- ItemDetail

Este componente es bastante complejo, trae en su interior
un nuevo render del los elementos en la base, y contiene funciones padre que se usan desde ItemCOunt, posee una de las funciones del contexto para agregar elementos al carrito haciendo un State Uplift

- ItemCount

Es muy simple solo contiene los 2 botones que muestra ItemDetail y hace correr a las funciones de su padre ItemDetail formando un State Uplift simple usando a la funciones del padre como parametros.

- ItemList

Es la pagina de landing y basicamente hace un spread por cada articulo que viene de la base de datos.

- ItemFilter

Es muy similar a ItemList, ya que también hace un spread pero en esta caso ya con datos filtrados desde la base

- Carrito

El carrito posee una estrucutra muy diferente a la lista de items, contiene su interior funciones para finalizar la compra y manipular el DOM, y la estrucutra del render se hace mapeando a la base items que proviene del contexto. SU formato es similar a los articulos del landing pero los cards ahora contienen subtotales botones para sumar o restar items y un boton para eliminar. Ademas en su base se encuentra el costo total, y 2 botones 1 para vaciar el carrito y otro para finalizar la compra.

## Funcionalidad

Basicamente desde la estructura de landing el usuario puede filtrar elementos o acceder directamente a ellos, tras ver sus detalles puede agregar elementos al carrito, y desde el carrito puede configurar su compra, eliminarla o finalizarla.

## Base de datos

La base de datos vive en Firebase y contiene elementos ordenados por ID categoria nombre precio descripcion y una imagen.

## Funciones externas

La app cuenta con el uso de BrowserRouter permitiendo renderizar las paginas sin recargarlas

## Dev

Para correr el proyecto correr el siguiente comando

```bash
  npm run dev
```

## Autor

- Ariel Bertone
- [Mail](mailto:aabertone@hotmail.com)

## Link a la pagina

[Deploy Vercel]()
