import { useEffect, useState } from 'react';
import EmployerAllNotificationService from './../../services/EmployerService/EmployerAllNotificationService';

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedNotification, setSelectedNotification] = useState(null);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const data = await EmployerAllNotificationService.EmployerAllNotification();
        setNotifications(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchNotifications();
  }, []);

  const getTypeColor = (type) => {
    const typeColors = {
      message: 'bg-blue-100 text-blue-800',
      project_update: 'bg-green-100 text-green-800',
      reminder: 'bg-yellow-100 text-yellow-800',
      content: 'bg-purple-100 text-purple-800',
      system: 'bg-red-100 text-red-800',
    };
    return typeColors[type] || 'bg-gray-100 text-gray-800';
  };

  const formatDate = (dateString) => {
    const options = {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 p-4 flex items-center justify-center">
        <div className="text-gray-600">Loading notifications...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 p-4 flex items-center justify-center">
        <div className="text-red-500">Error: {error}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Notifications</h1>
          <span className="text-gray-500 text-sm">
            {notifications.length} total notifications
          </span>
        </div>

        {notifications.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-gray-500">No notifications available</div>
          </div>
        ) : (
          <div className="space-y-3">
            {notifications.map((notification) => (
              <div
                key={notification.id}
                onClick={() => setSelectedNotification(notification)}
                className={`p-4 bg-white rounded-lg shadow-xs border border-gray-200 hover:border-blue-200 cursor-pointer transition-all ${!notification.is_read ? 'bg-blue-50 border-l-4 border-l-blue-400' : ''
                  }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <span
                      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(
                        notification.type
                      )}`}
                    >
                      {notification.get_type_display}
                    </span>
                    <span className="text-gray-900 line-clamp-1">
                      {notification.message}
                    </span>
                  </div>
                  <span className="text-sm text-gray-400">
                    {formatDate(notification.created_at)}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Detail Modal */}
        {selectedNotification && (
          <div className="fixed inset-0 bg-transparent bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-xl shadow-lg max-w-xl w-full">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Notification Details
                  </h3>
                  <button
                    onClick={() => setSelectedNotification(null)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-gray-500">Type</label>
                    <p className={`mt-1 px-3 py-1 rounded-full text-sm ${getTypeColor(selectedNotification.type)}`}>
                      {selectedNotification.get_type_display}
                    </p>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-500">Message</label>
                    <p className="mt-1 text-gray-900 whitespace-pre-wrap">
                      {selectedNotification.message}
                    </p>
                  </div>

                  {selectedNotification.related_project && (
                    <div>
                      <label className="text-sm font-medium text-gray-500">Related Project</label>
                      <p className="mt-1 text-gray-900">
                        {selectedNotification.related_project.name}
                      </p>
                    </div>
                  )}

                  <div>
                    <label className="text-sm font-medium text-gray-500">Date & Time</label>
                    <p className="mt-1 text-gray-900">
                      {formatDate(selectedNotification.created_at)}
                    </p>
                  </div>

                  {selectedNotification.action_url && (
                    <div className="pt-4">
                      <a
                        href={selectedNotification.action_url}
                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Action Details
                        <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Notifications;