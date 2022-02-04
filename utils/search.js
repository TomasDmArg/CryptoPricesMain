const searchFor = (value, res) => {
    let filterResult = [];
    let tempCheck;
    if(value.length <= 4 && value.length >= 2){
        // Filter the res array by the ones that match the value at first positions
        filterResult = res.filter(item => item.symbol.toLowerCase().startsWith(value.toLowerCase()));
        tempCheck = res.filter(item => item.symbol.toLowerCase() == value.toLowerCase());
        if(tempCheck.length > 0) filterResult = tempCheck;
    }else if(value.length >= 2){
        filterResult = res.filter( data => data.name.toLowerCase().indexOf(value.toLowerCase()) > -1);
        tempCheck = res.filter(item => item.name.toLowerCase() == value.toLowerCase());
        if(tempCheck.length > 0) filterResult = tempCheck;
    }
    // Sort by the most shortest id
    if(filterResult.length > 0) filterResult.sort((a, b) => a.id.length - b.id.length);
    return filterResult;
}
export default searchFor;