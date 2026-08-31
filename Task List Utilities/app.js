const tasks = [
  { id: 1, title: 'Review variables', completed: true },
  { id: 2, title: 'Practice functions', completed: false }
];

function addTask(tasks, title) {
    let newArr = tasks.slice();
    newArr.push({id: (newArr.length + 1), title, completed: false});
    return newArr
}

function completeTask(tasks, taskId) {
    let clone = tasks.slice();
    let res = Array.from(clone).map((el) => {
        if(el.id === taskId) el.completed = true
        return el
    })
    return res
    //should return a new array where only the matching task is completed.
}
function removeTask(tasks, taskId){
    let clone = tasks.slice();
    let res = Array.from(clone).filter(el => el.id !== taskId )
    return res
 //should return a new array without the matching task.
}
function countIncompleteTasks(tasks) {
    let clone = tasks.slice();
    let res = Array.from(clone).filter(el => el.completed !== true);
    return res.length
    //should return the number of incomplete tasks.
}



function check(task){
    for (let i of Object.values(task)){
        console.log(i)
    }
}

console.log(check(tasks))

const withNewTask = addTask(tasks, 'Build task utilities');
console.log(withNewTask.map((task) => task.title));

const completed = completeTask(withNewTask, 2);
console.log(countIncompleteTasks(completed));

console.log(removeTask(completed, 1).map((task) => task.id));
console.log(tasks.length);
console.log(countIncompleteTasks(tasks));