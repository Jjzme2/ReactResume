import { ListCard } from "./Cards"

function createListItem(item) {
    return <ListCard
    title={item.title}
    description={item.description}
    quote={item.quote}
    />
}

// export function SectionBlock(props){
//     return (
//         <div className="section-block">
//         </div>
//     )
// }

export function ListItemBlock(props){
    return (
        <div className="list-block">
            <div className="list-title">
            {props.title}
            </div>
        
            <div className="list-description">
            {props.content}
            </div>
            <div className="list">
            {props.listContent.map(createListItem)}
            </div>
        </div>
    )
}

export function QuoteBlock(props){
    return (
        <div className="quote-block">
            <div className="quote-content">
            {props.quote}
            </div>
        
            <div className="quote-author">
            ➖{props.author}
            </div>
        </div>
    )
}