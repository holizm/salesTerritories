import {
    DialogForm,
    LongText,
    Text,
    Title,
} from 'form'

const inputs = <>
    <Title />
    <Text
        placeholder='salesTerritoriesCode'
        property='code'
        required
    />
    <Text
        placeholder='salesTerritoriesPlace'
        property='place'
    />
    <Text
        placeholder='salesTerritoriesParent'
        property='parent'
    />
    <LongText
        placeholder='salesTerritoriesDescription'
        property='description'
    />
</>

export default <DialogForm inputs={inputs} />
