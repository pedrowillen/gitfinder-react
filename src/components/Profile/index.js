import './styles.css';

const Profile = ({ avatar, name, desc, login }) => {
    return (
        <>
            <div className="profile">
                <img src={avatar} alt="Foto do perfil" />
                <div>
                    <h3>{name}</h3>
                    <span>@{login}</span>
                    <p>{desc}</p>
                </div>
            </div>
            <hr />
        </>
    );
}

export default Profile;