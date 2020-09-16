import React from "react";
import { useForm } from "react-hook-form";
import { NewRecipe } from "general/types";
import TextField from "@material-ui/core/TextField/TextField";
import Typography from "@material-ui/core/Typography/Typography";
import InputAdornment from "@material-ui/core/InputAdornment";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";

interface Props {}

const Form: React.FC<Props> = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = (data: Partial<NewRecipe>) => console.log(data);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Container>
                <Box>
                    <TextField
                        inputRef={register}
                        label="Název receptu"
                        name="name"
                    />
                </Box>
                <Box>
                    <TextField
                        inputRef={register}
                        label="Úvodní text"
                        name="info"
                    />
                </Box>
                <Box>
                    <Typography variant="h5">Ingredience</Typography>

                    <TextField
                        inputRef={register}
                        label="Vaše ingredience"
                        name="ingredients[]"
                    />
                </Box>
                <Box>
                    <TextField
                        inputRef={register}
                        label="Instrukce"
                        name="description"
                    />
                </Box>
                <Box>
                    <TextField
                        inputRef={register}
                        label="Čas"
                        name="duration"
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    min.
                                </InputAdornment>
                            )
                        }}
                    />
                </Box>
            </Container>
        </form>
    );
};

export default Form;
