import * as yup from "yup";

export const validationSchema = yup.object().shape({
    name: yup.string().required(),
    number: yup.number().required(),
    address: yup.string().required(),
})