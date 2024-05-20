const addTask = require("./utils/addTask");
const addUser = require("./utils/addUser");

addUser("124124", "tamya", "tamya@gmail.com")
  .then((user) => {
    console.log("User added and found:", user);
    const taskID = "232434";
    const userID = "234234";
    const taskName = "Walk The Rat";
    const description = "I need to walk the rat after work";
    const category = "Pets";
    const date = "2024-09-21";
    const startTime = "19:00";
    const endTime = "19:40";
    const duration = "40 Minutes";
    const completionStatus = false;
    const label = "Personal";
    const priority = "low";
    async function main() {
      try {
        const task = await addTask(
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
        console.log("Task added and found:", task);
      } catch (error) {
        console.error(error);
      }
    }
    main();
  })
  .catch(console.error);
