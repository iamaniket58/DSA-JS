/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function(coordinates) {
    let x0=coordinates[0][0];
    let y0=coordinates[0][1];
    let x1=coordinates[1][0];
    let y1=coordinates[1][1];
    for(let i=2;i<coordinates.length;i++){
        let x=coordinates[i][0];
        let y=coordinates[i][1]
        if((y1-y0)*(x-x0) !=(y-y0)*(x1-x0))return false
    }
    return true
};

//My Solution- It will fail 1 case where /0 becomes infinite ([[0,0],[0,1],[0,-1]])
var checkStraightLine = function(coordinates) {
    let slope=(coordinates[1][1]-coordinates[0][1])/(coordinates[1][0]-coordinates[0][0])//Slope of 0 and 1
    for(let i=2;i<coordinates.length;i++){
        let slopeIt=(coordinates[i][1]-coordinates[0][1])/(coordinates[i][0]-coordinates[0][0])
        if(slope!=slopeIt)return  false;
    }
    return true
};