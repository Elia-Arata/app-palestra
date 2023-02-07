import { Route, Routes } from "react-router-dom";
import './App.css';
import { Detail } from "./pages/detail/Detail";
import { Home } from "./pages/home/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/detail/:id" element={<Detail />} />
      <Route path="/detail" element={<Detail />} />
    </Routes>
  );
}

const Users = () => {
  // state
  const [users, setUsers] = React.useState([]);
  // effects
  React.useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => {
        setUsers(users);
      })
      .catch((err) => {});
  }, []);
  // render
  return (
    <div>
      <h2>Users</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.email})
          </li>
        ))}
      </ul>
    </div>
  );
 };
 const App = () => (
  <BrowserRouter>
    <Route path="/" exact component={Users} />
  </BrowserRouter>
 );

export default App;
