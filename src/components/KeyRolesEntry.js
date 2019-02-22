

import React from 'react'
import { Button } from 'semantic-ui-react'
import {saveAs} from 'file-saver'
//import {DropdownExampleRemote} from './Dropdownlist';
import { Packer, Document, Paragraph, TextRun } from 'docx';
import { Dropdown, Input,Checkbox, Form, Container, Divider, Header} from 'semantic-ui-react'
const skill_levels = [
  { key: '1', text: 'Beginner', value: 'Basic' },
  { key: '2', text: 'Intermediate', value: 'Intermediate' },
  { key: '3', text: 'Advanced', value: 'Advanced' },
]

const years = [
  { key: '0', text: '0', value: '0' },
  { key: '1', text: '1', value: '1' },
  { key: '2', text: '2', value: '2' },
  { key: '3', text: '3', value: '3' },
  { key: '4', text: '4', value: '4' },
  { key: '5', text: '5', value: '5' },
  { key: '6', text: '6', value: '6' },
  { key: '7', text: '7', value: '7' },
  { key: '8', text: '8', value: '8' },
  { key: '9', text: '9', value: '9' },
  { key: '10', text: '10', value: '10' },
  { key: '10+', text: '10+', value: '10+' },
]

const months = [
  { key: '0', text: '0', value: '0' },
  { key: '1', text: '1', value: '1' },
  { key: '2', text: '2', value: '2' },
  { key: '3', text: '3', value: '3' },
  { key: '4', text: '4', value: '4' },
  { key: '5', text: '5', value: '5' },
  { key: '6', text: '6', value: '6' },
  { key: '7', text: '7', value: '7' },
  { key: '8', text: '8', value: '8' },
  { key: '9', text: '9', value: '9' },
  { key: '10', text: '10', value: '10' },
  { key: '11', text: '11', value: '11' },
]

export class KeyRolesEntry extends React.Component{

  state = {
    key_roles:'',
    role_months:'',
    role_years:'',
    key_role_empty_error:false,
    months_empty_error:false,
    years_empty_error:false,
    role_key: this.props.roleKey}

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
        key_roles,
        role_months,
        role_years,
        role_key,
        key_role_empty_error,
        months_empty_error,
        years_empty_error,
      } = this.state
    return(
    <div>
    <div>
    <Form.Group>
      <Form.Field>
        <Form.Input error={key_role_empty_error} placeholder='Test Analyst' label='Role' name='key_roles' value={key_roles} onChange={this.handleChange} onBlur={this.updateForm}/>
      </Form.Field>
      <Form.Field>
        <label>Months</label>
        <Dropdown error={months_empty_error} placeholder='Months' name='role_months' value={role_months} compact selection options={months} width={1} onChange={this.handleChange} onBlur={this.updateForm}/>
      </Form.Field>
      <Form.Field>
        <label>Years</label>
        <Dropdown error={years_empty_error} placeholder='Years' name='role_years' value={role_years} compact selection options={years} width={1} onChange={this.handleChange} onBlur={this.updateForm}/>
      </Form.Field>
    </Form.Group>
    </div>
    <div>
      
    </div>
    </div>
  )
  }
}
