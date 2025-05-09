const dev = true;
const API_URL = dev
  ? "http://localhost:4000/api/v1/"
  : "https://api.linkinlegal.com/api/v1/";

async function getCountries() {
  const response = await fetch(`${API_URL}/countries`);
  const data = await response.json();
  return data;
}

window.Asc.plugin.getCountries = getCountries;
