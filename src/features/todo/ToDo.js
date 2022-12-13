import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addTask, deleteTask, moveToDone } from './toDoSlice';
import { FaTrashAlt, FaRegCheckCircle } from 'react-icons/fa';

import styles from './Todo.module.css';
function ToDo() {

  const [value, setValue] = useState('');
  const dispatch = useDispatch();
  const state = useSelector(state => state.todo);
  useEffect(() => {
    console.log("Testing value: ", value)
    console.log(state);
  }, [value])

  return (
    <div className={styles.main}>
        <h3>ToDo List</h3>
        <input
            className={styles.input}
            placeholder="add your today's tasks"
            value={value}
            onChange={(value) => setValue(value.target.value)}
            />
        <button
            className={styles.button}
            onClick={()=> {
                dispatch(addTask(value));
                setValue('');
            }}
        >
            Add Task
        </button>

        {state.task.length > 0 && state.task.map((item) => {
            return <div className={styles.taskTextWrap}>
                    <div className={styles.taskText} key={item}>{item}</div>
                    <button
                        className={styles.buttonDelete}
                        onClick={()=> {dispatch(deleteTask(item))}}
                    >
                        <FaTrashAlt/>
                    </button>
                    <button
                        className={styles.buttonCheck}
                        onClick={()=> {dispatch(moveToDone(item))}}
                    >
                        <FaRegCheckCircle />
                    </button>
                </div>
        })}
    </div>
  )
}

export default ToDo;