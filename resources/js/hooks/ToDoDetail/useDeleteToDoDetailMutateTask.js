import axios from "axios";
import { useMutation, useQueryClient } from "react-query";

const useDeleteToDoDetailMutateTask = () => {
    const queryClient = useQueryClient();
    const deleteToDoDetailMutation = useMutation(
        (toDoDetail) => axios.delete("/api/toDoDetails/" + toDoDetail.id),
        {
            onMutate: async (toDoDetail) => {
                //  実行中の取得処理をキャンセル
                await queryClient.cancelQueries("toDoList");
                // 既存のTODOリストを取得する
                const previousToDoList = queryClient.getQueriesData("toDoList");
                // TODOリストのキャッシュを更新する
                queryClient.setQueryData("toDoList", (oldToDoList) =>
                    oldToDoList.map((oldToDo) => {
                        let newToDoDetails = [];
                        oldToDo.to_do_details.map((oldToDoDetail) => {
                            if (oldToDoDetail.id != toDoDetail.id) {
                                newToDoDetails.push(oldToDoDetail);
                            }
                        });
                        oldToDo.to_do_details = newToDoDetails;
                        return oldToDo;
                    })
                );
                // 削除に失敗した場合既存のTodoリストを返却する
                return { previousToDoList };
            },
            onSettled: () => {
                queryClient.invalidateQueries("toDoList");
            },
        }
    );
    return { deleteToDoDetailMutation };
};

export default useDeleteToDoDetailMutateTask;
