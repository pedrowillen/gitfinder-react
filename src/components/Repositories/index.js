import './styles.css';
import ItemList from '../RepositoriesItemList';

const Repositories = ({ repos }) => {
    return (
        <div className="repositories">
            <h4>Repositories</h4>
            {repos.map((repo) => (
                <a href={repo.html_url} target="_blank"><ItemList title={repo.name} desc={repo.description} /></a>
            )
                
            
            )}
        </div>
    );
}

export default Repositories;