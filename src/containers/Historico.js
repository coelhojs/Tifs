import React, { Component } from 'react';
import SearchInput from "../components/searchInput";
import { Carousel } from '3d-react-carousal';

class Historico extends Component {

    render() {
        let slides = [
            <img src="https://picsum.photos/800/300/?random" alt="1" />,
            <img src="https://picsum.photos/800/301/?random" alt="2" />,
            <img src="https://picsum.photos/800/302/?random" alt="3" />,
            <img src="https://picsum.photos/800/303/?random" alt="4" />,
            <img src="https://picsum.photos/800/304/?random" alt="5" />];
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
                <Carousel slides={slides} />
                {/* https://www.npmjs.com/package/react-spring-3d-carousel */}
                {/* https://github.com/suhailsulu/react-carousel-3d */}
            </div>
        );
    }
}

export default Historico;