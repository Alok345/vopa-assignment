import React, { useEffect, useState } from 'react';

const App = () => {
  const [tenders, setTenders] = useState([]);
  const [selectedTender, setSelectedTender] = useState(null);

  useEffect(() => {
    fetch('https://api.allorigins.win/raw?url=https://tenders.guru/api/es/tenders')
      .then(response => response.json())
      .then(data => setTenders(data?.data || []))
      .catch(error => console.error('Error fetching tenders:', error));
  }, []);

  const handleRowClick = (tenderId) => {
    fetch(`https://api.allorigins.win/raw?url=https://tenders.guru/api/es/tenders/${tenderId}`)
      .then(response => response.json())
      .then(data => setSelectedTender(data?.data))
      .catch(error => console.error('Error fetching tender details:', error));
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Tenders Dashboard</h1>
      <table border="1" cellPadding="10" style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead style={{ backgroundColor: '#f2f2f2' }}>
          <tr>
            <th>Title</th>
            <th>Tender Type</th>
            <th>Category</th>
            <th>Buyer</th>
            <th>Awarded Supplier</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(tenders) && tenders.slice(0, 10).map((tender) => (
            <tr key={tender.id} onClick={() => handleRowClick(tender.id)} style={{ cursor: 'pointer' }}>
              <td>{tender.title}</td>
              <td>{tender.type?.name || 'N/A'}</td>
              <td>{tender.category || 'N/A'}</td>
              <td>{tender.purchaser?.name || 'Unknown Buyer'}</td>
              <td>{tender.awarded?.[0]?.suppliers_name || 'Not Awarded Yet'}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedTender && (
        <div style={{ marginTop: '20px' }}>
          <h2>Tender Detailed View</h2>
          <p><b>Title:</b> {selectedTender.title}</p>
          <p><b>Publication Date:</b> {selectedTender.date}</p>
          <p><b>Deadline:</b> {selectedTender.deadline_date}</p>
          <p><b>Purchaser:</b> {selectedTender.purchaser?.name || 'Unknown Buyer'}</p>
          <p><b>Category:</b> {selectedTender.category}</p>
          <p><b>Awarded Supplier:</b> {selectedTender.awarded?.[0]?.suppliers_name || 'Pending'}</p>
          <p><b>Supplier Link:</b> <a href={selectedTender.src_url} target="_blank" rel="noopener noreferrer">View Tender</a></p>
        </div>
      )}
    </div>
  );
};

export default App;
