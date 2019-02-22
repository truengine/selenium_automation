import React from 'react'
import {Table } from 'semantic-ui-react'

export const QualificationExample = () => (

  <Table celled striped>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Role</Table.HeaderCell>
        <Table.HeaderCell>Duration</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
    <Table.Body>
      <Table.Row>
        <Table.Cell>
           Lead Software Test Engineer
        </Table.Cell>
        <Table.Cell>6 Months</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>
          Senior Test Engineer
        </Table.Cell>
        <Table.Cell>6 years</Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
)

export default QualificationExample
