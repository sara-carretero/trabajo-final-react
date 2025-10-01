import Message from "./Message";

const messages = [
  { id: 1, text: "Hi Aiden, how are you? How is the project coming along?", sender: "sent", time: "10:10 AM, Today" },
  { id: 2, text: "Are we meeting today?", sender: "received", time: "10:12 AM, Today" },
  { id: 3, text: "Project has been already finished and I have results to show you.", sender: "received", time: "10:15 AM, Today" },
];

export default function MessageList() {
  return (
    <section className="chat-messages">
      {messages.map(message => (
        <div className={`message-${message.sender}`}>
          <p>{message.text}</p>
          <p className="timestamp">{message.time}</p>
        </div>
      ))}
    </section>
  );
}