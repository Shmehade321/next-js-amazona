import { useRouter } from "next/dist/client/router";
import React from "react";
import Layout from "../../components/Layout";
import data from "../../utils/data";
import NextLink from "next/link";
import Image from "next/image";
import { Button, Card, Grid, List, ListItem, Typography } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import useStyles from "../../utils/styles";

const ProductScreen = () => {
  const classes = useStyles();
  const router = useRouter();
  const { slug } = router.query;
  const product = data.products.find((p) => p.slug === slug);
  if (!product) {
    return <div>Product Not Found</div>;
  }
  return (
    <Layout title={product.name} description={product.description}>
      <div className={classes.section}>
        <NextLink href="/" passHref>
          <Button variant="outlined">
            <ArrowBackIosNewIcon fontSize="small" /> Back To Products
          </Button>
        </NextLink>
      </div>
      <Grid container spacing={1}>
        <Grid item md={6} xs={12}>
          <Image
            src={product.image}
            alt={product.name}
            width={640}
            height={640}
            layout="responsive"
          />
        </Grid>
        <Grid item md={3} xs={12}>
          <List>
            <ListItem>
              <Typography component="h1" variant="h1">{product.name}</Typography>
            </ListItem>
            <ListItem>
              <Typography>Category: {product.category}</Typography>
            </ListItem>
            <ListItem>
              <Typography>Brand: {product.brand}</Typography>
            </ListItem>
            <ListItem>
              <Typography>
                Rating: {product.rating} stars ({product.numReviews} reviews)
              </Typography>
            </ListItem>
            <ListItem>
              <Typography>Description: {product.description}</Typography>
            </ListItem>
          </List>
        </Grid>
        <Grid item md={3} xs={12}>
          <Card>
            <List>
              <ListItem>
                <Grid container>
                  <Grid item xs={6}>
                    <Typography>Price</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography>${product.price}</Typography>
                  </Grid>
                </Grid>
              </ListItem>
              <ListItem>
                <Grid container>
                  <Grid item xs={6}>
                    <Typography>Status</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography>
                      {product.countInStock > 0 ? "In Stock" : "Unavailable"}
                    </Typography>
                  </Grid>
                </Grid>
              </ListItem>
              <ListItem>
                <Button fullWidth variant="contained" color="primary">
                  <AddShoppingCartIcon fontSize="small" /> Add To Cart
                </Button>
              </ListItem>
            </List>
          </Card>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default ProductScreen;
