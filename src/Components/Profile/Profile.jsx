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
          isOwner={this.props.isOwner}
          profile={this.props.profile}
          status={this.props.status}
          updateStatus={this.props.updateStatus}
          updateProfile={this.props.updateProfile}
          saveProfilePhoto={this.props.saveProfilePhoto}
        />
        <MyPostsContainer />
      </div>
    );
  }
}

export default Profile;