import React from 'react'

export default function Header() {
  return (
    <div>
         <header className="d-flex justify-between align-center p-40">
        <div className="headerLeft">
          <img width={70} height={40} src="../img/logo.jpeg" alt="" />
          <div className="headerInfo">
            <h3 className="text-uppercase">React Sneakers</h3>
            <p>Магазин лучших кроссовок</p>
          </div>
        </div>

        <ul className="d-flex">
          <li className="mr-30 ">
            {" "}
            <img width={18} height={18} src="../img/Vector.jpeg" alt="" />{" "}
            <span className="ml-10">1205. р</span>
          </li>
          <li>
            <img width={18} height={18} src="../img/Heart.jpeg" alt="" />
          </li>
        </ul>
      </header>
    </div>
  )
}
