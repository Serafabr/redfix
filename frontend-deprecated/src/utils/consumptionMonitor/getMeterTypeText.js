export default function getMeterTypeText(tipoAttr){
  
  const typeTextOptions = {
    "0": "Convencional",
    "1": "Horária - Verde",
    "2": "Horária - Azul"
  };

  return typeTextOptions[tipoAttr.toString()];

}