import { Fab, Grid } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom";
import ToDo from "../components/ToDo";
import { useGetToDoList, useCurrentToDoList } from "../hooks/ToDoList";
import { Add } from "@mui/icons-material";
import { useStoreToDoMutateTask } from "../hooks/ToDo";
import { useSearchResults } from "../hooks/ToDo";
// スタイル
const fabStyle = {
    position: "fixed",
    bottom: 16,
    right: 16,
};

function Home() {
    const { isLoading } = useGetToDoList();
    const toDoList = useCurrentToDoList();

    // Todo追加イベント
    const { storeToDoMutation } = useStoreToDoMutateTask();
    const eventStoreTodo = (event) => storeToDoMutation.mutate();
    // コンテンツが表示されるまでの処理
    if (isLoading) return "Now Loding.......";
    // 検索内容取得
    const { searchResults, isSearched, setIsSearched } = useSearchResults();
    // 検索状態をリセットする関数
    const handleResetSearch = () => {
        setIsSearched(false);
    };
    // 要素があるときとないときの処理
    let content;

    if (isSearched && searchResults.length > 0) {
        content = (
            // 検索結果の表示
            <Grid container spacing={2}>
                {searchResults.map((result) => (
                    <Grid item key={result.id} xs={12} sm={6} md={4} x1={3}>
                        <ToDo toDo={result} />
                    </Grid>
                ))}
            </Grid>
        );
    } else if (isSearched && searchResults.length === 0) {
        content = <p>検索結果が見つかりませんでした。</p>;
    } else if (!isSearched && toDoList.length > 0) {
        content = (
            // 通常のリスト表示
            <Grid container spacing={2}>
                {toDoList.map((toDo) => (
                    <Grid item key={toDo.id} xs={12} sm={6} md={4} x1={3}>
                        <ToDo toDo={toDo} />
                    </Grid>
                ))}
            </Grid>
        );
    } else {
        content = <p>リストを追加してください。</p>;
    }

    // 表示部分ーーーーーーーーーーーーーーーーーーーーーーーーーーーー
    return (
        <div>
            {/* 要素の中身 */}
            {content}
            {isSearched && (
                <button onClick={handleResetSearch}>検索結果をクリア</button>
            )}
            <Fab
                color="primary"
                aria-label="add"
                sx={fabStyle}
                onClick={eventStoreTodo}
            >
                <Add />
            </Fab>
        </div>
    );
}
export default Home;
