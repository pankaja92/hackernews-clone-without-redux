import React, { Component } from 'react';
import '../css/main.css';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import Toggle from 'material-ui/Toggle';

const styles = {
    customWidth: {
        width: 200,
    },
    block: {
        maxWidth: 250,
    },
    toggle: {
        marginTop : '14px',
        fontSize : '14px'
    }, 
};

class Menubar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            storyList: '',
            search : '',
            value : 1,
            show: 'story',
            sortbydate : false
        };
    }

    componentWillReceiveProps({ search }) {
        if (search !== this.props.search) {
            if(this.state.value === 2){
                this.setState({ value : 1 , show : 'story'});
            }
            this.setState({ search }, () => this.fetchdata());
        }
    }

    componentDidMount() {
        this.fetchdata();
    };

    fetchdata(){
        var sort = ''
        if(this.state.sortbydate){
            sort = '_by_date'
        }
        var url = `https://hn.algolia.com/api/v1/search${sort}?tags=`;
        var callAPI = `${url}${this.state.show}&query=${this.state.search}`;
        console.log(callAPI);
        fetch(callAPI)
        .then(res => res.json())
        .then(data => {
            this.props.getData(data.hits);
        });
    }

    handleChange(e, index, value) {
        this.setState({ value });
        switch (value) {
            case 1:
                console.log(`Story selected`);
                this.setState({ show: 'story' }, () => this.fetchdata());
                break;
            case 2:
                console.log(`Front Page selected`);
                this.setState({ show: 'front_page' }, () => this.fetchdata());
                break;
            case 3:
                console.log(`JOBS seleceted`);
                this.setState({ show: 'job' }, () => this.fetchdata());
                break;
            default:
                break;
        }
        console.log(e.target.textContent);
    }

    toggleChange(e){
        var changeDate = this.state.sortbydate;
        this.setState({ sortbydate: !changeDate }, () => this.fetchdata())
    }

    render() {
        return (
            <div className='Menu'>
                <div>
                    <DropDownMenu value={this.state.value} onChange={this.handleChange.bind(this)} style={styles.customWidth} autoWidth={false}>
                        <MenuItem value={1} primaryText="Stories" />
                        <MenuItem value={2} primaryText="Popularity" />
                        <MenuItem value={3} primaryText="Jobs" />
                    </DropDownMenu>
                </div>
                <div style={styles.block}>
                    <Toggle
                        label="Sort by date"
                        style={styles.toggle}
                        onToggle={this.toggleChange.bind(this)}
                    />
                </div>
            </div>
        )
    }
}

export default Menubar;