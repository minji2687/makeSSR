import { App } from "./components.js";
// generateHTML함수도 별도의 파일로 분리한 이유는, Server에 독립적이라고 하더라도 Client에서는 사용될 일이 없을 것 같기 때문이다.
// 즉, 코드 자체는 Server에 독립적이지만, 이 코드의 관심사는 Server에서 HTML 문자열을 만드는 것에 초점이 있기 때문에 아예 ssr이라는 파일로 분리했다.
// ssr에 관련된 것들은 이 파일에서 관리하면 될 것이다.

export const generateHTML = (path, model) => `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Todo List</title>
  </head>
  <body>
    <div id="app">
        ${App(path, model)}
    </div>
    <script>window.__INITIAL_MODEL__ = ${JSON.stringify({
      todoItems: model.todoItems,
    })}</script>
    <script src="./src/main.js" type="module"></script>
  </body>
  </html>
`;
