import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

function CarCard({ car }) {
  return (
    <Card sx={{ maxWidth: 345, m: 2 }}>
      <CardMedia component="img" height="140" image={car.image} alt={car.model} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {car.brand} {car.model}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          ₹{car.price} | {car.year} | {car.fuel} | {car.transmission}
        </Typography>
        {car.forSale && <Typography variant="body2" color="primary">For Sale</Typography>}
        {car.forRent && <Typography variant="body2" color="secondary">For Rent</Typography>}
      </CardContent>
      <CardActions>
        <Button component={Link} to={`/car/${car.id}`}>Details</Button>
        {car.forRent && <Button variant="outlined">Rent</Button>}
        <Button>Favorite</Button>
      </CardActions>
    </Card>
  );
}
export default CarCard;
