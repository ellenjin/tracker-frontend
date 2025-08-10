// Purpose: Landing page after login. Shows welcome message, profile picture, groups, and logs.
// Events: useEffect
// Imports: NavHeader, ProfilePicture, NewGroupBtn, NewLogBtn
// Routes: GET /api/user/:id
// State: user

function HomeDashboard({ user }) {
  return (
    <div className="container">
      <h1> Welcome, {user.username}! </h1>
    </div>
  );
}

export default HomeDashboard;
