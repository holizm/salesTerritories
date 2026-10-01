import { DateTime } from 'list'

export default item => <>
    <td>{item.salesTerritory?.title}</td>
    <td>{item.salesPerson?.title}</td>
    <DateTime value={item.startDate} />
    <DateTime value={item.endDate} />
</>
