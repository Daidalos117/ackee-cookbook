import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import TextField from "@material-ui/core/TextField/TextField";
import Typography from "@material-ui/core/Typography/Typography";
import InputAdornment from "@material-ui/core/InputAdornment";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button/Button";
import Box from "@material-ui/core/Box";
import AddIcon from "@material-ui/icons/Add";

import { useDispatch, useSelector } from "react-redux";

import { submitRecipeRequest } from "actions/form";
import { State } from "../../reducers";

interface Props {}

const Form: React.FC<Props> = () => {
    const { register, handleSubmit, reset } = useForm();
    const [ingredientsCount, setIngredientsCount] = useState<number>(1);
    const dispatch = useDispatch();
    const success = useSelector((state: State) => state.form.recipe.success);
    const onSubmit = (data: any) => {
        dispatch(submitRecipeRequest(data));
    };

    useEffect(() => {
        if (success) {
            reset({});
        }
    }, [success, reset]);

    return (
        <form onSubmit={handleSubmit(onSubmit)} id="saveForm">
            <Container>
                <Box mt={2}>
                    <TextField
                        inputRef={register}
                        label="Název receptu"
                        name="name"
                        fullWidth
                    />
                </Box>
                <Box mt={2}>
                    <TextField
                        inputRef={register}
                        label="Úvodní text"
                        name="info"
                        fullWidth
                    />
                </Box>
                <Box mt={4}>
                    <Typography variant="h5">Ingredience</Typography>

                    {[...Array(ingredientsCount).keys()].map(key => (
                        <Box mt={1} key={key}>
                            <TextField
                                inputRef={register}
                                label="Vaše ingredience"
                                name={`ingredients[${key}]`}
                                fullWidth
                            />
                        </Box>
                    ))}

                    <Box mt={1}>
                        <Button
                            color="secondary"
                            variant="outlined"
                            size="small"
                            onClick={() =>
                                setIngredientsCount(ingredientsCount + 1)
                            }
                        >
                            <AddIcon />
                            PŘIDAT
                        </Button>
                    </Box>
                </Box>
                <Box mt={2}>
                    <TextField
                        inputRef={register}
                        label="Instrukce"
                        name="description"
                        fullWidth
                    />
                </Box>
                <Box mt={2}>
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
