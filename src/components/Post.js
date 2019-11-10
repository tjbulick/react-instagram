import React from 'react';
import User from './User';

export default class Post extends React.Component {
    render() {
        return (
            <div key={this.props.id} className="post">
                <User 
                src={this.props.photo} 
                alt={this.props.altname} 
                name={this.props.name} 
                min />
                <img src={this.props.src} alt={this.props.alt} />
                <div className="post__name">
                    {this.props.name}
                </div>
                <div className="post__descr">
                    {this.props.descr}
                </div>
            </div>
        )
    }
}