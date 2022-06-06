import { useState } from 'react';
import SearchBlock from './components/SearchBlock/SearchBlock.jsx';
import Repos from './components/Repos.jsx';
import Result from './components/Result.jsx';
import { Container } from './components/styles/Container.styled.js';
import { Logo } from './components/styles/Logo.styled.js';
import GlobalStyles from './components/styles/Global.js';
import { ReposResultWrapper } from './components/styles/ReposResultWrapper.styled';

function App() {
    const [userName, setUserName] = useState('');
    const [repos, setRepos] = useState();
    const [result, setResult] = useState();

    return (
        <>
            <GlobalStyles />
            <Container>
                <Logo>Logout.js</Logo>
                <p>Enter your Github username</p>
                <SearchBlock userName={userName} setUserName={setUserName} setRepos={setRepos} />
                <ReposResultWrapper>
                    {repos && <Repos userName={userName} repos={[repos]} setResult={setResult} />}
                    {result && <Result result={[result]} />}
                </ReposResultWrapper>
            </Container>
        </>
    );
}

export default App;
