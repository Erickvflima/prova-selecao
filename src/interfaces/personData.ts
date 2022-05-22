export interface personDataInterface {
  status: string;
  message: string;
  document: {
    name: number;
    email: string;
    nascimento: string;
    telefone: string;
  }[];
}
