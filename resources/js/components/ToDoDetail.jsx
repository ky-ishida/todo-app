import { Delete } from "@mui/icons-material";
import {
    ListItem,
    ListItemButton,
    Checkbox,
    IconButton,
    ListItemIcon,
    TextField,
} from "@mui/material";
import React, { useState } from "react";
import {
    useDeleteToDoDetailMutateTask,
    useUpdateToDoDetailMutateTask,
} from "../hooks/ToDoDetail";

function ToDoDetail(props) {
    const [timer, setTimer] = useState(null);

    let toDoDetail = {
        id: props.detail.id,
        name: props.detail.name,
        completed_flag: props.detail.completed_flag,
        to_do_id: props.detail.to_do_id,
    };

    const { updateToDoDetailMutation } = useUpdateToDoDetailMutateTask();

    // チェックボタンを押したときのイベント
    const eventCheckTodoDetail = (event) => {
        let data = {
            ...toDoDetail,
            completed_flag: event.target.checked,
        };
        updateToDoDetailMutation.mutate(data);
    };
    // TodoDetaillを更新した時のイベント
    const eventUpdateTodoDetail = (event) => {
        clearTimeout(timer);

        const newTimer = setTimeout(() => {
            let data = {
                ...toDoDetail,
                name: event.target.value,
            };
            updateToDoDetailMutation.mutate(data);
        }, 500);
        setTimer(newTimer);
    };

    // 削除ボタンを押したときのイベント
    const { deleteToDoDetailMutation } = useDeleteToDoDetailMutateTask();
    const eventDeleteToDoDetail = (event) => {
        deleteToDoDetailMutation.mutate(toDoDetail);
    };
    return (
        <ListItem
            key={props.detail.id}
            secondaryAction={
                <IconButton
                    edge="end"
                    aria-label="delete"
                    onClick={eventDeleteToDoDetail}
                >
                    <Delete />
                </IconButton>
            }
            disablePadding
        >
            <ListItemButton>
                <ListItemIcon>
                    <Checkbox
                        edge="start"
                        checked={props.detail.completed_flag}
                        onChange={eventCheckTodoDetail}
                    />
                </ListItemIcon>
                <TextField
                    variant="standard"
                    margin="dense"
                    defaultValue={props.detail.name}
                    fullWidth
                    onChange={eventUpdateTodoDetail}
                />
            </ListItemButton>
        </ListItem>
    );
}

export default ToDoDetail;
