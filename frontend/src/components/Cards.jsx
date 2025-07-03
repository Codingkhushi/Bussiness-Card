

export function Cards({cards}){
    return <div>
    {cards.map(function(card){
        return <div>
            <h2>Example card</h2>
            <p>{card.Name}</p>
            <p>{card.Description}</p>
            <p>{card.SocialMediaLinks}</p>
            <p>{card.Interest}</p>
        </div>
    })}
    </div>
}
