import React, { Component } from "react";
import ReactDOM from "react-dom";
import { ReactQueryDevtools } from "react-query/devtools";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import { Box } from "@mui/system";
import Navigation from "./Navigation";
import { QueryClient, QueryClientProvider } from "react-query";
import { SearchProvider } from "../hooks/ToDo/useSearchResults";
const client = new QueryClient();

function Main() {
    return (
        <SearchProvider>
            <Box>
                <Navigation></Navigation>
                <Router>
                    <QueryClientProvider client={client}>
                        <main className={"m-5"}>
                            <Switch>
                                <Route path="/" exact component={Home} />
                            </Switch>
                        </main>
                        {/* <ReactQueryDevtools></ReactQueryDevtools> */}
                    </QueryClientProvider>
                </Router>
            </Box>
        </SearchProvider>
    );
}

export default Main;
// for <div id="main-employee"></div>
ReactDOM.render(<Main />, document.getElementById("app"));
