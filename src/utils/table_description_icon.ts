export const weatherCodeMap: {
  [key: number]: { description: string; icon: string };
} = {
  1000: { description: "Céu limpo", icon: "céu_limpo.svg" },
  1001: { description: "Nublado", icon: "nublado.svg" },
  1100: {
    description: "Predominantemente limpo",
    icon: "predominantemente_limpo.svg",
  },
  1101: {
    description: "Parcialmente nublado",
    icon: "parcialmente_nublado.svg",
  },
  1102: {
    description: "Predominantemente nublado",
    icon: "predominantemente_nublado.svg",
  },
  2000: { description: "Nevoeiro", icon: "nevoeiro.svg" },
  2100: { description: "Nevoeiro leve", icon: "nevoeiro_leve.svg" },
  4000: { description: "Chuvisco", icon: "chuvisco.svg" },
  4001: { description: "Chuva", icon: "day_chuva.svg" },
  4200: { description: "Chuva fraca", icon: "chuva_leve.svg" },
  4201: { description: "Chuva forte", icon: "chuva_forte.svg" },
  5000: { description: "Neve", icon: "neve.svg" },
  8000: { description: "Tempestade", icon: "tempestade.svg" },
};

export function isDayTime(sunrise: number, sunset: number): boolean {
  const currentTime = Math.floor(Date.now() / 1000);
  return currentTime >= sunrise && currentTime < sunset;
}

function getIconName(code: number, isDayTime: boolean): string {
  const baseIcon = weatherCodeMap[code]?.icon;
  const time = isDayTime ? "day_" : "night_";

  return `./src/assets/${time}${baseIcon}`;
}

export function getDescriptionAndIcon(code: number, isDayTime: boolean) {
  const getDescription = weatherCodeMap[code]?.description;
  const icon = getIconName(code, isDayTime);

  return {
    description: getDescription,
    icon: icon,
  };
}
