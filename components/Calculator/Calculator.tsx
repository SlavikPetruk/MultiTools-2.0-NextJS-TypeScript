import styles from '../../styles/Calculator.module.css';
import { btns, BTN_ACTIONS } from './btnConfig';
import { FC, useEffect, useRef, useState } from 'react';

const Calculator:FC = () => {

  const btnsRef = useRef<any>(null);  //useRef<HTMLInputElement(null)
  const expRef = useRef<any>(null);   //useRef<HTMLInputElement(null)

  const [expression, setExpression] = useState('')

  useEffect(() => {
    const btns = Array.from(btnsRef.current.querySelectorAll('button'));
    btns.forEach((e: any) => e.style.height = e.offsetWidth + 'px');
}, []);

  const btnClick = (item: any) =>{ 

    const expDiv = expRef.current

    if (item.action  === BTN_ACTIONS.ADD) {
      addAnimSpan(item.display)

      const oper = item.display !== 'x' ? item.display : '*'
      setExpression(expression + oper)
    }

    if (item.action === BTN_ACTIONS.DELETE) {
          expDiv.parentNode.querySelector('div:last-child').innerHTML = ''
          expDiv.innerHTML = ''
          setExpression('')
    }
    
    if (item.action === BTN_ACTIONS.CALC) {
      if (expression.trim().length <= 0) return
      expDiv.parentNode.querySelector('div:last-child').remove()
      const cloneNode = expDiv.cloneNode(true)
      expDiv.parentNode.appendChild(cloneNode)

      const transform = `translateY(${-(expDiv.offsetHeight + 10) + 'px'}) scale(0.4)`


      try {
        let res = eval(expression);

        setExpression(res.toString());
        setTimeout(() => {
            cloneNode.style.transform = transform;
            expDiv.innerHTML = '';
            addAnimSpan(Math.floor(res * 100000000) / 100000000);
        }, 200);
    } catch {
        setTimeout(() => {
            cloneNode.style.transform = transform;
            cloneNode.innerHTML = 'Syntax err';
        }, 200);
    } finally {
        console.log('calc complete');
    
    } 
  }


    if (item.action === BTN_ACTIONS.REMOVE) {
    expression.substring(0, expression.length - 1)
    }
  }

  const addAnimSpan = (content: any) => {
    const expDiv = expRef.current
    const span = document.createElement('span')

    span.innerHTML = content
    span.style.opacity = '1'
    expDiv.appendChild(span)

    const width = span.offsetWidth + 'px'
    span.style.width = '0'
      
      setTimeout(() => {
        span.style.opacity = '1'
        span.style.width = width
      }, 100)
  }

return (
  <div className={styles.calculator}>
    <h1>Calculator</h1>
    <div className={styles.calculator__result}>
      <div ref={expRef} className={styles.calculator__result__exp}></div>
      <div className={styles.calculator__result__exp}></div>
    </div>
    <div ref={btnsRef}  className={styles.calculator__btns}>
      {btns.map((item,index) => (
        <button 
              key={index} 
              onClick={() => btnClick(item)}
              className={item.class}>
          {item.display}
          </button>) )}
    </div>
  </div>
  )
};

export default Calculator;
