const Header = (props) => {
  return (
    <header>
      <h1>Adalabers</h1>
      <form>
        <select
          name="name"
          id="name"
          value={props.filterCounselor}
          onChange={props.onChangeFilterSelecterListener}
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
          value={props.filterAdalaber}
          onChange={props.onChangeFilterListener}
        />
      </form>
    </header>
  );
};

export default Header;
