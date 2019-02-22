

import React from 'react'
import { Button } from 'semantic-ui-react'
import { Dropdown, Input,Checkbox, Form, Container, Divider, Header} from 'semantic-ui-react'

const country_options = [
  { key: '1', text: 'Ireland', value: 'Ireland' },
  { key: '2', text: 'England', value: 'England' },
  { key: '3', text: 'Germany', value: 'Germany' },
]

export class SimpleDetails extends React.Component{

  state = {
    email:'',
    employee_name:'',
    country:'',
    empty_error_name: false,
    empty_error_country: false,
    empty_error_email: false }

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
    const {
      email,
      employee_name,
      country,
      empty_error_name,
      empty_error_country,
      empty_error_email} = this.state

    return(
      <div>
      <Form.Group widths ='equal'>
      <Form.Input error={empty_error_name} placeholder='Name' name='employee_name' value={employee_name} onChange={this.handleChange} onBlur={this.updateForm}/>
      <Form.Input error={empty_error_email} placeholder='E-mail' name='email' value={email} onChange={this.handleChange} onBlur={this.updateForm}/>
      <Dropdown error={empty_error_country} placeholder='Select Country' fluid search selection options={country_options} name='country' value={country} onChange={this.handleChange} onBlur={this.updateForm} onClose={this.updateForm}/>
      </Form.Group>
      </div>
    )
  }
}
