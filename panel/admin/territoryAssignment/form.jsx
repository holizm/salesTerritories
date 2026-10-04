import {
    DateTime,
    DialogForm,
    Text,
} from 'form'

const inputs = <>
    <Text
        placeholder='territory'
        required
        salesTerritory
    />
    <Text
        required
        salesPerson
    />
    <DateTime
        required
        startDate
    />
    <DateTime endDate />
</>

export default <DialogForm inputs={inputs} />
