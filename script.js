// Task Assignment
const taskList = document.getElementById("task-list");
const taskInput = document.getElementById("task-input");
const assigneeInput = document.getElementById("assignee-input");
const assignTaskButton = document.getElementById("assign-task");

assignTaskButton.addEventListener("click", () => {
    const taskText = taskInput.value;
    const assignee = assigneeInput.value;

    if (taskText.trim() !== "" && assignee.trim() !== "") {
        const taskItem = document.createElement("li");
        taskItem.textContent = `${taskText} (Assignee: ${assignee})`;
        taskList.appendChild(taskItem);
        taskInput.value = "";
        assigneeInput.value = "";
    }
});

// Chat
const chatMessages = document.getElementById("chat-messages");
const chatInput = document.getElementById("chat-input");
const sendMessageButton = document.getElementById("send-message");

sendMessageButton.addEventListener("click", () => {
    const messageText = chatInput.value;
    if (messageText.trim() !== "") {
        const messageItem = document.createElement("div");
        messageItem.textContent = messageText;
        chatMessages.appendChild(messageItem);
        chatInput.value = "";
    }
});
