const bandSiteShows = document.querySelector(".shows__container");
function createShowDate(showDates) {
  const showsEl = document.createElement("div");
  const showsDate = document.createElement("h4");
  const showsDay = document.createElement("p");
  const showsVenus = document.createElement("h4");
  const showsVenusName = document.createElement("p");
  const showsLocation = document.createElement("h4");
  const showsLocationPlace = document.createElement("p");
  const showsBuyTicket = document.createElement("button");

  showsEl.classList.add("shows__info");
  showsDate.classList.add("shows__info-date");
  showsDay.classList.add("shows__info-day");
  showsVenus.classList.add("shows__info-Venus");
  showsVenusName.classList.add("shows__info-Venusname");
  showsLocation.classList.add("shows__info-location");
  showsLocationPlace.classList.add("shows__info-locationplace");
  showsBuyTicket.classList.add("shows__info-buyticket");

  showsDate.innerText = "Date";
  showsVenus.innerText = "Venus";
  showsLocation.innerText = "Location";
  showsBuyTicket.innerText = "BUY TICKETS";

  let date = new Date(showDates.date);

  showsDay.innerText = date.toDateString();
  showsVenusName.innerText = showDates.place;
  showsLocationPlace.innerText = showDates.location;

  showsEl.appendChild(showsDate);
  showsEl.appendChild(showsDay);
  showsEl.appendChild(showsVenus);
  showsEl.appendChild(showsVenusName);
  showsEl.appendChild(showsLocation);
  showsEl.appendChild(showsLocationPlace);
  showsEl.appendChild(showsBuyTicket);

  showsEl.addEventListener("mousedown", function () {
    document.querySelectorAll(".shows__info").forEach((item) => {
      if (item !== showsEl) {
        item.classList.remove("selected");
      }
    });
    showsEl.classList.toggle("selected");
  });
  bandSiteShows.appendChild(showsEl);
}
let api = new BandSiteApi(myApiKey);

async function renderShows() {
  bandSiteShows.innerHTML = "";
  const showDates = await api.getShowDates();
  showDates.forEach((showDate) => createShowDate(showDate));
}

renderShows();
