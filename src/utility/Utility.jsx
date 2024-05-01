
// ================================ Utility Data Start ================================
// Slug Path for details page
export const convertToSlug = (text) => {
    return text.toLowerCase().replace(/\s+/g, '-');
}

export const slugURL = ({url, slug }) => {
    return `/${url}/${encodeURIComponent(convertToSlug(slug))}`; 
}
// Slug Path for details page End


// Random sales value
export const getRandomNumber = () => {
    const min = 50;
    const max = 200;
    const randomSales = Math.floor(Math.random() * (max - min + 1)) + min;

    // Random Number for Rating Text
    const randomRatingText = Math.floor(Math.random() * 50); 

    // Random Number above 10 thousand
    const randomMinValue = 10000;
    const randomMaxValue = 50000; 
    const randomThousandValue = Math.floor(Math.random() * (randomMaxValue - randomMinValue + 1)) + randomMinValue;

    // Function to format a number with commas as thousands separators
    function formatNumberWithCommas(number) {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    // Format the random value with commas and log it
    const formattedRandomThousandValue = formatNumberWithCommas(randomThousandValue);

    return { randomSales, randomRatingText, formattedRandomThousandValue}; 
}

// Current Formatted Date
export const getCurrentFormattedDate = () => {
    const currentDate = new Date(); 
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    
    const day = currentDate.getDate(); 
    const month = monthNames[currentDate.getMonth()]; 
    const year = currentDate.getFullYear(); 

    const formattedDate = `${month} ${day}, ${year}`

    return formattedDate; 
}

// random Month
export const randomMonth = () => {
    const randMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

    // Shuffle the array using sort and a random comparison function
    randMonths.sort(()=>Math.random() - 0.5);
    
    return randMonths[0]; // to get one month of this array
}

// random Month
export const randomYear = () => {
    const randYears = ["2015", "2016", "2017", "2018", "2020", "2021", "2022", "2023"]

    // Shuffle the array using sort and a random comparison function
    randYears.sort(()=>Math.random() - 0.5);
    
    return randYears[0]; // to get one Year of this array
}


// Get The Current Time
export const getCurrentTime = () => {
    const currentTime = new Date().toLocaleTimeString(); 
    return currentTime; 
}
    
// Get The Current Time that is real time changed
// const [currentTime, setCurrentTime] = useState(() => new Date().toLocaleTimeString());

// useEffect(() => {
//     // Function to update the time
//     const updateTime = () => {
//         setCurrentTime(new Date().toLocaleTimeString());
//     };

//     // Set an interval to update the time every second
//     const interval = setInterval(updateTime, 1000);
// }, []); 


// ================================ Utility Data End ================================
