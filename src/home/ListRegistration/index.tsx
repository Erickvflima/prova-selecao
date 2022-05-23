// eslint-disable-next-line no-use-before-define
import React, { useEffect } from "react";
import { useAppDispatch } from "../../hooks";
import { clearStatusPersonData } from "../../store/ducks/PersonData";
import ListRegistration from "./ListView";

const ListData = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    return () => {
      dispatch(clearStatusPersonData());
    };
    // eslint-disable-next-line
  }, []);

  return <ListRegistration />;
};

export default ListData;
