import {
    DateTime,
    DialogForm,
    Text,
} from 'form'

const inputs = <>
    <Text
        placeholder='salesTerritoriesTerritory'
        property='salesTerritory'
        required
    />
    <Text
        placeholder='salesTerritoriesSalesPerson'
        property='salesPerson'
        required
    />
    <DateTime
        placeholder='salesTerritoriesStartDate'
        property='startDate'
        required
    />
    <DateTime
        placeholder='salesTerritoriesEndDate'
        property='endDate'
    />
</>

export default <DialogForm inputs={inputs} />
