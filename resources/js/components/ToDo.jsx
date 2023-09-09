import {
    Card,
    CardHeader,
    CardContent,
    List,
    TextField,
    CardActions,
    IconButton,
} from "@mui/material";
import React, { useState } from "react";
import ToDoDetail from "./ToDoDetail";
import useUpdateToDoMutateTask from "../hooks/ToDo/useUpdateToDoMutateTask";
import { AddCircle, Delete } from "@mui/icons-material";
import { useDeleteToDoMutateTask } from "../hooks/ToDo";
import { useStoreToDoDetailMutateTask } from "../hooks/ToDoDetail";

function ToDo(props) {
    const [timer, setTimer] = useState(null);
    let toDo = {
        id: props.toDo.id,
        title: props.toDo.title,
    };
    //  タイトル変更イベント
    //
    const { updateToDoMutation } = useUpdateToDoMutateTask();
    const eventUpdateTodo = (event) => {
        clearTimeout(timer);
        const newTimer = setTimeout(() => {
            let data = {
                ...toDo,
                title: event.target.value,
            };

            updateToDoMutation.mutate(data, {
                onError: (error) => {
                    console.error("Error updating todo:", error);
                },
                onSuccess: (data) => {
                    console.log("Todo updated successfully:", data);
                },
            });
        }, 500);

        setTimer(newTimer);
    };
    // 削除イベント
    const { deleteToDoMutation } = useDeleteToDoMutateTask();
    const eventDeleteTodo = (event) => {
        deleteToDoMutation.mutate(toDo);
    };
    // 追加イベント
    const { storeToDoDetailMutation } = useStoreToDoDetailMutateTask();
    const eventStoreTodoDetail = (event) => {
        storeToDoDetailMutation.mutate(toDo);
    };

    return (
        <Card>
            <TextField
                variant="standard"
                margin="dense"
                defaultValue={props.toDo.title}
                fullWidth
                onChange={eventUpdateTodo}
                name="todoTitle"
            />

            <CardContent>
                <List>
                    {props.toDo.to_do_details.map((detail) => {
                        return <ToDoDetail key={detail.id} detail={detail} />;
                    })}
                </List>
            </CardContent>
            <CardActions>
                {/* 追加ボタン */}
                <IconButton
                    edge="start"
                    area-label="add"
                    color="primary"
                    onClick={eventStoreTodoDetail}
                >
                    <AddCircle />
                </IconButton>
                {/* 削除ボタン */}
                <IconButton
                    edge="end"
                    aria-label="delete"
                    onClick={eventDeleteTodo}
                >
                    <Delete />
                </IconButton>
            </CardActions>
        </Card>
    );
}

export default ToDo;
