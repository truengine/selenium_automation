import React from 'react'
import {Table } from 'semantic-ui-react'

export const SummaryExperienceExample = () => (
  <Table celled striped>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Organisation</Table.HeaderCell>
        <Table.HeaderCell>Role</Table.HeaderCell>
        <Table.HeaderCell>Dates</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell>Puresoftware, Noida, Indi</Table.Cell>
        <Table.Cell>Lead / Manager Software Engineer</Table.Cell>
        <Table.Cell>Feb 2017 – Aug 2017</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Thomson Reuters, Bangalore, India</Table.Cell>
        <Table.Cell>Senior Test Engineer</Table.Cell>
        <Table.Cell>Aug 2014 – Feb 2017</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Accenture Services Private Limited, Bangalore, India</Table.Cell>
        <Table.Cell>Senior Software Engineer</Table.Cell>
        <Table.Cell>Apr 2011 – Aug 2017</Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
)

export default SummaryExperienceExample
