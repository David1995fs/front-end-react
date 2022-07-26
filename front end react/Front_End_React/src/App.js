import React from 'react'
import Layout from './components/layout';
import NoSearch from './components/no-serach';
import Profile from './components/profile'
import Repositories from './components/repositories';
import useGithub from './hooks/github-hooks'


function App() {
  const {gitState} = useGithub()
  return (   
       
        <Layout>
          {gitState.hasUser?<>
        {gitState.loading?(
        <p>loading...</p>
        ):(
          <>
          <Profile/>
          <Repositories/>
          </>
        )}
         </>: <NoSearch/>}
        </Layout>
      
         
    
  );
}

export default App;
