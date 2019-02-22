

import React from 'react'
import { Button } from 'semantic-ui-react'
import { Dropdown, Input,Checkbox, Form, Container, Divider, Header} from 'semantic-ui-react'

const country_options = [
  { key: '1', text: 'Ireland', value: 'Ireland' },
  { key: '2', text: 'England', value: 'England' },
  { key: '3', text: 'Germany', value: 'Germany' },
]

export class SimpleDetails extends React.Component{

  state = { email:'',first_name:'', country:'' }

  SetSearchState = (res) => {
    this.props.sendData(res);
  }
  handleChange = (e, { name, value }) => {
    this.setState({ [name]: value })
  }
  updateForm = () => {
    console.log("UNSELECTED")
    this.SetSearchState(this.state)
  }

  render(){
    const { email, first_name, country} = this.state

    return(
      <div>
      <Form.Group widths ='equal'>
      <Form.Input placeholder='Name' name='first_name' value={first_name} onChange={this.handleChange} onBlur={this.updateForm}/>
      <Form.Input placeholder='E-mail' name='email' value={email} onChange={this.handleChange} onBlur={this.updateForm}/>
      <Dropdown placeholder='Select Country' fluid search selection options={country_options} name='country' value={country} onChange={this.handleChange} onBlur={this.updateForm} onClose={this.updateForm}/>
      </Form.Group>
      </div>
    )
  }
}
