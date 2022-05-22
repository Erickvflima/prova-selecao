/* eslint-disable import/prefer-default-export */
import api from "../../../service";
import { personDataInterface } from "../../../interfaces/personData";

export const getPersonData = async (): Promise<personDataInterface> => {
  const response = await api.get<personDataInterface>("/");
  return response.data;
};
