import React from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

class Profile extends React.Component {

  shouldComponentUpdate = (nextProps, nextState) => {
    if (nextProps !== this.props) {
      return true
    }  
  }


  render() {
    console.log('ProfileRender')
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

// const Profile = (props) => {
//   console.log("ProfileRender");
//   return (
//     <div>
//       <ProfileInfo
//         profile={props.profile}
//         status={props.status}
//         updateStatus={props.updateStatus}
//       />
//       <MyPostsContainer />
//     </div>
//   );
// };
