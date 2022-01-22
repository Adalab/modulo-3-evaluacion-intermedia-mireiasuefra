import { useState, useEffect } from "react";
import "../styles/App.scss";
import callToApi from "../services/api";
import Header from "./Header";
import AddAdalaber from "./AddAdalaber";
import TableAdalaber from "./TableAdalaber";

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
    setNameAdalaber("");
    setCounselor("");
    setSpeciality("");
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
          <TableAdalaber
            adalabers={adalabers}
            headers={['Nombre', 'Tutora', 'Especialidad', 'Redes sociales']}
            filterAdalaber={filterAdalaber}
            filterCounselor={filterCounselor}
          />
        </div>
        <AddAdalaber
          nameAdalaber={nameAdalaber}
          counselor={counselor}
          speciality={speciality}
          hanleNameAdalaber={hanleNameAdalaber}
          hanleConselor={hanleConselor}
          hanleSpeciality={hanleSpeciality}
          onSubmitAdalaber={onSubmitAdalaber}
        />
      </main>
    </div>
  );
}

export default App;
