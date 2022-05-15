export function Card(props){
    return(
        <div className="card"> 
            <div className="card-title">
            <img className="card-img" src= {props.imgSrc} alt="Developer Image"/>
            <a href="https://www.linkedin.com/in/jjilytatgames">{props.title}</a>
            </div>
            
            <div className="card-body">
            <p className="card-content">{props.content}</p>
            </div>
        </div>
    )
}

export function GhostCard(props){
    return (
        <div className="ghost-card"> 
            <div className="ghost-card-title">
            {props.title}
            </div>
        
        <div className="ghost-card-body">
            <p className="ghost-card-content">{props.content}</p>
        </div>

    </div>
    )
}

export function SkillCard(props){
    return(
        <div className="skill-card"> 
            <div className="card-title">
                {props.name}
            </div>
                <div className="card-body">
                <p className="lefted-text">Began learning {props.yearStarted}</p>
            </div>
        </div>
    )
}

export function ListCard(props) { 
    return(
        <div className="list-card">
            <div className="list-card-title">
                {props.title}
            </div>      
            <div className="list-card-quote">
                {props.quote}
            </div>     
            <div className="list-card-description">
                {props.description}
            </div> 
        </div>
    )
 }
