import Header from './Header'
import Main from './Main'
import FNB from './FNB'

import styles from './routes.module.scss'

const App = () => {
  return (
    <div className={styles.appWrapper}>
      routes
      <Header />
      <Main />
      <FNB />
    </div>
  )
}

export default App
