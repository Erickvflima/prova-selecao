import React, { useMemo } from "react";
import MUIDataTable, {
  MUIDataTableColumn,
  MUIDataTableOptions,
} from "mui-datatables";
import { useAppSelector } from "../../hooks";
import getColumns from "./columnsData";
import theme from "../../styles";

import useStyles from "../styles";
import { Grid, ThemeProvider } from "@mui/material";

function ListRegistration() {
  const classes = useStyles();

  const { personDataList: personDataListStore } = useAppSelector((state) => {
    return state.personData;
  });

  const columns: MUIDataTableColumn[] = useMemo(() => {
    return getColumns(personDataListStore);
  }, [personDataListStore]);

  const options: MUIDataTableOptions = {
    download: false,
    filter: false,
    search: false,
    print: false,
    selectableRows: "none",
    viewColumns: false,
  };

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
        <ThemeProvider theme={theme}>
          <MUIDataTable
            columns={columns}
            data={personDataListStore.document}
            options={options}
            title={undefined}
          />
        </ThemeProvider>
      </Grid>
    </Grid>
  );
}

export default ListRegistration;
