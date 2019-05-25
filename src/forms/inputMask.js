// import React, { Component } from 'react';
// import { $, jQuery } from 'jquery';
// // export for others scripts to use
// window.$ = $;
// window.jQuery = jQuery;

// class inputMask extends Component {
//     getInitialState() {
//         return { valor: "" };
//     }
//     handleChange(e) {
//         this.setState({ valor: e.target.value });
//     }
//     componentDidMount() {
//         var $elem = $(React.findDOMNode(this.refs.maskedInput));
//         var reverse = { reverse: false };

//         if (this.props.isReverse) {
//             reverse = { reverse: true };
//         }

//         $elem.mask(this.props.mask, reverse);
//     };
//     render() {
//         return (<div><input type="text" onChange={this.handleChange} ref="maskedInput"></input>{this.state.valor}</div>);
//     }
// }

// export default inputMask;