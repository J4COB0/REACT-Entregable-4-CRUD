import logo from './logo.svg';
import './App.css';
import UsersList from './components/UsersList';
import UsersForm from './components/UsersForm';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

  const [users, setUsers] = useState([]);
  const [userSelected, setUserSelected] = useState({});
  
  useEffect(() => {
    axios.get('https://users-crud1.herokuapp.com/users/')
      .then(res => setUsers(res.data))
      .catch(err => console.log(err))
  }, []);


  const addUser = (user) => {
    axios.post('https://users-crud1.herokuapp.com/users/',user)
      .then(() => getUsers())
      .catch(err => console.log(err))
  };
  
  const deleteUser = (userId) => {
    axios.delete(`https://users-crud1.herokuapp.com/users/${userId}/`)
    .then(() => getUsers())
    .catch(err => console.log(err))
  };

  const updateUser = (editedUser) => {
    axios.put(`https://users-crud1.herokuapp.com/users/${userSelected.id}/`,editedUser)
      .then(() => getUsers())
      .catch(err => console.log(err))
  };

  const selectUser = (user) => {
    setUserSelected(user);
  }

  const cleanUserSelected = () => {
    setUserSelected([]);
  }

  const getUsers = () => {
    axios.get('https://users-crud1.herokuapp.com/users/')
      .then((res) => setUsers(res.data))
  }

  return (
    <div className="main-container">
      <UsersForm 
        addUser={addUser}
        updateUser={updateUser}
        userSelected={userSelected}
        cleanUserSelected={cleanUserSelected}
      />
      <UsersList 
        users={users}
        selectUser={selectUser}
        deleteUser={deleteUser}
      />
    </div>
  );
}

export default App;
