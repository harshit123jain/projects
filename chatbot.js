const chatLog = document.querySelector('.chat-log');
const inputField = document.querySelector('.chat-input input[type="text"]');

function createMessageElement(text, sender) {
  const messageElement = document.createElement('div');
  messageElement.classList.add('chat-message', sender + '-message');

  const messageText = document.createElement('p');
  messageText.textContent = text;
  messageElement.appendChild(messageText);

  return messageElement;
}

function sendMessage() {
  const inputText = inputField.value.trim();
  if (!inputText) { 
    return;
  }

  const userMessageElement = createMessageElement(inputText, 'user');
  chatLog.appendChild(userMessageElement);

  const responseText = generateResponse({ messageText: inputText }); 
  const botMessageElement = createMessageElement(responseText, 'bot');
  chatLog.appendChild(botMessageElement);

  inputField.value = ''; 
  chatLog.scrollTop = chatLog.scrollHeight; 
}

function generateResponse(inputText) {
  if (!inputText || !inputText.messageText) {
    return "Sorry, I couldn't understand your input. Can you please rephrase?";
  }

  const messageText = inputText.messageText.toLowerCase().trim(); 

  if (messageText === 'hello') {
    return 'Hello there!';
  }
  else if(messageText === 'what is javascript') {
    return 'it is a programming language'
  }
   else {
    return "I'm still learning! Can you explain that differently, or maybe ask me about something else?";
  }
} 

inputField.addEventListener('keydown', event => {
  if (event.key === 'Enter') {
    sendMessage();
  }
});
document.querySelector('.chat-input button').addEventListener('click', sendMessage);
