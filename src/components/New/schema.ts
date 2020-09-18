import yup from "general/yup";

const { object, string, number } = yup;

let schema = object().shape({
    name: string()
        .matches(/(ackee)/i)
        .required(),
    info: string().required(),
    duration: number().required(),
    description: string().required(),
});

export default schema;
