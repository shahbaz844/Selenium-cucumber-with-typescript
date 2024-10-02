export enum Timeout {
    MEDIUM = 5000,
    LONG = 10000
}

export enum Constants {
    baseUrl = "https://www.ryanair.com/ie/en/",
    dublinAirport = "Dublin",
    londonAirport = "London Stansted",
    title = "Mr",
    editSearch = "Edit search",
    loginLatter = " Log in to myRyanair",
    authModalHeader = "Log in to continue",
    fareModalHeader = "Regular fare is ideal for your trip!"
}

export const Months: { [key: string]: string } = {
    "1": "Jan",
    "2": "Feb",
    "3": "Mar",
    "4": "Apr",
    "5": "May",
    "6": "Jun",
    "7": "Jul",
    "8": "Aug",
    "9": "Sept",
    "10": "Oct",
    "11": "Nov",
    "12": "Dec"
};

export const Names: { [key: string]: string } = {
    "firstName1": "Elon",
    "lastName1": "Musk",
    "firstName2": "Bill",
    "lastName2": "Gates",
    "firstName3": "Steve",
    "lastName3": "Jobs",
};

export const departSeats = [27,28,29];
export const returnSeats = [33,34,35];
export const bags = [1,2,4];