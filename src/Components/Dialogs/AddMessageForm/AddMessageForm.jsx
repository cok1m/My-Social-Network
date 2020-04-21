import React from 'react'
import { maxLength, required } from '../../../utilities/validators';
import { Textarea } from '../../FormsControl/FormsControl';
import { Field, reduxForm } from 'redux-form';

const maxLength50 = maxLength(50)

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          autoFocus={true}
          component={Textarea}
          name={'newMessageBody'}
          placeholder="Введите текст"
          validate={[required, maxLength50]}
        />
      </div>
      <div>
        <button>Send</button>
      </div>
    </form>
  );
};

export default reduxForm({ form: 'dialogAddMessageForm'})(AddMessageForm)