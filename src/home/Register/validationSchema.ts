import * as Yup from "yup";
import { personDataInterface } from "../../interfaces/personData";

const validationSchema: Yup.SchemaOf<
  Partial<personDataInterface["document"][0]>
> = Yup.object({
  name: Yup.string()
    .matches(
      /[a-zzáàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ]\s+/g,
      "Por favor, insira um nome válido"
    )
    .max(255, "Quantidade de caracteres excedida")
    .required("Campo obrigatório")
    .trim(),
  nascimento: Yup.string()
    .typeError("Data inválida")
    .required("Campo obrigatório"),
  email: Yup.string()
    .email("Email inválido")
    .required("Campo obrigatório")
    .trim(),
  telefone: Yup.string()
    .min(15, "Celular inválido")
    .max(15, "Celular inválido")
    .trim(),
});

export default validationSchema;
