export const getDateFormated = dateCSharpFormat => {
    const date = new Date(Date.parse(dateCSharpFormat));

    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = ('0' + date.getHours()).slice(-2);
    const minutes = ('0' + date.getMinutes()).slice(-2);

    return `${month}/${day}/${date.getFullYear()} ${hours}:${minutes}`;
};
