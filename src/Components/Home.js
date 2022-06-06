import React from 'react'
export default function Home() {
  return (
    <React.Fragment>
      <div className="main">
        <div className="title">
          <img alt=""
            src="./Assets/logo.png"
            style={{ width: "350px", height: "130px" }}
          />
        </div>
        <div className="content">
          <div className="left">
            <img alt=""
              className="   "
              src="./Assets/1.png"
              style={{ width: "350px", height: "650px" }}
            />
          </div>
          <div className="right">
            <h3>
              C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for
              the 4th time.
            </h3>
            <ul>
              <li>
                C.R.I.'s energy efficient products are well recognized by various
                Government Institutions, as trustworthy products for various
                projects across the globe to save energy.
              </li>
              <li>
                C.R.I. is the highest contributor in the country for the projects
                of EESL (Energy Efficiency Services Limited) to replace the old
                inefficient pumps with 5 Star rated energy efficient smart pumps
                with IoT enabled control panel.
              </li>
            </ul>
            <img alt="" className="responsive" src="./Assets/2.png" />
            <p className="">
              Government of India has awarded the
              <b>"National Energy Conservation Award 2018".</b> Mr. G. Selvaraj,
              Joint Managing Director of C.R.I. Group received the award from Smt.
              Sumitra Mahajan, Speaker of Lok Sabha and  Shri. Raj Kumar Singh,
              Honorable Minister of State.
            </p>
          </div>
        </div>
        <div className="desc">
          <h5 style={{ textAlign: 'center' }}>
            INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY
            RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF
            POWER FOR THE NATION.
          </h5>
          <img alt=""
            className="img3"
            src="./Assets/3.png"
          />
          <p className=" " style={{ textAlign: 'center' }}>
            Valves - Pumps - Pipes - IoT Drives and  Controllers - Wires and  Cables -
            Solar Systems - Motors
          </p>
        </div>
        <hr className=" " style={{ height: "1px", backgroundColor: 'red' }} />

        <h5 className=" " style={{ textAlign: 'center' }}>
          C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS
        </h5>
        <div className="">
          <table >
            <tr className="mob">
              <td><b>CHEMICALS and  PROCESS</b></td>
              <td><b>POWER</b></td>
              <td><b>WATER and  WASTE WATER</b></td>
              <td><b>OILS and  GAS</b></td>
              <td><b>PHARMA</b></td>
              <td><b>SUGARS and  DISTILLERIES</b></td>
            </tr>
          </table>
          <table>
            <tr className="mob">
              <td><b>PAPER and  PULP</b></td>
              <td><b>MARINE and  DEFENCE</b></td>
              <td><b>METAL and  MINING</b></td>
              <td><b>FOOD and  BEVERAGE</b></td>
              <td><b>PETROCHEMICAL and  REFINERIES</b></td>
              <td><b>SOLAR</b></td>
            </tr>
          </table>
          <table >
            <tr className="mob">
              <td><b>BUILDING</b></td>
              <td><b>HVAC</b></td>
              <td><b>FIRE FIGHTING</b></td>
              <td><b>AGRICULTURE and  RESIDENTIAL</b></td>
            </tr>
          </table>
        </div>
        <table className="notmob">
          <tr>
            <td><b>CHEMICALS and  PROCESS</b></td>
            <td><b>POWER</b></td>
            <td><b>WATER and  WASTE WATER</b></td>
            <td><b>OILS and  GAS</b></td>
            <td><b>PHARMA</b></td>
            <td><b>SUGARS and  DISTILLERIES</b></td>
            <td><b>PAPER and  PULP</b></td>
            <td><b>MARINE and  DEFENCE</b></td>
            <td><b>METAL and  MINING</b></td>
            <td><b>FOOD and  BEVERAGE</b></td>
          </tr>
        </table>
        <table className="notmob">
          <tr>
            <td><b>PETROCHEMICAL and  REFINERIES</b></td>
            <td><b>SOLAR</b></td>
            <td><b>BUILDING</b></td>
            <td><b>HVAC</b></td>
            <td><b>FIRE FIGHTING</b></td>
            <td><b>AGRICULTURE and  RESIDENTIAL</b></td>
          </tr>
        </table>
      </div>
      <div className="footer">
        <button className="bi bi-telephone">Toll free:<b>1800 200 1234</b>   </button>
        <button className="bi bi-facebook">www.facebook.com/cripumps   </button>
        <button className="bi bi-globe">www.crigroups.com  </button>
      </div>
    </React.Fragment>
  )
}