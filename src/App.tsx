import React from 'react'
import AppContainer from './components/AppContainer'
import Logo from './components/Logo'
import SearchBar from './containers/SearchBar'
import SearchResults from './containers/SearchResults'

class App extends React.PureComponent {
  render() {
    return (
      <AppContainer>
        <Logo />
        <SearchBar />
        <SearchResults />
      </AppContainer>
    )
  }
}

export default App
