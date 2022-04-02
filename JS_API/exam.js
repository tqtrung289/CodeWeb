var users = [
    {
        id: 1,
        name: 'TQT'
    },
    {
        id: 2,
        name: 'TuongTrung'
    },
    {
        id: 3,
        name: 'JS'
    }
    ];
    var  comments = [
        {
            id: 1,
            user_id: 1,
            content: 'Alooooo'
        },
        {
            id: 2,
            user_id: 1,
            content: 'Comment 2'
        },
        {
            id: 3,
            user_id: 2,
            content: 'Hom nay la thu 7'
        },
        {
            id: 4,
            user_id: 3,
            content: 'Di choi de'
        }
    ];

function getComments(){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve(comments)
        },1000);
    });
}    

getComments()
    .then(function(comments){
        console.log(comments);
    });


    var userIds = comments.map(function(cmt) {
        return cmt.user_id;
    });

    function getUsersByIs(x) {
        var result = users.filter(function(user){
            return x.includes(user.id);
        });
        return {
            users: result,
            comments: comments
        }
    }
    var a = getUsersByIs(userIds);

    //In ra HTML
    var html='';
    a.comments.forEach(function(comment){
        var user = a.users.find(function(user){
            return user.id == comment.user_id;
        });
        html += `<li>${user.name}: ${comment.content}</li>`;
    })
    document.getElementById('cmt-block').innerHTML = html;