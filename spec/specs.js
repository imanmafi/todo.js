describe('addTask', function() {

  it('saves a task to the list array', function() {
    var toDoList = []
    var test = addTask("test", toDoList);
    expect(toDoList).to.eql([test]);
  });

});
