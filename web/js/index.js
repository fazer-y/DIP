    //因为html自带的图片上传贼丑，所以这里用按钮来代替。
    $('#uploadBtn').click(function() {
        $('#uploadFile').click()
        //当图片选中后，会触发name=file文本的change事件
        $('#uploadFile').change(function() {
            var formData = new FormData()
            formData.append('image', this.files[0])
            if(formData) {
                $.ajax({
                    url: '/admin/photos',
                    type: 'POST',
                    data: formData,
                    async: true,
                    cache: false,
                    contentType: false,
                    processData: false,
                    success: function(res) {
                        if(res.status == 0) {
                            alert(res.msg)
                            return false    
                        }
                        $('input[name="img"]').val(res.msg)
                        $('.img-show').attr('src', res.msg)
                    }
                })
            }
        })
    })