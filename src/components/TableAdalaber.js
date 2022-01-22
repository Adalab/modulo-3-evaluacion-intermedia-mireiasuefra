const TableAdalaber = (props) => {

// Con esta funcion añado una nueva cabecera para las redes socialesgit 
  const renderHeaders = () => {
    return props.headers
        .map((header, index) => {
      return (
        <th key={index}>{header}</th>
      );
    });
  }

  //como las RRSS es un array, hago otro map y lo retorno como html en un link. Abajo llamo a la funcion rendersocialnetworks y dentro si que meto el oneAdalaberetc...
  const renderSocialNetworks = (socialNetworks) => {
    return socialNetworks
      .map((socialNetwork, index) => {
        return (
          <a href={socialNetwork.url}>{socialNetwork.name}</a>
        );
      });
  };

  //con esta función pinto
  const renderAdalaber = () => {
    return props.adalabers
      .filter((adalabers) => {
        return adalabers.name
          .toLowerCase()
          .includes(props.filterAdalaber.toLowerCase());
      })
      .filter((oneAdalaber) => {
        if (props.filterCounselor === "all") {
          return true;
        } else {
          return oneAdalaber.counselor.toLowerCase() === props.filterCounselor;
        }
      })
      .map((oneAdalaber, index) => {
        return (
          <tr key={index}>
            <td>{oneAdalaber.name}</td>
            <td>{oneAdalaber.counselor}</td>
            <td>{oneAdalaber.speciality}</td>
            <td>{renderSocialNetworks(oneAdalaber.social_networks)}</td>
          </tr>
        );
      });
  };

    return (
        <table>
        <thead>
          <tr>{renderHeaders()}</tr>
        </thead>
        <tbody>{renderAdalaber()}</tbody>
      </table>

    );
  };
  
  export default TableAdalaber;
