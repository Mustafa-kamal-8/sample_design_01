export default function ConfirmSignup() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-80">
        {/* Logo & Heading */}
        <div className="text-center">
          <img src="/logo.png" alt="MetaMatch Logo" className="mx-auto mb-4" />
          <h2 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
            You're almost signed up
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Enter the code sent to your email to finish signing up
          </p>

          {/* Code Input Boxes */}
          <div className="flex justify-center space-x-2 mb-4">
            {Array(6)
              .fill(0)
              .map((_, index) => (
                <input
                  key={index}
                  type="text"
                  maxLength={1}
                  className="w-10 h-10 border border-gray-300 dark:border-gray-600 rounded text-center text-xl text-gray-900 dark:text-white bg-transparent focus:outline-none"
                />
              ))}
          </div>

          {/* Resend Link */}
          <p className="text-gray-600 dark:text-gray-400">
            Didn't get the code?{' '}
            <a
              href="#"
              className="text-blue-500 hover:underline dark:text-blue-400"
            >
              Resend
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
