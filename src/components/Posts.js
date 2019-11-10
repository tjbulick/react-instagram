import React from 'react';
import InstaService from '../services/instaService';
import ErrorMessage from './Error';
import Post from './Post';

export default class Posts extends React.Component {
    InstaService = new InstaService();
    state = {
        posts: [],
        error: false
    }

    componentDidMount() {
        this.updatePosts();
    }

    updatePosts() {
        this.InstaService.getAllPosts()
        .then(this.onPostsLoaded)
        .catch(this.onError);
    }

    onPostsLoaded = (posts) => {
        this.setState({
            posts: posts,
            error: false
        })
        console.log(this.state.posts);
    }

    onError = () => {
        this.setState({
            error: true
        })
    }

    renderItems(arr) {
        return arr.map(item => {
            return (
                <Post 
                name={item.name} 
                altname={item.altname} 
                photo={item.photo} 
                src={item.src} 
                alt={item.alt} 
                descr={item.descr} 
                id={item.id} 
                />
            )
        })
    }

    render() {
        const {error, posts} = this.state;

        if (error) {
            return <ErrorMessage/>
        }

        const items = this.renderItems(posts);
        return (
            <div className="left">
                {items}
            </div>
        )
    }
}