

import React from 'react'
import { Button } from 'semantic-ui-react'
import {saveAs} from 'file-saver'
//import {DropdownExampleRemote} from './Dropdownlist';
import { Packer, Document, Paragraph, TextRun } from 'docx';
import { Dropdown, Input,Checkbox, Form, Container, Divider, Header} from 'semantic-ui-react'

var key_role_entry = ''
const years = [
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

export class IndustryExperienceEntry extends React.Component{

  state = { industry:'',area:'', role_months:'', role_years:''}

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
      const {industry, area, role_months, role_years} = this.state
    return(
      <div>
        <div>
          <Form.Group>
            <Form.Field>
              <Form.Input label='Industry' placeholder='Industry' name='industry' value={industry} onChange={this.handleChange} onBlur={this.updateForm}/>
            </Form.Field>
            <Form.Field>
              <Form.Input label='Area' placeholder='Area' name='area' value={area} onChange={this.handleChange} onBlur={this.updateForm}/>
            </Form.Field>
            <Form.Field>
              <label>Months</label>
              <Dropdown placeholder='Months' name='role_months' value={role_months} compact selection options={months} width={1} onChange={this.handleChange} onBlur={this.updateForm}/>
            </Form.Field>
            <Form.Field>
              <label>Years</label>
              <Dropdown placeholder='Years' name='role_years' value={role_years} compact selection options={years} width={1} onChange={this.handleChange} onBlur={this.updateForm}/>
            </Form.Field>
          </Form.Group>
        </div>
        <div>
          {JSON.stringify(this.state, null, 1)}
        </div>
      </div>
    )
  }
}
