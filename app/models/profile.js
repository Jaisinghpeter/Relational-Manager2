import DS from 'ember-data';
import friend from './friend';
const { Model } = DS;

export default Model.extend({
  detail: DS.belongsTo('detail'),
  friend: DS.belongsTo('friend')
});
