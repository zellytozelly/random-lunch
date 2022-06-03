import { Routes, Route } from 'react-router-dom'

import Header from './Header'
import Main from './Main'
import Favorite from './Favorite'
import FNB from 'routes/_shared/FNB'

import styles from './routes.module.scss'

const App = () => {
  return (
    <div className={styles.appWrapper}>
      <Header />
      <div className={styles.app}>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='favorite' element={<Favorite />} />
          <Route path='*' element={<div>404 Not Found</div>} />
        </Routes>
      </div>
      <FNB />
    </div>
  )
}

export default App
