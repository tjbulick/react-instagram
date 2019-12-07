import React from 'react';
import User from './User';
import InstaService from '../services/instaService';
import ErrorMessage from './Error';

export default class Users extends React.Component {
    // return (
    //     <div className="right">
    //         <User 
    //             src="https://images.pexels.com/photos/736716/pexels-photo-736716.jpeg?cs=srgb&dl=adult-beach-casual-736716.jpg&fm=jpg" 
    //             // src="https://jooinn.com/images/man-19.jpg" 
    //             alt="man" 
    //             name="Scott" />
    //         <div className="users__block">
    //             <User 
    //                 src="https://images.pexels.com/photos/736716/pexels-photo-736716.jpeg?cs=srgb&dl=adult-beach-casual-736716.jpg&fm=jpg" 
    //                 // src="https://jooinn.com/images/man-19.jpg" 
    //                 alt="man" 
    //                 name="Scott" 
    //                 min />
    //             <User 
    //                 src="https://images.pexels.com/photos/736716/pexels-photo-736716.jpeg?cs=srgb&dl=adult-beach-casual-736716.jpg&fm=jpg" 
    //                 // src="https://jooinn.com/images/man-19.jpg" 
    //                 alt="man" 
    //                 name="Scott" 
    //                 min />
    //             <User 
    //                 src="https://images.pexels.com/photos/736716/pexels-photo-736716.jpeg?cs=srgb&dl=adult-beach-casual-736716.jpg&fm=jpg" 
    //                 // src="https://jooinn.com/images/man-19.jpg" 
    //                 alt="man" 
    //                 name="Scott" 
    //                 min />
    //             <User 
    //                 src="https://images.pexels.com/photos/736716/pexels-photo-736716.jpeg?cs=srgb&dl=adult-beach-casual-736716.jpg&fm=jpg" 
    //                 // src="https://jooinn.com/images/man-19.jpg" 
    //                 alt="man" 
    //                 name="Scott" 
    //                 min />
    //         </div>
    //     </div>
    // )
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
    }

    onError = () => {
        this.setState({
            error: true
        })
    }

    renderItems(arr) {
        return arr.map((item, i) => {
            return (
                <User
                src={item.src}
                alt={item.alt}
                name={item.name}
                min={i === 0 ? false : true}
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
            <div className="right">
                {items[0]}
                <div className="users__block">
                    {items.slice(1)}
                </div>
            </div>
        )
    }
}