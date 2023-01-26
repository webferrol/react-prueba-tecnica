# Prueba técnica para Juniors y Trainees de React en Live Coding.

APIs:

- https://cataas.com/#/

- Facts Random: https://catfact.ninja/fact
- Imagen random: https://cataas.com/cat/says/hello

- Recupera un hecho aleatorio de gatos de la primera API
- Recuperar la primera palabra del hecho
- Muestra una imagen de un gato con la primera palabra.

## Instalaciones

- [Vite](https://vitejs.dev/guide/)
Esta instalación la configuramos para JavaScript y no React para luego demostrar que podemos realizar el punto de entrada

- [Plugin de react para Vite](https://www.npmjs.com/package/@vitejs/plugin-react)
```sh
pnpm install @vitejs/plugin-react -E
```
El parámetro __-E__ es para que tenga la versión exacta

- Instalación de las dos dependencias de react
```sh
pnpm i react react-dom -E
```
__react-dom__
Bindings con el navegador ...
__react__
Hooks como useState ...

- Instalación de standard.js
```sh
pnpm i standard --save-dev
```
Recuerda configurar el fichero __package.json__
```js
 "eslintConfig": {
    "extends": "./node_modules/standard/eslintrc.json"
  }
```
eslintrc.json donde rc significa:
"rc stands for run commands." 