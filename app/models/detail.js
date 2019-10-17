import DS from 'ember-data';
const { Model, attr } = DS; 

export default Model.extend({
  college: attr('string'),
  work: attr('string'), 
  profile: DS.belongsTo('profile')
});
