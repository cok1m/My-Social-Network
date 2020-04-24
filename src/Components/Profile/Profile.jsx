import React from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

class Profile extends React.Component {

  shouldComponentUpdate = (nextProps) => {
    if (nextProps !== this.props) {
      return true
    }  
  }


  render() {
    return (
      <div>
        <ProfileInfo
          profile={this.props.profile}
          status={this.props.status}
          updateStatus={this.props.updateStatus}
        />
        <MyPostsContainer />
      </div>
    );
  }
}

export default Profile;