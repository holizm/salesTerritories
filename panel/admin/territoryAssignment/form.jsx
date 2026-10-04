import {
    DateTime,
    DialogForm,
    Text,
} from 'form'

const inputs = <>
    <Text
        placeholder='territory'
        property='salesTerritory'
        required
    />
    <Text
        placeholder='salesPerson'
        property='salesPerson'
        required
    />
    <DateTime
        placeholder='startDate'
        property='startDate'
        required
    />
    <DateTime
        placeholder='endDate'
        property='endDate'
    />
</>

export default <DialogForm inputs={inputs} />
