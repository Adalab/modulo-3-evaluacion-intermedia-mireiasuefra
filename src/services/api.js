const callToApi = () => {
  return fetch(
    "https://beta.adalab.es/pw-recursos/apis/adalabers-v1/promo-patata.json"
  )
    .then((response) => response.json())
    .then((data) => data.results.map((adalaber) => {
        return {
          name: adalaber.name,
          counselor: adalaber.counselor,
          speciality: adalaber.speciality,
          social_networks: adalaber.social_networks
        };
      })
    );
};

export default callToApi;
