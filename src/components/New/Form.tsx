import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import TextField from "@material-ui/core/TextField/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button/Button";
import Box from "@material-ui/core/Box";
import AddIcon from "@material-ui/icons/Add";
import { yupResolver } from "@hookform/resolvers";
import { useDispatch, useSelector } from "react-redux";

import schema from "./schema";
import { submitRecipeRequest } from "actions/form";
import { State } from "reducers";
import { StyledHeading } from "./styled";

interface Props {}

const Form: React.FC<Props> = () => {
    const { register, handleSubmit, reset, errors } = useForm({
        resolver: yupResolver(schema),
    });
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
                        helperText={errors.name?.message}
                        error={errors.name?.message}
                        fullWidth
                    />
                </Box>
                <Box mt={2}>
                    <TextField
                        inputRef={register}
                        label="Úvodní text"
                        name="info"
                        helperText={errors.info?.message}
                        error={errors.info?.message}
                        fullWidth
                    />
                </Box>
                <Box mt={4.5}>
                    <StyledHeading variant="h5">Ingredience</StyledHeading>

                    {[...Array(ingredientsCount).keys()].map((key) => (
                        <Box mt={1} key={key}>
                            <TextField
                                inputRef={register}
                                label="Vaše ingredience"
                                name={`ingredients[${key}]`}
                                helperText={
                                    errors.ingredients &&
                                    errors.ingredients[key].message
                                }
                                error={
                                    errors.ingredients &&
                                    errors.ingredients[key].message
                                }
                                fullWidth
                            />
                        </Box>
                    ))}

                    <Box mt={1.5}>
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
                <Box mt={5.5}>
                    <TextField
                        inputRef={register}
                        label="Instrukce"
                        name="description"
                        helperText={errors.description?.message}
                        error={errors.description?.message}
                        fullWidth
                    />
                </Box>
                <Box mt={4.5}>
                    <TextField
                        inputRef={register}
                        label="Čas"
                        name="duration"
                        helperText={errors.duration?.message}
                        error={errors.duration?.message}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    min.
                                </InputAdornment>
                            ),
                        }}
                    />
                </Box>
            </Container>
        </form>
    );
};

export default Form;
