const DeleteAccountButton = ({ user }) => {
  const handleClick = () => {
    alert('testing delete account button');
  };
  return (
    <button onClick={handleClick}>Delete your account {user.username}</button>
  );
};
export default DeleteAccountButton;
