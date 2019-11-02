import React from 'react';
import User from './User';

export default function Users() {
    return (
        <div className="right">
            <User 
                src="https://images.pexels.com/photos/736716/pexels-photo-736716.jpeg?cs=srgb&dl=adult-beach-casual-736716.jpg&fm=jpg" 
                // src="https://jooinn.com/images/man-19.jpg" 
                alt="man" 
                name="Scott" />
            <div className="users__block">
                <User 
                    src="https://images.pexels.com/photos/736716/pexels-photo-736716.jpeg?cs=srgb&dl=adult-beach-casual-736716.jpg&fm=jpg" 
                    // src="https://jooinn.com/images/man-19.jpg" 
                    alt="man" 
                    name="Scott" 
                    min />
                <User 
                    src="https://images.pexels.com/photos/736716/pexels-photo-736716.jpeg?cs=srgb&dl=adult-beach-casual-736716.jpg&fm=jpg" 
                    // src="https://jooinn.com/images/man-19.jpg" 
                    alt="man" 
                    name="Scott" 
                    min />
                <User 
                    src="https://images.pexels.com/photos/736716/pexels-photo-736716.jpeg?cs=srgb&dl=adult-beach-casual-736716.jpg&fm=jpg" 
                    // src="https://jooinn.com/images/man-19.jpg" 
                    alt="man" 
                    name="Scott" 
                    min />
                <User 
                    src="https://images.pexels.com/photos/736716/pexels-photo-736716.jpeg?cs=srgb&dl=adult-beach-casual-736716.jpg&fm=jpg" 
                    // src="https://jooinn.com/images/man-19.jpg" 
                    alt="man" 
                    name="Scott" 
                    min />
            </div>
        </div>
    )
}