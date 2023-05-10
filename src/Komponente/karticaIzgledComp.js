import '../CSS/KarticaCSS.css';

function Kartica(props) {
    return (
        <div className="card" style={{ backgroundImage: `url(${props.image})` }}>
            <h2>{props.title}</h2>
            <hr />
            <p>{props.content}</p>
            <button>{props.buttonText}</button>
        </div>
    );
}

export default Kartica;
