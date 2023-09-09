import { useQueryClient } from "react-query";

const useCurrentToDoList = () => {
    const queryClient = useQueryClient();
    const data = queryClient.getQueryData("toDoList") || [];
    return data;
};

export default useCurrentToDoList;

