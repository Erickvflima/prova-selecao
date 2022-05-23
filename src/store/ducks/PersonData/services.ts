/* eslint-disable import/prefer-default-export */
import api from "../../../service";
import {
  personDataInterface,
  postPersonDataPost,
} from "../../../interfaces/personData";

export const getPersonData = async (): Promise<personDataInterface> => {
  const response = await api.get<personDataInterface>("/");
  return response.data;
};
export const postPersonData = async (
  payload: postPersonDataPost
): Promise<personDataInterface> => {
  const response = await api.post<personDataInterface>("/", payload);
  return response.data;
};
