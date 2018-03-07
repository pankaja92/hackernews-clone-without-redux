import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import SearchBar  from 'material-ui-search-bar';

class Searchbar extends Component {
    constructor(props){
        super(props);
        this.state = { search : '' }
    }

    render(){
        return(
            <div style={{
                margin: '0 auto',
                maxWidth: '100%'
            }}>
                <form style={{ align: 'center' }}>
                    <SearchBar
                        onChange={(search) => this.setState({ search })}
                        onRequestSearch={() => this.props.searchValue(this.state.search)} 
                    />
                    <div style={{ align : 'center'}}>
                        <input type='text' value="Welcome to Hackernews Client"
                            style={{ fontSize: '18px', visibility:'hidden' }}
                            name = 'search'
                            disabled={true} />
                    </div>              
                </form>
            </div>
        )
    }
}

export default Searchbar;


// return (
//     <div>
//         <span>
//             <TextField type='search' name='search' style={style} onChange={this.changeText.bind(this)} />

//             <RaisedButton label="Search" primary={true} onClick={this.handleClick.bind(this)} />
//         </span>
//     </div>
// )