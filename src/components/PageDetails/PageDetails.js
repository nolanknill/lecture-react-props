import "./PageDetails.scss";

function PageDetails(props) {
    return (
        <header className="page-details">
            <h1>{props.title}</h1>
            <p>{props.description}</p>
        </header>
    );
    
}

export default PageDetails;