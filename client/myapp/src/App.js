import ChatBoxReciever, { ChatBoxSender } from "./components/ChatBox"
import ChatContainer from "./components/ChatContainer";
import InputText from "./components/InputText";

function App() {
  return (
    <div style={{backgroundColor: "#ece5dd", minHeight: "100vh", padding: "20px"}}>
        <ChatContainer/>
    </div>
  );
}

export default App;
