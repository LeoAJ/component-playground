import React, { Component } from "react";

export const hoc = Comp => {
  return class extends Component {

    _setTimeout = (...args) => {
      clearTimeout(this.timeoutID); //eslint-disable-line no-undef
      this.timeoutID = setTimeout.apply(null, args); //eslint-disable-line no-undef
    };

    componentDidMount = () => {
      console.log('componentDidMount~');
      Comp.prototype._executeCode.bind(Comp);
    };

    componentDidUpdate = (prevProps) => {
      clearTimeout(this.timeoutID); //eslint-disable-line
      if (this.props.code !== prevProps.code) {
        // Comp.prototype._executeCode.bind(Comp);
      }
    };

    render() {
      return (
        <Comp {...this.props} />
      );
    }
  }
}
