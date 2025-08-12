// Purpose: Opens new group creation form.
// Events: onClick -> open modal or render below welcome message.
// Imports: none.
// Routes: none.

import { Button } from '@mui/material';

function NewGroupBtn({
  isVisible,
  onClick,
  showText = 'Create a New Group!',
  hideText = 'Hide New Group Form',
}) {
  return (
    <Button
      variant={isVisible ? 'outlined' : 'contained'}
      color="primary"
      onClick={onClick}
      sx={{
        mt: 2,
        mb: 2,
        width: { xs: '100%', sm: 'auto' },
      }}
    >
      {isVisible ? hideText : showText}
    </Button>
  );
}

export default NewGroupBtn;
