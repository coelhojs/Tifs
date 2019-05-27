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
                {/* https://www.npmjs.com/package/react-spring-3d-carousel */}
                {/* https://github.com/suhailsulu/react-carousel-3d */}
            </div>
        );
    }
}

export default Historico;