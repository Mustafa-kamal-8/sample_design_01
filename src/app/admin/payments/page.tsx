import Footer from "@/src/components/footer";

const bankDetails = [
  { name: "Jonathon Smith", bank: "Bank Of America", card: "5399 5569 1908 XXXX" },
  { name: "Jenny Smith", bank: "Bank Of America", card: "5400 5569 1908 XXXX" },
];

const paymentHistory = [
  { name: "Robin Saswood", amount: "$120.00", date: "24/3/24", duration: "30 min" },
  { name: "Robert Sonny", amount: "$120.00", date: "22/3/24", duration: "30 min" },
  { name: "Jack Reacher", amount: "$120.00", date: "21/3/24", duration: "30 min" },
  { name: "Robert Sonny", amount: "$120.00", date: "22/3/24", duration: "30 min" },

];

export default function Payments() {
  return (
    <>
    <div className="min-h-screen bg-[#fef6ee] dark:bg-gray-900 flex flex-col items-center justify-start p-6">
      <div className="w-full max-w-md lg:max-w-6xl space-y-10">
        {/* Header */}
        <h1 className="text-4xl font-bold text-black dark:text-white text-center">
          My Payments
        </h1>

        {/* Payments Card */}
        <div className="bg-blue-500 dark:bg-blue-600 rounded-xl p-6 text-white shadow-lg">
          <div className="flex flex-col lg:flex-row justify-between mb-6 gap-6">
            <div>
              <p className="text-lg font-medium">Total Balance</p>
              <p className="text-3xl font-bold">$900</p>
            </div>
            <div>
              <p className="text-lg font-medium">Total Withdrawn</p>
              <p className="text-3xl font-bold">$860</p>
            </div>
          </div>

          <div className="mb-4">
            <p className="text-lg font-medium">Remaining Balance</p>
            <p className="text-3xl font-bold">$40</p>
          </div>

          <p className="text-sm mb-6">Last Payment request: 27 Nov 2024</p>

          <button className="w-full bg-white text-black font-semibold py-3 rounded-xl hover:bg-gray-100 dark:bg-gray-200 dark:hover:bg-gray-300 transition">
            Withdraw Payments
          </button>
        </div>

        {/* Bank & Payment History */}
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6">
          {/* Bank Details */}
          <h2 className="text-2xl font-bold mb-4 text-black dark:text-white">My Bank Details</h2>
          <div className="space-y-4">
            {bankDetails.map((bank, index) => (
              <div key={index} className="flex items-center bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                <div className="ml-4">
                  <p className="font-semibold text-black dark:text-white">{bank.name}</p>
                  <p className="text-gray-600 dark:text-gray-300">{bank.bank}</p>
                  <p className="text-gray-600 dark:text-gray-300">{bank.card}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Payment History */}
          <h2 className="text-2xl font-bold mt-6 mb-4 text-black dark:text-white">Payment History</h2>
          <div className="space-y-4">
            {paymentHistory.map((payment, index) => (
              <div key={index} className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                <p className="font-semibold text-black dark:text-white">{payment.name}</p>
                <p className="text-gray-600 dark:text-gray-300">Amount: {payment.amount}</p>
                <p className="text-gray-600 dark:text-gray-300">Credit Date: {payment.date}</p>
                <p className="text-gray-600 dark:text-gray-300">Duration: {payment.duration}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="text-center mt-6">
  <button className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition dark:bg-blue-700 dark:hover:bg-blue-800">
    See All Transactions
  </button>
</div>
<div className="w-full mt-12">
        <Footer />
      </div>

    </div>

     
      </>
  );
}
