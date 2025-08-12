import {
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  IconButton,
  Typography,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { format } from 'date-fns';

export default function LogListItem({ log, onDelete, onClick }) {
  const formattedDate = format(new Date(log.timeStamp), 'MM/dd/yyyy');

  return (
    <ListItem
      secondaryAction={
        <IconButton
          edge="end"
          aria-label="delete"
          onClick={(e) => {
            e.stopPropagation();
            onDelete(log.logId);
          }}
        >
          <DeleteIcon />
        </IconButton>
      }
      button
      onClick={() => onClick(log.logId)}
      sx={{ px: 2, py: 1.5 }}
    >
      <ListItemAvatar>
        <Avatar>{log.title[0].toUpperCase()}</Avatar>
      </ListItemAvatar>

      <ListItemText
        primary={
          <>
            <Typography variant="subtitle1" fontWeight="bold">
              {log.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Group: {log.group?.name || 'No group'} — Score: {log.score}
            </Typography>
          </>
        }
        secondary={
          <Typography variant="caption" color="text.secondary">
            {formattedDate}
          </Typography>
        }
      />
    </ListItem>
  );
}
