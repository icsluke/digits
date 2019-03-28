import React from 'react';
import { Grid, Icon } from 'semantic-ui-react';

/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {
  render() {
    return (
        <div className='background-image'>
          <Grid container centered stackable columns={3}>

            <Grid.Column textAlign='center'>
              <Icon name='user' size='huge' inverted/>
              <h1>Multiple Users</h1>
              <h3>This address book enables any number of users to register and save their business contacts. You can
                only see the contacts you have created</h3>
            </Grid.Column>

            <Grid.Column textAlign='center'>
              <Icon name='file' size='huge' inverted/>
              <h1>Contact Details</h1>
              <h3>This address book enables any number of users to register and save their business contacts. You can
                only see the contacts you have created</h3>
            </Grid.Column>

            <Grid.Column textAlign='calendar'>
              <Icon name='user' size='huge' inverted/>
              <h1>Timestamped Notes</h1>
              <h3>This address book enables any number of users to register and save their business contacts. You can
                only see the contacts you have created</h3>
            </Grid.Column>

          </Grid></div>
    );
  }
}

export default Landing;
