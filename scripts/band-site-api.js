const myApiKey = "?api_key=c9eb1031-2318-49df-a6fd-29308f55f003";
class BandSiteApi {
  constructor(key) {
    this.key = key;
    this.baseUrl = "https://project-1-api.herokuapp.com/";
  }

  getComments = async function () {
    const response = await axios.get(this.baseUrl + "comments" + this.key);
    const comments = response.data;
    return comments;
  };
  getShowDates = async function () {
    const response = await axios.get(this.baseUrl + "showdates" + this.key);
    const showDates = response.data;
    return showDates;
  };
  postComment = async function (newComment) {
    const response = await axios.post(
      this.baseUrl + "comments" + this.key,
      newComment
    );
    return response;
  };
}
async function fetchData() {
  let api = new BandSiteApi(myApiKey);
  try {
    const comments = await api.getComments();
    console.log("Comments:", comments);

    const showDates = await api.getShowDates();
    console.log("Show Dates:", showDates);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

fetchData();
