const DeleteAccountButton = ({ user }) => {
  const handleClick = () => {
    // alert('testing delete account button');
    let answer = window.confirm(
      'Are you sure you want to delete your account?'
    );
    if (answer) {
      alert('Delete account(testing)');
    }
  };
  return (
    <button onClick={handleClick}>Delete your account {user.username}</button>
  );
};
export default DeleteAccountButton;
