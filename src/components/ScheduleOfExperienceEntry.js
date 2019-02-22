

import React from 'react'
import { Button } from 'semantic-ui-react'
import {saveAs} from 'file-saver'
//import {DropdownExampleRemote} from './Dropdownlist';
import { Packer, Document, Paragraph, TextRun } from 'docx';
import { Dropdown, Input,Checkbox, Form, Container, Divider, Header} from 'semantic-ui-react'


const years = [
  { key: '2019', text: '2019', value: '2019' },
  { key: '2018', text: '2018', value: '2018' },
  { key: '2017', text: '2017', value: '2017' },
  { key: '2016', text: '2016', value: '2016' },
  { key: '2015', text: '2015', value: '2015' },
  { key: '2014', text: '2014', value: '2014' },
  { key: '2013', text: '2013', value: '2013' },
  { key: '2012', text: '2012', value: '2012' },
  { key: '2011', text: '2011', value: '2011' },
  { key: '2010', text: '2010', value: '2010' },
  { key: '2009', text: '2009', value: '2009' },
  { key: '2008', text: '2008', value: '2008' },
  { key: '2007', text: '2007', value: '2007' },
  { key: '2006', text: '2006', value: '2006' },
  { key: '2005', text: '2005', value: '2005' },
  { key: '2004', text: '2004', value: '2004' },
  { key: '2003', text: '2003', value: '2003' },
  { key: '2002', text: '2002', value: '2002' },
  { key: '2001', text: '2001', value: '2001' },
  { key: '2000', text: '2000', value: '2000' }
]

const months = [
  { key: 'January', text: 'January', value: 'January' },
  { key: 'February', text: 'February', value: 'February' },
  { key: 'March', text: 'March', value: 'March' },
  { key: 'April', text: 'April', value: 'April' },
  { key: 'May', text: 'May', value: 'May' },
  { key: 'June', text: 'June', value: 'June' },
  { key: 'July', text: 'July', value: 'July' },
  { key: 'August', text: 'August', value: 'August' },
  { key: 'September', text: 'September', value: 'September' },
  { key: 'October', text: 'October', value: 'October' },
  { key: 'November', text: 'November', value: 'November' },
  { key: 'December', text: 'December', value: 'December' },
]

export class ScheduleOfExperienceEntry extends React.Component{

  state = {
    summary:'',
    role_name:'',
    company:'',
    start_month:'',
    end_month: '',
    start_year:'',
    end_year:'',
    current: false,
    emptyError: false,
    exp_key: this.props.expKey}

  SetSearchState = (res) => {
    console.log('RES:' + res)
    this.props.sendData(res);
  }
  handler = (e, { name, value }) => {
    this.setState({ [name]: value })
  }

  updateForm = () => {
    console.log("UNSELECTED")
    this.SetSearchState(this.state)
  }

  handleChange = (e, { value }) => {
  var currentFlip = this.sate.current*-1
  this.setState({ current:currentFlip })
  }

  log = (action, value) =>
    this.setState(({ log }) => ({
      log: [
        `${new Date().toLocaleTimeString()}: ${_.padEnd(action, 10)} { checked: ${value} }`,
        ...log,
      ].slice(0, 15),
    }))


  handleDOMChange = (e) => {
    this.toggleDOM()
  }
  toggleDOM = () => this.setState(({ current }) => ({ current: !current }))

  render(){
    const {
      role_name,
      summary,
      company,
      start_month,
      end_month,
      start_year,
      end_year,
      exp_key,
      current,
      emptyError
    } = this.state

    return(
      <div>
        <Header as={'h3'}>Experience</Header>
        <Form.Group>
          <Form.Field>
            <label>Company</label>
            <Form.Input error={emptyError}  placeholder='Company Name' name='company' value={company} onChange={this.handler} onBlur={this.updateForm}/>
          </Form.Field>
          <Form.Field>
            <label>Role</label>
            <Form.Input error={emptyError} placeholder='Role' name='role_name' value={role_name} onChange={this.handler} onBlur={this.updateForm}/>
          </Form.Field>
        </Form.Group>
        <Form.Group>
          <Form.Field>
          <label>Start Month</label>
            <Dropdown error={emptyError} placeholder='Month' name='start_month' value={start_month} compact selection options={months} width={1} onChange={this.handler} onBlur={this.updateForm}/>
          </Form.Field>
          <Form.Field>
            <label>Start Year</label>
            <Dropdown error={emptyError} placeholder='Year' name='start_year' value={start_year} compact selection options={years} width={1} onChange={this.handler} onBlur={this.updateForm}/>
          </Form.Field>
          <Form.Field>
            <Checkbox label='I currently work here' name='current_check'
              checked={current}
              onChange={this.handleDOMChange}/>
          </Form.Field>
        </Form.Group>
        <Form.Group>
          <Form.Field>
            <label>End Month</label>
            <Dropdown error={emptyError} placeholder='Month' name='end_month' value={end_month} compact selection options={months} width={1} onChange={this.handler} onBlur={this.updateForm} disabled={current}/>
          </Form.Field>
          <Form.Field>
            <label>End Year</label>
            <Dropdown error={emptyError} placeholder='Year' name='end_year' value={end_year} compact selection options={years} width={1} onChange={this.handler} onBlur={this.updateForm} disabled={current}/>
          </Form.Field>
        </Form.Group>
        <Form.TextArea error={emptyError} label='Responsibilities' placeholder='List responsibilities...'  name='summary' value={summary} onChange={this.handler} onBlur={this.updateForm}/>

        
      </div>
    )
  }
}
const DisabledFields = props =>
  <Form>
    <Form.Group widths='equal'>
      <Form.Input fluid label='First name' placeholder='Disabled' disabled />
      <Form.Input fluid label='Last name' placeholder='Disabled' disabled />
    </Form.Group>
  </Form>;
