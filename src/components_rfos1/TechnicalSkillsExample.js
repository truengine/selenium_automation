import React from 'react'
import {Table } from 'semantic-ui-react'

export const TechnicalSkillsExample = () => (
  <Table celled striped>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Skill</Table.HeaderCell>
        <Table.HeaderCell>Proficiency</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell>
           JIRA
        </Table.Cell>
        <Table.Cell>Basic</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>
          HP Quality Centre (ALM)
        </Table.Cell>
        <Table.Cell>Basic</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>
          Appium
        </Table.Cell>
        <Table.Cell>Basic</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>
          Selenium Webdriver
        </Table.Cell>
        <Table.Cell>Basic</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>
          Agile
        </Table.Cell>
        <Table.Cell>Basic</Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
)

export default TechnicalSkillsExample
