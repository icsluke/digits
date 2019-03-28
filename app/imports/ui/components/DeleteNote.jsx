import React from 'react';
import PropTypes from 'prop-types';
import { Contacts } from '/imports/api/contact/contact';
import { Button } from 'semantic-ui-react';
import { Bert } from 'meteor/themeteorchef:bert';
import AutoForm from 'uniforms-semantic/AutoForm';

/** Renders the Page for adding a document. */
class DeleteNote extends React.Component {

  /** Bind 'this' so that a ref to the Form can be saved in formRef and communicated between render() and submit(). */
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.deleteCallback = this.deleteCallback.bind(this);
  }

  /** Notify the user of the results of the submit. If successful, clear the form. */
  deleteCallback(error) {
    if (error) {
      Bert.alert({ type: 'danger', message: `Delete Note failed: ${error.message}` });
    } else {
      Bert.alert({ type: 'success', message: 'Delete Note succeeded' });
      this.formRef.reset();
    }
  }

  /** On submit, insert the data. */
  onClick(data) {
    const { _id } = data;
    Contacts.remove({ _id }, this.deleteCallback);
  }

  /** Render the form. Use Uniforms: https://github.com/vazco/uniforms */
  render() {
    return (
          <Button>
            <AutoForm ref={(ref) => {
              this.formRef = ref;
            }} schema={ContactSchema} onClick={this.onClick}>
            </AutoForm>
                Delete
          </Button>
    );
  }
}

DeleteNote.propTypes = {
  owner: PropTypes.string.isRequired,
  contactId: PropTypes.string.isRequired,
};

export default DeleteNote;
