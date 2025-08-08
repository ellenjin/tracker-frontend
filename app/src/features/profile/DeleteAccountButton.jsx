import { deleteUserApi } from '../../requests/userApi';

const DeleteAccountButton = ({ user, setCurrentUser }) => {
  const handleClick = () => {
    // alert('testing delete account button');
    let answer = window.confirm(
      'Are you sure you want to delete your account?'
    );
    if (answer) {
      deleteUserApi(user.id);
      setCurrentUser(null);
    }
  };
  return (
    <button onClick={handleClick}>Delete your account {user.username}</button>
  );
};
export default DeleteAccountButton;
