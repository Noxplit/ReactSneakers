import React from 'react'

export default function Card() {
  return (
    <div>
    
    <div className="card mr-30">
            <div className="favorite">
              <img src="../img/Heart-1/Rectangle 21.svg" alt="Unliked" />
            </div>
            <img
              width={130}
              height={120}
              src="../img/React Sneakers/image 5-7.jpg"
              alt=""
            />

            <div className="content__text">
              Мужские Кроссовки Nike Blazer Mid Suede
            </div>
            <div className="d-flex justify-between">
              <div className="d-flex flex-column">
                {" "}
                <span>Цена: </span>
                <b>12 999p.</b>
              </div>

              <div>
                <button className="btn_sneakers">
                  {" "}
                  <img src="../img/Plus.svg" alt="" width={15} height={15} />
                </button>
              </div>
            </div>
          </div>
    </div>
  )
}

