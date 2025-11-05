import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import CarCard from './CarCard';
import axios from 'axios';

function CarList({ search, minPrice, maxPrice, fuel, transmission }) {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:4000/api/cars')
      .then(res => {
        setCars(res.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);
  if (loading) return <div>Loading...</div>;

  let filtered = cars.filter(car =>
    car.brand.toLowerCase().includes(search.toLowerCase()) &&
    car.price >= minPrice && car.price <= maxPrice &&
    (fuel ? car.fuel === fuel : true) &&
    (transmission ? car.transmission === transmission : true)
  );
  return (
    <Grid container spacing={2}>
      {filtered.map(car =>
        <Grid item xs={12} sm={6} md={4} key={car.id}>
          <CarCard car={car} />
        </Grid>
      )}
    </Grid>
  );
}
export default CarList;
