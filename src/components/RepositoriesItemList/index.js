import './styles.css';

const ItemList = ({ title, desc }) => {
    return (
        <div className="item-list">
            <strong>{title}</strong>
            <p>{desc}</p>
            <hr />
        </div>
    );
}

export default ItemList;