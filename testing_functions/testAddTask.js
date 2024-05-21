const addTask = require("../utils/addTask");

async function main() {
  try {
    const taskID = 123;
    const userID = 1;
    const taskName = "Test Task 123";
    const description = "This is a test task 123";
    const category = "123";
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
