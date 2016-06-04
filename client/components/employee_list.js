import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Employees } from '../../imports/collections/employees';

const EmployeeList = (props) => {
  // props.employees => an array of employee objects
  console.log(props);
  
  return (
    <div>
      <div className="employee-list">This is the employee list</div>
    </div>
  )
};

export default createContainer(() => {
  // set up subscription
  Meteor.subscribe('employees');
  // return object- whatever we return will be props for EmployeeList
  return { employees: Employees.find({}).fetch()};
}, EmployeeList);
