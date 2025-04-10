import { useEffect, useState } from 'react';
import EmployerAllNotificationService from './../../services/EmployerService/EmployerAllNotificationService';


const Notifications = () => {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
    switch (type) {
      case 'message':
        return 'bg-blue-100 text-blue-800';
      case 'project_update':
        return 'bg-green-100 text-green-800';
      case 'reminder':
        return 'bg-yellow-100 text-yellow-800';
      case 'content':
        return 'bg-purple-100 text-purple-800';
      case 'system':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
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
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Notifications</h1>

        {notifications.length === 0 ? (
          <div className="text-center text-gray-500">No notifications available</div>
        ) : (
          <div className="space-y-4">
            {notifications.map((notification) => (
              <div
                key={notification.id}
                className={`p-4 bg-white rounded-lg shadow-sm border-l-4 ${notification.is_urgent ? 'border-red-500' : 'border-transparent'
                  } ${!notification.is_read ? 'bg-blue-50' : ''}`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getTypeColor(
                          notification.type
                        )}`}
                      >
                        {notification.get_type_display}
                      </span>
                      {!notification.is_read && (
                        <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                      )}
                    </div>
                    <p className="text-gray-900">{notification.message}</p>
                    {notification.action_url && (
                      <a
                        href={notification.action_url}
                        className="mt-2 inline-block text-blue-600 hover:text-blue-800 text-sm"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Details →
                      </a>
                    )}
                  </div>
                  <div className="ml-4 text-sm text-gray-500">
                    {new Date(notification.created_at).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </div>
                </div>
                {notification.related_project && (
                  <div className="mt-2 text-sm text-gray-500">
                    Project: {notification.related_project.name}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Notifications;