

import React from 'react'
import { Button } from 'semantic-ui-react'
import {saveAs} from 'file-saver'
import {DropdownExampleRemote} from './Dropdownlist';
import { Packer, Document, Paragraph, TextRun } from 'docx';
import { Dropdown, Input,Checkbox, Form, Container, Divider, Header} from 'semantic-ui-react'
const skill_levels = [
  { key: '1', text: 'Beginner', value: 'Basic' },
  { key: '2', text: 'Intermediate', value: 'Intermediate' },
  { key: '3', text: 'Advanced', value: 'Advanced' },
]
export class SummaryExperienceEntry extends React.Component{

  state = { key_roles:'' }

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

    
    return(
    <Form.Field>
      <Input name = 'key_roles'
        onChange={this.handleChange}
        action={<Dropdown button basic floating options={skill_levels} name = 'key_roles_level' defaultValue='Basic' onChange={this.handleChange}/>}
        icon='search'
        iconPosition='left'
        placeholder='Skill'
      />
    </Form.Field>)
  }
}
