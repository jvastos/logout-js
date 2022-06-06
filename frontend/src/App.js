import { useState } from 'react';
import SearchBlock from './components/SearchBlock/SearchBlock.jsx';
import Repos from './components/Repos.jsx';
import Result from './components/Result.jsx';
import { Container } from './components/styles/Container.styled.js';
import { Logo } from './components/styles/Logo.styled.js';
import GlobalStyles from './components/styles/Global.js';
import { ReposResultWrapper } from './components/styles/ReposResultWrapper.styled';

function App() {
    const [userName, setUserName] = useState();
    const [repos, setRepos] = useState();
    const [repoToScan, setRepoToScan] = useState();
    const [displayResult, setDisplayResult] = useState(false);

    return (
        <>
            <GlobalStyles />
            <Container>
                <Logo>Logout.js</Logo>
                <p>Enter your Github username</p>
                <SearchBlock userName={userName} setUserName={setUserName} setRepos={setRepos} setRepoToScan={setRepoToScan} />
                <ReposResultWrapper>
                    {repos && <Repos userName={userName} repos={[repos]} setRepoToScan={setRepoToScan} />}
                    {repoToScan && <Result userName={userName} repoToScan={repoToScan} />}
                </ReposResultWrapper>
            </Container>
        </>
    );
}

export default App;
