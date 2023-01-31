# Crypto wallet app

## Descripción general

Este proyecto es una aplicación de monedero criptográfico construido con **React** y utiliza **Redux** para manejar el estado de la aplicación.Se ha utilizado **Eslint**, **Jest** y **Prettier** para garantizar la calidad del código.
Se utiliza una **API** para obtener una lista de activos (monedas) disponibles en tiempo real y permitir al usuario ordenarlos y marcarlos como favoritos. La lista de activos se actualiza cada 60 segundos y el usuario puede filtrar los activos que le interesan. También se incluye la capacidad de ordenar los activos por nombre o precio y agrupar los activos favoritos.

El objetivo de este proyecto es brindar una experiencia intuitiva y útil para el usuario en el seguimiento y gestión de sus activos criptográficos.

![nombre de la imagen](/src/images/Screenshot%202023-01-30%20at%2012-36-13%20Crypto%20Wallet%20App.png)

![nombre de la imagen](/src/images/Screenshot%202023-01-30%20at%2012-22-59%20Crypto%20Wallet%20App.png)

## Instalación:

Pasos para instalar y configurar el proyecto en el entorno local:

#### 1. Clonar el repositorio del proyecto desde GitHub.

#### 2. Instalar las dependencias requeridas para el proyecto, ejecutando el siguiente comando en la terminal: npm install

#### 3. Iniciar el servidor de desarrollo, ejecutando el siguiente comando en la terminal: npm start

#### 4. Acceder a la aplicación en el navegador, ingresando la dirección http://localhost:3000/

#### 5. Para ejecutar pruebas unitarias, ejecutar el siguiente comando en la terminal: npm test

#### 6. Para formatear el código, ejecutar el siguiente comando en la terminal: npm run format

#### 7. Para ejecutar **ESLint**, ejecutar el siguiente comando en la terminal: npm run lint

Nota: Es necesario tener **Node.js** y **npm** previamente instalados en el equipo.

## Funcionalidades del proyecto

