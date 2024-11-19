import React from 'react';
import Carousel from '../components/caroselTemplate';

function App() {
    const categories = [
        "Frontend Developer",
        "Backend Developer",
        "Data Science",
        "Graphic Designer",
        "Fullstack Developer"
    ];

    return (
        <div>
            {/* <h1>Category Carousel</h1> */}
            <Carousel items={categories} />
        </div>
    );
}

export default App;
