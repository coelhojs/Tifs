import React from 'react';

const SearchInput = () => {
    return (
        <div class="form-group has-search">
            <span class="fa fa-search form-control-feedback"></span>
            <input type="text" class="form-control" placeholder="Buscar" />
        </div>
    );
};

export default SearchInput;