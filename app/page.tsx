"use client"

import Image from 'next/image'

export default function Home() {
  let table = ["", "", "", "", "", "", "", "", ""]
  let jogador = "X"

  function marcar(td: any) {
    if (td.innerHTML == "") {
      td.innerHTML = jogador
    }
    else {
      alert("Jogar Novamente!")
    }
    if (jogador == "X") {
      jogador = "O"

    } else {
      jogador = "X"

    }

  }
  return (
    <section>
      <header className='flex justify-center text-center mt-11 text-8xl font-black font-sans' >Jogo da Velha</header>
      <main className='text-center font-extrabold text-4xl'>
        <table className='flex justify-center text-center mt-11'>
          <tbody>
            <tr>
              <td onClick={(td) => marcar(td.target)} className='border-4 border-black w-[100px] h-[100px] hover:bg-white'></td>
              <td onClick={(td) => marcar(td.target)} className='border-4 border-black w-[100px] h-[100px] hover:bg-white'></td>
              <td onClick={(td) => marcar(td.target)} className='border-4 border-black w-[100px] h-[100px] hover:bg-white'></td>
            </tr>
            <tr>
              <td onClick={(td) => marcar(td.target)} className='border-4 border-black w-[100px] h-[100px] hover:bg-white'></td>
              <td onClick={(td) => marcar(td.target)} className='border-4 border-black w-[100px] h-[100px] hover:bg-white'></td>
              <td onClick={(td) => marcar(td.target)} className='border-4 border-black w-[100px] h-[100px] hover:bg-white'></td>
            </tr>
            <tr>
              <td onClick={(td) => marcar(td.target)} className='border-4  border-black w-[100px] h-[100px] hover:bg-white'></td>
              <td onClick={(td) => marcar(td.target)} className='border-4  border-black w-[100px] h-[100px] hover:bg-white'></td>
              <td onClick={(td) => marcar(td.target)} className='border-4  border-black w-[100px] h-[100px] hover:bg-white'></td>
            </tr>
          </tbody>
        </table>
      </main>
      <footer></footer>
    </section>

  )
}
