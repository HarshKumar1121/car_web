import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Button from "@mui/material/Button";
import axios from "axios";

function AdminDashboard() {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios.get("http://localhost:4000/api/my-cars", {
      headers: { Authorization: token }
    }).then(res => {
      setCars(res.data);
      setLoading(false);
    }).catch(() => setLoading(false));
  }, []);

  const handleDelete = (id) => {
    const token = localStorage.getItem("token");
    axios.delete(`http://localhost:4000/api/cars/${id}`, {
      headers: { Authorization: token }
    }).then(() => {
      setCars(prev => prev.filter(car => car.id !== id));
    });
  };

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "brand", headerName: "Brand", width: 130 },
    { field: "model", headerName: "Model", width: 130 },
    { field: "price", headerName: "Price", type: "number", width: 90 },
    { field: "forSale", headerName: "For Sale", type: "boolean", width: 100 },
    { field: "forRent", headerName: "For Rent", type: "boolean", width: 100 },
    {
      field: "edit",
      headerName: "Edit",
      width: 80,
      renderCell: (params) => (
        <Button size="small" variant="contained" color="primary"
          onClick={() => alert("Edit functionality here!")}>
          Edit
        </Button>
      )
    },
    {
      field: "delete",
      headerName: "Delete",
      width: 90,
      renderCell: (params) => (
        <Button size="small" variant="contained" color="error"
          onClick={() => handleDelete(params.row.id)}>
          Delete
        </Button>
      )
    }
  ];

  if (loading) return <div>Loading your car listings...</div>;
  return (
    <div style={{ height: 480, width: "100%" }}>
      <h2>Your Car Listings</h2>
      <DataGrid rows={cars} columns={columns} pageSize={5} />
    </div>
  );
}

export default AdminDashboard;
