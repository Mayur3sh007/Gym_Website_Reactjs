//Got this first function from Rapid API(ExpressDB)--> i named export const exerciseOptions 

export const exerciseOptions =  {
    method: 'GET',
    headers: {
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
        'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY //Replaced our key with this now
        //Hide key in '.env' from people who wanna harm U 
        //Stop our site by 'cntrl+c' in terminal then rerun app with 'npm start' now our keys populated
    }
};

export const youtubeOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
        'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY  //Key is same as B4
    }
};



export const fetchData = async(url,options)=>{
    const response = await fetch(url,options);
    const data = await response.json();

    return data;
}

