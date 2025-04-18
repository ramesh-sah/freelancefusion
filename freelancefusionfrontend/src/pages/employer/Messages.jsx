import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

const Message = ({
  userId,
  initialContacts = [],
  initialMessages = {},
  theme = 'light',
  messageSound = true,
  typingIndicator = true,
  readReceipts = true,
  onlineStatus = true,
  messageLimit = 1000,
  onSendMessage,
  onContactSelect,
  onSettingsClick,
  onFileUpload
}) => {
  // State management
  const [contacts, setContacts] = useState(initialContacts);
  const [selectedContact, setSelectedContact] = useState(null);
  const [messages, setMessages] = useState(initialMessages);
  const [newMessage, setNewMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [typingContact, setTypingContact] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [unreadCounts, setUnreadCounts] = useState({});
  const [attachments, setAttachments] = useState([]);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [emojiPickerOpen, setEmojiPickerOpen] = useState(false);

  // Refs
  const messagesEndRef = useRef(null);
  const fileInputRef = useRef(null);
  const inputRef = useRef(null);

  // Theme configuration
  const themes = {
    light: {
      primary: 'bg-indigo-600',
      primaryText: 'text-white',
      secondary: 'bg-white',
      secondaryText: 'text-gray-800',
      background: 'bg-gray-100',
      messageIncoming: 'bg-white',
      messageOutgoing: 'bg-indigo-600 text-white',
      border: 'border-gray-200',
    },
    dark: {
      primary: 'bg-gray-800',
      primaryText: 'text-white',
      secondary: 'bg-gray-700',
      secondaryText: 'text-white',
      background: 'bg-gray-900',
      messageIncoming: 'bg-gray-700 text-white',
      messageOutgoing: 'bg-blue-600 text-white',
      border: 'border-gray-600',
    },
  };

  const currentTheme = themes[theme] || themes.light;

  // Scroll to bottom of messages
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Load more messages when scrolling up
  const handleScroll = (e) => {
    const { scrollTop } = e.target;
    if (scrollTop === 0) {
      // Implement pagination logic here
    }
  };

  // Handle sending a new message
  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!newMessage.trim() || !selectedContact) return;

    const message = {
      id: Date.now(),
      senderId: userId,
      receiverId: selectedContact.id,
      content: newMessage,
      timestamp: new Date().toISOString(),
      status: 'sent',
      attachments: attachments,
    };

    // Update local state
    setMessages(prev => ({
      ...prev,
      [selectedContact.id]: [...(prev[selectedContact.id] || []), message]
    }));

    // Notify parent component
    if (onSendMessage) {
      onSendMessage({
        ...message,
        contact: selectedContact
      });
    }

    // Reset input
    setNewMessage('');
    setAttachments([]);
    setEmojiPickerOpen(false);
  };

  // Handle file upload
  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files);
    if (files.length > 0) {
      setAttachments(files);
    }
  };

  // Handle contact selection
  const handleContactSelect = (contact) => {
    setSelectedContact(contact);
    setUnreadCounts(prev => ({ ...prev, [contact.id]: 0 }));
    if (onContactSelect) {
      onContactSelect(contact);
    }
  };

  // Format message timestamp
  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  // Filter contacts based on search
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Mark messages as read
  const markMessagesAsRead = (contactId) => {
    if (messages[contactId]) {
      const updatedMessages = messages[contactId].map(msg =>
        msg.senderId !== userId && msg.status !== 'read'
          ? { ...msg, status: 'read' }
          : msg
      );
      setMessages(prev => ({ ...prev, [contactId]: updatedMessages }));
    }
  };

  // Handle typing indicator
  const handleTyping = (isTyping, contact) => {
    setIsTyping(isTyping);
    setTypingContact(contact);
  };

  // Effects
  useEffect(() => {
    if (selectedContact) {
      scrollToBottom();
      markMessagesAsRead(selectedContact.id);
    }
  }, [messages, selectedContact]);

  useEffect(() => {
    // Simulate receiving a message
    const timer = setTimeout(() => {
      if (contacts.length > 0 && !selectedContact) {
        handleContactSelect(contacts[0]);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [contacts]);

  return (
    <div className={`flex flex-col h-screen ${currentTheme.background}`}>
      {/* Header */}
      <header className={`${currentTheme.primary} ${currentTheme.primaryText} shadow-md px-6 py-4 flex items-center justify-between`}>
        <div className="flex items-center space-x-3">
          <div className={`rounded-full p-2 ${currentTheme.primary}`}>
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-4l-4 4z"
              />
            </svg>
          </div>
          <h1 className="text-2xl font-bold">Professional Chat</h1>
        </div>
        <div className="flex items-center space-x-4">
          <button
            onClick={() => onSettingsClick && onSettingsClick()}
            className="hover:bg-opacity-80 p-2 rounded-full transition"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </button>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar - Contacts */}
        <aside className={`w-80 ${currentTheme.secondary} border-r ${currentTheme.border} flex flex-col`}>
          <div className="p-4 border-b border-gray-200">
            <div className="relative">
              <input
                type="text"
                placeholder="Search contacts..."
                className={`w-full px-4 py-2 rounded-lg ${currentTheme.background} focus:outline-none ${currentTheme.secondaryText}`}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <svg
                className="absolute right-3 top-2.5 h-5 w-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>

          <div className="overflow-y-auto flex-1">
            <h2 className="text-lg font-semibold px-6 py-3">Contacts ({filteredContacts.length})</h2>
            <ul className="space-y-1 px-2">
              {filteredContacts.map(contact => (
                <li
                  key={contact.id}
                  className={`flex items-center p-3 rounded-lg cursor-pointer transition ${selectedContact?.id === contact.id ? currentTheme.primary + ' ' + currentTheme.primaryText : 'hover:bg-gray-100'}`}
                  onClick={() => handleContactSelect(contact)}
                >
                  <div className="relative">
                    <img
                      src={contact.avatar || 'https://via.placeholder.com/40'}
                      alt={contact.name}
                      className="w-10 h-10 rounded-full mr-3"
                    />
                    {onlineStatus && contact.online && (
                      <div className="absolute bottom-0 right-3 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-center">
                      <p className="font-medium truncate">{contact.name}</p>
                      {messages[contact.id]?.filter(m => m.senderId !== userId && m.status !== 'read').length > 0 && (
                        <span className="bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                          {messages[contact.id]?.filter(m => m.senderId !== userId && m.status !== 'read').length}
                        </span>
                      )}
                    </div>
                    <div className="flex justify-between items-center">
                      <p className="text-sm truncate">
                        {messages[contact.id]?.length > 0
                          ? messages[contact.id][messages[contact.id].length - 1].content.substring(0, 20) + (messages[contact.id][messages[contact.id].length - 1].content.length > 20 ? '...' : '')
                          : 'No messages yet'}
                      </p>
                      <span className="text-xs">
                        {messages[contact.id]?.length > 0
                          ? formatTimestamp(messages[contact.id][messages[contact.id].length - 1].timestamp)
                          : ''}
                      </span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Main Chat Area */}
        <main className="flex-1 flex flex-col">
          {selectedContact ? (
            <>
              {/* Chat header */}
              <div className={`${currentTheme.secondary} ${currentTheme.border} border-b p-4 flex items-center justify-between`}>
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <img
                      src={selectedContact.avatar || 'https://via.placeholder.com/40'}
                      alt={selectedContact.name}
                      className="w-10 h-10 rounded-full"
                    />
                    {onlineStatus && selectedContact.online && (
                      <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                    )}
                  </div>
                  <div>
                    <h2 className="font-semibold">{selectedContact.name}</h2>
                    <p className="text-xs">
                      {typingIndicator && isTyping && typingContact?.id === selectedContact.id
                        ? 'typing...'
                        : selectedContact.online
                          ? 'Online'
                          : 'Last seen recently'}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <button className="p-2 rounded-full hover:bg-gray-100">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </button>
                  <button className="p-2 rounded-full hover:bg-gray-100">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </button>
                  <div className="relative">
                    <button
                      className="p-2 rounded-full hover:bg-gray-100"
                      onClick={() => setDropdownOpen(dropdownOpen === 'contact' ? null : 'contact')}
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                      </svg>
                    </button>
                    {dropdownOpen === 'contact' && (
                      <div className={`absolute right-0 mt-2 w-48 rounded-md shadow-lg ${currentTheme.secondary} z-10`}>
                        <div className="py-1">
                          <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">View Profile</button>
                          <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">Mute Notifications</button>
                          <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">Clear Chat</button>
                          <button className="block w-full text-left px-4 py-2 text-red-500 hover:bg-gray-100">Block Contact</button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Messages area */}
              <div
                className="flex-1 p-6 overflow-y-auto space-y-4"
                onScroll={handleScroll}
              >
                {messages[selectedContact.id]?.length > 0 ? (
                  messages[selectedContact.id].map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.senderId === userId ? 'justify-end' : 'justify-start'}`}
                    >
                      <div className={`flex ${message.senderId === userId ? 'flex-row-reverse' : ''} max-w-xs md:max-w-md lg:max-w-lg`}>
                        <img
                          src={
                            message.senderId === userId
                              ? 'https://via.placeholder.com/40'
                              : selectedContact.avatar || 'https://via.placeholder.com/40'
                          }
                          alt={message.senderId === userId ? 'You' : selectedContact.name}
                          className="w-8 h-8 rounded-full mt-1"
                        />
                        <div
                          className={`mx-2 p-3 rounded-lg shadow ${message.senderId === userId ? currentTheme.messageOutgoing : currentTheme.messageIncoming}`}
                        >
                          {/* Display attachments if any */}
                          {message.attachments?.length > 0 && (
                            <div className="mb-2">
                              {message.attachments.map((file, index) => (
                                <div key={index} className="mb-2 last:mb-0">
                                  {file.type.startsWith('image/') ? (
                                    <img
                                      src={URL.createObjectURL(file)}
                                      alt={`Attachment ${index + 1}`}
                                      className="max-w-full h-auto rounded"
                                    />
                                  ) : (
                                    <a
                                      href={URL.createObjectURL(file)}
                                      download={file.name}
                                      className="flex items-center p-2 border rounded bg-gray-100 hover:bg-gray-200"
                                    >
                                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                      </svg>
                                      <span className="truncate">{file.name}</span>
                                    </a>
                                  )}
                                </div>
                              ))}
                            </div>
                          )}
                          <p className="break-words">{message.content}</p>
                          <div className={`flex items-center justify-end mt-1 space-x-1 text-xs ${message.senderId === userId ? 'text-indigo-200' : 'text-gray-500'}`}>
                            <span>{formatTimestamp(message.timestamp)}</span>
                            {message.senderId === userId && readReceipts && (
                              <span>
                                {message.status === 'sent' ? (
                                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2z" />
                                  </svg>
                                ) : message.status === 'delivered' ? (
                                  <span className="flex">
                                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                      <path d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2z" />
                                    </svg>
                                    <svg className="w-3 h-3 -ml-1" fill="currentColor" viewBox="0 0 20 20">
                                      <path d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2z" />
                                    </svg>
                                  </span>
                                ) : message.status === 'read' ? (
                                  <span className="flex text-blue-400">
                                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                      <path d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2z" />
                                    </svg>
                                    <svg className="w-3 h-3 -ml-1" fill="currentColor" viewBox="0 0 20 20">
                                      <path d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2z" />
                                    </svg>
                                  </span>
                                ) : null}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="flex flex-col items-center justify-center h-full text-gray-500">
                    <svg className="w-16 h-16 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    <p>No messages yet. Start the conversation!</p>
                  </div>
                )}
                {typingIndicator && isTyping && typingContact?.id === selectedContact.id && (
                  <div className="flex justify-start">
                    <div className="flex items-center mx-2 p-3 rounded-lg shadow bg-gray-200">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                        <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                        <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Message input */}
              <div className={`border-t ${currentTheme.border} p-4 ${currentTheme.secondary}`}>
                {/* Display attachments preview */}
                {attachments.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-3">
                    {attachments.map((file, index) => (
                      <div key={index} className="relative">
                        {file.type.startsWith('image/') ? (
                          <div className="relative">
                            <img
                              src={URL.createObjectURL(file)}
                              alt={`Preview ${index + 1}`}
                              className="h-20 w-20 object-cover rounded"
                            />
                            <button
                              onClick={() => setAttachments(prev => prev.filter((_, i) => i !== index))}
                              className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center"
                            >
                              ×
                            </button>
                          </div>
                        ) : (
                          <div className="flex items-center p-2 border rounded bg-gray-100">
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                            </svg>
                            <span className="text-sm truncate max-w-xs">{file.name}</span>
                            <button
                              onClick={() => setAttachments(prev => prev.filter((_, i) => i !== index))}
                              className="ml-2 text-red-500"
                            >
                              ×
                            </button>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}

                <form onSubmit={handleSendMessage} className="flex items-center">
                  <div className="relative flex-1">
                    <input
                      ref={inputRef}
                      type="text"
                      placeholder="Type your message..."
                      className={`w-full px-4 py-3 rounded-full ${currentTheme.background} focus:outline-none`}
                      value={newMessage}
                      onChange={(e) => {
                        setNewMessage(e.target.value);
                        if (typingIndicator) {
                          handleTyping(e.target.value.length > 0, selectedContact);
                        }
                      }}
                      onFocus={() => markMessagesAsRead(selectedContact.id)}
                    />
                    <div className="absolute right-3 top-2.5 flex space-x-1">
                      <button
                        type="button"
                        onClick={() => setEmojiPickerOpen(!emojiPickerOpen)}
                        className="p-1 rounded-full hover:bg-gray-200"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </button>
                      <button
                        type="button"
                        onClick={() => fileInputRef.current.click()}
                        className="p-1 rounded-full hover:bg-gray-200"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                        </svg>
                      </button>
                      <input
                        type="file"
                        ref={fileInputRef}
                        onChange={handleFileUpload}
                        className="hidden"
                        multiple
                      />
                    </div>
                    {emojiPickerOpen && (
                      <div className="absolute bottom-12 right-0 bg-white shadow-lg rounded-lg p-2 w-64 h-64 overflow-y-auto">
                        {/* Implement emoji picker here */}
                        <div className="grid grid-cols-8 gap-1">
                          {['😀', '😃', '😄', '😁', '😆', '😅', '😂', '🤣', '😊', '😇', '🙂', '🙃', '😉', '😌', '😍', '🥰', '😘', '😗', '😙', '😚', '😋', '😛', '😝', '😜', '🤪', '🤨', '🧐', '🤓', '😎', '🤩', '🥳', '😏', '😒', '😞', '😔', '😟', '😕', '🙁', '☹️', '😣', '😖', '😫', '😩', '🥺', '😢', '😭', '😤', '😠', '😡', '🤬', '🤯', '😳', '🥵', '🥶', '😱', '😨', '😰', '😥', '😓', '🤗', '🤔', '🤭', '🤫', '🤥', '😶', '😐', '😑', '😬', '🙄', '😯', '😦', '😧', '😮', '😲', '🥱', '😴', '🤤', '😪', '😵', '🤐', '🥴', '🤢', '🤮', '🤧', '😷', '🤒', '🤕', '🤑', '🤠', '😈', '👿', '👹', '👺', '🤡', '💩', '👻', '💀', '☠️', '👽', '👾', '🤖', '🎃', '😺', '😸', '😹', '😻', '😼', '😽', '🙀', '😿', '😾'].map(emoji => (
                            <button
                              key={emoji}
                              type="button"
                              className="text-xl p-1 hover:bg-gray-100 rounded"
                              onClick={() => {
                                setNewMessage(prev => prev + emoji);
                                setEmojiPickerOpen(false);
                                inputRef.current.focus();
                              }}
                            >
                              {emoji}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                  <button
                    type="submit"
                    disabled={!newMessage.trim() && attachments.length === 0}
                    className={`ml-3 p-3 rounded-full ${newMessage.trim() || attachments.length > 0 ? currentTheme.primary + ' ' + currentTheme.primaryText : 'bg-gray-300 text-white'} transition`}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </button>
                </form>
              </div>
            </>
          ) : (
            <div className="flex-1 flex items-center justify-center text-gray-500">
              <div className="text-center">
                <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
                <h3 className="text-lg font-medium">Select a contact to start chatting</h3>
                <p className="mt-1">Choose from your contacts list on the left</p>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

// Prop types for type checking
Message.propTypes = {
  userId: PropTypes.string.isRequired,
  initialContacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string,
      online: PropTypes.bool,
    })
  ),
  initialMessages: PropTypes.objectOf(
    PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        senderId: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
        timestamp: PropTypes.string.isRequired,
        status: PropTypes.oneOf(['sent', 'delivered', 'read']),
        attachments: PropTypes.array,
      })
    )
  ),
  theme: PropTypes.oneOf(['light', 'dark']),
  messageSound: PropTypes.bool,
  typingIndicator: PropTypes.bool,
  readReceipts: PropTypes.bool,
  onlineStatus: PropTypes.bool,
  messageLimit: PropTypes.number,
  onSendMessage: PropTypes.func,
  onContactSelect: PropTypes.func,
  onSettingsClick: PropTypes.func,
  onFileUpload: PropTypes.func,
};

Message.defaultProps = {
  initialContacts: [],
  initialMessages: {},
  theme: 'light',
  messageSound: true,
  typingIndicator: true,
  readReceipts: true,
  onlineStatus: true,
  messageLimit: 1000,
};

export default Message;