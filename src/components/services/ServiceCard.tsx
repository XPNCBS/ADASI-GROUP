interface ServiceCardProps {
    bg:string,
    title:string
}
export default function ServiceCard({bg,title}:ServiceCardProps){

    return(
        <div className="service-card" style={{backgroundImage:`url(${bg})`}}>
            <h2 className="service-card__title">{title}</h2>
        </div>
    )
}