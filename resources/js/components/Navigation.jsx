import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import React, { useState } from "react";
import axios from "axios";
import { useSearchResults } from "../hooks/ToDo/useSearchResults";

// // Searchコンポーネントのカスタム部分
// const Search = styled("div")(({ theme }) => ({
//     position: "relative",
//     borderRadius: theme.shape.borderRadius,
//     backgroundColor: alpha(theme.palette.common.white, 0.15),
//     "&:hover": {
//         backgroundColor: alpha(theme.palette.common.white, 0.25),
//     },
//     marginLeft: 0,
//     width: "100%",
//     [theme.breakpoints.up("sm")]: {
//         marginLeft: theme.spacing(1),
//         width: "auto",
//     },
// }));
// // 虫眼鏡部分のカスタム
// const SearchIconWrapper = styled("button")(({ theme }) => ({
//     padding: theme.spacing(0, 2),
//     height: "100%",
//     position: "absolute",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     zIndex: 1,
//     // ボタンのスタイル
//     border: "none",
//     background: "transparent",
//     cursor: "pointer",
//     outline: "none",
// }));
// // 入力部分のカスタム
// const StyledInputBase = styled(InputBase)(({ theme }) => ({
//     color: "inherit",
//     "& .MuiInputBase-input": {
//         padding: theme.spacing(1, 1, 1, 0),
//         // vertical padding + font size from searchIcon
//         paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//         transition: theme.transitions.create("width"),
//         width: "100%",
//         [theme.breakpoints.up("sm")]: {
//             width: "12ch",
//             "&:focus": {
//                 width: "20ch",
//             },
//         },
//     },
// }));

export default function Navigation() {
    const [query, setQuery] = useState("");
    // const{setSearchResults ,setIsSearched}=useSearchResults();

    // 虫眼鏡ボタンが押されたときのイベント

    // // 入力欄の値をセットする
    // const handleInputText = (event) => {
    //     setQuery(event.target.value);
    // };

    // // ボタンを押した後のイベント
    // const handleSearchClick = async () => {
    //     try {
    //         const response = await axios.get(
    //             `http://127.0.0.1:8000/api/search?query=${query}`
    //         );
    //         // useSearchResultsフックにデーターを渡す
    //         setSearchResults(response.data);
    //         setIsSearched(true)

    //     } catch (error) {
    //         console.error("検索中にエラーが発生しました:", error);
    //     }
    // };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography
                        variant="h4"
                        component="div"
                        sx={{ flexGrow: 1 }}
                    >
                        ToDoList
                    </Typography>

                    {/* <Search>
                        <SearchIconWrapper onClick={handleSearchClick}>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={{ "aria-label": "search" }}
                            name="query"
                            value={query}
                            onChange={handleInputText}
                        />
                    </Search> */}
                </Toolbar>
            </AppBar>
        </Box>
    );
}
