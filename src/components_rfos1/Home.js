import React from 'react'
import _ from 'lodash'
import { Button } from 'semantic-ui-react'
import {saveAs} from 'file-saver'
import {TechnicalSkillsEntry} from './TechnicalSkillsEntry';
import { KeyRolesEntry} from './KeyRoles'
import { SimpleDetails} from './SimpleDetails'
import { IndustryExperienceEntry} from './IndustryExperienceEntry'
//import { SummaryExperienceEntry} from './SummaryExperienceEntry'   Unneeded/handled in backend
import { Summary} from './SummaryDetails'
import { ScheduleOfExperienceEntry } from './ScheduleOfExperienceEntry'
import { SummaryExample} from './SummaryExample'
import { TechnicalSkillsExample} from './TechnicalSkillsExample'
import { KeyRolesExample} from './KeyRolesExample'
import { IndustryExperienceExample} from './IndustryExperienceExample'
//import { SummaryExperienceExample} from './SummaryExperienceExample'
import { ScheduleOfExperienceExample} from './ScheduleOfExperienceExample'
// import update from 'react-addons-update';
import update from 'immutability-helper';
import * as fs from 'fs';
//import { readFileSync } from 'fs'

import { Packer, BorderStyle, TableCell, Document, Paragraph,TableCellShading, TextRun, XMLComponent, TableCellProperties,ITableCellShadingAttributesProperties } from 'docx';
import { Dropdown, Input,Checkbox, Form, Container, Divider, Header, Grid, Image, List, Transition, Table } from 'semantic-ui-react'

const days = [
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
  { key: '12', text: '12', value: '12' },
  { key: '13', text: '13', value: '13' },
  { key: '14', text: '14', value: '14' },
  { key: '15', text: '15', value: '15' },
  { key: '16', text: '16', value: '16' },
  { key: '17', text: '17', value: '17' },
  { key: '18', text: '18', value: '18' },
  { key: '19', text: '19', value: '19' },
  { key: '20', text: '20', value: '20' },
  { key: '21', text: '21', value: '21' },
  { key: '22', text: '22', value: '22' },
  { key: '23', text: '23', value: '23' },
  { key: '24', text: '24', value: '24' },
  { key: '25', text: '25', value: '25' },
  { key: '26', text: '26', value: '26' },
  { key: '27', text: '27', value: '27' },
  { key: '28', text: '28', value: '28' },
  { key: '29', text: '29', value: '29' },
  { key: '30', text: '30', value: '30' },
  { key: '31', text: '31', value: '31' },
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
  { key: '12', text: '12', value: '12' },
]

const years = [ //need to futureproof times
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
  { key: '12', text: '12', value: '12' },
  { key: '13', text: '13', value: '13' },
  { key: '14', text: '14', value: '14' },
  { key: '15', text: '15', value: '15' },
  { key: '16', text: '16', value: '16' },
  { key: '17', text: '17', value: '17' },
  { key: '18', text: '18', value: '18' },
  { key: '19', text: '19', value: '19' },
  { key: '20', text: '20', value: '20' },
  { key: '21', text: '21', value: '21' },
  { key: '22', text: '22', value: '22' },
  { key: '23', text: '23', value: '23' },
  { key: '24', text: '24', value: '24' },
  { key: '25', text: '25', value: '25' },
  { key: '26', text: '26', value: '26' },
  { key: '27', text: '27', value: '27' },
  { key: '28', text: '28', value: '28' },
  { key: '29', text: '29', value: '29' },
  { key: '30', text: '30', value: '30' },
  { key: '31', text: '31', value: '31' },
]
const renderLabel = label => ({
  color: 'blue',
  content: ` ${label.text}`,
  icon: 'check',
})
var basic_skills = []
var intermediate_skills = []
var advanced_skills = []
var schedule_exp = {}
var total_exp = {}
var total_exp_state = {}

export class Home extends React.Component{

  constructor(){
    super();
    // Set some state
    this.state = {
        first_name: '',
        email: '',
        skill:'',
        country:'',
        basic_skills,
        intermediate_skills,
        advanced_skills,
        schedule_exp,
        total_exp_state,
        key_roles:'',
        role_name:'',
        industry_exp:'',
        summary:'',
        key_roles_level:'',
        displayed_roles:3,
        displayed_exp:1,
        displayed_industry_exp:1
    };
  }

