/* eslint-disable react/react-in-jsx-scope  */
import { MUIDataTableColumn } from "mui-datatables";
import { personDataInterface } from "../../interfaces/personData";

const getColumns = (
  persondataListList?: personDataInterface
): MUIDataTableColumn[] => {
  const colunsData: MUIDataTableColumn[] = [
    {
      name: "name",
      label: "nome",
    },
    {
      name: "email",
      label: "EMAIL",
    },
    { name: "nascimento", label: "Nascimento" },
    { name: "telefone", label: "Telefone" },
  ];
  return colunsData;
};

export default getColumns;
