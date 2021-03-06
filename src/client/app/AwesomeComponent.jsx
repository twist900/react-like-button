import React from 'react';

class AwesomeComponent extends React.Component{
  constructor(props){
    super(props);
    this.state = { likesCount: 0 };
    this.onLike = this.onLike.bind(this);
  }

  onLike(){
    let newLikeCount = this.state.likesCount + 1;
    this.setState({ likesCount: newLikeCount });
  }

  render(){
    return (
        <div>
          Likes: <span>{ this.state.likesCount }</span>
          <div>
            <button onClick={this.onLike}>Like me</button>
          </div>
        </div>
      );
  }
}

export default AwesomeComponent;