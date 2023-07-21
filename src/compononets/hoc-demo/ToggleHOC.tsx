import React from "react";

const withToggle = (PassedComponent) =>
  class WithToggle extends React.Component {
    state = {
      toggleStatus: false,
      title: "",
    };
    constructor(props) {
      super(props);
      this.state.title = props.title;
      this.toggle = this.toggle.bind(this);
    }
    toggle() {
      this.setState({
        toggleStatus: !this.state.toggleStatus,
      });
    }
    render() {
      return (
        <>
          {this.state.toggleStatus && (
            <textarea value={this.state.title} style={editor} />
          )}

          {!this.state.toggleStatus && <PassedComponent {...this.props} />}
          <div>
            <button onClick={this.toggle}>
              {this.state.toggleStatus ? "Cancel" : "Edit"}
            </button>
          </div>
        </>
      );
    }
  };

export default withToggle;
const editor = {
  width: "100%",
  height: "50px",
};
