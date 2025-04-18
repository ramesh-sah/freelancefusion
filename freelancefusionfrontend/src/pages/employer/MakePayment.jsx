import React from 'react';

function MakePayment() {
  const pendingPayments = [
    {
      id: 2,
      invoiceNumber: "INV002",
      project: "Mobile App Development",
      freelancer: "Sarah Johnson",
      amount: 4500,
      dueDate: "2023-07-25",
      status: "Pending",
      client: "Tech Corp Inc",
      clientEmail: "accounting@techcorp.com",
      description: "Initial project advance payment"
    },
    {
      id: 5,
      invoiceNumber: "INV005",
      project: "Cloud Migration",
      freelancer: "Alex Thompson",
      amount: 3200,
      dueDate: "2023-07-28",
      status: "Pending",
      client: "Data Systems LLC",
      clientEmail: "payments@datasystems.com",
      description: "Phase 1 implementation fees"
    },
    {
      id: 6,
      invoiceNumber: "INV006",
      project: "UI/UX Design",
      freelancer: "Maria Gonzalez",
      amount: 2750,
      dueDate: "2023-07-30",
      status: "Pending",
      client: "Creative Solutions",
      clientEmail: "finance@creativesol.com",
      description: "Final design package delivery"
    }
  ];

  const statusStyles = {
    Pending: "bg-yellow-100 text-yellow-800"
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
                  <h2 className="text-xl font-semibold text-gray-800">Pending Payments</h2>
                  <p className="text-sm text-gray-600">{pendingPayments.length} payments awaiting processing</p>
                </div>

                <div className="flex items-center gap-3">
                  <input
                    type="date"
                    className="py-2 px-3 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Filter by due date"
                  />
                  <button className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700">
                    <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" /><path d="M8 14s1.5 2 4 2 4-2 4-2" /><line x1="9" y1="9" x2="9.01" y2="9" /><line x1="15" y1="9" x2="15.01" y2="9" />
                    </svg>
                    Payment Overview
                  </button>
                </div>
              </div>

              {/* Table */}
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-800 uppercase">Invoice</th>
                    <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-800 uppercase">Project</th>
                    <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-800 uppercase">Client</th>
                    <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-800 uppercase">Amount</th>
                    <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-800 uppercase">Due Date</th>
                    <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-800 uppercase">Status</th>
                    <th scope="col" className="px-6 py-3 text-end text-xs font-medium text-gray-800 uppercase">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {pendingPayments.map(payment => (
                    <tr key={payment.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-blue-600">{payment.invoiceNumber}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{payment.project}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{payment.client}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">${payment.amount.toLocaleString()}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                        {new Date(payment.dueDate).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric'
                        })}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex items-center gap-x-1 py-1 px-2 rounded-full text-xs font-medium ${statusStyles[payment.status]}`}>
                          {payment.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                        <button
                          className="text-blue-600 hover:text-blue-900"
                          data-hs-overlay="#process-payment-modal"
                        >
                          Process Payment
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
                    Showing <span className="font-semibold text-gray-800">1-{pendingPayments.length}</span> pending payments
                  </p>
                  <div className="mt-4 md:mt-0">
                    <nav className="inline-flex gap-x-2">
                      <button className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 hover:bg-gray-50">
                        Export to QuickBooks
                      </button>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Process Payment Modal */}
      <div id="process-payment-modal" className="hs-overlay hidden size-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto">
        <div className="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto">
          <div className="relative flex flex-col bg-white shadow-lg rounded-xl">
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800">Process Payment</h3>
              <button type="button" className="absolute top-2 end-2 size-8 inline-flex justify-center items-center" data-hs-overlay="#process-payment-modal">
                <span className="sr-only">Close</span>
                <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 6 6 18" /><path d="m6 6 12 12" />
                </svg>
              </button>
            </div>

            <div className="p-6 space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Invoice Number</label>
                  <p className="text-sm text-gray-800">INV002</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Amount Due</label>
                  <p className="text-sm text-gray-800">$4,500.00</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Client</label>
                  <p className="text-sm text-gray-800">Tech Corp Inc</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Due Date</label>
                  <p className="text-sm text-gray-800">July 25, 2023</p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Payment Method</label>
                  <select className="py-2 px-3 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500">
                    <option>Credit Card</option>
                    <option>Bank Transfer</option>
                    <option>PayPal</option>
                    <option>Check</option>
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Card Number</label>
                    <input
                      type="text"
                      className="py-2 px-3 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500"
                      placeholder="4242 4242 4242 4242"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Expiration</label>
                    <input
                      type="text"
                      className="py-2 px-3 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500"
                      placeholder="MM/YY"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">CVV</label>
                    <input
                      type="text"
                      className="py-2 px-3 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500"
                      placeholder="123"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Payment Amount</label>
                    <input
                      type="text"
                      className="py-2 px-3 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500"
                      value="$4,500.00"
                      readOnly
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 border-t border-gray-200">
              <div className="flex justify-end gap-x-3">
                <button
                  type="button"
                  className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 hover:bg-gray-50"
                  data-hs-overlay="#process-payment-modal"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-green-600 text-white hover:bg-green-700"
                >
                  Confirm Payment
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MakePayment;