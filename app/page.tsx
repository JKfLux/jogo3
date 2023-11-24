"use client"

import Image from 'next/image'

export default function Home() {

  let jogador = "X"

  function marcar(td: any) {
    if (td.innerHTML == "") {
      td.innerHTML = jogador
    }
    if (jogador == "X") {
      jogador = "O"

    } else {
      jogador = "X"
    }
  }

  return (
    <section>
      <header>Jogo da Velha</header>
      <main>
        <table>
          <tbody>
            <tr>
              <td onClick={(td)=> marcar(td.target)} className='border-4 border-red w-[100px] h-[100px]'></td>
              <td onClick={(td)=> marcar(td.target)} className='border-4 border-red w-[100px] h-[100px]'></td>
              <td onClick={(td)=> marcar(td.target)} className='border-4 border-red w-[100px] h-[100px]'></td>
            </tr>
            <tr>
              <td onClick={(td)=> marcar(td.target)} className='border-4 border-red w-[100px] h-[100px]'></td>
              <td onClick={(td)=> marcar(td.target)} className='border-4 border-red w-[100px] h-[100px]'></td>
              <td onClick={(td)=> marcar(td.target)} className='border-4 border-red w-[100px] h-[100px]'></td>
            </tr>
            <tr>
              <td onClick={(td)=> marcar(td.target)} className='border-4 border-red w-[100px] h-[100px]'></td>
              <td onClick={(td)=> marcar(td.target)} className='border-4 border-red w-[100px] h-[100px]'></td>
              <td onClick={(td)=> marcar(td.target)} className='border-4 border-red w-[100px] h-[100px]'></td>
            </tr>
          </tbody>
        </table>
      </main>
      <footer></footer>
    </section>

  )
}
