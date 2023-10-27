import { List, Spinner } from '@chakra-ui/react';
import { TodoState } from "../types/todos";
import { TodoItem } from "./TodoItem";
import {UseTodosQuery} from "../hooks/useTodosQuery";

type TodoListProps = {
    state: TodoState;
};

const TodoList = ({ state }: TodoListProps) => {
    const {isLoading, data, isSuccess} = UseTodosQuery(state);

    if (isLoading)
        return (
            <Spinner
                thickness="4px"
                speed="0.65s"
                emptyColor="gray.200"
                color="blue.500"
                size="xl"
            />
        );

    return (
        <List>
            {isSuccess && data.map((todo) => <TodoItem key={todo.id} {...todo} />)}
        </List>
    );
};

export { TodoList };