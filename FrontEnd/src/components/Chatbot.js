import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';

const steps = [
    {
        id: '0',
        message: 'Hey Geek!',
        trigger: '1',
    }, {
        id: '1',
        message: 'Please write your username',
        trigger: '2'
    }, {
        id: '2',
        user: true,
        trigger: '3',
    }, {
        id: '3',
        message: " hi {previousValue}, how can I help you?",
        trigger: 4
    }, {
        id: '4',
        options: [
            { value: 1, label: 'View Courses' },
            { value: 2, label: 'Read Articles' },
        ],
        end: true
    }
];

// Creating our own theme
const theme = {
    background: '#FFEEFF',
    headerBgColor: '#999FE3',
    headerFontSize: '20px',
    botBubbleColor: '#D9D9D9',
    headerFontColor: 'white',
    botFontColor: '#000',
    userBubbleColor: '#FF5733',
    userFontColor: '#000',
};

// Set some properties of the bot
const config = {
    botAvatar: "/images/chat.png",
    floating: true,
};

const Chatbot = () => {
    console.log("render")
    return (
        <div className="">
            <ThemeProvider theme={theme}>
                <ChatBot
                    // This appears as the header
                    // text for the chat bot
                    headerTitle="GeekBot"
                    steps={steps}
                    {...config}

                />
            </ThemeProvider>
        </div>
    );

}

export default Chatbot
