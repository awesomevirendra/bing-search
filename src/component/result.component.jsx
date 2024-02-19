const ResultComponent = (item) => {
    return (
        <div style={{ marginBottom: '10px' }}>
            <a href={item.item.url}>{item.item.name}</a>
            <span style={{ display: 'block' }}>{new Date(item.item.dateLastCrawled).toLocaleDateString()} | {item.item.displayUrl}</span>
            <div>{item.item.snippet}</div>
        </div>
    )
}

export default ResultComponent;