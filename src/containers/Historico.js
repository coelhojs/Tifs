import React, { Component } from 'react';
import SearchInput from "../components/searchInput";

class Historico extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="text-center">
                    <div className="offset-md-5">
                        <SearchInput />
                    </div>
                    <div className="btn-group btn-group-sm">
                        <button type="button" className="btn btn-secondary">Recentes</button>
                        <button type="button" className="btn btn-secondary">Todos</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Historico;