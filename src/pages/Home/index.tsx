import { useState } from 'react'
import './style.css'

export default function Home() {
  const [category, setCategory] = useState<string>("")
  const [firstNumber, setFirstNumber] = useState<number>(0)
  const [lastNumber, setLastNumber] = useState<number>(0)
  const [total, setTotal] = useState<string>("")

  function sum(n1: number, operador: string, n2: number) {


    console.log(n1, operador, n2);

    if (operador === "+") {
      let total = n1 + n2
      const operador = "soma"
      setTotal(` a ${operador} e igual a ${total}`)
    } else if (operador === "-") {
      let total = n1 - n2
      const operador = "Subtração"
      setTotal(` a ${operador} e igual a ${total}`)
    } else if (operador === "*") {
      let total = n1 * n2
      const operador = "Multiplicação"
      setTotal(` a ${operador} e igual a ${total}`)
    } else if (operador === "/") {
      let total = n1 / n2
      const operador = "divisão(÷)"
      setTotal(` a ${operador} e igual a ${total}`)
    } else {
      alert("Não foi possivel fazer a equação")
    }

  }

  return (
    <>
      <main>
        <form className='receptores-number'>
          <div className='numbers'>
            <div className='input-groupe'>
              <label htmlFor="n1">Digite um numero:</label>
              <input onChange={(e) => { setFirstNumber(Number(e.target.value)) }} required id='n1' type="number" />

              <label htmlFor="n2">Digite outro numero:</label>
              <input onChange={(e) => { setLastNumber(Number(e.target.value)) }} required id='n2' type="number" />
              <select onChange={(e) => { setCategory(e.target.value) }}>
                <option hidden selected disabled value="Escolha um metodo">Escolha um metodo</option>
                <option value="+">Soma</option>
                <option value="-">subtração</option>
                <option value="*">multiplicaçao</option>
                <option value="/">divisão</option>
              </select>

              <button onClick={(e) => {
                e.preventDefault()
                sum(firstNumber, category, lastNumber)    
              }}
              >
                Calcular
              </button>
            </div>
          </div>
        </form>

        <h1>{total}</h1>
      </main>
    </>
  )
}