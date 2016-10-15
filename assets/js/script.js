/* leny/rezid
 *
 * /assets/js/script.js
 *
 * coded by leny@flatLand!
 * started at 15/10/2016
 */

window.addEventListener( "load", function() {
    document.querySelector( "main a" ).addEventListener( "click", function( oEvent ) {
        oEvent.preventDefault();
        this.classList.toggle( "light" );
    } );
} );
