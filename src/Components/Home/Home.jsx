

// Sample data for demonstration
const recentNotes = [
  { id: 1, title: "Note 1", content: "Content of Note 1" },
  { id: 2, title: "Note 2", content: "Content of Note 2" },
  { id: 3, title: "Note 3", content: "Content of Note 3" },
];

const Home = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-800 min-h-screen flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-8">Welcome to Our Website</h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed suscipit mauris eget felis consectetur, vel malesuada neque molestie. Nam sed dui nec nunc laoreet fermentum. Nulla facilisi. Integer nec suscipit eros.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {recentNotes.map(note => (
            <div key={note.id} className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden">
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">{note.title}</h2>
                <p className="text-gray-600 dark:text-gray-300">{note.content}</p>
              </div>
              <div className="bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 px-4 py-2 flex justify-end">
                <button className="text-white font-semibold focus:outline-none">Read More</button>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center md:items-start mt-8">
          <a href="#" className="px-8 py-4 bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 text-white rounded-md transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 mb-4 md:mb-0 md:mr-4">Learn More</a>
          <a href="#" className="px-8 py-4 bg-gray-800 hover:bg-gray-900 dark:bg-gray-700 dark:hover:bg-gray-900 text-white rounded-md transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800">Contact Us</a>
        </div>
      </div>
    </div>
  );
};

export default Home;
