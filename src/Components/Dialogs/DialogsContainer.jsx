import { sendMessage } from '../../Redux/dialogsReducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../hoc/withAuthRedirect';
import { compose } from 'redux';

let mapStateToProps = (state) => {
  return {
    messages: state.dialogsPage.messages,
    dialogs: state.dialogsPage.dialogs,
    newMessageBody: state.dialogsPage.newMessageBody,
  }
}
export default compose(
  connect(mapStateToProps, { sendMessage }),
  withAuthRedirect
)(Dialogs)


