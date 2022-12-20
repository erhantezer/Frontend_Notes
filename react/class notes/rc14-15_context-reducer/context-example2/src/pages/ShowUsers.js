import User from '../components/User';
import { useUserContext } from '../context/UserContextProvide';

const ShowUsers = () => {

  const {users} =useUserContext()
  //! custom hook ile yapıldığından fonksiyon yeterli
  //? yoksa const const {users} =useContext(UserContext); ile de yapılabilirdi...
  
  return (
    <div>
      <h2>User List</h2>
      {users.map((user) => (
        <User key={user.id} user={user} />
      ))}
    </div>
  );
};

export default ShowUsers;
