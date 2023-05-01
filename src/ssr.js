import { TodoList } from "./components.js";
import { Button } from "./components.js";
// generateHTML함수도 별도의 파일로 분리한 이유는, Server에 독립적이라고 하더라도 Client에서는 사용될 일이 없을 것 같기 때문이다.
// 즉, 코드 자체는 Server에 독립적이지만, 이 코드의 관심사는 Server에서 HTML 문자열을 만드는 것에 초점이 있기 때문에 아예 ssr이라는 파일로 분리했다.
// ssr에 관련된 것들은 이 파일에서 관리하면 될 것이다.

export const generateHTML = (model) => `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Todo List</title>
  </head>
  <body>
  <div id="app">
    ${Button({ id: "add", text: "아이템 추가" })}
    ${Button({ id: "delete", text: "아이템 삭제" })}
    ${TodoList(model.todoItems)}
  </div>
   <script>
      document.querySelector('#add').onclick = () => {
        fetch('/api/todo-items', {
          method: 'post',
          body: JSON.stringify({ content: '추가된 아이템' }),
          headers: {
            'Content-Type': 'application/json',
          }
        }).then(() => location.reload())
      }
  
      document.querySelector('#delete').onclick = () => {
        fetch('/api/todo-items/0', { method: 'delete' }).then(() => location.reload())
      }
    </script>
  </body>
  </html>
`;
