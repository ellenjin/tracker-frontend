import { Button } from '@mui/material';

function NewLogBtn({
  isVisible,
  onClick,
  showText = 'Create a New Log!',
  hideText = 'Hide New Log Form',
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

export default NewLogBtn;
