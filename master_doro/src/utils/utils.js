function removeClassByString( part ) {
    var elements = document.getElementsByTagName( 'body' );

    for ( var i = 0; i < elements.length; i++ ) {
        var classList = elements[i].className.split( ' ' );
        var count = classList.length;

        for ( var j = 0; j < count; j++ ) {
            if ( classList[j].search( part ) != -1 ) {
                delete classList.splice( j, 1 )
            }
        }

        if ( count != classList.length ) {
            var el = document.createElement( 'i' );
            el.innerText = '         (class removed!)'
        } else {
            var el = document.createElement( 'i' );
            el.innerText = '  (no change)'
        }

        elements[i].appendChild( el );

        elements[i].className = classList.join( ' ' )
    }
}

export default removeClassByString;