

const Contact = () => {
    return (
        <div className="bg-gray-100 dark:bg-gray-800 min-h-screen flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full mx-auto bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8">
                <h2 className="text-center text-3xl font-bold text-gray-800 dark:text-white mb-6">Contact Us</h2>
                <form>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Name</label>
                        <input type="text" id="name" name="name" className="px-4 py-2 w-full rounded-md border border-gray-300 focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:ring-offset-gray-900" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
                        <input type="email" id="email" name="email" className="px-4 py-2 w-full rounded-md border border-gray-300 focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:ring-offset-gray-900" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Subject</label>
                        <input type="text" id="subject" name="subject" className="px-4 py-2 w-full rounded-md border border-gray-300 focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:ring-offset-gray-900" />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message</label>
                        <textarea id="message" name="message" rows="4" className="px-4 py-2 w-full rounded-md border border-gray-300 focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:ring-offset-gray-900"></textarea>
                    </div>
                    <div className="flex justify-center">
                        <button type="submit" className="px-6 py-3 bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 text-white rounded-md transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;
