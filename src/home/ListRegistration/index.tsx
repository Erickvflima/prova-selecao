import React, { useEffect, useMemo, useState } from "react";
import MUIDataTable, {
  MUIDataTableColumn,
  MUIDataTableOptions,
} from "mui-datatables";
import { textLabels } from "../../utils/dataTable";
import { useAppSelector } from "../../hooks";
import getColumns from "./columnsData";

import useStyles from "../styles";
import { Grid } from "@mui/material";

function ListRegistration() {
  const classes = useStyles();
  const [listArray, setListArray] = useState<string[]>(["", "", "", ""]);

  const createData = (array: string[]) => {
    const name = array[0];
    const email = array[1];
    const nascimento = array[2];
    const telefone = array[3];
    return { name, email, nascimento, telefone };
  };

  const {
    personDataList: personDataListStore,
    status: statusStore,
    type,
  } = useAppSelector((state) => {
    return state.personData;
  });

  // const personDataRedux = useAppSelector((state) => {
  //   return state.personData;
  // });
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
  // console.log(rowsData.document);
  // useEffect(() => {
  //   if (typeof rowsData.document[0]?.name === "string") {
  //     console.log(rowsData.document.length);
  //     for (let i: number = 0; i < rowsData.document.length; i++) {
  //       let dataList: string[] = [];
  //       const objectValues = Object.values(rowsData.document[i]).toString();
  //       console.log(objectValues);
  //       dataList.push(Object.values(rowsData.document[i]).toString());
  //       setListArray(dataList);
  //     }
  //   }
  // }, [rowsData]);

  // const rows = [
  // createData(listArray),
  // createData("Teste dois", "aswer@gmail.com", "01/02/1995", "(31)98467-5300"),
  // createData("Teste tres", "aswer@gmail.com", "2/02/1995", "(31)98467-5300"),
  // createData(
  //   "Teste quatro",
  //   "aqwwes@gmail.com",
  //   "14/02/1995",
  //   "(31)98467-5300"
  // ),
  // ];

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
        <MUIDataTable
          columns={columns}
          data={personDataListStore.document}
          options={options}
          title={undefined}
        />
      </Grid>
    </Grid>
  );
}

export default ListRegistration;
