
import React, { Component } from 'react';
import '../css/main.css';
import { Link } from 'react-router-dom';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

const styles = {
    customWidth: {
        width: 200,
    },
};

class Menubar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            storyList: '',
            search : '',
            value : 1
        };
    }

    componentWillReceiveProps({ search }) {
        if (search !== this.props.search) {
            this.fetchdata('story',search);
        }
    }

    componentDidMount() {
        this.fetchdata('story');
    }

    callthis(){
        console.log('Hello !')
    }

    fetchdata(type = '', search_tag = ''){
        var url = 'https://hn.algolia.com/api/v1/search?tags=';
        fetch(`${url}${type}&query=${search_tag}`)
        .then(res => res.json())
        .then(data => {
            this.props.getData(data.hits);
        });
    }

    handleClick(e) {
        switch (e) {
            case 'NEWS':
                console.log(`News selected`);
                this.fetchdata('story');
                break;
            case 'JOBS':
                console.log(`JOBS seleceted`);
                this.fetchdata('job');
        }
    }

    handleChange(e, index, value){
        this.setState({value});
        switch (value) {
            case 1:
                console.log(`News selected`);
                this.fetchdata('story');
                break;
            case 2:
                console.log(`JOBS seleceted`);
                this.fetchdata('job');
        }
        console.log(e.target.textContent);
    }

    render() {
        return (
            <div className='Menu'>
                <DropDownMenu value={this.state.value} onChange={this.handleChange.bind(this)} style={styles.customWidth} autoWidth={false}>
                    <MenuItem value={1} primaryText="Stories" />
                    <MenuItem value={2} primaryText="Jobs" />
                </DropDownMenu>
            </div>
        )
    }
}

export default Menubar;