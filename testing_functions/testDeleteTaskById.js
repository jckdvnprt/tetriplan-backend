const deleteTaskById = require("../utils/deleteTaskById");

async function testDeleteTask() {
  try {
    const taskIDToDelete = "123";
    await deleteTaskById(taskIDToDelete);
    console.log(`Task with ID ${taskIDToDelete} deleted successfully`);
  } catch (error) {
    console.error("Error deleting task:", error);
  }
}

testDeleteTask().catch(console.error);
