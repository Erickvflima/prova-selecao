import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  Grid,
  TableContainer,
  TextField,
  TableHead,
  TableRow,
  Paper,
  Button,
} from "@mui/material";
import { useAppSelector } from "../../hooks";

import useStyles from "../styles";

function ListRegistration() {
  const classes = useStyles();
  const [listArray, setListArray] = useState<string[]>(["", "", "", ""]);

  const createData = (
    name: string,
    email: string,
    nascimento: string,
    telefone: string
  ) => {
    return { name, email, nascimento, telefone };
  };

  const personDataRedux = useAppSelector((state) => {
    return state.personData;
  });

  const rowsData = personDataRedux.personDataList;
  console.log(rowsData.document);
  useEffect(() => {
    if (typeof rowsData.document[0]?.name === "string") {
      const dataList = Object.values(rowsData.document[0]);
      setListArray(dataList);
    }
  }, [rowsData]);

  const rows = [
    createData(listArray[0], "as@gmail.com", "04/02/1995", "(31)98467-5300"),
    createData("Teste dois", "aswer@gmail.com", "01/02/1995", "(31)98467-5300"),
    createData("Teste tres", "aswer@gmail.com", "2/02/1995", "(31)98467-5300"),
    createData(
      "Teste quatro",
      "aqwwes@gmail.com",
      "14/02/1995",
      "(31)98467-5300"
    ),
  ];

  return (
    <Grid
      container
      justifyContent="center"
      direction="column"
      alignItems="center"
      marginBottom="40px"
    >
      <Grid item marginTop="40px">
        <h2 className={classes.textColorBlue}>LISTA DE CADASTRO</h2>
      </Grid>
      <Grid item margin="40px 0 10px 0">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead
              sx={{ "&:last-child td, &:last-child th": { border: 1 } }}
            >
              <TableRow
                sx={{ "td,  th": { border: 1, borderColor: "#29abe2" } }}
              >
                <TableCell align="right">Nome</TableCell>
                <TableCell align="right">Email</TableCell>
                <TableCell align="right">Nascimento</TableCell>
                <TableCell align="right">telefone</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "td,  th": { border: 1, borderColor: "#29abe2" } }}
                >
                  <TableCell align="right">{row.name}</TableCell>
                  <TableCell align="right">{row.email}</TableCell>
                  <TableCell align="right">{row.nascimento}</TableCell>
                  <TableCell align="right">{row.telefone}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
}

export default ListRegistration;
