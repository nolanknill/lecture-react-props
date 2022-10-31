import "./Plan.scss";

const Plan = (props) => {
    return (
        <article className="plan">
            <h2>{props.name}</h2>
            {/*  Add Most Popular when props.featured === true */}
            {props.featured && <h3>Most Popular</h3>}
            {props.featured && <div className="plan__star">⭐️</div>}

            <span>${props.price}/mo</span>
            
            <ul>
                {props.features.map(( feature, index ) => {
                    return <li key={index}>{feature}</li>
                })}
                
            </ul>
            {/* When props.featured === true add a modifier! */}
            <a className={`plan__button ${props.featured ? 'plan__button--featured': ''}`} href="/">{props.buttonText}</a>
        </article>
    )
}

export default Plan;