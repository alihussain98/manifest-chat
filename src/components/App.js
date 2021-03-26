import Header from './Header';
import '../styles/App.css';
import BotIntro from './BotIntro.js';
import Chat from './Chat';
import ChatContextProvider from '../ChatContext';
import UserInput from './UserInput';


function App() {
  return (
    <div className="app">
      <div className="app_body">
        <ChatContextProvider>
          <Header />
          <BotIntro />
          <Chat />
          <UserInput />
        </ChatContextProvider> </div>
    </div>
  );
}

export default App;
