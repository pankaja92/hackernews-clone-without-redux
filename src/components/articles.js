
import React, { Component } from 'react';
import '../css/main.css';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import { List, ListItem } from 'material-ui/List';

const style = {
    width : '600px'
};

class Articles extends Component{
    constructor(props){
        super(props);
        this.state = { articleList : [] }
    }

    componentWillReceiveProps({ articleList}){
        this.setState({ articleList });
    }

    render(){
        const ArticleList = () => {
            if(this.state.articleList){
                return (
                    <Paper zDepth={2} style={style}>
                        <List>
                            {this.state.articleList.map(article => (
                                <a href={article.url} key={article.objectID} target="_blank" rel="noopener noreferrer" style={{textDecoration:'none'}}>
                                <span>
                                    <ListItem > {article.title} </ListItem>
                                    <Divider />
                                </span>
                                </a>
                            ))}
                        </List>
                    </Paper>
                )
            }
            else{
                return(
                    <div>
                        <h3>Loading ...</h3>
                    </div>
                )
            }
        }

        return(
            <div className='Articles'>
               <ArticleList />
            </div>
        )
    }
}

export default Articles;