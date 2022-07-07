import { Routes, Route } from 'react-router-dom'
import styles from './routes.module.scss'

import Header from './Header'
import Main from './Main'
import Favorite from './Favorite'
import FNB from 'routes/_shared/FNB'

const App = () => {
  return (
    <div>
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
