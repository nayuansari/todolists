const todoList = () => {
    all = []

    // Add items to the list
    const add = (todoItem) => {
        all.push(todoItem)
    }

    // mark an item as done
    const markAsComplete = (index) => {
            all[index].completed = true
        }
        // List all items which are overdue
    const overdue = () => {
        return all.filter((item) => {
            return item.dueDate <= yesterday && item.completed === false
        })
    }

    // List all items which are due today
    const dueToday = () => {
        return all.filter((item) => {
            return item.dueDate === today
        })
    }

    // List all items which are due later
    const dueLater = () => {
        return all.filter((item) => {
            return item.dueDate >= tomorrow
        })
    }

    // Utility function to print the list
    const toDisplayableList = (list) => {
        let mylist = [];
        list.forEach((item) => {
            if (item.dueDate === today) {
                if (item.completed === true) {
                    mylist.push(`[x] ${item.title}`)
                } else {
                    mylist.push(`[ ] ${item.title}`)
                }
            } else {
                if (item.completed === true) {
                    mylist.push(`[x] ${item.title} ${item.dueDate}`)
                } else {
                    mylist.push(`[ ] ${item.title} ${item.dueDate}`)
                }
            }
        })
        return mylist.join("\n")
    }
    return { all, add, markAsComplete, overdue, dueToday, dueLater, toDisplayableList };
}

// ####################################### #
// DO NOT CHANGE ANYTHING BELOW THIS LINE. #
// ####################################### #

const todos = todoList();

const formattedDate = d => {
    return d.toISOString().split("T")[0]
}

var dateToday = new Date()
const today = formattedDate(dateToday)
const yesterday = formattedDate(
    new Date(new Date().setDate(dateToday.getDate() - 1))
)
const tomorrow = formattedDate(
    new Date(new Date().setDate(dateToday.getDate() + 1))
)

todos.add({ title: 'Submit assignment', dueDate: yesterday, completed: false })
todos.add({ title: 'Pay rent', dueDate: today, completed: true })
todos.add({ title: 'Service Vehicle', dueDate: today, completed: false })
todos.add({ title: 'File taxes', dueDate: tomorrow, completed: false })
todos.add({ title: 'Pay electric bill', dueDate: tomorrow, completed: false })

console.log("My Todo-list\n\n")

console.log("Overdue")
var overdues = todos.overdue()
var formattedOverdues = todos.toDisplayableList(overdues)
console.log(formattedOverdues)
console.log("\n\n")

console.log("Due Today")
let itemsDueToday = todos.dueToday()
let formattedItemsDueToday = todos.toDisplayableList(itemsDueToday)
console.log(formattedItemsDueToday)
console.log("\n\n")

console.log("Due Later")
let itemsDueLater = todos.dueLater()
let formattedItemsDueLater = todos.toDisplayableList(itemsDueLater)
console.log(formattedItemsDueLater)
console.log("\n\n")