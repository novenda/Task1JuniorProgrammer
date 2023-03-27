const isNews = (news) => {
    return news.map((data, i) => {
        return <div key={i} className="card w-96 bg-base-100 shadow-xl">
            <figure>
                <img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    Shoes!
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                 <p>{data.description}</p>
                <div className="card-actions justify-end">
                        <div className="badge badge-intline">{data.catagory}</div> 
                        <div className="badge badge-outline">{data.author}</div>
                </div>
            </div>
        </div>        
    })
}

const noNews = () => {
    return (
        <div>Saat ini belum ada berita</div>
    )
}

const NewsList = ({ news }) => {
    return !news ? noNews() : isNews(news) 
} 

export default NewsList