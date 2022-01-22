import { useState, useEffect } from "react";
import "../styles/App.scss";
import callToApi from "../services/api";
import Header from "./Header";

function App() {
  const [adalabers, setAdalabers] = useState([]);
  const [nameAdalaber, setNameAdalaber] = useState("");
  const [counselor, setCounselor] = useState("");
  const [speciality, setSpeciality] = useState("");
  const [filterAdalaber, setFilterAdalaber] = useState("");
  const [filterCounselor, setFilterCounselor] = useState("all");


  //-->Api:
  useEffect(() => {
    // Dentro de useEffect llamamos al API
    callToApi().then((response) => {
      // Cuando el API responde guardamos los datos en el estado para que se re-renderice el componente
      setAdalabers(response);
    });
  }, []);

  
  //con esta función pinto
  const renderAdalaber = () => {
    return adalabers
      .filter((adalabers) => {
        return adalabers.name
          .toLowerCase()
          .includes(filterAdalaber.toLowerCase());
      })
      .filter((oneAdalaber) => {
        if (filterCounselor === "all") {
          return true;
         } else {
          return oneAdalaber.counselor.toLowerCase() === filterCounselor;
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
    setNameAdalaber('');
    setCounselor('');
    setSpeciality('');
  };

  return (
    <div>
      <Header
        filterCounselor={filterCounselor}
        filterAdalaber={filterAdalaber}
        onChangeFilterSelecterListener={onChangeFilterSelecterListener}
        onChangeFilterListener={onChangeFilterListener}
      />
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
              placeholder="Nueva Adalaber"
              onChange={hanleNameAdalaber}
              value={nameAdalaber}
            />
            <input
              type="text"
              name="counselor"
              id="counselor"
              placeholder="Tutora"
              onChange={hanleConselor}
              value={counselor}
            />
            <input
              type="text"
              name="speciality"
              id="speciality"
              placeholder="Especialidad"
              onChange={hanleSpeciality}
              value={speciality}
            />
            <input type="submit" value="Añadir" />
          </form>
        </div>
      </main>
    </div>
  );
}

export default App;
