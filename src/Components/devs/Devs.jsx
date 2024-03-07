import DevCard from './DevCard';

function Devs() {
  // Array of developer objects
  const developers = [
    {
      name: "Jai Singh Rajput",
      bio: "Senior Developer of This Platform",
      profilePic: "https://avatars.githubusercontent.com/u/88092614?v=4",
      twitter: "https://twitter.com/jai_820",
      facebook: "https://facebook.com/nobitaX",
      instagram: "https://instagram.com/sastanobi007",
      linkedin: "https://linkedin.com/jai_820"
    },
    {
      name: "Mr. Toufik Raja",
      bio: "Frontend Designer",
      profilePic: "https://te.legra.ph/file/2b82aac791b59f87f5e2b.jpg",
      twitter: "https://twitter.com/jai_820",
      facebook: "https://facebook.com/nobitaX",          
      instagram: "https://instagram.com/sastanobi007",
      linkedin: "https://linkedin.com/jai_820"
    },
  ];

  return (
    <div className='container mx-auto'>
      <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {/* Map over the developers array and render DevCard for each developer */}
        {developers.map((developer, index) => (
          <DevCard
            key={index}
            name={developer.name}
            bio={developer.bio}
            profilePic={developer.profilePic}
            twitter={developer.twitter}
            facebook={developer.facebook}
            instagram={developer.instagram}
            linkedin={developer.linkedin}
          />
        ))}
      </div>
    </div>
  );
}

export default Devs;
