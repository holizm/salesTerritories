export default ({ salesTerritory }) => <dl class='summary'>
    <dt class='title'>{salesTerritory.title}</dt>
    <dd class='code'>{salesTerritory.code}</dd>
    <dd class='place'>{salesTerritory.place?.title}</dd>
</dl>
