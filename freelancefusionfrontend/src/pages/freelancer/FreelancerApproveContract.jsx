import React, { useState, useEffect } from 'react';
import {
  FiSearch, FiFilter, FiChevronDown, FiChevronUp,
  FiMoreVertical, FiFileText, FiDollarSign,
  FiCalendar, FiUser, FiCheck, FiX, FiClock,
  FiAlertTriangle, FiRefreshCw
} from 'react-icons/fi';
// import EmployerGetAllContractsService from '../../services/EmployerService/EmployerGetAllContractsService';

const FreelancerApproveContract = () => {
  const [contracts, setContracts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    status: 'all',
    payment: 'all',
    dateRange: 'all'
  });
  const [sortConfig, setSortConfig] = useState({ key: 'created_at', direction: 'desc' });
  const [currentPage, setCurrentPage] = useState(1);
  const contractsPerPage = 10;
  const [expandedContract, setExpandedContract] = useState(null);
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    const fetchContracts = async () => {
      try {
        setLoading(true);
        // const data = await EmployerGetAllContractsService.EmployerGetAllContracts();
        // setContracts(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchContracts();
  }, []);

  // Apply filters, search, and sorting
  const filteredContracts = contracts.filter(contract => {
    const matchesSearch =
      contract.project?.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contract.freelancer?.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contract.agreed_amount?.toString().includes(searchTerm) ||
      contract.status?.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus = filters.status === 'all' || contract.status === filters.status;
    const matchesPayment = filters.payment === 'all' || contract.payment_status === filters.payment;

    const now = new Date();
    const contractDate = new Date(contract.start_date);
    let matchesDate = true;
    if (filters.dateRange === 'week') {
      matchesDate = contractDate > new Date(now - 7 * 24 * 60 * 60 * 1000);
    } else if (filters.dateRange === 'month') {
      matchesDate = contractDate > new Date(now - 30 * 24 * 60 * 60 * 1000);
    }

    return matchesSearch && matchesStatus && matchesPayment && matchesDate;
  }).sort((a, b) => {
    if (a[sortConfig.key] < b[sortConfig.key]) {
      return sortConfig.direction === 'asc' ? -1 : 1;
    }
    if (a[sortConfig.key] > b[sortConfig.key]) {
      return sortConfig.direction === 'asc' ? 1 : -1;
    }
    return 0;
  });

  // Pagination logic
  const indexOfLastContract = currentPage * contractsPerPage;
  const indexOfFirstContract = indexOfLastContract - contractsPerPage;
  const currentContracts = filteredContracts.slice(indexOfFirstContract, indexOfLastContract);
  const totalPages = Math.ceil(filteredContracts.length / contractsPerPage);

  const requestSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  const toggleContractExpansion = (id) => {
    setExpandedContract(expandedContract === id ? null : id);
  };

  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case 'ongoing':
        return <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
          <FiRefreshCw className="mr-1" /> Ongoing
        </span>;
      case 'completed':
        return <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
          <FiCheck className="mr-1" /> Completed
        </span>;
      case 'cancelled':
        return <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
          <FiX className="mr-1" /> Cancelled
        </span>;
      default:
        return <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
          Unknown
        </span>;
    }
  };

  const getPaymentBadge = (status) => {
    switch (status) {
      case 'paid':
        return <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
          <FiCheck className="mr-1" /> Paid
        </span>;
      case 'partially_paid':
        return <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
          <FiAlertTriangle className="mr-1" /> Partially Paid
        </span>;
      case 'pending':
        return <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
          <FiClock className="mr-1" /> Pending
        </span>;
      default:
        return <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
          Unknown
        </span>;
    }
  };

  const handleFilterChange = (filterType, value) => {
    setFilters({ ...filters, [filterType]: value });
    setCurrentPage(1); // Reset to first page when filters change
  };

  if (loading) return (
    <div className="flex justify-center items-center h-64">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
    </div>
  );

  if (error) return (
    <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
      <div className="flex items-center">
        <div className="flex-shrink-0">
          <FiAlertTriangle className="h-5 w-5 text-red-500" />
        </div>
        <div className="ml-3">
          <p className="text-sm text-red-700">Error loading contracts: {error}</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Contracts</h1>
              <p className="mt-1 text-sm text-gray-500">
                View and manage all your active and past contracts with freelancers
              </p>
            </div>
            <div className="mt-4 md:mt-0">
              <button
                type="button"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                New Contract
              </button>
            </div>
          </div>
        </div>

        {/* Search and Filter Bar */}
        <div className="mb-6 bg-white rounded-lg shadow-sm p-4">
          <div className="flex flex-col md:flex-row md:items-center md:space-x-4 space-y-4 md:space-y-0">
            <div className="relative flex-grow">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiSearch className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search contracts by project, freelancer, amount..."
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setCurrentPage(1);
                }}
              />
            </div>
            <button
              type="button"
              className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              onClick={() => setShowFilters(!showFilters)}
            >
              <FiFilter className="-ml-0.5 mr-2 h-4 w-4" />
              Filters
              {showFilters ? (
                <FiChevronUp className="ml-2 h-4 w-4" />
              ) : (
                <FiChevronDown className="ml-2 h-4 w-4" />
              )}
            </button>
          </div>

          {/* Expanded Filters */}
          {showFilters && (
            <div className="mt-4 pt-4 border-t border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                  <select
                    className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                    value={filters.status}
                    onChange={(e) => handleFilterChange('status', e.target.value)}
                  >
                    <option value="all">All Statuses</option>
                    <option value="ongoing">Ongoing</option>
                    <option value="completed">Completed</option>
                    <option value="cancelled">Cancelled</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Payment Status</label>
                  <select
                    className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                    value={filters.payment}
                    onChange={(e) => handleFilterChange('payment', e.target.value)}
                  >
                    <option value="all">All Payment Statuses</option>
                    <option value="paid">Paid</option>
                    <option value="partially_paid">Partially Paid</option>
                    <option value="pending">Pending</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Date Range</label>
                  <select
                    className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                    value={filters.dateRange}
                    onChange={(e) => handleFilterChange('dateRange', e.target.value)}
                  >
                    <option value="all">All Time</option>
                    <option value="month">Last 30 Days</option>
                    <option value="week">Last 7 Days</option>
                  </select>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Contracts Table */}
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer" onClick={() => requestSort('project.title')}>
                    <div className="flex items-center">
                      Project
                      {sortConfig.key === 'project.title' && (
                        <span className="ml-1">
                          {sortConfig.direction === 'asc' ? <FiChevronUp /> : <FiChevronDown />}
                        </span>
                      )}
                    </div>
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer" onClick={() => requestSort('freelancer.name')}>
                    <div className="flex items-center">
                      Freelancer
                      {sortConfig.key === 'freelancer.name' && (
                        <span className="ml-1">
                          {sortConfig.direction === 'asc' ? <FiChevronUp /> : <FiChevronDown />}
                        </span>
                      )}
                    </div>
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer" onClick={() => requestSort('agreed_amount')}>
                    <div className="flex items-center">
                      <FiDollarSign className="mr-1" />
                      Amount
                      {sortConfig.key === 'agreed_amount' && (
                        <span className="ml-1">
                          {sortConfig.direction === 'asc' ? <FiChevronUp /> : <FiChevronDown />}
                        </span>
                      )}
                    </div>
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer" onClick={() => requestSort('start_date')}>
                    <div className="flex items-center">
                      <FiCalendar className="mr-1" />
                      Dates
                      {sortConfig.key === 'start_date' && (
                        <span className="ml-1">
                          {sortConfig.direction === 'asc' ? <FiChevronUp /> : <FiChevronDown />}
                        </span>
                      )}
                    </div>
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Payment
                  </th>
                  <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {currentContracts.length > 0 ? (
                  currentContracts.map((contract) => (
                    <React.Fragment key={contract.id}>
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-md bg-blue-100 text-blue-600">
                              <FiFileText className="h-5 w-5" />
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">
                                {contract.project?.title || 'Untitled Project'}
                              </div>
                              <div className="text-sm text-gray-500">
                                {contract.project?.project_category?.name || 'No category'}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300 flex items-center justify-center">
                              <FiUser className="h-5 w-5 text-gray-500" />
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">
                                {contract.freelancer?.name || 'Unknown Freelancer'}
                              </div>
                              <div className="text-sm text-gray-500">
                                {contract.freelancer?.email || 'No email'}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900 font-medium">
                            ${contract.agreed_amount}
                          </div>
                          <div className="text-sm text-gray-500">
                            {contract.payment_type === 'hourly' ? 'Hourly' : 'Fixed'}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">
                            {formatDate(contract.start_date)}
                          </div>
                          <div className="text-sm text-gray-500">
                            {contract.end_date ? formatDate(contract.end_date) : 'Ongoing'}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {getStatusBadge(contract.status)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {getPaymentBadge(contract.payment_status)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <button
                            onClick={() => toggleContractExpansion(contract.id)}
                            className="text-blue-600 hover:text-blue-900 mr-4"
                          >
                            {expandedContract === contract.id ? 'Hide' : 'View'}
                          </button>
                          <button className="text-gray-600 hover:text-gray-900">
                            <FiMoreVertical className="h-5 w-5" />
                          </button>
                        </td>
                      </tr>
                      {expandedContract === contract.id && (
                        <tr>
                          <td colSpan="7" className="px-6 py-4 bg-gray-50">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              <div>
                                <h3 className="text-lg font-medium text-gray-900 mb-2">Contract Details</h3>
                                <div className="space-y-2">
                                  <div>
                                    <p className="text-sm font-medium text-gray-500">Contract ID</p>
                                    <p className="text-sm">{contract.id}</p>
                                  </div>
                                  <div>
                                    <p className="text-sm font-medium text-gray-500">Terms and Conditions</p>
                                    <p className="text-sm">{contract.terms_and_conditions || 'No terms specified'}</p>
                                  </div>
                                  <div>
                                    <p className="text-sm font-medium text-gray-500">Dispute Status</p>
                                    <p className="text-sm">{contract.is_disputed ? (
                                      <span className="text-red-600">In Dispute</span>
                                    ) : (
                                      <span className="text-green-600">No Dispute</span>
                                    )}</p>
                                  </div>
                                </div>
                              </div>
                              <div>
                                <h3 className="text-lg font-medium text-gray-900 mb-2">Feedback & Ratings</h3>
                                <div className="space-y-2">
                                  <div className="grid grid-cols-2 gap-4">
                                    <div>
                                      <p className="text-sm font-medium text-gray-500">Freelancer Rating</p>
                                      <div className="flex items-center">
                                        <div className="flex items-center">
                                          {contract.freelancer_rating ? (
                                            <>
                                              {Array.from({ length: 5 }).map((_, i) => (
                                                <span key={i} className={i < Math.floor(contract.freelancer_rating) ? 'text-yellow-400' : 'text-gray-300'}>
                                                  ★
                                                </span>
                                              ))}
                                              <span className="ml-1 text-sm text-gray-500">
                                                ({contract.freelancer_rating.toFixed(1)})
                                              </span>
                                            </>
                                          ) : (
                                            <span className="text-sm text-gray-500">No rating</span>
                                          )}
                                        </div>
                                      </div>
                                    </div>
                                    <div>
                                      <p className="text-sm font-medium text-gray-500">Your Rating</p>
                                      <div className="flex items-center">
                                        {contract.employer_rating ? (
                                          <>
                                            {Array.from({ length: 5 }).map((_, i) => (
                                              <span key={i} className={i < Math.floor(contract.employer_rating) ? 'text-yellow-400' : 'text-gray-300'}>
                                                ★
                                              </span>
                                            ))}
                                            <span className="ml-1 text-sm text-gray-500">
                                              ({contract.employer_rating.toFixed(1)})
                                            </span>
                                          </>
                                        ) : (
                                          <span className="text-sm text-gray-500">Not rated</span>
                                        )}
                                      </div>
                                    </div>
                                  </div>
                                  <div>
                                    <p className="text-sm font-medium text-gray-500">Freelancer Feedback</p>
                                    <p className="text-sm">{contract.freelancer_feedback || 'No feedback provided'}</p>
                                  </div>
                                  <div>
                                    <p className="text-sm font-medium text-gray-500">Your Feedback</p>
                                    <p className="text-sm">{contract.employer_feedback || 'No feedback provided'}</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="mt-4 flex justify-end space-x-3">
                              <button className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                                View Full Contract
                              </button>
                              <button className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                                Manage Payment
                              </button>
                            </div>
                          </td>
                        </tr>
                      )}
                    </React.Fragment>
                  ))
                ) : (
                  <tr>
                    <td colSpan="7" className="px-6 py-12 text-center">
                      <FiFileText className="mx-auto h-12 w-12 text-gray-400" />
                      <h3 className="mt-2 text-sm font-medium text-gray-900">No contracts found</h3>
                      <p className="mt-1 text-sm text-gray-500">
                        {searchTerm || filters.status !== 'all' || filters.payment !== 'all' || filters.dateRange !== 'all'
                          ? "No contracts match your search criteria."
                          : "You don't have any contracts yet."}
                      </p>
                      <div className="mt-6">
                        <button
                          type="button"
                          className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                          Create New Contract
                        </button>
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          {filteredContracts.length > 0 && (
            <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
              <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm text-gray-700">
                    Showing <span className="font-medium">{indexOfFirstContract + 1}</span> to{' '}
                    <span className="font-medium">
                      {Math.min(indexOfLastContract, filteredContracts.length)}
                    </span>{' '}
                    of <span className="font-medium">{filteredContracts.length}</span> results
                  </p>
                </div>
                <div>
                  <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                    <button
                      onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                      disabled={currentPage === 1}
                      className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <span className="sr-only">Previous</span>
                      Previous
                    </button>
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                      <button
                        key={page}
                        onClick={() => setCurrentPage(page)}
                        className={`relative inline-flex items-center px-4 py-2 border text-sm font-medium ${currentPage === page
                            ? 'z-10 bg-blue-50 border-blue-500 text-blue-600'
                            : 'bg-white border-gray-300 text-gray-500 hover:bg-gray-50'
                          }`}
                      >
                        {page}
                      </button>
                    ))}
                    <button
                      onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                      disabled={currentPage === totalPages}
                      className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <span className="sr-only">Next</span>
                      Next
                    </button>
                  </nav>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FreelancerApproveContract;