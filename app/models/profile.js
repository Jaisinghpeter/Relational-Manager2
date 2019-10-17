import DS from 'ember-data';
import friend from './friend';
const { Model ,attr} = DS;

export default Model.extend({
  detail: DS.belongsTo('detail'),
  friend:attr(),
  personalinfo: DS.belongsTo('personalinfo')
  // friend: DS.belongsTo('friend')
});
