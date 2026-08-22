import {
    DateTime,
    List,
} from 'list'
import Form from './form'

const headers = <>
    <th start>salesTerritoriesTerritory</th>
    <th>salesTerritoriesSalesPerson</th>
    <th>salesTerritoriesStartDate</th>
    <th>salesTerritoriesEndDate</th>
</>

const row = item => <>
    <td>{item.salesTerritory?.title}</td>
    <td>{item.salesPerson?.title}</td>
    <DateTime value={item.startDate} />
    <DateTime value={item.endDate} />
</>

export default <List
    create={Form}
    hasDelete
    hasEdit
    headers={headers}
    row={row}
/>
