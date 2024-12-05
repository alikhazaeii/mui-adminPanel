import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Img from './../../../public/profit.jpg'
export default function ImageAvatars() {
  return (
    <Stack direction="row" spacing={2} sx={{}}>
      <Avatar sx={{objectFit:'cover',width:'100px',height:'100px',position:'absolute', bottom:0,right:50 }} alt="Cindy Baker" src={Img} />
    </Stack>
  );
}