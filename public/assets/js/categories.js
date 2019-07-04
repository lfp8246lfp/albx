$('#addCategory').on('submit', function() {
    var formData = $(this).serialize();
    $.ajax({
        type: 'post',
        url: '/categories',
        data: formData,
        success: function() {
            $.ajax({
                type: 'get',
                url: '/categories',
                success: function(result) {
                    var html = template('categoryListTpl', { data: result });
                    $('#categoryList').html(html);
                }
            });
        }
    });
    return false;
});


$.ajax({
    type: 'get',
    url: '/categories',
    success: function(result) {
        var html = template('categoryListTpl', { data: result });
        $('#categoryList').html(html);
    }
});


$('#categoryList').on('click', '.edit', function() {
    var id = $(this).attr('data-id');
    $.ajax({
        type: 'get',
        url: '/categories/' + id,
        success: function(result) {
            var html = template('modifyCategoryTpl', result);
            $('#modifyBox').html(html);
        }
    })
});


$('#modifyBox').on('submit', '#modifyCategory', function() {
    var id = $(this).attr('data-id');
    var formData = $(this).serialize();

    $.ajax({
        type: 'put',
        url: '/categories/' + id,
        data: formData,
        success: function() {
            $.ajax({
                type: 'get',
                url: '/categories',
                success: function(result) {
                    var html = template('categoryListTpl', { data: result });
                    $('#categoryList').html(html);
                }
            });
        }
    });
    return false;
});


$('#categoryList').on('click', '.delete', function() {
    var id = $(this).attr('data-id');
    $.ajax({
        type: 'delete',
        url: '/categories/' + id,
        data: {},
        success: function() {
            $.ajax({
                type: 'get',
                url: '/categories',
                success: function(result) {
                    var html = template('categoryListTpl', { data: result });
                    $('#categoryList').html(html);
                }
            });
        }
    })
})