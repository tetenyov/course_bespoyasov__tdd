import React from 'react'
import { CurrentCourse } from '../CurrenCourse/CurrentCourse';
import { RefreshCourse } from '../RefreshCourse';
import styles from './header.module.css';

export function Header() {
  return (
    <header className={styles.header}>
      Курс доллара на сегодня
      <CurrentCourse />
      <RefreshCourse />
    </header>
  )
}

