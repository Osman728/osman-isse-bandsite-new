const showsArray = [
    {
        date: "Mon Sept 06 2021",
        venue: "Ronald Lane",
        location: "San Francisco, CA"
    },
    {
        date: "Tue Sept 21 2021",
        venue: "Pier 3 East",
        location: "San Francisco, CA"
    },
    {
        date: "Fri Oct 15 2021",
        venue: "View Lounge",
        location: "San Francisco, CA"
    },
    {
        date: "Sat Nov 06 2021",
        venue: "Hyatt Agency",
        location: "San Francisco, CA"
    },
    {
        date: "Fri Nov 26 2021",
        venue: "Moscow Center",
        location: "San Francisco, CA"
    },
    {
        date: "Wed Dec 15 2021",
        venue: "Press Club",
        location: "San Francisco, CA"
    }
]

function renderShows() {
    const bandSiteShows = document.querySelector(".shows__container");

    bandSiteShows.innerHTML = "";

    for (let i = 0; i < showsArray.length; i++) {
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
        showsVenus.innerText = "Venus"
        showsLocation.innerText = "Location";
        showsBuyTicket.innerText = "BUY TICKETS";

        showsDay.innerText = showsArray[i].date;
        showsVenusName.innerText = showsArray[i].venue;
        showsLocationPlace.innerText = showsArray[i].location;

        showsEl.appendChild(showsDate);
        showsEl.appendChild(showsDay);
        showsEl.appendChild(showsVenus);
        showsEl.appendChild(showsVenusName);
        showsEl.appendChild(showsLocation);
        showsEl.appendChild(showsLocationPlace);
        showsEl.appendChild(showsBuyTicket);
        
        showsEl.addEventListener("mousedown", function () {
            
            document.querySelectorAll(".shows__info").forEach(item => {
                if (item !== showsEl) {
                    item.classList.remove("selected");
                }
            });
            showsEl.classList.toggle("selected");
        });
        bandSiteShows.appendChild(showsEl);
    }
}

renderShows();

  
  
