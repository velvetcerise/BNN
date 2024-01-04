
$('#planning').on('submit', function() {
    if ($('#planning').get(0).checkValidity() == false) {
        return false;
    }
        
    console.log('passed');
    
});