- Ver una lista de **assets** disponibles: Al iniciar la aplicación, se muestra una lista de **assets** disponibles, estos son obtenidos de una **API** externa (https://documenter.getpostman.com/view/5734027/RzZ6Hzr3)
- Refresco automático: La lista se actualiza automáticamente cada 60 segundos.
- Ordenamiento de **assets**: Los **assets** se pueden ordenar por nombre o precio, haciendo clic en el filtro correspondiente.
- Seleccionar como favorito: Se puede marcar un **asset** como favorito haciendo clic en la estrella que se encuentra en cada fila.
- Agrupar **assets** favoritos: Se pueden agrupar y mostrar los **assets** favoritos, haciendo clic en la opción **Show Favorites** en la parte superior de la pagina.
- Búsqueda: Se puede buscar un **asset** específico usando la barra de búsqueda en la parte superior de la página.

_Nota: Se utiliza **Redux** para manejar el estado de la aplicación, **ESLint** para asegurar la calidad del código, **Jest** para las pruebas unitarias, **Prettier** para el formato de código, **Axios** para realizar las solicitudes a la **API** y **Bootstrap** para el diseño de la interfaz de usuario._

## Descripción General del Código

### Guía de componente App:

El componente App es el componente principal de la aplicación y se encarga de controlar la funcionalidad general de la aplicación.
Importaciones

- Se importa el componente **React** y los hooks **useEffect** de la librería **React**.
- Se importa **useDispatch** y **useSelector** de la librería **React-Redux**.
- Se importa los componentes **ListAssets**, **ToggleButton**, **Filters**, **SearchBar** y **Header** de la aplicación.
- Se importa las acciones **fetchAssets** y **getFavorites** de la carpeta **redux**.

Variables

- La variable dispatch se obtiene de la función **useDispatch** de la librería **React-Redux** y se utiliza para ejecutar las acciones en el store de **Redux**.
- La variable **assets** se obtiene de la función **useSelector** de la librería **React-Redux** y se utiliza para acceder a los **assets** del estado global de **Redux**.

Funciones

- La función **useEffect** se utiliza para cargar los activos desde la **API** cada minuto. Primero se verifica que la lista de activos esté vacía, en cuyo caso se llama a la acción **fetchAssets** para cargar los activos desde la **API**. Luego, se llama a la acción **getFavorites** para obtener la lista de favoritos. Además, se establece un intervalo de 1 minuto para llamar de nuevo a las acciones **fetchAssets** y **getFavorites** y mantener los activos actualizados en el estado global de **Redux**.

Renderización

- El componente App renderiza una estructura básica de la aplicación con los componentes **Header**, **SearchBar**, **Filters**, **ToggleButton**, **ListAssets** y **Footer**.

### Guía de componente Asset

Importaciones:

- Se importa **React**: librería principal de **React**
- Se importa **useDispatch** y **useSelector** de **react-redux**: Hooks para el uso de dispatch y selección de estado en el componente
- Se importa **addFavorite** y **removeFavorite** de "../../redux/actions": acciones para agregar y quitar elementos de favoritos

Funciones:

- **handleAddToFavorites**: dispatch de la acción de agregar un elemento a favoritos
- **handleRemoveFromFavorites**: dispatch de la acción de quitar un elemento de favoritos

Variables:

- **favorites**: estado de favoritos desde el store de **Redux**
- **isFavorite**: determina si el elemento actual está en favoritos
- **formatter**: objeto para formatear números como moneda
- **formattedPrice**: precio del elemento formateado como moneda
- **formattedMarketCap**: capitalización de mercado formateada como moneda

Render:

- Se muestra información sobre el elemento (rango, nombre/símbolo, precio, cambios de precios, capitalización de mercado)
- Se muestra botón para agregar/quitar de favoritos dependiendo de si está en favoritos o no.

### Guía de componente Filters

Importaciones:

- Se importa **React** y **useEffect** y **useState** desde "react".
- Se importa **useDispatch** y **useSelector** desde "react-redux".
- Se importa la acción **sortAssets** de "../../redux/actions".
- Se importa el archivo **CSS** "./Filters.css".

Funciones:

- **Filters** es una función que renderiza un elemento UI para seleccionar un criterio y orden de clasificación para **assets**.
- Se usa **useState** para mantener el estado local de **sortBy** y **sortOrder**.
- Se usa **useDispatch** para tener acceso a la función dispatch de **Redux**.
- Se usa **useSelector** para obtener el estado de **assets** del store de **Redux**.
- **handleSortByChange** es una función que maneja el cambio en el criterio de clasificación seleccionado.
- **handleSortOrderChange** es una función que maneja el cambio en el orden de clasificación seleccionado.

Variables:

- **sortBy** es una variable de estado local que mantiene el criterio de clasificación seleccionado.
- **sortOrder** es una variable de estado local que mantiene el orden de clasificación seleccionado.
- **assets** es una variable que mantiene el estado de **assets** del store de **Redux**.
- **dispatch** es una variable que mantiene la función dispatch de **Redux**.

Render:

- El componente **Filters** renderiza dos elementos select para seleccionar el criterio y orden de clasificación.
- Cada select tiene opciones para seleccionar "Name", "Price", "Ascending" y "Descending".
- El componente también muestra etiquetas para indicar "Sort by" y "Sort order".

### Guía de componente **ListAssets**

Importaciones:

- Se importa **React**.
- Se importa **useSelector** desde **react-redux** para acceder al estado global
- Se importa "./ListAssets.css" para estilos
- Se importa Asset desde "../Asset/Asset". para render los **assets**

Funcion:

- Se define la función **ListAssets** que retorna un componente de **React**.

Variables:

- **showFavorites**: valor obtenido desde el estado global usando **useSelector**.
- **assets**: valor obtenido desde el estado global usando **useSelector**.
- **sortedAssets**: valor obtenido desde el estado global usando **useSelector**.
- favorites: valor obtenido desde el estado global usando **useSelector**.
- **searchByName**: valor obtenido desde el estado global usando **useSelector**.

Render:

- Se retorna un componente de div que contiene una tabla de activos.
- La tabla tiene dos versiones: una para pantallas pequeñas y otra para pantallas grandes.
- Para llenar la tabla, se verifica primero si existe una búsqueda por nombre, si es así, se renderiza los resultados de la búsqueda.
  - Sí no hay búsqueda por nombre, se verifica si se deben mostrar los favoritos y se renderizan estos.
  - Sí no se deben mostrar los favoritos, se verifica si existen activos ordenados y se renderizan estos.
  - Sí no existen activos ordenados, se renderizan todos los activos disponibles.

### Guía de componente **SearchBar**

Importaciones:

- Se importa **React** y el hook **useState** desde el paquete "react".
- Se importa el hook **useDispatch** desde "react-**redux**".
- Se importan las acciones reset**SearchBar** y **searchByName** desde "../../redux/actions".

Funciones:

- **handleChange**: maneja el cambio en el valor del input de búsqueda y llama a la acción **searchByName** con el valor actual del input.
- **resetSearch**: establece el valor del input en vacío y llama a las acciones **searchByName** y **resetSearchBar** con valor vacío.

Variables:

- dispatch: contiene una referencia al dispatch de **React-Redux**.
- **searchTerm**: contiene el valor actual del input de búsqueda.

Render:

- Renderiza un formulario con un input y un botón.
- El input tiene un placeholder "Search...", un valor establecido en el estado **searchTerm**, un estilo aplicado mediante un objeto de estilo inline y un manejador de evento **handleChange** en el evento "onChange".
- El botón tiene un manejador de eventos **resetSearch** en el evento "onClick" y un estilo aplicado mediante un objeto de estilo inline.

### Guía de componente ToggleButton

Importaciones:

- Se importa **React**
- Se importauseSelector y **useDispatch** de "**react-redux**"
- Se importa **showFavorites** y reset**SearchBar** de "../../redux/actions"
- Se importa "./ToggleButton.css" para estilos

Funciones:

- **handleClick**: alterna entre mostrar todos los elementos y solo los favoritos, y resetea la barra de búsqueda.

Variables:

- **toggleFavorites**: obtiene el estado actual de si se están mostrando solo los elementos favoritos.
- **dispatch**: permite usar las acciones del store de **Redux**.

Render:

- El componente renderiza un grupo de botones de **Bootstrap**, con dos opciones: **Show All** y **Show Favorites**. Al elegir una opción, se activa o desactiva un botón y se invoca la acción correspondiente para mostrar todos o solo los favoritos, y resetear la barra de búsqueda.

## Acciones

### fetchAssets()

- Realiza una solicitud a la **API** para obtener información sobre los activos.
- Utiliza la biblioteca **Axios** para hacer la solicitud.
- En caso de éxito, dispatch una acción **FETCH_ASSETS** con el resultado de la solicitud como payload.
- En caso de error, muestra un mensaje de error en la consola.

### **sortAssets**(sortBy, sortOrder)

- Recibe dos argumentos: **sortBy** y **sortOrder**.
- Recupera el estado actual de los activos y de la búsqueda por nombre.
- Ordena los activos y la búsqueda por nombre en base a los argumentos **sortBy** y **sortOrder**.
- Dispatch dos acciones: **SORT_ASSETS** con los activos ordenados como payload, y **SEARCH_BY_NAME** con la búsqueda ordenada como payload.

### addFavorite(asset)

- Recibe un argumento **asset** que es el activo que se quiere agregar a los favoritos.
- Recupera el estado actual de los activos y los favoritos.
- Busca el activo en los activos y lo agrega a los favoritos si existe.
- Dispatch una acción **ADD_FAVORITE** con los nuevos favoritos como payload.
- Almacena los nuevos favoritos en el **localStorage**.

### removeFavorite(asset)

- Recibe un argumento **asset** que es el activo que se quiere remover de los favoritos.
- Recupera el estado actual de los favoritos.
- Elimina el activo de los favoritos.
- Dispatch una acción **REMOVE_FAVORITE** con los favoritos actualizados como payload.
- Almacena los favoritos actualizados en el **localStorage**.

### setFavorites(assets)

- Recibe un argumento **assets** que es la lista de activos a comparar con los favoritos.
- Recupera los favoritos desde el **localStorage**.
- Compara los favoritos con la lista de activos para actualizar los favoritos con la información más reciente.
- Devuelve una acción **SET_FAVORITES** con los favoritos actualizados como payload.

### getFavorites()

- Recupera el estado actual de los activos.
- Genera una lista de identificadores de activos.
- Dispatch una acción **SHOW_FAVORITES** con la lista de identificadores como payload.

### showFavorites()

- Devuelve una acción **SHOW_FAVORITES** que indica al almacén de **Redux** que debe mostrar los favoritos.

### searchByName(name)

- Recibe un argumento name que es el nombre a buscar en la lista de activos.
- Utiliza el método getState para recuperar la lista de activos desde el almacén de **Redux**.
- Filtra la lista de activos utilizando el argumento name y devuelve una acción **SEARCH_BY_NAME** con los activos filtrados como payload.

### resetSearchBar()

- Devuelve una acción **RESET_SEARCH** que indica al almacén de **Redux** que debe reiniciar la búsqueda.

## Reducer

El estado inicial incluye una matriz de activos, una matriz de activos ordenados, una matriz de favoritos, una variable booleana para mostrar favoritos y una matriz para buscar por nombre.

Cada caso actualiza el estado y devuelve un nuevo objeto del estado actualizado.

- El caso "**FETCH_ASSETS**" actualiza el estado con los activos recibidos a través de la acción.

- El caso "**SORT_ASSETS**" actualiza el estado con los activos ordenados recibidos a través de la acción.

- Los casos "**ADD_FAVORITE**" y "**REMOVE_FAVORITE**" actualizan el estado con la matriz de favoritos actualizada recibida a través de la acción.

- El caso "**SET_FAVORITES**" actualiza el estado con la matriz de favoritos recibida a través de la acción.

- El caso "**SHOW_FAVORITES**" cambia el valor de la variable **showFavorites** a su valor opuesto.

- El caso "**SEARCH_BY_NAME**" actualiza el estado con la matriz de búsqueda por nombre recibida a través de la acción.

- El caso "**RESET_SEARCH**" establece la matriz de búsqueda por nombre en una matriz vacía.

- El **default case** simplemente devuelve el estado actual sin modificaciones.

_En resumen, este proyecto ha sido una gran oportunidad para aplicar mis conocimientos y desarrollar mis habilidades en la construcción de aplicaciones. Estoy agradecido con la startup Okboy por brindarme esta oportunidad y por su apoyo en el proceso. Espero que mi solución cumpla con sus expectativas y que haya sido una experiencia satisfactoria para todas las partes involucradas. Gracias por la oportunidad de trabajar en este proyecto emocionante_
