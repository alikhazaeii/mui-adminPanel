import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import ChartsOverviewDemo from '../chart/chart';
import GridDemo from '../chart/chart2';
import BasicSparkLineCustomization from '../chart/spackline';
import OutlinedCard from '../card/card';
import OutlinedCard2 from '../card/cars2';
import OutlinedCard3 from '../card/card3';
import StickyHeadTable from '../table/table';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

export default function RowAndColumnSpacing() {
  return (
    <Box sx={{ width: '100%', overflow: 'hidden'  }}>
      <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 1 }}>
        <Grid item xs={12} sm={8} md={4} lg={4}>
          <Item>
            <OutlinedCard />
          </Item>
        </Grid>
        <Grid item xs={12} sm={8} md={4} lg={4}>
          <Item>
            <OutlinedCard2 />
          </Item>
        </Grid>
        <Grid item xs={12} sm={8} md={4} lg={4}>
          <Item>
            <OutlinedCard3 />
          </Item>
        </Grid>

        <Grid item sx={{overflow:'hidden'}} xs={12} sm={8} lg={6}>
          <Item>
            <ChartsOverviewDemo />
          </Item>
        </Grid>
        <Grid item sx={{overflow:'hidden'}} xs={12} sm={8} lg={6}>
          <Item>
            <GridDemo />
          </Item>
        </Grid>
        <Grid item xs={12} sm={8} lg={6}>
          <Item>
            <BasicSparkLineCustomization />
          </Item>
        </Grid>
        <Grid item xs={12}>
          <Item>
            <StickyHeadTable/>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}