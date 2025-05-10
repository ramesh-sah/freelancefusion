import React, { useState, useEffect } from 'react';
import { FaReact } from 'react-icons/fa';
import FreelancerMessageService from '../../services/FreelancerService/FreelancerMessageService';

export default function FreelancerMessage({ currentUserId = 1 }) {
  const [contacts, setContacts] = useState([]);
  const [messages, setMessages] = useState({});
  const [selectedContactId, setSelectedContactId] = useState(null);
  const [newMessage, setNewMessage] = useState('');

  // Fetch messages from API and group by contact
  useEffect(() => {
    FreelancerMessageService.FreelancerMessage()
      .then(data => {
        const grouped = {};
        const contactSet = {};

        data.forEach(msg => {
          const otherId = msg.sender === currentUserId ? msg.receiver : msg.sender;
          contactSet[otherId] = true;
          if (!grouped[otherId]) grouped[otherId] = [];
          grouped[otherId].push(msg);
        });

        // Build contacts list from messages
        const contactsArr = Object.keys(contactSet).map(id => ({
          id: parseInt(id, 10),
          name: `User ${id}`,                        // replace with actual user lookup if available
          avatar: `https://i.pravatar.cc/40?img=${id}`,
        }));

        setContacts(contactsArr);
        setMessages(grouped);
        if (contactsArr.length) setSelectedContactId(contactsArr[0].id);
      })
      .catch(error => console.error('Error fetching messages:', error));
  }, [currentUserId]);

  const selectedContact = contacts.find(c => c.id === selectedContactId) || {};
  const chatHistory = messages[selectedContactId] || [];

  const handleSend = () => {
    if (!newMessage.trim()) return;
    // TODO: Implement POST to send message via API, then update local state.
    const timestamp = new Date();
    const localMsg = {
      id: timestamp.getTime(),
      sender: currentUserId,
      receiver: selectedContactId,
      message: newMessage.trim(),
      sent_at: timestamp.toISOString(),
      is_read: false,
      chat_room: `${currentUserId}-${selectedContactId}`,
      attachment: null,
      status: 'sent',
    };
    setMessages(prev => ({
      ...prev,
      [selectedContactId]: [...(prev[selectedContactId] || []), localMsg],
    }));
    setNewMessage('');
  };

  return (
    <div className="flex h-screen bg-white text-black">
      {/* Sidebar: Contacts */}
      <aside className="w-1/4 border-r border-gray-200 p-4">
        <div className="flex items-center mb-6">
          <FaReact className="text-blue-500 text-2xl mr-2" />
          <h1 className="text-xl font-bold">React Chat</h1>
        </div>
        <ul>
          {contacts.map(contact => (
            <li
              key={contact.id}
              onClick={() => setSelectedContactId(contact.id)}
              className={`flex items-center p-2 mb-2 rounded-lg cursor-pointer hover:bg-gray-100 ${selectedContactId === contact.id ? 'bg-gray-100' : ''
                }`}
            >
              <img src={contact.avatar} alt={contact.name} className="w-10 h-10 rounded-full mr-3" />
              <span className="font-medium">{contact.name}</span>
            </li>
          ))}
        </ul>
      </aside>

      {/* Main chat area */}
      <section className="flex-1 flex flex-col">
        <header className="border-b border-gray-200 p-4 flex items-center">
          {selectedContact.avatar && (
            <img
              src={selectedContact.avatar}
              alt={selectedContact.name}
              className="w-10 h-10 rounded-full mr-3"
            />
          )}
          <h2 className="text-lg font-semibold">{selectedContact.name || 'Select a contact'}</h2>
        </header>

        <main className="flex-1 overflow-y-auto p-4 space-y-4">
          {chatHistory.map(msg => (
            <div
              key={msg.id}
              className={`flex ${msg.sender === currentUserId ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-xs p-3 rounded-lg ${msg.sender === currentUserId ? 'bg-blue-500 text-white' : 'bg-gray-100 text-black'
                  }`}
              >
                <p className="text-sm leading-snug">{msg.message}</p>
                <span className="text-xs block text-right mt-1 text-gray-500">
                  {new Date(msg.sent_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </span>
                {msg.attachment && (
                  <a
                    href={msg.attachment}
                    className="text-xs underline mt-1 block"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Attachment
                  </a>
                )}
              </div>
            </div>
          ))}
        </main>

        <footer className="border-t border-gray-200 p-4 flex items-center">
          <input
            type="text"
            className="flex-1 border border-gray-300 rounded-full px-4 py-2 mr-4 focus:outline-none focus:ring-2 focus:ring-blue-200"
            placeholder="Type your message..."
            value={newMessage}
            onChange={e => setNewMessage(e.target.value)}
            onKeyPress={e => e.key === 'Enter' && handleSend()}
          />
          <button
            onClick={handleSend}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-full shadow"
          >
            Send
          </button>
        </footer>
      </section>
    </div>
  );
}
