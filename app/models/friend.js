import DS from 'ember-data';
const { Model ,attr} = DS;

export default Model.extend({
    work: attr(),
    college: attr(),
    profile: DS.belongsTo('profile')
});
