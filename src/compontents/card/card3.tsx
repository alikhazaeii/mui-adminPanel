import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CompositionExample3 from './cardchart/cardchart3';



const card = (
  <React.Fragment>
    <CardContent >
      <Typography gutterBottom sx={{  color: 'text.secondary', fontSize: 20 }}>
      Event count 
      </Typography>
      <Typography variant="h5" component="div">
      200k
      </Typography>
      <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>last 30 Days</Typography>
    
    </CardContent>
    <CardActions>
      <CompositionExample3/>
    </CardActions>
  </React.Fragment>
);

export default function OutlinedCard3() {
  return (
    <Box sx={{ width:'full',textAlign:'center' }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}

