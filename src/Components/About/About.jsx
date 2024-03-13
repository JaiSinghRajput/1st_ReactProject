function About() {
    return (
        <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">About Us</h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies mi quis varius imperdiet.
        </p>
        <button className="mt-6 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-600">
          Learn More
        </button>
      </div>
    )
}

export default About
