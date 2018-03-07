
import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Link
} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import '../css/main.css';
import Menubar from './menubar';
import Articles from './articles';
import Searchbar from './search_bar';


class Menu extends Component {
    constructor(props){
        super(props);
        this.state = {
            articles: [],
            search : ''
        }
    }

    getList(articles){
        console.log('This is called');
        this.setState({ articles });
    }

    getValue(search){
        console.log(search);
        this.setState({ search });
    }

    render(){
        return(
            <Router>
                <MuiThemeProvider>
                    <div className='Main-div'>
                        <Searchbar searchValue={this.getValue.bind(this)} />
                        <Menubar getData = {this.getList.bind(this)} search={this.state.search}/>
                        
                        <Articles articleList = {this.state.articles} />
                    </div>
                </MuiThemeProvider>
            </Router>
        )
    }
}

export default Menu;