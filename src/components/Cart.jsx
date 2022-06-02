import React from 'react'

export default function Cart() {
  return (
    <div>

<div className="overlay" >
        <div className="drawer d-flex flex-column">

       
          <div className="cart-main d-flex justify-between">
          <h2 className="p-30">Корзина</h2>
          <img
              className="btnRemove pr-30"
              src="../img/cancel/Rectangle 22.svg"
              alt="cancel"
            />
          </div>
          <div className="items-full">
          <div className="cart-item  d-flex align-center mb-20  ">
            <img
              className="m-20"
              width={70}
              height={70}
              src="../img/React Sneakers/2.jpg"
              alt="Sneakers"
            />
            <div className="mr-20">
              <p>Мужские Кроссовки Nike Air Max 270</p>
              <b>12 999p</b>
            </div>

            <img
              className="btnRemove pr-10"
              src="../img/cancel/Rectangle 22.svg"
              alt="cancel"
            />
          </div>
          <div className="cart-item  d-flex align-center mb-20  ">
            <img
              className="m-20"
              width={70}
              height={70}
              src="../img/React Sneakers/2.jpg"
              alt="Sneakers"
            />
            <div className="mr-20">
              <p>Мужские Кроссовки Nike Air Max 270</p>
              <b>12 999p</b>
            </div>

            <img
              className="btnRemove pr-10"
              src="../img/cancel/Rectangle 22.svg"
              alt="cancel"
            />
          </div>

          </div>
          <div className="items   m-30 ">
            <ul>
              <li className="cart-items d-flex justify-between">
                <span>Итого:</span>
                <div></div>
                <b>21 498р</b>
              </li>
              <li className="cart-items d-flex justify-between">
                <span>Налог 5%:</span>
                <div></div>
                <b>1074p</b>
              </li>
              <button className="btn-buy">Оформить заказ</button>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
