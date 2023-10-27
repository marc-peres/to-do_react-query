import {useMutation, useQueryClient} from "@tanstack/react-query";
import {createTodo} from "../services/todos";
import {Todo} from "../types/todos";

const UseCreateTodo = () => {
    const client = useQueryClient();
    return useMutation({
        mutationFn: createTodo,
        onSuccess: (newTodo) => {
            client.setQueryData<Todo[]>(['todos', 'all'], (oldTodos) => [...(oldTodos || []), newTodo]);
            client.invalidateQueries({
                queryKey: ['todos', 'all'],
                refetchType: "none",
            })
        },
    });
}

export { UseCreateTodo };