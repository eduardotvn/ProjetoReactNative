
export const getCurrentYear = () =>
{
    return new Date().getFullYear();
}

export const getCurrentMonth = () =>
{
    return new Date().getMonth() + 1;
}

export const formatDate = () => {
    const today = new Date()
    const day = today.getDate();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();

    return ((day < 10 ? '0' : '') + day + '/' + (month < 10 ? '0' : '') + month + '/' + year)
}

export const getPreviousDate = (date) => {
    if (!date) return;

    const [day, month, year] = date.split('/');
    const currentDate = new Date(`${year}-${month}-${day}`);    
    currentDate.setDate(currentDate.getDate());
    const formattedDate = (day < 10 ? '0' : '') + `${currentDate.getDate()}`+(month < 10 ? '/0' : '/')+`${currentDate.getMonth() + 1}/${currentDate.getFullYear()}`;

    return formattedDate;
};

export const getNextDate = (date) => {
    if (!date) return;

    const [day, month, year] = date.split('/');
    const currentDate = new Date(`${year}-${month}-${day}`);    
    currentDate.setDate(currentDate.getDate() + 2);
    const formattedDate = (day < 10 ? '0' : '') + `${currentDate.getDate()}`+(month < 10 ? '/0' : '/')+`${currentDate.getMonth() + 1}/${currentDate.getFullYear()}`;

    return formattedDate;
};

export const getHourFormatted = () => {
    const today = new Date()

    const hour = today.getHours();
    const minute = today.getMinutes();

    const formattedTime = (hour < 10 ? '0' : '') + hour + ':' + (minute < 10 ? '0' : '') + minute;

    return formattedTime; 
}