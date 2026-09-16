import {
    List,
    Title,
} from 'list'
import Form from './form'

const headers = <>
    <th start>salesTerritoriesTerritory</th>
    <th>salesTerritoriesCode</th>
    <th>salesTerritoriesPlace</th>
    <th>stateMachinesState</th>
</>

const row = item => <>
    <td>{item.title}</td>
    <td>{item.code}</td>
    <td>{item.place?.title}</td>
    <td>{item.state?.title}</td>
</>

export default <List
    create={Form}
    filters={<Title />}
    hasDelete
    hasEdit
    headers={headers}
    row={row}
/>
