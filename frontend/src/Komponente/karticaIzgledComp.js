import '../CSS/KarticaCSS.css';

import Button from '@mui/material/Button';

function Kartica(props) {
    return (
        <div className="card" style={{ backgroundImage: `url(${props.image})` }}>
            <h2>{props.title}</h2>
            <hr />
            <p>{props.content}</p>
            <Button
                variant="outlined"
                color="secondary"
                disabled={false}
            > Izaberi </Button>
        </div>
    );
}

export default Kartica;
