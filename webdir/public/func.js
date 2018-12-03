var sendToLogger = function()
{
    console.log($('#IP').val());
    var ALERTus = {
        IP: $('#IP').val(),
        compName: $('#compName').val(),
        data: $('#DATA').val()
    }


$.ajax({
    type: 'POST',
    data: JSON.stringify(ALERTus),
    contentType: 'application/json',
    url: '/barak',
    success: function(data){
        console.log('success');
        console.log(JSON.stringify(data));
    }
})
}
