let menu = prompt("What would you like to do?");

const taskList = [];

while (menu !== "quit") {
    if (menu === "list") {
        console.log("********")
        for (let i = 0; i < taskList.length; i++) {
            console.log(`${i}: ${taskList[i]}`);
        }
        console.log("********")
    } else if (menu === "new") {
        const newTask = prompt("Add new task");
        taskList.push(newTask);
        console.log(`${newTask} added to the list`)
    } else if (menu === "delete") {
        const index = parseInt(prompt("Enter the index of the item you want to delete"));
        const deleted = taskList.splice(index, 1);
        console.log(`${deleted[0]} has been deleted`);
    }

    menu = prompt("What would you like to do?")
}
console.log("Tasklist complete")



//let taskList = []

//let newTask = taskList.push(newTask)

//if (menu.toLowerCase() = "new") {
    //newTask = prompt("Add a task")
//}
//else if (menu.toLowerCase() = "list") {
    //console.log(taskList)
    //menu = prompt("What would you like do to?")
//}
//else if (menu.toLowerCase() = "delete") {
    //prompt("Which task would you like to delete?")
//}
//else if (menu.toLowerCase() = "quit") {
    //console.log("Tasklist complete")
//}