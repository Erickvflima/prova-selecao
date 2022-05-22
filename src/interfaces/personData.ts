export interface personDataInterface {
  status: string;
  message: string;
  document: {
    name: string;
    email: string;
    nascimento: string;
    telefone: string;
  }[];
}
