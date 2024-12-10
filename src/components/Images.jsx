import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./Images.css";
import { Grid2 } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
//import dados from "../dados.json";

const Images = ({ products }) => {

  return (
    <Grid2 container spacing={{ xs: 2, md: 3 }} className="image-list" columns={{ xs: 4, sm: 8, md: 12 }} rowSpacing={2} justifyContent={"center"}>
      {products.map((product) => (
        <Grid2
          item
          xs={2}
          sm={4}
          md={4}
          key={product.id}
          className="image-item"
        >
          <Card className="card" sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="240"
              image={product.img}
              alt={product.productName}
              style={{ objectFit: 'cover' }}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {product.productName}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {product.description}
              </Typography>
            </CardContent>
          </Card>
        </Grid2>
      ))}
    </Grid2>
  );
};

export default Images;
