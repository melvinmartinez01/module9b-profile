import ContactCard from './ContactCard';

function App() {
  const contacts = [
    {
      name: "William Johnson",
      bio: "William is the owner to 3 bicycle shops in Koreatown, Los Angeles. He's passion for cycling began at an early age, and has since turned that passion into not only a succesful business, but also a community hub for locals.",
      imageUrl: "https://randomuser.me/api/portraits/men/10.jpg",
    },
    {
      name: "Michael Mathers Jr.",
      bio: "Michael is a the co-owner to a RC car shop in the heart of Santa Monica. He has been in the RC car industry since the 80's, participating and hosting RC car races across California.",
      imageUrl: "https://randomuser.me/api/portraits/men/16.jpg",
    },
    {
      name: "Sophia Lee",
      bio: "Sophia is real estate agent in the Glendale area. She has been in the real estate industry for over 10 years, helping clients buy and sell properties in the Los Angeles area.",
      imageUrl: "https://randomuser.me/api/portraits/women/27.jpg",
    },
  ];

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '60px 20px',
      fontFamily: 'system-ui, -apple-system, sans-serif',
    }}>
      <h1 style={{
        color: '#fff',
        fontSize: '2.8rem',
        marginBottom: '50px',
      }}>
        Contact List
      </h1>

      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '20px',
    }}>
        {contacts.map((person, i) => (
          <ContactCard
            key={i}
            name={person.name}
            id={person.id}
            email={person.email}
            imageUrl={person.imageUrl}
          />
        ))}
      </div>

      <p style={{ marginTop: '80px', color: '#ddd', fontSize: '1rem' }}>
        Hover any card ➡️ watch it pop!
      </p>
    </div>
  );
}

export default App;