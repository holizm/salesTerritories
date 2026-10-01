export default item => <>
    <td>{item.title}</td>
    <td>{item.code}</td>
    <td>{item.place?.title}</td>
    <td>{item.state?.title}</td>
</>
