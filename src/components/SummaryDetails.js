import React from 'react'
import { Button } from 'semantic-ui-react'
import {saveAs} from 'file-saver'
import { Dropdown, Input,Checkbox, Form, Container, Divider, Header} from 'semantic-ui-react'


export class Summary extends React.Component{

  state = { summary:'', emptyError: false }

  SetSearchState = (res) => {
    this.props.sendData(res);
  }
  handleChange = (e, { name, value }) => {
    this.setState({ [name]: value })
  }
  updateForm = () => {
    this.SetSearchState(this.state)
    console.log("UNSELECTED")
  }

  render(){
    const { summary, emptyError} = this.state

    return(
      <Form.Field>
      <Header>Summary</Header>
      <Form.TextArea error={emptyError} placeholder='Tell us more about you...'  name='summary' value={summary} onChange={this.handleChange} onBlur={this.updateForm}/>
      </Form.Field>

    )
  }
}
