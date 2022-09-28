// DESCRIPTION:
// This function should test if the factor is a factor of base.

// Return true if it is a factor or false if it is not.


/*** My Solutions***/
function checkForFactor (base, factor) {
    return ((base % factor === 0) ? true : false );
}

//Refactored/condensed version
function checkForFactorv2 (base, factor) {
    return base % factor === 0;
}