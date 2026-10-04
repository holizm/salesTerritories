import {
    DialogForm,
    LongText,
    Text,
    Title,
} from 'form'

const inputs = <>
    <Title />
    <Text
        placeholder='code'
        property='code'
        required
    />
    <Text
        placeholder='place'
        property='place'
    />
    <Text
        placeholder='parent'
        property='parent'
    />
    <LongText
        placeholder='description'
        property='description'
    />
</>

export default <DialogForm inputs={inputs} />
