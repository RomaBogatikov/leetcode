// 690. Employee Importance

// You are given a data structure of employee information, which includes the employee's unique id, their importance value and their direct subordinates' id.

// For example, employee 1 is the leader of employee 2, and employee 2 is the leader of employee 3. They have importance value 15, 10 and 5, respectively. Then employee 1 has a data structure like [1, 15, [2]], and employee 2 has [2, 10, [3]], and employee 3 has [3, 5, []]. Note that although employee 3 is also a subordinate of employee 1, the relationship is not direct.

// Now given the employee information of a company, and an employee id, you need to return the total importance value of this employee and all their subordinates.

// Example 1:

// Input: [[1, 5, [2, 3]], [2, 3, []], [3, 3, []]], 1
// Output: 11
// Explanation:
// Employee 1 has importance value 5, and he has two direct subordinates: employee 2 and employee 3. They both have importance value 3. So the total importance value of employee 1 is 5 + 3 + 3 = 11.


// Note:

// One employee has at most one direct leader and may have several subordinates.
// The maximum number of employees won't exceed 2000.

// my solution stack
// O(n2) time
// O(n) space
var GetImportance = function(employees, id) {
  let stack = [id];
  let totalImportance = 0;
  while (stack.length) {
      let idFromStack = stack.pop();
      for (let employee of employees) {
          if (employee.id === idFromStack) {
              totalImportance += employee.importance;

              for (let i = 0; i < employee.subordinates.length; i++) {
                  stack.push(employee.subordinates[i]);
              }
          }
      }
  }

  return totalImportance;
};

// my solution recursive
// O(n2) time
// O(n) space
var GetImportance = function(employees, id) {
  let employee = employees.filter((emp) => emp.id === id)[0];
  if (!employee) return 0;
  const { importance } = employee;

  if (!employee.subordinates.length) return importance;

  return importance + employee.subordinates.reduce((acc, idSubord) => {
      acc += GetImportance(employees, idSubord);
      return acc;
  }, 0)
};

// O(n) time
// O(n) space
var GetImportance = function(employees, id) {
  let map = employees.reduce((acc, employee) => {
      acc[employee.id] = employee;
      return acc;
  }, {});
  let stack = [id];
  let totalImportance = 0;
  while (stack.length) {
      let idFromStack = stack.pop();

      totalImportance += map[idFromStack].importance;

      stack = [...stack, ...map[idFromStack].subordinates];

  }

  return totalImportance;
};

// dfs approach
// O(n) time
// O(n) space
var GetImportance = function(employees, id) {
  var dfs = function(id) {
      let employee = map[id];
      let ans = employee.importance;

      for (let subid of employee.subordinates) {
          ans += dfs(subid);
      }

      return ans;
  }

  let map = {};

  for (let employee of employees) {
      map[employee.id] = employee;
  }

  return dfs(id)
};
