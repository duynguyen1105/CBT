import {
  Box,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@material-ui/core";
import ButtonAction from "components/ButtonAction";
import Buttons from "components/Buttons";
import IconSort from "components/IconSort";
import images from "config/images";
import { FC } from "react";
import useStyle from "./styles";
import clsx from "clsx";

const Member: FC = () => {
  const classes = useStyle();
  return (
    <Grid container className={classes.container}>
      <Grid item md={6}>
        <Typography className={classes.title}>Teacher</Typography>
        <Box className={clsx(classes.tableWrap, classes.tableBorder)}>
          <TableContainer className={classes.tableContainer}>
            <Table className={classes.table}>
              <TableHead>
                <TableRow>
                  <TableCell>
                    ID
                    <IconSort
                    // typeSort={checkIconSort(option.key)}
                    // onClick={handleChangeSort(option.key)}
                    />
                  </TableCell>
                  <TableCell>
                    FullName
                    <IconSort
                    // typeSort={checkIconSort(option.key)}
                    // onClick={handleChangeSort(option.key)}
                    />
                  </TableCell>
                  <TableCell>
                    Email
                    <IconSort
                    // typeSort={checkIconSort(option.key)}
                    // onClick={handleChangeSort(option.key)}
                    />
                  </TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                <TableRow>
                  <TableCell>CB15-090</TableCell>
                  <TableCell>Multiple Selection</TableCell>
                  <TableCell>timothy@gmail.com</TableCell>
                  <TableCell>
                    <ButtonAction
                      btnType="delete"
                      onClick={() => console.log("")}
                      className={classes.btnDelete}
                    />
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
          <Buttons
            className={classes.btnAdd}
            children="Add"
            icon={images.CBTicPlusCircle}
            onClick={() => {}}
            placementIcon
          />
        </Box>
      </Grid>

      <Grid item md={6}>
        <Typography className={classes.title}>Student</Typography>
        <Box className={classes.tableWrap}>
          <TableContainer className={classes.tableContainer}>
            <Table className={classes.table}>
              <TableHead>
                <TableRow>
                  <TableCell>
                    ID
                    <IconSort
                    // typeSort={checkIconSort(option.key)}
                    // onClick={handleChangeSort(option.key)}
                    />
                  </TableCell>
                  <TableCell>
                    FullName
                    <IconSort
                    // typeSort={checkIconSort(option.key)}
                    // onClick={handleChangeSort(option.key)}
                    />
                  </TableCell>
                  <TableCell>
                    Email
                    <IconSort
                    // typeSort={checkIconSort(option.key)}
                    // onClick={handleChangeSort(option.key)}
                    />
                  </TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                <TableRow>
                  <TableCell>CB15-090</TableCell>
                  <TableCell>Multiple Selection</TableCell>
                  <TableCell>timothy@gmail.com</TableCell>
                  <TableCell>
                    <ButtonAction
                      btnType="delete"
                      onClick={() => console.log("")}
                      className={classes.btnDelete}
                    />
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
          <Buttons
            className={classes.btnAdd}
            children="Add"
            icon={images.CBTicPlusCircle}
            onClick={() => {}}
            placementIcon
          />
        </Box>
      </Grid>
    </Grid>
  );
};

export default Member;
