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

// Interface logic
$(document).ready(function() {
  $("form#new-task").submit(function(event) {
    event.preventDefault();

    var title, due, notes, priority;
    title = $("#new-title").val();
    due = new Date($("#new-due").val());
    notes = $("#new-notes").val();
    priority = parseInt($("#new-priority").val());

    var newTask = new Task(title, due, notes, priority);
    tasks.push(newTask);

    $("#tasks ul").append("<li><span class='task'>" + newTask.title + "</span></li>");
    $("#tasks ul").last().click(function() {
      $("#show-title").text(newTask.title);
      $("#show-due").text(newTask.due.toDateString());
      $("#show-notes").text(newTask.notes);
      $("#show-priority").text(newTask.priorityString());

      $("#show-task").show();
    });

    $("#new-title").val("");
    $("#new-due").val("");
    $("#new-notes").val("");
    $("#new-priority").val("2");
  });
});
