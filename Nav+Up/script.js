var script = document.createElement('script');
script.src = 'https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js';
document.body.append(script)

function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            $('#img_feedback')
                .attr('src', e.target.result);
        };
        reader.readAsDataURL(input.files[0]);
    }
}
