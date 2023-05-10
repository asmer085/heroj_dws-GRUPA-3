import React from 'react';
import Kartica from '../Komponente/karticaIzgledComp';
import img1 from '../Slike/slika1.png';
import img2 from '../Slike/slika2.png';
import img3 from '../Slike/slika3.png';

function App() {
    return (
        <div className="grid-container">
            <Kartica
                title="Card 1"
                content="This is the paragraph text for card 1."
                buttonText="Pristupi"
                image={img1}
            />
            <Kartica
                title="Card 2"
                content="This is the paragraph text for card 2."
                buttonText="Pristupi"
                image={img2}
            />
            <Kartica
                title="Card 3"
                content="This is the paragraph text for card 3."
                buttonText="Pristupi"
                image={img3}
            />
        </div>
    );
}

export default App;
