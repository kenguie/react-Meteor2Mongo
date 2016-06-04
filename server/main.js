import _ from 'lodash';
import {image, helpers } from 'faker';
import { Meteor } from 'meteor/meteor';
import { Employees } from '../imports/collections/employees';

Meteor.startup(() => {
  // generate data here !
  const numberRecords = Employees.find({}).count();
  console.log(numberRecords);

  if (!numberRecords) {
    _.times(5000, () => {
      const { name, email, phone } = helpers.createCard();

      Employees.insert({
        name, email, phone,
        avatar: image.avatar()
      });
    });
  }

  Meteor.publish('employees', () => {
    return Employees.find({}, { limit: 20 });
  })
});
