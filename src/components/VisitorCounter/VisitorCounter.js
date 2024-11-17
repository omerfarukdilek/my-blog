import React, { useEffect, useState } from 'react';

const VisitorCounter = () => {
    const [visitorCount, setVisitorCount] = useState(0);

    useEffect(() => {
        // Retrieve the current count from localStorage
        const storedCount = localStorage.getItem('visitorCount');
        const newCount = storedCount ? Number(storedCount) + 1 : 1; // Increment or set to 1

        // Update state and localStorage
        setVisitorCount(newCount);
        localStorage.setItem('visitorCount', newCount);
    }, []); // Empty dependency array to run only once on mount

    return (
        <div>
            <h1>Welcome to My Blog!</h1>
            <p>Visitor Count: {visitorCount}</p>
        </div>
    );
};

export default VisitorCounter;