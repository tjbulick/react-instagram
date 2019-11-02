import React from 'react';
import User from './User';

export default class Post extends React.Component {
    render() {
        return (
            <div className="post">
                <User 
                src="https://images.pexels.com/photos/736716/pexels-photo-736716.jpeg?cs=srgb&dl=adult-beach-casual-736716.jpg&fm=jpg" 
                // src="https://jooinn.com/images/man-19.jpg" 
                alt="man" 
                name="Scott" 
                min />
                <img src={this.props.src} alt={this.props.alt} />
                <div className="post__name">
                    Some Account
                </div>
                <div className="post__descr">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam quod consectetur exercitationem voluptates dolore, mollitia dolorem ipsam similique architecto, dolores, odio cum quisquam distinctio accusantium! Similique aut asperiores veritatis veniam?
                </div>
            </div>
        )
    }
}