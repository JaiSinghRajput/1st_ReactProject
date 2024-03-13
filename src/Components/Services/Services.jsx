/* eslint-disable react/prop-types */
function Services({ title, description, icon }) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center">
      <img src={icon} className="w-16 h-16 mb-4" alt={title} />
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 text-center leading-relaxed">{description}</p>
      <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-600">
        Get Started
      </button>
    </div>
)
}

export default Services
