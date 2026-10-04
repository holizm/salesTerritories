import {
    DialogForm,
    LongText,
    Text,
    Title,
} from 'form'

const inputs = <>
    <Title />
    <Text
        code
        required
    />
    <Text place />
    <Text parent />
    <LongText description />
</>

export default <DialogForm inputs={inputs} />
