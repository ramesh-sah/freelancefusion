import React, { useState, useEffect } from "react";
import EmployerViewAllProjectService from './../../services/EmployerService/EmployerViewAllProjectService';
import { Link } from 'react-router-dom';

const ViewAllProject = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    EmployerViewAllProjectService.EmployerViewAllProject()
      .then((data) => {
        setProjects(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const getStatusBadge = (status) => {
    switch (status.toLowerCase()) {
      case 'active':
        return 'bg-gray-100 text-black';
      case 'pending':
        return 'bg-gray-200 text-black';
      case 'completed':
        return 'bg-gray-300 text-black';
      default:
        return 'bg-white text-black';
    }
  };

  if (loading) return <div className="p-4 text-center">Loading projects...</div>;
  if (error) return <div className="p-4 text-center text-red-500">Error: {error}</div>;

  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="flex flex-col">
        <div className="-m-1.5 overflow-x-auto">
          <div className="p-1.5 min-w-full inline-block align-middle">
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
              {/* Header */}
              <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-b border-gray-200">
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">
                    All Projects
                  </h2>
                  <p className="text-sm text-gray-600">
                    Manage and review all project details
                  </p>
                </div>
                <div>
                  <Link to="/employer/add-project" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-300 bg-white text-gray-900 hover:bg-gray-100 transition duration-300">
                    Create New Project
                  </Link>
                </div>
              </div>

              {/* Table */}
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="ps-6 py-3 text-start border-b border-gray-200">
                      <input type="checkbox" className="shrink-0 border-gray-300 rounded-sm text-gray-900 focus:ring-gray-500" />
                    </th>
                    <th className="px-6 py-3 text-start text-xs font-semibold uppercase text-gray-900 border-b border-gray-200">Title</th>
                    <th className="px-6 py-3 text-start text-xs font-semibold uppercase text-gray-900 border-b border-gray-200">Description</th>
                    <th className="px-6 py-3 text-start text-xs font-semibold uppercase text-gray-900 border-b border-gray-200">Budget</th>
                    <th className="px-6 py-3 text-start text-xs font-semibold uppercase text-gray-900 border-b border-gray-200">Deadline</th>
                    <th className="px-6 py-3 text-start text-xs font-semibold uppercase text-gray-900 border-b border-gray-200">Status</th>
                    <th className="px-6 py-3 text-start text-xs font-semibold uppercase text-gray-900 border-b border-gray-200">Created</th>
                    <th className="px-6 py-3 text-start text-xs font-semibold uppercase text-gray-900 border-b border-gray-200">Actions</th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-200">
                  {projects.map((project) => (
                    <tr key={project.id}>
                      <td className="ps-6 py-3">
                        <input type="checkbox" className="shrink-0 border-gray-300 rounded-sm text-gray-900 focus:ring-gray-500" />
                      </td>
                      <td className="px-6 py-3 text-sm text-gray-900">{project.title}</td>
                      <td className="px-6 py-3 text-sm text-gray-900">{project.description}</td>
                      <td className="px-6 py-3 text-sm text-gray-900">${project.budget}</td>
                      <td className="px-6 py-3 text-sm text-gray-900">
                        {new Date(project.deadline).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-3">
                        <span className={`py-1 px-2 inline-flex text-xs rounded-full ${getStatusBadge(project.status)}`}>
                          {project.status}
                        </span>
                      </td>
                      <td className="px-6 py-3 text-sm text-gray-900">
                        {new Date(project.created_at).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-3 text-end">
                        <div className="hs-dropdown relative inline-block">
                          <button type="button" className="hs-dropdown-toggle p-2 inline-flex justify-center items-center gap-2 rounded-lg text-gray-900 hover:bg-gray-100 transition duration-300">
                            <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <circle cx="12" cy="12" r="1" /><circle cx="12" cy="5" r="1" /><circle cx="12" cy="19" r="1" />
                            </svg>
                          </button>
                          <div className="hs-dropdown-menu transition-[opacity,margin] duration-300 hs-dropdown-open:opacity-100 opacity-0 hidden min-w-40 bg-white shadow-lg rounded-lg p-2 mt-2 border border-gray-200">
                            <Link to={`/employer/edit-project/${project.id}`} className="flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-900 hover:bg-gray-100">
                              Edit
                            </Link>
                            <Link to={`/employer/view-project/${project.id}`} className="flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-900 hover:bg-gray-100">
                              View
                            </Link>
                            <button className="flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm text-red-600 hover:bg-gray-100">
                              Delete
                            </button>
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {/* Footer */}
              <div className="px-6 py-4 border-t border-gray-200">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                  <p className="text-sm text-gray-600">
                    Showing <span className="font-semibold text-gray-900">{projects.length}</span> projects
                  </p>
                  <div className="mt-3 md:mt-0">
                    <nav className="inline-flex space-x-1">
                      <button className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-300 bg-white text-gray-900 hover:bg-gray-100 transition duration-300">
                        Previous
                      </button>
                      <button className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-300 bg-white text-gray-900 hover:bg-gray-100 transition duration-300">
                        Next
                      </button>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewAllProject;