import { createContext, useContext, useState } from "react";

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
    const [searchResults, setSearchResults] = useState([]);
    const [isSearched, setIsSearched] = useState(false);

    return (
        <SearchContext.Provider
            value={{
                searchResults,
                setSearchResults,
                isSearched,
                setIsSearched,
            }}
        >
            {children}
        </SearchContext.Provider>
    );
};

export const useSearchResults = () => {
    return useContext(SearchContext);
};
