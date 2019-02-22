
import React, { Component } from 'react'
import { Button, Dropdown, Grid, Header } from 'semantic-ui-react'


const options = [
  { key: 'Java', text: 'Java', value: 'Java' },
  { key: 'C#', text: 'C#', value: 'C#' },
  { key: 'C', text: 'C', value: 'C' },
  { key: 'C++', text: 'C++', value: 'C++' },
  { key: 'Php', text: 'Php', value: 'Php' },
  { key: 'Python', text: 'Python', value: 'Python' },
  { key: 'Javascript', text: 'Javascript', value: 'Javascript' },
  { key: 'Html', text: 'Html', value: 'Html' },
  { key: 'CSS', text: 'CSS', value: 'CSS' },
  { key: 'Perl', text: 'Perl', value: 'Perl' },
  { key: 'Lisp', text: 'Lisp', value: 'Lisp' },
  { key: 'Haskell', text: 'Haskell', value: 'Haskell' },
  { key: 'Prolog', text: 'Prolog', value: 'Prolog' },
  { key: 'COBOL', text: 'COBOL', value: 'COBOL' },
  { key: 'GO', text: 'GO', value: 'GO' },
  { key: 'ReactJS', text: 'ReactJS', value: 'ReactJS' },
  { key: 'AngularJS', text: 'AngularJS', value: 'AngularJS' },
  { key: 'VueJS', text: 'VueJS', value: 'VueJS' },
  { key: 'Ruby', text: 'Ruby', value: 'Ruby' },
  { key: 'Scala', text: 'Scala', value: 'Scala' },
  { key: 'Erlang', text: 'Erlang', value: 'Erlang' },
  { key: 'Swift', text: 'Swift', value: 'Swift' },
  { key: 'Objective-C', text: 'Objective-C', value: 'Objective-C' },
]

export class TechnicalSkillsEntry extends React.Component {
  componentWillMount() {
    this.setState({
      isFetching: false,
      multiple: true,
      search: true,
      skills: [],
      value: [],
      options: options,
    })
  }

  SetSearchState = (res) => {
    this.props.sendData(res);
  }
  handleChange = (e, { name, value }) => {
    this.setState({ [name]: value })
  }
  updateForm = () => {
    console.log("UNSELECTED")
    this.SetSearchState(this.state.undefined)
  }
  handleAddition = (e, { value }) => {
    this.setState({
      options: [{ text: value, value }, ...this.state.options],
      //skills: [{ text: value, value }, ...this.state.skills],
    })
  }


  render() {
    const { multiple, options, isFetching, search, role_value, skills, value } = this.state

    return (
        <div>
        <div>
          <Dropdown
            fluid
            selection
            multiple={multiple}
            search={search}
            options={this.state.options}
            placeholder='Add Skills'
            allowAdditions
            onAddItem={this.handleAddition}
            onChange={this.handleChange}
            onClose={this.updateForm}
          />
          </div>
          <div>
            {JSON.stringify(this.state.undefined, null, 1)}
          </div>
        </div>
    )
  }
}
