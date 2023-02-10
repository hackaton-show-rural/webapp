const LatestApplication = ({ application }) => {
  return (
    <div className="flex flex-col gap-4 rounded-lg bg-gray-100 p-6 shadow-lg">
      <p> Data: {application?.data} </p>
      <div className="flex flex-row justify-between ">
        <ul>
          <li>Temperatura {application?.temperatura} °C </li>
          <li>Umidade {application?.umidade} </li>
        </ul>
        <ul>
          <li>Vento: {application?.vento ? "Sim" : "Não"} </li>
          <li>Chuva {application?.chuva ? "Sim" : "Não"} </li>
        </ul>
      </div>
    </div>
  );
};
export default LatestApplication;

/* 

Temperatura mínima de 10°C; ideal de 20 a 30°C; e máxima de 35°C; Umidade relativa do ar mínima de 60%; ideal de 70 a 90%; e máxima de 95%; Vento ótimo entre 3 e 10 km/h; Não haver chuva durante a aplicação e nas 2 horas seguintes.

*/
