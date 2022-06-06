import { useState } from 'react';
import SearchBlock from './components/SearchBlock/SearchBlock.jsx';
import Repos from './components/Repos.jsx';
import Result from './components/Result.jsx';

function App() {
    const [userName, setUserName] = useState('');
    const [repos, setRepos] = useState();
    const [result, setResult] = useState();

    return (
        <div className="App">
            <p>Enter your Github username</p>
            <SearchBlock
                userName={userName}
                setUserName={setUserName}
                setRepos={setRepos}
            />
            {repos && (
                <Repos
                    userName={userName}
                    repos={[repos]}
                    setResult={setResult}
                />
            )}
            {result && <Result result={[result]} userName={userName} />}
        </div>
    );
}

export default App;
