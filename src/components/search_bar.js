import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';
import '../css/main.css';

const style={
    marginRight : '50px'
}

class Searchbar extends Component {
    constructor(props){
        super(props);
        this.state = { search : '' }
    }

    changeText(e){
        this.setState({ search :e.target.value });
    }

    handleClick(){
        this.props.searchValue(this.state.search);
    }

    render(){
        return(
            <div>
                <span>
                    <TextField type='search' name='search' style={style} onChange={this.changeText.bind(this)}/>     
                    <RaisedButton label="Search" primary={true} onClick={this.handleClick.bind(this)}/>
                </span>
            </div>
        )
    }
}

export default Searchbar;