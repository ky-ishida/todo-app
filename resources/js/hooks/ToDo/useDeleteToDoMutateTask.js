import axios from "axios";
import { useMutation, useQueryClient } from "react-query";

const useDeleteToDoMutateTask = () => {
    const queryClient = useQueryClient();
    const deleteToDoMutation = useMutation(
        (todo) => axios.delete("/api/toDos/" + todo.id),
        {
            onSettled: () => {
                queryClient.invalidateQueries("toDoList");
            },
        }
    );
    return { deleteToDoMutation };
};

export default useDeleteToDoMutateTask;
