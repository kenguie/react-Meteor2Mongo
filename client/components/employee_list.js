import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Employees } from '../../imports/collections/employees';
import EmployeeDetail from './employee_detail';

var PER_PAGE = 20;

const EmployeeList = (props) => {
  // props.employees => an array of employee objects
  console.log(props.employees);

  return (
    <div>
      <div className="employee-list">
        {props.employees.map(employee => <EmployeeDetail key={employee._id} employee={employee} />)}  {/* no { } on the function makes it automatically return !  */}
      </div>
      <button onClick={() => Meteor.subscribe('employees', PER_PAGE=PER_PAGE+20)}
        className="btn btn-primary">
        Load More ...
      </button>
    </div>
  )
};

export default createContainer(() => {
  // set up subscription
  Meteor.subscribe('employees', PER_PAGE);
  // return object- whatever we return will be props for EmployeeList
  return { employees: Employees.find({}).fetch()};
}, EmployeeList);
