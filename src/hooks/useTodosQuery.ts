import {useQuery} from "@tanstack/react-query";
import {fetchTodos} from "../services/todos";
import {TodoState} from "../types/todos";

const UseTodosQuery = (state: TodoState) => {

    return useQuery({
        queryFn: () => fetchTodos(state),
        queryKey: ['todos', state],
        staleTime: 1000 * 5,
    });
}

export { UseTodosQuery };