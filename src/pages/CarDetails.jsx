// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Container from "@mui/material/Container";
// import Typography from "@mui/material/Typography";
// import Button from "@mui/material/Button";
// import { useParams } from "react-router-dom";
// import ReviewSection from "../components/ReviewSection";

// function CarDetails() {
//   const { id } = useParams();
//   const [car, setCar] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     axios.get(`http://localhost:4000/api/cars/${id}`)
//       .then(res => { setCar(res.data); setLoading(false); })
//       .catch(() => setLoading(false));
//   }, [id]);

//   if (loading) return <div>Loading...</div>;
//   if (!car) return <div>Car not found.</div>;

//   return (
//     <Container sx={{ mt: 4 }}>
//       <Typography variant="h4">{car.brand} {car.model}</Typography>
//       <img src={car.image} alt={car.model} style={{ maxWidth: "100%", marginTop: 12 }} />
//       <Typography variant="h6" sx={{ mt: 2 }}>₹{car.price} &nbsp;|&nbsp; {car.year} &nbsp;|&nbsp; {car.fuel} &nbsp;|&nbsp; {car.transmission}</Typography>
//       <Typography variant="body1" sx={{ mt: 2 }}>
//         {car.forSale ? "Available For Sale" : ""}
//         {car.forRent ? "Available For Rent" : ""}
//       </Typography>
//       <Button sx={{ mt: 2, mr: 1 }} variant="contained" color="primary">Favorite</Button>
//       {car.forRent &&
//         <Button sx={{ mt: 2, mr: 1 }} variant="outlined" color="secondary">Rent</Button>
//       }

//       <hr />
//       <ReviewSection carId={car.id} />
//     </Container>
//   );
// }

// export default CarDetails;
