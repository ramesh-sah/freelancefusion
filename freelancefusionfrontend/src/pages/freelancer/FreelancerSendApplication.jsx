import React from 'react';

const FreelancerSendApplication = () => {
  const applications = [
    {
      id: 1,
      project: "E-commerce Platform Development",
      freelancer: "John Smith",
      bid_amount: "4500.00",
      proposal_text: "Full-stack development with React & Node.js, 5 years experience in e-commerce solutions.",
      attachments: "https://example.com/proposal.pdf",
      status: "Under Review",
      created_at: "2023-07-15T09:30:00Z",
      updated_at: "2023-07-16T14:45:00Z",
      estimated_completion_time: 45,
      freelancer_rating: 4.8,
      employer_feedback: "Impressive portfolio, needs clarification on payment terms",
      is_shortlisted: true
    },
    // Add more sample applications as needed
  ];

  const statusStyles = {
    "Pending": "bg-gray-100 text-gray-800",
    "Under Review": "bg-blue-100 text-blue-800",
    "Shortlisted": "bg-purple-100 text-purple-800",
    "Rejected": "bg-red-100 text-red-800",
    "Hired": "bg-green-100 text-green-800"
  };

  const renderRating = (rating) => {
    return (
      <div className="flex items-center">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`size-4 ${i < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'}`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
        <span className="ml-2 text-sm font-medium">{rating}/5</span>
      </div>
    );
  };

  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="flex flex-col">
        <div className="-m-1.5 overflow-x-auto">
          <div className="p-1.5 min-w-full inline-block align-middle">
            <div className="bg-white border border-gray-200 rounded-xl shadow-2xs overflow-hidden">
              {/* Header */}
              <div className="px-6 py-4 flex flex-col md:flex-row md:justify-between md:items-center border-b border-gray-200">
                <div className="mb-4 md:mb-0">
                  <h2 className="text-xl font-semibold text-gray-800">Project Applications</h2>
                  <p className="text-sm text-gray-600">Manage all project proposals and applications</p>
                </div>

                <div className="flex items-center gap-3">
                  <input
                    type="text"
                    className="py-2 px-3 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Search applications..."
                  />
                  <select className="py-2 px-3 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500">
                    <option>All Statuses</option>
                    {Object.keys(statusStyles).map(status => (
                      <option key={status}>{status}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Table */}
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-start text-xs font-medium text-gray-800 uppercase">Project</th>
                    <th className="px-6 py-3 text-start text-xs font-medium text-gray-800 uppercase">Freelancer</th>
                    <th className="px-6 py-3 text-start text-xs font-medium text-gray-800 uppercase">Bid Amount</th>
                    <th className="px-6 py-3 text-start text-xs font-medium text-gray-800 uppercase">Status</th>
                    <th className="px-6 py-3 text-start text-xs font-medium text-gray-800 uppercase">Submitted</th>
                    <th className="px-6 py-3 text-start text-xs font-medium text-gray-800 uppercase">Rating</th>
                    <th className="px-6 py-3 text-start text-xs font-medium text-gray-800 uppercase">Shortlisted</th>
                    <th className="px-6 py-3 text-end text-xs font-medium text-gray-800 uppercase">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {applications.map(application => (
                    <tr key={application.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{application.project}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{application.freelancer}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">${application.bid_amount}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex items-center gap-x-1 py-1 px-2 rounded-full text-xs font-medium ${statusStyles[application.status]}`}>
                          {application.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                        {new Date(application.created_at).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric'
                        })}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {application.freelancer_rating ? renderRating(application.freelancer_rating) : '-'}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                        {application.is_shortlisted ? (
                          <svg className="size-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        ) : (
                          <svg className="size-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                        <div className="flex justify-end gap-2">
                          <button
                            className="text-blue-600 hover:text-blue-900"
                            data-hs-overlay="#application-details-modal"
                          >
                            View
                          </button>
                          <button className="text-purple-600 hover:text-purple-900">Edit</button>
                          <button className="text-red-600 hover:text-red-900">Delete</button>
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
                    Showing <span className="font-semibold text-gray-800">1-{applications.length}</span> of{' '}
                    <span className="font-semibold text-gray-800">{applications.length}</span> results
                  </p>
                  <div className="mt-4 md:mt-0">
                    <nav className="inline-flex gap-x-2">
                      <button className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 hover:bg-gray-50">
                        Previous
                      </button>
                      <button className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 hover:bg-gray-50">
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

      {/* Application Details Modal */}
      <div id="application-details-modal" className="hs-overlay hidden size-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto">
        <div className="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-3xl sm:w-full m-3 sm:mx-auto">
          <div className="relative flex flex-col bg-white shadow-lg rounded-xl">
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800">Application Details</h3>
              <button type="button" className="absolute top-2 end-2 size-8 inline-flex justify-center items-center" data-hs-overlay="#application-details-modal">
                <span className="sr-only">Close</span>
                <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 6 6 18" /><path d="m6 6 12 12" />
                </svg>
              </button>
            </div>

            <div className="p-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Project</label>
                  <p className="text-sm text-gray-800">E-commerce Platform Development</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Freelancer</label>
                  <p className="text-sm text-gray-800">John Smith</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Bid Amount</label>
                  <p className="text-sm text-gray-800">$4,500.00</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Estimated Completion</label>
                  <p className="text-sm text-gray-800">45 days</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Submitted On</label>
                  <p className="text-sm text-gray-800">Jul 15, 2023</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Last Updated</label>
                  <p className="text-sm text-gray-800">Jul 16, 2023</p>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Proposal Text</label>
                <p className="text-sm text-gray-800 whitespace-pre-line">
                  Full-stack development with React & Node.js, 5 years experience in e-commerce solutions.
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Attachments</label>
                <a href="https://example.com/proposal.pdf" className="text-blue-600 hover:text-blue-800 text-sm" target="_blank" rel="noopener noreferrer">
                  View Proposal PDF
                </a>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Employer Feedback</label>
                <p className="text-sm text-gray-800">
                  Impressive portfolio, needs clarification on payment terms
                </p>
              </div>
            </div>

            <div className="p-6 border-t border-gray-200">
              <div className="flex justify-end gap-x-3">
                <button
                  type="button"
                  className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 hover:bg-gray-50"
                  data-hs-overlay="#application-details-modal"
                >
                  Close
                </button>
                <button
                  type="button"
                  className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700"
                >
                  Download Full Proposal
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreelancerSendApplication;