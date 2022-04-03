import React, { useEffect, useRef, useState } from "react";
import "./MessageForm.css";

function MessageForm({ onMessageSend }) {
  const inputRef = useRef();
  const [valueInput, setValueInput] = useState("");
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  async function handleFormSubmit(event) {
    event.preventDefault();
    if (!/^ *$/.test(valueInput)) {
      onMessageSend(valueInput);
      setValueInput("");

      ;
    }
  }

  return (
    <form
      className="MessageForm"
      onSubmit={handleFormSubmit}
      data-testid="submit-message"
    >
      <div className="input-container">
        <input
          ref={inputRef}
          value={valueInput}
          onChange={(e) => setValueInput(e.target.value)}
          data-testid="input-message"
          type="text"
          placeholder="پیام خود را اینجا بنویسید..."
        />
      </div>
      <div className="button-container">
        <button type="submit">ارسال</button>
      </div>
    </form>
  );
}

export default MessageForm;
