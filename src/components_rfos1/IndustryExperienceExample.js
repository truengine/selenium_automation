import React from 'react'
import {Table } from 'semantic-ui-react'

export const IndustryExperienceExample = () => (
  <Table celled striped>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Industry</Table.HeaderCell>
        <Table.HeaderCell>Area</Table.HeaderCell>
        <Table.HeaderCell>Duration</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell>Financial Services</Table.Cell>
        <Table.Cell>IT</Table.Cell>
        <Table.Cell>2 Years & 6 Months</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Telecomunications</Table.Cell>
        <Table.Cell>IT</Table.Cell>
        <Table.Cell>6 Years</Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
)

export default IndustryExperienceExample
