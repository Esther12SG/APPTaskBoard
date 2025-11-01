SEGUNDA EVALUACIÓN PARCIAL
Programación Web
Ingeniero Brandon Chitay
Reyna Esther Sierra Garcia
202404027


APP TaskBoard

1. Qué es Redux y por qué se usa en lugar de useState
Redux es una librería, y la verdad, una excelente herramienta que ayuda a controlar y compartir el estado de toda una aplicación desde un solo punto.
Una diferencia bastante notable con useState es que este maneja datos de manera local dentro de un componente, mientras que Redux guarda la información de forma global, lo que permite que cualquier parte de la app acceda o actualice esos datos sin tener que enviarlos por props.

2.Elementos esenciales que forman Redux
Redux funciona gracias a tres piezas fundamentales, las cuales estuve poniendo en práctica en este proyecto, y son:
•	Store: es el lugar donde se encuentra todo lo que es el estado global.
•	Actions: se encargan de representar las órdenes que se envían para cambiar algo en ese estado.
•	Reducer: es quien escucha esas acciones y decide cómo debe cambiar el estado según la instrucción recibida.

3. Función que cumple el reducer en el flujo de Redux
El reducer es el encargado de actualizar el estado de una manera controlada.
Cada vez que se envía una acción, el reducer analiza qué tipo de cambio se pidió y devuelve un nuevo estado sin alterar directamente el anterior (manteniendo la inmutabilidad).

4.Diferencia entre acciones síncronas y asíncronas
Las acciones síncronas son las que se ejecutan de manera instantánea, sin esperar nada más.
En cambio, las asíncronas son diferentes, porque necesitan tiempo ya que dependen de algo externo, como obtener datos de un servidor o una API.
Redux Toolkit usa createAsyncThunk para manejar bien esas acciones que tardan un poco.


Funcionamiento de la Aplicación(TaskBoard)

1. Desarrollada con React + Redux para manejar el estado global de las tareas.

2. Permite agregar nuevas tareas a través del formulario principal.

3. Se pueden marcar tareas como completadas o mantenerlas activas.

4. Incluye filtros dinámicos para ver todas, solo activas o solo completadas.

5. Dispone de un botón para limpiar las tareas completadas fácilmente.

6. Todo el flujo de datos está centralizado en Redux, garantizando una gestión clara y ordenada.

7.  Diseño visual personalizado

<img width="1365" height="767" alt="image" src="https://github.com/user-attachments/assets/0cbc1c7c-4bcb-4dec-96ec-bba709686dc7" />

