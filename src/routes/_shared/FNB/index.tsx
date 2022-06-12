import { NavLink, useParams } from 'react-router-dom'
import cx from 'classnames'

import { FoodIcon1, HeartIcon } from 'assets/svgs'
import styles from './fnb.module.scss'

const FNB = () => {
  const { favorite } = useParams<{ favorite: string }>()

  return (
    <footer>
      <nav className={styles.fnbContainer}>
        <ul>
          <li>
            <NavLink to='' className={({ isActive }) => cx({ [styles.isActiveYellow]: !favorite && isActive })}>
              <FoodIcon1 />
              <p>FOOD</p>
            </NavLink>
          </li>
          <li>
            <NavLink
              to='favorite'
              state={{ favorite }}
              className={({ isActive }) => cx({ [styles.isActivePink]: isActive })}
            >
              <HeartIcon />
              <p>LIKE</p>
            </NavLink>
          </li>
        </ul>
      </nav>
    </footer>
  )
}
export default FNB
