function SkillCard(props){
    return(
        <div className="skill-card"> 
    {/* Individual Note */}
        <div>
            <h2 className="card-title">{props.title}</h2>
            <p className="card-body">{props.content}</p>
        </div></div>
    )
}

export default SkillCard;