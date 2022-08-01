
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {  CardActionArea, CardActions } from '@mui/material';

export  function MultiActionAreaCard(props) {
const urlDirect = (urlPath) => {
  window.open(urlPath, "_blank")
}
  return (
    <Card sx={{ maxWidth: 250 }} >
      <CardActionArea onClick={() => { 
        urlDirect(props.urlPath)
         }}>
        <CardMedia
          component="img"
      
          image="https://www.influxdata.com/wp-content/uploads/GitHub-logo.jpg"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {props.desc}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      </CardActions>
    </Card>
  );
}
