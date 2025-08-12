import {
  List,
  ListItem,
  ListItemAvatar,
  Skeleton,
  ListItemText,
} from '@mui/material';

export default function SkeletonList() {
  return (
    <List>
      {[...Array(5)].map((_, index) => (
        <ListItem key={index} sx={{ px: 2, py: 1.5 }}>
          <ListItemAvatar>
            <Skeleton variant="circular" width={40} height={40} />
          </ListItemAvatar>
          <ListItemText
            primary={<Skeleton width="60%" />}
            secondary={<Skeleton width="40%" />}
          />
        </ListItem>
      ))}
    </List>
  );
}
