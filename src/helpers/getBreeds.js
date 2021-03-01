const getBreeds = async () => {
  const url = "https://api.thedogapi.com/v1/breeds123321/";
  const res = await fetch(url);

  if(!res.ok) {
    const { url, status, statusText } = res;
    throw Error(`Error: ${status} ${statusText} in fetch ${url}`)
  }

  const breeds = await res.json();

  return breeds;
}

export default getBreeds;

//we use await because we want to wait the url