async function doFetch(endpoint) {
  try {
    const resp = await fetch(
      "https://restcountries.eu/rest/v2/capital/" + endpoint,
      { method: "GET" }
    );
    if (resp.ok) {
      return await resp.json();
    } else {
      return `error fetching endpoint: /${endpoint}`;
    }
  } catch (err) {
    console.log(err);
  }
}

function display(data, selector) {
  const container = document.querySelector(selector);
  container.innerHTML = data[0].name;
  container.classList.add("be-bold");
}

async function fetchA() {
  const data = await doFetch("kabul");
  display(data, "#component-a");
}

async function fetchB() {
  const data = await doFetch("the Valley");
  display(data, "#component-b");
}

async function fetchC() {
  const data = await doFetch("tirana");
  display(data, "#component-c");
}

async function fetchD() {
  const data = await doFetch("algiers");
  display(data, "#component-d");
}

function fetchAndDisplayData() {
  fetchA();
  fetchB();
  fetchC();
  fetchD();
}
