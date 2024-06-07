import Header from '../../components/Header';
import BackgroundImg from '../../components/BackgroundImage';
import Info from '../../components/Info';
import Form from '../../components/Form';
import Profile from '../../components/Profile';
import Repositories from '../../components/Repositories';
import { useState } from 'react';
import './styles.css';

function App() {
  const [user, setUser] = useState('');
  const [currentUser, setCurrentUser] = useState(null);
  const [repos, setRepos] = useState(null);

  const handleGetData = async () => {
    const userData = await fetch(`https://api.github.com/users/${user}`);
    const newUser = await userData.json();

    if (newUser.name) {
      const { avatar_url, name, bio, login } = newUser;
      setCurrentUser({ avatar_url, name, bio, login });

      const reposData = await fetch(`https://api.github.com/users/${user}/repos`);
      const newRepos = await reposData.json();

      if (newRepos.length) {
        setRepos(newRepos);
      }
    }
  }

  return (
    <div className="App">
      <Header />
      <div className="content">
        <BackgroundImg />
        <Info>
          <Form
            user={user}
            onChangeFunction={event => setUser(event.target.value)}
            onClickFunction={handleGetData}
          />
          {currentUser?.name ? (
            <Profile
              avatar={currentUser.avatar_url}
              name={currentUser.name}
              login={currentUser.login}
              desc={currentUser.bio}
            />
          ) : null}
          {repos?.length ? (
            <Repositories repos={repos}/>
          ) : null}
        </Info>
      </div>
    </div>
  );
}

export default App;

