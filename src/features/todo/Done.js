import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addTask, deleteTask, moveToDone } from './toDoSlice';
import { FaTrashAlt, FaRegCheckCircle } from 'react-icons/fa';

import styles from './Todo.module.css';
function Done() {

  const [value, setValue] = useState('');
  const dispatch = useDispatch();
  const state = useSelector(state => state.todo);
  useEffect(() => {
    console.log("Testing value: ", value)
    console.log(state);
  }, [value])

  return (
    <div className={styles.main}>
        {state.done.length == 0 ?
        <h2>Oops! No task done today!</h2> : 
        <h3>Yeyyyy! These are what you accomplised today: </h3>}
        {state.done.length > 0 && state.done.map((item) => {
            return <>
            <div className={styles.taskTextWrap}>
                    <div className={styles.taskDoneText} key={item}>{item}</div>
                </div>
            </>
        })}
    </div>
  )
}

export default Done;