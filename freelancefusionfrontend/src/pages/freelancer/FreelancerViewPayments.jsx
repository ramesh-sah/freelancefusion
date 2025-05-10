import React from 'react';

function FreelancerViewPayments() {
  const payments = [
    {
      id: 1,
      invoiceNumber: "INV001",
      project: "Website Redesign",
      freelancer: "John Smith",
      amount: 2500,
      date: "2023-07-15",
      dueDate: "2023-07-01",
      status: "Paid",
      paymentMethod: "PayPal",
      transactionId: "TX123456",
      type: "Milestone",
      description: "Final payment for project completion"
    },
    {
      id: 2,
      invoiceNumber: "INV002",
      project: "Mobile App Development",
      freelancer: "Sarah Johnson",
      amount: 4500,
      date: "2023-07-12",
      dueDate: "2023-07-05",
      status: "Pending",
      paymentMethod: "Bank Transfer",
      transactionId: "TX789012",
      type: "Advance",
      description: "Initial project advance payment"
    },
    {
      id: 3,
      invoiceNumber: "INV003",
      project: "SEO Optimization",
      freelancer: "Mike Chen",
      amount: 1200,
      date: "2023-07-10",
      dueDate: "2023-07-01",
      status: "Overdue",
      paymentMethod: "Stripe",
      transactionId: "TX345678",
      type: "Retainer",
      description: "Monthly SEO services fee"
    },
    {
      id: 4,
      invoiceNumber: "INV004",
      project: "Project D",
      freelancer: "Emily Davis",
      amount: 1800,
      date: "2023-07-10",
      dueDate: "2023-07-05",
      status: "Refunded",
      paymentMethod: "Credit Card",
      transactionId: "TX123459",
      type: "Bonus",
      description: "Performance bonus payment"
    }
  ];

  const statusStyles = {
    Paid: "bg-green-100 text-green-800",
    Pending: "bg-yellow-100 text-yellow-800",
    Overdue: "bg-red-100 text-red-800",
    Refunded: "bg-purple-100 text-purple-800"
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
                  <h2 className="text-xl font-semibold text-gray-800">Payment Management</h2>
                  <p className="text-sm text-gray-600">Track and manage all financial transactions</p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="relative">
                    <select className="py-2 px-3 pe-9 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500">
                      <option>All Statuses</option>
                      <option>Paid</option>
                      <option>Pending</option>
                      <option>Overdue</option>
                      <option>Refunded</option>
                    </select>
                  </div>
                  <input type="date" className="py-2 px-3 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500" />
                  <button className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700">
                    <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" x2="12" y1="15" y2="3" /></svg>
                    Export CSV
                  </button>
                </div>
              </div>

              {/* Table */}
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-800 uppercase">Invoice</th>
                    <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-800 uppercase">Project</th>
                    <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-800 uppercase">Freelancer</th>
                    <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-800 uppercase">Amount</th>
                    <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-800 uppercase">Status</th>
                    <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-800 uppercase">Payment Date</th>
                    <th scope="col" className="px-6 py-3 text-end text-xs font-medium text-gray-800 uppercase">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {payments.map(payment => (
                    <tr key={payment.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-blue-600">{payment.invoiceNumber}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{payment.project}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{payment.freelancer}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">${payment.amount.toLocaleString()}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex items-center gap-x-1 py-1 px-2 rounded-full text-xs font-medium ${statusStyles[payment.status]}`}>
                          {payment.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                        {new Date(payment.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric'
                        })}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                        <button className="text-blue-600 hover:text-blue-900" data-hs-overlay="#payment-details-modal">
                          View Details
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {/* Footer */}
              <div className="px-6 py-4 border-t border-gray-200">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                  <p className="text-sm text-gray-600">
                    Showing <span className="font-semibold text-gray-800">1-{payments.length}</span> of <span className="font-semibold text-gray-800">{payments.length}</span> results
                  </p>
                  <div className="mt-4 md:mt-0">
                    <nav className="inline-flex gap-x-2">
                      <button type="button" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 hover:bg-gray-50">
                        Previous
                      </button>
                      <button type="button" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 hover:bg-gray-50">
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

      {/* Payment Details Modal */}
      <div id="payment-details-modal" className="hs-overlay hidden size-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto">
        <div className="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-2xl sm:w-full m-3 sm:mx-auto">
          <div className="relative flex flex-col bg-white shadow-lg rounded-xl">
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800">Payment Details</h3>
              <button type="button" className="absolute top-2 end-2 size-8 inline-flex justify-center items-center" data-hs-overlay="#payment-details-modal">
                <span className="sr-only">Close</span>
                <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
              </button>
            </div>

            <div className="p-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Invoice Number</label>
                  <p className="text-sm text-gray-800">INV004</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Transaction ID</label>
                  <p className="text-sm text-gray-800">TX123459</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Project</label>
                  <p className="text-sm text-gray-800">Project D</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Freelancer</label>
                  <p className="text-sm text-gray-800">Emily Davis (emily@example.com)</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Payment Date</label>
                  <p className="text-sm text-gray-800">July 10, 2023 11:45 AM</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Payment Method</label>
                  <p className="text-sm text-gray-800">Credit Card (Stripe)</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Amount</label>
                  <p className="text-sm text-gray-800">$1,800.00</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                  <span className="inline-flex items-center gap-x-1 py-1 px-2 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                    Refunded
                  </span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                <p className="text-sm text-gray-800">Performance bonus payment for exceptional work on Project D deliverables.</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Notes</label>
                <p className="text-sm text-gray-800">Payment processed successfully but refunded due to client request. No disputes filed.</p>
              </div>
            </div>

            <div className="p-6 border-t border-gray-200">
              <div className="flex justify-end gap-x-3">
                <button type="button" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 hover:bg-gray-50">
                  Download Receipt
                </button>
                <button type="button" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700">
                  Print Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FreelancerViewPayments;