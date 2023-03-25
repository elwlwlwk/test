klaytn._request = klaytn.request;
klaytn.request = async (e) => {
  alert(JSON.stringify(e, null, 2));
  return klaytn._request(e);
};
console.log("Fox Bead injected");

