import React from 'react';
import Post from './Post';

export default class Posts extends React.Component {
    render() {
        return (
            <div className="left">
                <Post src="https://images.pexels.com/photos/658687/pexels-photo-658687.jpeg?cs=srgb&dl=beautiful-bloom-blooming-658687.jpg&fm=jpg" alt="inst" />
                <Post src="https://cdn.theatlantic.com/assets/media/img/mt/2017/10/Pict1_Ursinia_calendulifolia/lead_720_405.jpg?mod=1533691909" alt="second" />
            </div>
        )
    }
}