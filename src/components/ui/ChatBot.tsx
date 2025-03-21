
import { useState } from "react";
import { X, MessageSquare, Send } from "lucide-react";
import { Button } from "./button";
import { cn } from "@/lib/utils";

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>([
    { text: "👋 Hi there! How can I help you with your Kashmir trip today?", isUser: false },
  ]);
  const [input, setInput] = useState("");

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSend = () => {
    if (!input.trim()) return;

    // Add user message
    setMessages([...messages, { text: input, isUser: true }]);
    
    // Process response based on input keywords
    const userInput = input.toLowerCase();
    let botResponse = "";

    if (userInput.includes("rate") || userInput.includes("price") || userInput.includes("cost")) {
      botResponse = "Our rates start from ₹1,200 for airport transfers, ₹3,500 for Srinagar-Pahalgam routes, and ₹2,500 for Gulmarg-Srinagar. For other routes, please check our booking page.";
    } else if (userInput.includes("contact") || userInput.includes("call") || userInput.includes("phone") || userInput.includes("whatsapp")) {
      botResponse = "You can contact us via WhatsApp at +91 9149559393 or click the green WhatsApp button in the bottom-left corner.";
    } else if (userInput.includes("book") || userInput.includes("reserve") || userInput.includes("hire")) {
      botResponse = "You can book a cab through our booking portal. Just click on 'Book Now' button on the homepage to see all available routes and vehicles.";
    } else if (userInput.includes("cancel") || userInput.includes("reschedule")) {
      botResponse = "To cancel or reschedule your booking, please contact us directly on WhatsApp at +91 9149559393.";
    } else if (userInput.includes("kashmir") || userInput.includes("srinagar") || userInput.includes("gulmarg") || userInput.includes("pahalgam") || userInput.includes("sonamarg")) {
      botResponse = "We offer premium cab services across all major destinations in Kashmir including Srinagar, Gulmarg, Pahalgam, and Sonamarg. You can book specific routes through our booking portal.";
    } else if (userInput.includes("airport")) {
      botResponse = "We provide airport pickup and drop services in Srinagar. The rate starts from ₹1,200 depending on your destination in the city.";
    } else {
      botResponse = "Thank you for your message. For specific queries about your Kashmir trip, please contact us on WhatsApp at +91 9149559393.";
    }

    // Add bot response with a slight delay to simulate thinking
    setTimeout(() => {
      setMessages(prev => [...prev, { text: botResponse, isUser: false }]);
    }, 500);

    // Clear input
    setInput("");
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  return (
    <>
      {/* Chat toggle button */}
      {!isOpen && (
        <button
          onClick={toggleChat}
          className="fixed bottom-6 right-6 z-50 flex items-center justify-center bg-primary text-white rounded-full p-3 shadow-lg hover:bg-primary/90 transition-all duration-300"
          aria-label="Open chat"
        >
          <MessageSquare className="h-6 w-6" />
        </button>
      )}

      {/* Chat window */}
      <div
        className={cn(
          "fixed bottom-6 right-6 z-50 w-80 sm:w-96 bg-white rounded-lg shadow-xl transition-all duration-300 flex flex-col",
          isOpen ? "h-96" : "h-0 opacity-0 pointer-events-none"
        )}
      >
        {/* Chat header */}
        <div className="bg-primary text-white p-3 rounded-t-lg flex justify-between items-center">
          <h3 className="font-semibold">Glacier Way Cabs Support</h3>
          <Button variant="ghost" size="icon" onClick={toggleChat} className="h-8 w-8 text-white">
            <X className="h-4 w-4" />
          </Button>
        </div>

        {/* Chat messages */}
        <div className="flex-1 overflow-y-auto p-3 space-y-3">
          {messages.map((message, index) => (
            <div
              key={index}
              className={cn(
                "max-w-[80%] p-3 rounded-lg",
                message.isUser
                  ? "bg-primary/10 text-foreground ml-auto"
                  : "bg-muted text-foreground"
              )}
            >
              {message.text}
            </div>
          ))}
        </div>

        {/* Chat input */}
        <div className="border-t p-3 flex items-center gap-2">
          <input
            type="text"
            value={input}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
            placeholder="Type your message..."
            className="flex-1 border rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-primary"
          />
          <Button size="icon" onClick={handleSend} disabled={!input.trim()}>
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </>
  );
};

export default ChatBot;
