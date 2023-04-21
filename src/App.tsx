import "./App.css";
import { useUsers } from "./hooks/useUsers";

function App() {
  const { users, error } = useUsers();

  // if (error) {
  //   return (
  //     <div>
  //       <h1>Users List</h1>
  //       <h3>Opa, desculpa algo inesperado aconteceu</h3>
  //       {error}
  //     </div>
  //   );
  // }

  return (
    <div>
      <h1>Users List</h1>
      <pre
        style={{
          minWidth: 300,
        }}
      >
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <span>
                {user.id} - {user.name}
              </span>
            </li>
          ))}
        </ul>
      </pre>
    </div>
  );
}

export default App;
