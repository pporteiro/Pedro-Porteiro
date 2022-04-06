import Item from "../Item/Item";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const ItemList = ({ products }) => {
  const useStyles = makeStyles({
    gridContainer: {
      paddingLeft: "20px",
      paddingRight: "20px",
    },
  });

  const classes = useStyles();

  return (
    <Grid
      container
      spacing={4}
      className={classes.gridContainer}
      justifyContent="center"
    >
      {products.map((prod) => (
        <Item key={prod.id} {...prod} />
      ))}
    </Grid>
  );
};

export default ItemList;
