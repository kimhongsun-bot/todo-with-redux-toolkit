import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { recoverTask } from './toDoSlice';

import styles from './Todo.module.css';
function Deleted() {

  const [value, setValue] = useState('');
  const dispatch = useDispatch();
  const state = useSelector(state => state.todo);
  useEffect(() => {
    console.log("Testing value: ", value)
    console.log(state);
  }, [value])

  return (
    <div className={styles.main}>
        {state.deleted.length == 0 ?
        <h2>Yeyyy! No task deleted today!</h2> : 
        <h3>Oops! Tasks you deleted today: </h3>}
        {state.deleted.length > 0 && state.deleted.map((item) => {
            return <>
            <div className={styles.taskTextWrap}>
                    <div className={styles.taskDoneText} key={item}>{item}</div>
                    <button
                        className={styles.button}
                        onClick={()=> {
                            dispatch(recoverTask(item));
                        }}
                        >
                        Recover
                    </button>
                </div>
            </>
        })}
    </div>
  )
}

export default Deleted;