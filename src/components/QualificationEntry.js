

import React from 'react'
import { Button } from 'semantic-ui-react'
import {saveAs} from 'file-saver'
//import {DropdownExampleRemote} from './Dropdownlist';
import { Packer, Document, Paragraph, TextRun } from 'docx';
import { Dropdown, Input,Checkbox, Form, Container, Divider, Header, Select} from 'semantic-ui-react'

const options = [
  { key: 'Education', text: 'Education', value: 'Education' },
  { key: 'Professional Qualification', text: 'Professional Qualification', value: 'Professional Qualification' }
]

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

export class QualificationEntry extends React.Component{

  state = {
    qual_type:'',
    qual_name:'',
    qual_cert_name:'',
    qual_cert_body:'',
    qual_cert_year:'',
    qual_course_body:'',
    qual_course_name:'',
    qual_course_years:'',
    cert_name_empty_error: false,
    cert_body_empty_error: false,
    course_name_empty_error: false,
    cert_year_empty_error: false,
    course_body_empty_error: false,
    qual_type_empty_error: false,
    course_year_empty_error: false,
    qual_key: this.props.qualKey
  }

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
      const {qual_name,
        qual_type,
        qual_cert_name,
        qual_cert_body,
        qual_cert_year,
        qual_course_body,
        qual_course_name,
        qual_course_years,
        cert_name_empty_error,
        cert_body_empty_error,
        cert_year_empty_error,
        course_name_empty_error,
        course_body_empty_error,
        course_year_empty_error,
        qual_type_empty_error,
        qual_key} = this.state
      if(qual_type === 'Professional Qualification'){
        return(
        <div>
          <div>
            <Form.Group>
              <Form.Field>
                <label>Qualification Type</label>
                <Dropdown error={qual_type_empty_error} button basic floating compact selection options={options} name='qual_type' value={qual_type} placeholder={'Select Qualification Type'} onChange={this.handleChange} />
              </Form.Field>
              <Form.Field width={7}>
                <label>Certification Name</label>
                <Form.Input error={cert_name_empty_error} name='qual_cert_name' value={qual_cert_name} onChange={this.handleChange}  onBlur={this.updateForm} placeholder='Qualification Title'/>
              </Form.Field>
              <Form.Field>
                <label>Certification Body</label>
                <Form.Input error={cert_body_empty_error} name='qual_cert_body' value={qual_cert_body} onChange={this.handleChange}  onBlur={this.updateForm} placeholder='Qualification Body'/>
              </Form.Field>
              <Form.Field>
                <label>Year</label>
                <Dropdown error={cert_year_empty_error} compact button basic selection floating options={years} name='qual_cert_year' onBlur={this.updateForm}value={qual_cert_year} placeholder={'Year'} onChange={this.handleChange} />
              </Form.Field>
            </Form.Group>
          </div>
        <div>
          {JSON.stringify(this.state, null, 1)}
        </div>
      </div>
      )
    }
    else{
      return(
      <div>
      <div>
        <Form.Group>
          <Form.Field>
            <label>Qualification Type</label>
            <Dropdown error={qual_type_empty_error} button basic floating compact selection options={options} name='qual_type' value={qual_type} placeholder={'Select Qualification Type'} onChange={this.handleChange} />
          </Form.Field>
          <Form.Field width={5}>
            <label>Course Title</label>
            <Form.Input error={course_name_empty_error} name='qual_course_name' value={qual_course_name} onChange={this.handleChange}  onBlur={this.updateForm} placeholder='Qualification Title'/>
          </Form.Field>
          <Form.Field>
            <label>University/College</label>
            <Form.Input error={course_body_empty_error} name='qual_course_body' value={qual_course_body} onChange={this.handleChange}  onBlur={this.updateForm} placeholder='Qualification Body'/>
          </Form.Field>
          <Form.Field>
            <label>Year Graduated</label>
            <Dropdown error={course_year_empty_error} compact button basic selection floating options={years} name='qual_cert_year' onBlur={this.updateForm}value={qual_cert_year} placeholder={'Year'} onChange={this.handleChange} />
          </Form.Field>
        </Form.Group>
      </div>
      <div>
        
      </div>
      </div>
    )
    }
  }
}
