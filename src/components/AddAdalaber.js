const AddAdalaber = (props) => {
  return (
    <div>
      <h2>Añade una nueva Adalaber: </h2>
      <form onSubmit={props.onSubmitAdalaber}>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Nueva Adalaber"
          onChange={props.hanleNameAdalaber}
          value={props.nameAdalaber}
        />
        <input
          type="text"
          name="counselor"
          id="counselor"
          placeholder="Tutora"
          onChange={props.hanleConselor}
          value={props.counselor}
        />
        <input
          type="text"
          name="speciality"
          id="speciality"
          placeholder="Especialidad"
          onChange={props.hanleSpeciality}
          value={props.speciality}
        />
        <input type="submit" value="Añadir" />
      </form>
    </div>
  );
};

export default AddAdalaber;
