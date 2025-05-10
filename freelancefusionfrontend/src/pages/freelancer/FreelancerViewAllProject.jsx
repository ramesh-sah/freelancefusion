import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const FreelancerViewAllProject = () => {
  const [projects, setProjects] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [filters, setFilters] = useState({
    status: '',
    category: '',
    paymentType: '',
    experience: '',
    search: '',
  });
  const [sort, setSort] = useState('newest');
  const [selectedProject, setSelectedProject] = useState(null);
  const navigate = useNavigate();

  // Mock data
  const mockProjects = [
    {
      id: 1,
      title: 'Web Development Project',
      description: 'Need a responsive website built with React and Django',
      budget: 5000,
      deadline: '2024-03-15',
      status: 'open',
      payment_type: 'fixed',
      preferred_experience_level: 'intermediate',
      project_category: { name: 'Web Development' },
      terms_conditions: 'Standard contract terms apply',
      skills_required: 'React, Django, Python, JavaScript',
      location_preference: 'Remote',
      employer: { username: 'company123' },
      created_at: '2024-02-01',
    },
  ];

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setProjects(mockProjects);
        setTotalPages(3);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };
    fetchProjects();
  }, [currentPage, sort, filters]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
    setCurrentPage(1);
  };

  const statusColors = {
    open: 'bg-green-100 text-green-800',
    in_progress: 'bg-yellow-100 text-yellow-800',
    completed: 'bg-blue-100 text-blue-800',
    cancelled: 'bg-red-100 text-red-800',
  };

  const ProjectModal = ({ project, onClose }) => {
    if (!project) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
        <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
          <div className="p-6">
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-2xl font-bold text-gray-900">{project.title}</h2>
              <button
                onClick={onClose}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-700">Budget</label>
                  <p className="mt-1 text-gray-900">${project.budget}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">Deadline</label>
                  <p className="mt-1 text-gray-900">
                    {new Date(project.deadline).toLocaleDateString()}
                  </p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">Experience Level</label>
                  <p className="mt-1 capitalize text-gray-900">
                    {project.preferred_experience_level}
                  </p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">Payment Type</label>
                  <p className="mt-1 text-gray-900">
                    {project.payment_type === 'fixed' ? 'Fixed Price' : 'Hourly'}
                  </p>
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700">Description</label>
                <p className="mt-1 text-gray-900 whitespace-pre-line">{project.description}</p>
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700">Skills Required</label>
                <p className="mt-1 text-gray-900">{project.skills_required}</p>
              </div>

              <div className="flex gap-4 mt-6">
                <button
                  onClick={() => alert('Application submitted!')}
                  className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                >
                  Apply to Project
                </button>
                <button
                  onClick={onClose}
                  className="px-6 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Enhanced Filter Section */}
        <div className="mb-8 bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Filter Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
              <select
                name="status"
                onChange={handleFilterChange}
                className="w-full p-2 border border-gray-300 rounded-md text-gray-900 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">All Statuses</option>
                {['open', 'in_progress', 'completed', 'cancelled'].map(status => (
                  <option key={status} value={status}>
                    {status.replace('_', ' ').toUpperCase()}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Payment Type</label>
              <select
                name="paymentType"
                onChange={handleFilterChange}
                className="w-full p-2 border border-gray-300 rounded-md text-gray-900 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">All Types</option>
                <option value="fixed">Fixed Price</option>
                <option value="hourly">Hourly</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Experience</label>
              <select
                name="experience"
                onChange={handleFilterChange}
                className="w-full p-2 border border-gray-300 rounded-md text-gray-900 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">All Levels</option>
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="expert">Expert</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Sort By</label>
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md text-gray-900 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="newest">Newest First</option>
                <option value="deadline">Deadline</option>
                <option value="budget_high">Budget High-Low</option>
                <option value="budget_low">Budget Low-High</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Search</label>
              <input
                type="text"
                name="search"
                placeholder="Search projects..."
                onChange={handleFilterChange}
                className="w-full p-2 border border-gray-300 rounded-md text-gray-900 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map(project => (
            <div key={project.id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-200">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {project.title}
                  </h3>
                  <span className={`px-3 py-1 rounded-full text-sm ${statusColors[project.status]}`}>
                    {project.status.replace('_', ' ').toUpperCase()}
                  </span>
                </div>

                <p className="text-gray-600 mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Budget:</span>
                    <span className="font-medium text-gray-900">${project.budget}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Deadline:</span>
                    <span className="font-medium text-gray-900">
                      {new Date(project.deadline).toLocaleDateString()}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Experience:</span>
                    <span className="font-medium text-gray-900 capitalize">
                      {project.preferred_experience_level}
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedProject(project)}
                  className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors"
                >
                  View Project
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-8 flex justify-center">
          <nav className="inline-flex rounded-md shadow-sm">
            <button
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 rounded-l-md disabled:opacity-50"
            >
              Previous
            </button>
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i + 1}
                onClick={() => setCurrentPage(i + 1)}
                className={`px-4 py-2 border-t border-b border-gray-300 ${currentPage === i + 1
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50'}`}
              >
                {i + 1}
              </button>
            ))}
            <button
              onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="px-4 py-2 border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 rounded-r-md disabled:opacity-50"
            >
              Next
            </button>
          </nav>
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
};

export default FreelancerViewAllProject;