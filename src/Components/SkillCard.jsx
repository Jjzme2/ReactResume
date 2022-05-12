export function SkillCard(props){
    return(
        <div className="skill-card"> 
        <div className="card-title">
            <dt>{props.name}</dt>
            </div>
            <div className="card-body">
            <dd className="lefted-text">Began learning {props.yearStarted}</dd>
        </div></div>
    )
}

export function Card(props){
    return(
        <div className="card"> 
        <div className="card-title">
        <img className="card-img" src= {props.imgSrc}/>
            <a href="https://www.linkedin.com/in/jjilytatgames">{props.title}</a>
            </div>
            <div className="card-body">
            <p className="card-content">{props.content}</p>
        </div></div>
    )
}