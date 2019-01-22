import React from 'react';
import { CirclePicker } from 'react-color';
import $ from "jquery"
import App from '../../App';
  

class ColorPicker extends React.Component {
    
    state = {
      background: '#000000',
      width: "100px"
    };
  
    handleChangeComplete = (color) => {
        this.setState({ background: color.hex });
        this.props.changeBkgColor(this.state.background)
        
    };
    
    render() {
      return (
        <div>
            <CirclePicker
                color={ this.state.background }
                onChangeComplete={ this.handleChangeComplete }
                width = {this.state.width}
                
            />

        </div>
      )}

  }
  export default ColorPicker