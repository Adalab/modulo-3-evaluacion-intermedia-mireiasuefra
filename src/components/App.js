import { useState } from "react";
import dataAdalaber from "../components/data.json";
import "../styles/App.scss";

function App() {
  const [adalabers, setAdalabers] = useState(dataAdalaber.results);
  const [nameAdalaber, setNameAdalaber] = useState("");
  const [counselor, setCounselor] = useState("");
  const [speciality, setSpeciality] = useState("");
  const [filterAdalaber, setFilterAdalaber] = useState("");
  const [filterCounselor, setFilterCounselor] = useState("all");


  //con esta función pinto
  const renderAdalaber = () => {
    return adalabers
      .filter((adalabers) => {
        return adalabers.name
          .toLowerCase()
          .includes(filterAdalaber.toLowerCase());
      })
      .filter((oneAdalaber)=> {
      if (filterCounselor === 'yanelis') {
        return oneAdalaber.counselor.toLowerCase() === filterCounselor
      } else if (filterCounselor === 'dayana') {
        return oneAdalaber.counselor.toLowerCase() === filterCounselor
      } if (filterCounselor === 'iván') {
        return oneAdalaber.counselor.toLowerCase() === filterCounselor
      }else {
        return true;
      }
    })
      .map((oneAdalaber, index) => {
        return (
          <tr key={index}>
            <td>{oneAdalaber.name}</td>
            <td>{oneAdalaber.counselor}</td>
            <td>{oneAdalaber.speciality}</td>
          </tr>
        );
      });
  };

  //con estas funciones (evento) filtro 
  const onChangeFilterListener = (ev) => {
    setFilterAdalaber(ev.target.value);
  };

  const onChangeFilterSelecterListener = (ev) => {
    setFilterCounselor(ev.target.value);
  };

  //con estas funciones (evento) añado 
  const hanleNameAdalaber = (ev) => {
    setNameAdalaber(ev.target.value);
  };

  const hanleConselor = (ev) => {
    setCounselor(ev.target.value);
  };

  const hanleSpeciality = (ev) => {
    setSpeciality(ev.target.value);
  };

  const onSubmitAdalaber = (ev) => {
    ev.preventDefault();
    const newAdalaber = {
      name: nameAdalaber,
      counselor: counselor,
      speciality: speciality,
    };
    setAdalabers([...adalabers, newAdalaber]);
  };

  return (
    <div>
      <header>
        <h1>Adalabers</h1>
        <form>
          <select
            name="name"
            id="name"
            value={filterCounselor}
            onChange={onChangeFilterSelecterListener}
          >
            <option value="all">Todas</option>
            <option value="yanelis">Yanelis</option>
            <option value="dayana">Dayana</option>
            <option value="iván">Iván</option>
          </select>

          <input
            type="Text"
            name="name"
            placeholder="Ej: Nombre Adalaber"
            value={filterAdalaber}
            onChange={onChangeFilterListener}
          />
        </form>
      </header>
      <main>
        <div>
          <table>
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Tutora</th>
                <th>Especialidad</th>
              </tr>
            </thead>
            <tbody>{renderAdalaber()}</tbody>
          </table>
        </div>
        <div>
          <h2>Añade una nueva Adalaber: </h2>
          <form onSubmit={onSubmitAdalaber}>
            <input
              type="text"
              name="name"
              id="name"
              onChange={hanleNameAdalaber}
            />
            <input
              type="text"
              name="counselor"
              id="counselor"
              onChange={hanleConselor}
            />
            <input
              type="text"
              name="speciality"
              id="speciality"
              onChange={hanleSpeciality}
            />
            <input type="submit" value="Añadir" />
          </form>
        </div>
      </main>
    </div>
  );
}

export default App;
