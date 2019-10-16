import DS from 'ember-data';
const { Model, attr } = DS; 

export default Model.extend({
  name: attr('string'),
  college: attr('string'),
  work: attr('string'), 
  gender: attr('string'),
  profile: DS.belongsTo('profile')
});
