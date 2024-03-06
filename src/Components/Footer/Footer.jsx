const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-lg font-semibold">Company Name</h3>
                        <p className="text-sm mt-2">A brief description of the company.</p>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold">Quick Links</h4>
                        <ul className="mt-2">
                            <li><a href="/" className="hover:text-gray-300">Home</a></li>
                            <li><a href="/About" className="hover:text-gray-300">About</a></li>
                            <li><a href="/Services" className="hover:text-gray-300">Services</a></li>
                            <li><a href="/Contact" className="hover:text-gray-300">Contact</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold">Contact Us</h4>
                        <ul className="mt-2">
                            <li>Email: info@example.com</li>
                            <li>Phone: +1234567890</li>
                            <li>Address: 123 Street, City, Country</li>
                        </ul>
                    </div>
                </div>
                <hr className="my-4 border-gray-700" />
                <p className="text-sm text-center">© 2024 Company Name. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
