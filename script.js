const events = [
  { id: 1, name: "Workshop", date: "2025-04-26" }, // Saturday
  { id: 2, name: "Hackathon", date: "2025-04-27" }, // Sunday
  { id: 3, name: "Seminar", date: "2025-04-25" }, // Friday
  { id: 4, name: "Webinar", date: "2025-04-28" }  // Monday
];

const weekends=events.filter(
    (e)=>{
        let currentdate = new Date().getDay();
        let eventdate = new Date(e.date).getDay();
        // let diff = eventdate-currentdate;
        return eventdate===0 || eventdate===6
    })
    console.log(weekends);