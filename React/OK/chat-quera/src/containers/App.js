import React, { useEffect, useState } from "react";
import MessageForm from "../components/MessageForm/MessageForm";
import MessageList from "../components/MessageList/MessageList";
import "./App.css";

function App() {
  const [messages, setMessages] = useState([]);

  const onMessageSend = async (valueInput) => {
    setMessages([...messages, { me: "me", body: valueInput }]);

    let response = await fetch(
      decodeURI(`http://localhost:3001/message/${valueInput}`)
    );
    let dataFinal = await response.text();
    let message = JSON.parse(dataFinal);

    setMessages((messages) => [...messages, { body: message.message }]);
  };

  return (
    <div className="App">
      <MessageList messages={messages} />
      <MessageForm onMessageSend={onMessageSend} />
    </div>
  );
}

export default App;
