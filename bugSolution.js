```javascript
// pages/index.js
import { useState, useEffect } from 'react';

export default function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Fetch data from server or API, and update the data state
    const fetchData = async () => {
      const res = await fetch('/api/data');
      const json = await res.json();
      setData(json);
    };

    fetchData();
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Hello, {data.name}!</h1>
    </div>
  );
}
```