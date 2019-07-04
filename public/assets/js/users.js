$('#userForm').on('submit', function() {

    var formData = $(this).serialize();

    $.ajax({
        type: 'post',
        url: '/users',
        data: formData,
        success: function() {
            location.reload();
            //刷新当前页面
        }
    });
    console.log(this);

    return false;
    //阻止默认行为
});


$('#avatar').on('change', function() {
    var formData = new FormData();
    formData.append('avatar', this.files[0]);

    $.ajax({
        type: 'post',
        url: '/upload',
        contentType: false,
        processData: false,
        data: formData,
        success: function(result) {
            $('#preview').attr('src', result[0].avatar);
            $('#hiddenImg').val(result[0].avatar);
        }
    });
});