  getSimpleData = (val) => {
    console.log('VAL:' + val)
    this.setState({
      first_name: val['first_name'],
      email: val['email'],
      country: val['country']
    });
  }
  getSummaryData = (val) => {
    console.log('VAL:' + val)
    this.setState({
      summary: val['summary']
    });
  }
  getSummaryData = (val) => {
    console.log('VAL:' + val)
    this.setState({
      summary: val['summary']
    });
  }
  getBasicSkillsData = (val) => {
    console.log('VAL:' + val)
    this.setState({
      basic_skills: val
    });
  }
  getIntermediateSkillsData = (val) => {
    console.log('VAL:' + val)
    this.setState({
      intermediate_skills: val
    });
  }
  getAdvancedSkillsData = (val) => {
    console.log('VAL:' + val)
    this.setState({
      advanced_skills: val
    });
  }
  getExperienceData = (val) => {
    console.log('VAL:' + val)

    //this.setState(prevState => ({
      //total_exp_state: [...prevState.total_exp_state, val]
    //}))
    var found = false;
    var found_key = ''
    for(var i = 0; i < this.state.total_exp_state.length; i++) {
        if (this.state.total_exp_state[i].exp_key == val['exp_key'] ) {
            console.log("state_exp_key" + this.state.total_exp_state[i].exp_key)
            console.log("val_exp_key" + val['exp_key'])
            found = true;
            console.log("FOUND EXP_KEY" + val['exp_key'])
            found_key = val['exp_key']
            break;
        }
    }
    if (found === false) {
      this.setState(prevState => ({
        total_exp_state: [...prevState.total_exp_state, val]
      }))
    }
    else if(found === true) {
      var removed = this.state.total_exp_state.filter(person => person.exp_key != found_key);

      this.setState({
        total_exp_state: removed
      })
      this.setState(prevState => ({
        total_exp_state: [...prevState.total_exp_state, val]
      }))
      for (var key in this.state.total_exp_state) {
      if (this.state.total_exp_state.hasOwnProperty(key)) {
          console.log(key + " -> " + this.state.total_exp_state[key]);
      }
      }
    }
    //this.setState({
      //total_exp_state: total_exp
    //})
  }

  createHeading(text) {
      return new Paragraph(text).heading1();
  }

  createSubHeading(text) {
      return new Paragraph(text).heading2();
  }

