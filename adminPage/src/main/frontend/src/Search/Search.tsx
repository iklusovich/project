import React from 'react';
import {Input} from 'antd';
import {SearchProps} from "./SearchProps";



const Search = ({placeholder}: SearchProps) => {
    const {Search} = Input;

    return (
        <div>
            <Search placeholder="input search text" allowClear onSearch={() => {
            }} style={{width: 300}}/>

        </div>
    );
};

export default Search;