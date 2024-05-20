// addTaskTest.js
const addTask = require("../utils/addTask");

async function main() {
  try {
    // Basic test data
    const taskID = "3";
    const userID = "1";
    const taskName = "Test Task 3";
    const description = "This is a test task 3";
    const category = "Test";
    const date = "2024-05-20";
    const startTime = "09:00";
    const endTime = "10:00";
    const duration = "1 hour";
    const completionStatus = false;
    const label = "Test Label";
    const priority = "medium";

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

    console.log("New task added:", newTask);
  } catch (error) {
    console.error("Error adding task:", error);
  }
}

// Execute the main function
main().catch(console.error);