  getKeyRoles(roles){
    for (var a = 0; a < 6; a++) {
      roles.push(<KeyRole key={a} />);
    }
  }
  getIndustryExp(industry_experiences){
    for (var a = 0; a < 6; a++) {
      industry_experiences.push(<IndustryExp key={a}/>);
    }
  }
  getExp(experiences){
    for (var a = 0; a < 6; a++) {
      experiences.push(<Exp key={a} getExpProp={this.getExperienceData} custKey={a}/>);
    }
  }
  createStyles(doc){

    const { first_name,
      email,
      skill,
      country,
      summary,
      basic_skills,
      intermediate_skills,
      advanced_skills,
      schedule_exp,
      displayed_roles,
      displayed_exp} = this.state

    console.log("working")
    doc.Styles.createParagraphStyle("Heading1", "Heading 1")
        .basedOn("Normal")
        .next("Normal")
        .font("Montserrat Bold")
        .quickFormat()
        .size(52)
        .spacing({ after: 120 });

    doc.Styles.createParagraphStyle("Heading2", "Heading 2")
        .basedOn("Normal")
        .next("Normal")
        .font("Montserrat SemiBold")
        .quickFormat()
        .size(36)
        .spacing({ before: 240, after: 120 });
    doc.Styles.createParagraphStyle("Heading3", "Heading 3")
        .basedOn("Normal")
        .next("Normal")
        .font("Montserrat Medium")
        .quickFormat()
        .bold()
        .size(32)
        .color("6A47C5")
        .spacing({ before: 240, after: 120 });
/*
    doc.Styles.createParagraphStyle("aside", "Aside")
        .basedOn("Normal")
        .next("Normal")
        .color("999999")
        .italics()
        .indent({ left: 720 })
        .spacing({ line: 276 });
*/
    doc.Styles.createParagraphStyle("Default_Text", "Default_Text")
        .basedOn("Normal")
        .font("Montserrat Regular")
        .size(20)

    doc.Styles.createParagraphStyle("ListParagraph", "List Paragraph")
        .quickFormat()
        .basedOn("Normal");

    const numberedAbstract = doc.Numbering.createAbstractNumbering();
    numberedAbstract.createLevel(0, "lowerLetter", "%1)", "left");

    doc.createParagraph(this.state.first_name).heading1();
    doc.createParagraph("Personal Profile").heading2();
    doc.createParagraph("Profile Summary").heading3().thematicBreak()

    const para = doc.createParagraph().style('ListParagraph');
    para.createTextRun(this.state.summary);
    //para.createTextRun(this.state.summary);  // this was duplicating entries?
    doc.createParagraph("Key Roles and Technical Skills").heading3().thematicBreak()

    const table = doc.createTable(basic_skills.length+intermediate_skills.length+advanced_skills.length+1,2)
    console.log("table creation started")
    table.getCell(0,0).addContent(new Paragraph("Skill"))
    table.getCell(0,1).addContent(new Paragraph("Proficiency"))


    for (var i = 0; i < basic_skills.length; i++) {
      table.getCell(i+1,0).addContent(new Paragraph(basic_skills[i]))
      table.getCell(i+1,1).addContent(new Paragraph("Basic"))
    }

    console.log("Intermediate Skills")
    for (var i = 0; i < intermediate_skills.length; i++) {
      table.getCell(i+basic_skills.length+1,0).addContent(new Paragraph(intermediate_skills[i]))
      table.getCell(i+basic_skills.length+1,1).addContent(new Paragraph("Intermediate"))
    }
    console.log("Advanced Skills")
    for (var i = 0; i < advanced_skills.length; i++) {
      table.getCell(i+basic_skills.length+intermediate_skills.length+1,0).addContent(new Paragraph(advanced_skills[i]))
      table.getCell(i+basic_skills.length+intermediate_skills.length+1,1).addContent(new Paragraph("Advanced"))
    }


    doc.createParagraph("Industry Experience").heading3().thematicBreak()
    const para2 = doc.createParagraph();
    para2.createTextRun(this.state.summary);
    doc.createParagraph("Summary of Experience").heading3().thematicBreak()
    const para3 = doc.createParagraph();
    para3.createTextRun(this.state.summary);
    doc.createParagraph("Education & Qualifications").heading3().thematicBreak()
    const para4 = doc.createParagraph();
    para4.createTextRun(this.state.summary);
    doc.createParagraph("Schedule of Experience").heading3().thematicBreak()
    const para5 = doc.createParagraph();
    para5.createTextRun(this.state.summary);
    const letterNumbering = doc.Numbering.createConcreteNumbering(numberedAbstract);
    const letterNumbering5 = doc.Numbering.createConcreteNumbering(numberedAbstract);
    letterNumbering5.overrideLevel(0, 5);

    const para_do = new Paragraph("To whom it may concern:")
        .heading2()
        .center();

    const name = new TextRun("Name:")
        .bold()
        .font("Montserrat Light")
        .allCaps();

    const paragraph = new Paragraph("");
    const durationText = new TextRun("Mon YY - Mon YY").bold();
    const companyText = new TextRun("Company Name, City, Country").tab().tab().bold();

       paragraph.addRun(durationText);
       paragraph.addRun(companyText);

       doc.addParagraph(paragraph);
       //doc.addParagraph(para_do);
       //doc.addParagraph(name);

   // doc.createParagraph("An aside, in light gray italics and indented").style("aside");

    console.log("Styles Created")
  }

  handleSubmit = () => {
    console.log("Document creation started");
    const { first_name,
      email,
      skill,
      country,
      summary,
      basic_skills,
      intermediate_skills,
      advanced_skills,
      schedule_exp,
      displayed_roles,
      displayed_exp} = this.state

    console.log(first_name, email, skill, country)

    var docx = require("docx");
    const doc = new Document();

    console.log(summary)
    //this.createStyles(doc) // moved this down
    doc.addParagraph(this.createHeading(first_name));
    doc.addParagraph(this.createHeading(email));
    doc.addParagraph(this.createSubHeading(country));
    this.createStyles(doc)

     console.log("ADVANCED" + advanced_skills);

  //  for (var k = 0; k < advanced_skills.length; k++) {
  //    doc.addParagraph(new Paragraph(advanced_skills[k]).bullet());
  //  }
    const packer = new Packer();

    packer.toBlob(doc).then(blob => {
          console.log(blob);
          saveAs(blob, "Consultant_Profile.docx");
          console.log("Document created successfully");
    });
  }

  handleAddRole = () => {
    console.log("test")
    var new_disp = this.state.displayed_roles + 1;

    this.setState({ displayed_roles: new_disp})
  }

  handleRemoveRole = () => {
    console.log("test")
    var new_disp = this.state.displayed_roles - 1;

    this.setState({ displayed_roles: new_disp})
  }

  handleAddExp = () => {
    console.log("test")
    var new_disp = this.state.displayed_exp + 1;

    this.setState({ displayed_exp: new_disp})
  }

  handleRemoveExp = () => {
    console.log("test")
    var new_disp = this.state.displayed_exp - 1;

    this.setState({ displayed_exp: new_disp})
  }

