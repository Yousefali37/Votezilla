import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Css/FAQs.css";
import faqsData from "./FaqData";
import GoBackBtn from "../../Components/Go Back btn/GoBackBtn";

export default function FAQs() {
    const [messages, setMessages] = useState([
        { type: "bot", text: "Hello! How Can I Help You?" },
    ]);

    const handleFaqClick = (question, answer) => {
        setMessages((prevMessages) => [
            ...prevMessages,
            { type: "user", text: question },
            { type: "bot", text: answer },
        ]);
    };

    return (
        <div className="container-fluid chatbot-container">
            {/* FAQ Section */}
            <div className="faq-section p-3">
                <div className="d-flex align-items-center mb-3">
                    <GoBackBtn />
                    <h3 className="ms-3 mx-md-5">Frequently Asked Questions</h3>
                </div>
                <ul className="list-unstyled mt-3">
                    {faqsData.map((item, index) => (
                        <li
                            key={index}
                            className="faq-item p-2 text-dark"
                            onClick={() => handleFaqClick(item.question, item.answer)}
                        >
                            {item.question}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Chat Section */}
            <div className="chat-section p-3">
                <div className="messages-container p-3">
                    {messages.map((msg, index) => (
                        <div key={index} className={`message ${msg.type === "bot" ? "bot-message" : "user-message"}`}>
                            {msg.text}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
