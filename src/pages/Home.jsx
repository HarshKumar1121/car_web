import React, { useState } from 'react';
import CarList from '../components/CarList';
import SearchFilter from '../components/SearchFilter';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

function Home() {
  const [search, setSearch] = useState('');
  const [minPrice, setMinPrice] = useState(100000);
  const [maxPrice, setMaxPrice] = useState(1000000);
  const [fuel, setFuel] = useState('');
  const [transmission, setTransmission] = useState('');

  return (
    <Container>
      <Typography variant="h3" gutterBottom>Buy or Rent Your Dream Car</Typography>
      <SearchFilter search={search} setSearch={setSearch}
        minPrice={minPrice} setMinPrice={setMinPrice}
        maxPrice={maxPrice} setMaxPrice={setMaxPrice}
        fuel={fuel} setFuel={setFuel} transmission={transmission} setTransmission={setTransmission} />
      <CarList search={search} minPrice={minPrice} maxPrice={maxPrice}
        fuel={fuel} transmission={transmission} />
    </Container>
  );
}
export default Home;
