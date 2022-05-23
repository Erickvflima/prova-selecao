/* eslint-disable import/prefer-default-export */
import { MUIDataTableOptions } from "mui-datatables";

export const textLabels: MUIDataTableOptions["textLabels"] = {
  toolbar: {
    search: "Pesquisar",
    downloadCsv: "Download CSV",
    print: "Imprimir Tabela",
    viewColumns: "Visualizar Colunas",
    filterTable: "Filtrar tabela",
  },
  body: {
    noMatch: "Registro(s) não encontrado(s)",
    toolTip: "Ordenar",
  },
  pagination: {
    next: "Próxima página",
    previous: "Página Anterior",
    displayRows: "por",
    rowsPerPage: "Linhas por página",
  },
};
