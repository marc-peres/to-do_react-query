import { Button, Input, Stack } from '@chakra-ui/react';
import { useState } from 'react';
import {UseCreateTodo} from "../hooks/useCreateTodo";

const NewTodo = () => {
    const [title, setTitle] = useState('');
    const { mutate: create } = UseCreateTodo();

    const submit: React.FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();
        if (title) {
            create(title);
            setTitle('');
        }
    };

    return (
        <form onSubmit={submit}>
            <Stack direction="row">
                <Input
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                    placeholder="new todo..."
                />
                <Button type="submit">Add</Button>
            </Stack>
        </form>
    );
};

export { NewTodo };