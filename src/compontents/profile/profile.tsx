import * as React from 'react';
import Box from '@mui/material/Box';
import Backdrop from '@mui/material/Backdrop';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import ShareIcon from '@mui/icons-material/Share';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import ImageAvatars from './avatar';
const actions = [
  { icon: <InstagramIcon />, name: 'instagram' },
  { icon: <GitHubIcon />, name: 'github' },
  { icon: <LinkedInIcon />, name: 'Linkedin' },
  { icon: <ShareIcon />, name: 'share' },
];

export default function SpeedDialTooltipOpen() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box sx={{transform: 'translateZ(0px)', flexGrow: 1, }}>
      <Backdrop open={open} />
      <SpeedDial 
        ariaLabel="SpeedDial tooltip example"
        sx={{ position: 'absolute', bottom: 50, right: 50 }}
        icon={<SpeedDialIcon />}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}

      >
        <ImageAvatars/>
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            tooltipOpen
            onClick={handleClose}
          />
        ))}
      </SpeedDial>
    </Box>
  );
}

