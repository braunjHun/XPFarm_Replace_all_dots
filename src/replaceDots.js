class ReplaceDots {
    
    replaceDots(str) {
        //return str.replace('.', '-');
        let strArray = str.split( '.' );
        let retValue = ''; 
        for (let i=0;i<strArray.length; i++) {
          if ( i>0 ){
            retValue = retValue + "-";
          }
          retValue = retValue + strArray[i];
        }
        return retValue;
    }
}
  
module.exports = {
    ReplaceDots,
};