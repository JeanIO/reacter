import React, { useState, useEffect } from 'react'
import Button from 'antd/lib/button'

const Counter = function (props) {
    const [count, setCount] = useState(1)
    useEffect(() => {
        document.title = `You clicked ${props.value} times`;
        return function(){
            document.title = "end"
        }
      }, []);
    return <Button onClick={() => {setCount(count + 1)}}>{`Add${count}`}</Button>
}
export default Counter