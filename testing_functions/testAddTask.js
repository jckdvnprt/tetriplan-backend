// addTaskTest.js
const addTask = require("../utils/addTask");

async function main() {
  try {
    const taskID = "33";
    const userID = "1";
    const taskName = "Test Task 322";
    const description = "This is a test task 333";
    const category = "Test";
    const date = "2024-05-24";
    const startTime = "02:00";
    const endTime = "13:00";
    const duration = "1 hour";
    const completionStatus = false;
    const label = "Test Label";
    const priority = "high";

    const newTask = await addTask(
      taskID,
      userID,
      taskName,
      description,
      category,
      date,
      startTime,
      endTime,
      duration,
      completionStatus,
      label,
      priority
    );
  } catch (error) {
    console.error("Error adding task:", error);
  }
}

main().catch(console.error);
