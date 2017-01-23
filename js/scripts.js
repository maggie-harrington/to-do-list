// Business logic
var tasks = [];

function Task(title, due, notes, priority) {
  this.title = title;
  this.due = due;
  this.notes = notes;
  this.priority = priority;
}

Task.prototype.priorityString = function() {
  var priorityValue = this.priority;

  if (priorityValue === 3)
    return 'Low';
  else if (priorityValue === 2)
    return 'Normal';
  else if (priorityValue === 1)
    return 'High';
  else
    throw new Error("Invalid value for 'priority' property.");
};
