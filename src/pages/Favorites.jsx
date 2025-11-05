import React, { useEffect, useState } from "react";
import axios from "axios";
import Grid from "@mui/material/Grid";
import CarCard from "../components/CarCard";

function Favorites() {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios.get("http://localhost:4000/api/my-favorites", {
      headers: { Authorization: token }
    }).then(res => {
      setCars(res.data);
      setLoading(false);
    }).catch(() => setLoading(false));
  }, []);

  if (loading) return <div>Loading your favorites...</div>;
  if (cars.length === 0) return <div>No favorite cars yet!</div>;

  return (
    <Grid container spacing={2}>
      {cars.map(car =>
        <Grid item xs={12} sm={6} md={4} key={car.id}>
          <CarCard car={car} />
        </Grid>
      )}
    </Grid>
  );
}
export default Favorites;
