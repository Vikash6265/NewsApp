
// Get current date
let currentDate = new Date();

// Calculate start date (current date - 1 month)
let startDate = new Date();
startDate.setMonth(startDate.getMonth() - 1);

// Format dates as YYYY-MM-DD
let startDateStr = startDate.toISOString().slice(0, 10);
let endDateStr = currentDate.toISOString().slice(0, 10);




export const fetchNews = async(topic) =>{
    const response = await fetch(`https://newsapi.org/v2/everything?q=${topic}&from=${startDateStr}&sortBy=publishedAt&apiKey=7930030bb3c24b52b05cfe3d96b2fc1b`);
    const data = await response.json();
    // console.log(data.articles);
    return data.articles;
}

// ab ye function kb call hona chiye/api kb call ho jb home page open hote hi hona chiye
// to home me useEffect