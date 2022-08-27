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


export {
    sortData
}