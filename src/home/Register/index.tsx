import React, { useEffect, useState } from "react";
import { useAppDispatch } from "../../hooks";
import {
  Grid,
  TextField,
  Button,
  CardContent,
  Typography,
  Card,
} from "@mui/material";
import useStyles from "../styles";
import { useFormik } from "formik";
import { personDataList, personDataPost } from "../../store/ducks/PersonData";
import { personDataInterface } from "../../interfaces/personData";
import validationSchema from "./validationSchema";
import { maskCel, maskDate } from "../../utils/mask";

interface Props {
  personDataParams?: personDataInterface["document"][0] | undefined;
  create?: boolean;
}

function Register({ personDataParams = undefined, create = true }: Props) {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const [personData, setPersonData] =
    useState<Partial<personDataInterface["document"][0] | undefined>>(
      personDataParams
    );

  useEffect(() => {
    if (personData) {
      dispatch(personDataList());
      setPersonData({
        ...personData,
        name: personData.name || "",
        telefone: maskCel(personData.telefone || ""),
      });
    }
  }, [personData]);
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: personData || {},
    validationSchema,
    onSubmit: async (values) => {
      dispatch(personDataPost(values));
    },
  });

  return (
    <Card variant="outlined">
      <CardContent>
        <form onSubmit={formik.handleSubmit}>
          <Grid container direction="column" alignItems="center" spacing={3}>
            <Grid item className={classes.textColorBlue}>
              <Typography variant="h5">CADASTRO</Typography>
            </Grid>
            <Grid item width="400px">
              <Grid container direction="column" alignItems="center">
                <Grid item className={classes.textFieldSize}>
                  <TextField
                    label="Nome completo"
                    id="name"
                    name="name"
                    variant="standard"
                    size="small"
                    required
                    fullWidth
                    value={formik.values?.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.name && Boolean(formik.errors.name)}
                    helperText={formik.touched.name && formik.errors.name}
                  />
                </Grid>
                <Grid item className={classes.textFieldSize}>
                  <TextField
                    label="Nascimento"
                    id="nascimento"
                    name="nascimento"
                    variant="standard"
                    size="small"
                    required
                    fullWidth
                    value={formik.values?.nascimento}
                    onChange={(
                      event: React.ChangeEvent<
                        HTMLTextAreaElement | HTMLInputElement
                      >
                    ) => {
                      formik.setFieldValue(
                        "nascimento",
                        maskDate(event.target.value)
                      );
                    }}
                    onBlur={formik.handleBlur}
                    error={
                      formik.touched.nascimento &&
                      Boolean(formik.errors.nascimento)
                    }
                    helperText={
                      formik.touched.nascimento && formik.errors.nascimento
                    }
                  />
                </Grid>
                <Grid item className={classes.textFieldSize}>
                  <TextField
                    id="telefone"
                    name="telefone"
                    label="Telefone"
                    required
                    variant="standard"
                    size="small"
                    fullWidth
                    inputProps={{ maxLength: 15 }}
                    value={formik.values?.telefone}
                    onChange={(
                      event: React.ChangeEvent<
                        HTMLTextAreaElement | HTMLInputElement
                      >
                    ) => {
                      formik.setFieldValue(
                        "telefone",
                        maskCel(event.target.value)
                      );
                    }}
                    onBlur={formik.handleBlur}
                    error={
                      formik.touched.telefone && Boolean(formik.errors.telefone)
                    }
                    helperText={
                      formik.touched.telefone && formik.errors.telefone
                    }
                  />
                </Grid>
                <Grid item className={classes.textFieldSize}>
                  <TextField
                    id="email"
                    name="email"
                    label="Email"
                    required
                    variant="standard"
                    size="small"
                    fullWidth
                    value={formik.values?.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid container direction="row" justifyContent="flex-end">
                <Grid item>
                  <Button
                    type="submit"
                    onClick={() => {
                      dispatch(personDataList());
                    }}
                    variant="contained"
                    color="secondary"
                  >
                    <h2 className={classes.textColorBlue}>CADASTRAR</h2>
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </form>
      </CardContent>
    </Card>
  );
}

export default Register;
