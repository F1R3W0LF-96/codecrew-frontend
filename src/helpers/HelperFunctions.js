import { sortOrder } from "./Constant";


const sortData = (data, sortBy, order) => {
    console.log("::data::", data)
    console.log("::sortBy::", sortBy)

    data.sort(function (a, b) {
        if (order === sortOrder.ASEC) {
            if (a[sortBy].toLowerCase() < b[sortBy].toLowerCase()) return -1;
            if (a[sortBy].toLowerCase() > b[sortBy].toLowerCase()) return 1;
        }
        else {
            if (b[sortBy].toLowerCase() < a[sortBy].toLowerCase()) return -1;
            if (b[sortBy].toLowerCase() > a[sortBy].toLowerCase()) return 1;

        }
        return 0;
    })
    console.log("::Sorteddata::", data)

    return data;


}

function formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
  }


export {
    sortData,
    formatAMPM
}