  handleAddIndExp = () => {
    console.log("test")
    var new_disp = this.state.displayed_industry_exp + 1;

    this.setState({ displayed_industry_exp: new_disp})
  }

  handleRemoveIndExp = () => {
    console.log("test")
    var new_disp = this.state.displayed_industry_exp - 1;

    this.setState({ displayed_industry_exp: new_disp})
  }

  render(){
    const { first_name,
      email,
      skill,
      country,
      key_roles,
      industry_exp,
      summary,
      key_roles_level,
      role_name,
      displayed_roles,
      displayed_exp,
      displayed_industry_exp
    } = this.state
    const { currentValue } = this.state
    const roles = [];
    const experiences = [];
    const industry_experiences = [];
    this.getKeyRoles(roles);
    this.getExp(experiences);
    this.getIndustryExp(industry_experiences);


    //console.log(schedule_exp["key3"])

    //var docx = require("docx");
    //const doc = new Document();

    const { items } = this.state
      return(
        <div>
          <div>
          <Container textAlign='justified'>
            <Header size='huge'>Expleo Profile Form</Header>
            <Image src='./expleo_logo.jpg' size='small' />
            <Divider />
            <Form>
                <SimpleDetails sendData={this.getSimpleData}/>
                <Summary sendData={this.getSummaryData}/>
                <SummaryExample/>
                  <Header>Key Roles</Header>
                  <div>
                    <Button.Group>
                      <Button disabled={displayed_roles === 0} icon='minus' onClick={this.handleRemoveRole} />
                      <Button disabled={displayed_roles === 10} icon='plus' onClick={this.handleAddRole}/>
                    </Button.Group>
                    <Transition.Group as={List} duration={200} divided size='small' verticalAlign='middle'>
                      {roles.slice(0,this.state.displayed_roles)}
                    </Transition.Group>
                  </div>
                  <KeyRolesExample/>
                  <Header>Technical Skills</Header>
                <Form.Field>
                  <Header as={'h5'}> Basic (Trained only: 6 months)</Header>
                  <TechnicalSkillsEntry sendData={this.getBasicSkillsData}/>
                </Form.Field>
                <Form.Field>
                  <Header as={'h5'}> Intermediate (6 - 18 months)</Header>
                  <TechnicalSkillsEntry sendData={this.getIntermediateSkillsData}/>
                </Form.Field>
                <Form.Field>
                  <Header as={'h5'}> Advanced (Over 18 months)</Header>
                  <TechnicalSkillsEntry sendData={this.getAdvancedSkillsData}/>
                </Form.Field>
                <Divider/>
                <TechnicalSkillsExample/>
                <Form.Field>
                <Header>Industry Experience</Header>
                <div>
                  <Button.Group>
                    <Button disabled={displayed_industry_exp === 0} icon='minus' onClick={this.handleRemoveIndExp} />
                    <Button disabled={displayed_industry_exp === 10} icon='plus' onClick={this.handleAddIndExp} />
                  </Button.Group>
                  <Transition.Group as={List} duration={200} divided size='small' verticalAlign='middle'>
                    {industry_experiences.slice(0,this.state.displayed_industry_exp)}
                  </Transition.Group>
                </div>
                <IndustryExperienceExample/>
                <Header>Schedule Of Experience</Header>
                <div>
                  <Button.Group>
                    <Button disabled={displayed_exp === 0} icon='minus' onClick={this.handleRemoveExp} />
                    <Button disabled={displayed_exp === 10} icon='plus' onClick={this.handleAddExp} />
                  </Button.Group>
                  <Transition.Group as={List} duration={200} divided size='small' verticalAlign='middle'>
                    {experiences.slice(0,this.state.displayed_exp)}
                  </Transition.Group>
                </div>
                  <ScheduleOfExperienceExample/>
                  <Checkbox label='I agree to the Terms and Conditions' />
                </Form.Field>
                <Form.Button fluid content='Submit' size='huge' onClick={this.handleSubmit}/>
            </Form>
            <Divider/>
            <strong>onChange:</strong>
              <pre>{JSON.stringify(this.state, null, 1)}</pre>
            </Container>
          </div>

        </div>
    );
  }
}
const ExpGrid = props =>
  <div>
        {props.experiences}
  </div>;

const KeyRoleGrid = props =>
  <div>
    {props.roles}
  </div>;

const KeyRole = props =>
  <div>
  <KeyRolesEntry/>
  <Divider/>
  </div>;

const IndustryExp = props =>
  <div>
  <IndustryExperienceEntry/>
  <Divider/>
  </div>;

const Exp = props =>
  <div>
  <ScheduleOfExperienceEntry expKey={props.custKey} sendData={props.getExpProp}/>
  <Divider/>
  </div>;
