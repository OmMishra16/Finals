
const main = document.querySelector('main');

main.addEventListener('click',  function (e) {

    
    if(e.target.classList.contains('post-button'))
    {
        
        const textarea = document.querySelector('.text-area');
        const value = textarea.value;
        //.log("text area value");

        
        createThread(value);
        

        
        // //.log(e.target);
    }

    
    
    if(e.target.classList.contains('like') &&  !e.target.classList.contains('liked'))
        
    {
        const icon = e.target;
        icon.src = "./assets/icons8-heart-96.png";
        icon.style.width = "25px";
        icon.style.height = "25px";
        icon.classList.add("liked");
        
    }

    else if(e.target.classList.contains("liked") )
    {
        const icon = e.target;
        icon.style.width = "20px";
        icon.style.height = "15px";
        icon.src = "./assets/heart.png";
        icon.classList.remove("liked");
        
        
    }

    

    
    if(e.target.classList.contains('delete'))
    {
        const parent = e.target.parentNode.parentNode.parentNode.parentNode;
        //.log("Parent Node: ",parent);
        const child = e.target.parentNode.parentNode.parentNode;
        //.log("Child Node: ", child);
        parent.remove(child);
    }

   

    
});



function createThread(value)
{
    // let val = value;
    const feedContainer = document.createElement('section');
    feedContainer.classList.add('feed-container');

    const feedCard = document.createElement('section');
    feedCard.classList.add('feed-card');

    const userIcon = document.createElement('section');
    userIcon.classList.add('user-icon');
    const icon = document.createElement('img');
    // icon.width = "40px"; icon.height="40px";
    icon.src="./assets/profile_image.png";
    userIcon.appendChild(icon);
    feedCard.appendChild(userIcon);

    const feedContent = document.createElement('section');
    feedContent.classList.add('feed-content');
    const username = document.createElement('section');
    username.classList.add('username');
    const name = document.createElement('h3');
    name.innerText = "Joanne Graham";
    const userId = document.createElement('span');
    userId.innerText ="@joanegraham123";
    const edit = document.createElement('img');
    edit.classList.add('edit');
    // edit.setAttribute('onclick','editPost()') ;
    edit.src="./assets/edit.png";
    
    const del = document.createElement('img');
    del.classList.add('delete');
    del.src = "./assets/delete.png";

    username.appendChild(name);
    username.appendChild(userId);
    username.appendChild(edit);
    username.appendChild(del);

    feedContent.appendChild(username);


    const feedPost = document.createElement('section');
    feedPost.classList.add('feed-post');
    feedPost.innerText = value;

    feedContent.appendChild(feedPost);

    const postArea = document.createElement('section');
    postArea.classList.add('post-area', 'none');
    const post = document.createElement('textarea');
    post.classList.add('textarea');
    post.placeholder = "Edit your post";
    postArea.appendChild(post);
    feedContent.appendChild(postArea);

    const feedReactions = document.createElement('section');
    feedReactions.classList.add('feed-reactions');
    const comment = document.createElement('img');
    comment.classList.add("comment");
    comment.src = "./assets/comment.png";
    const like = document.createElement('img');
    like.classList.add('like');
    like.src = "./assets/heart.png";
    feedReactions.appendChild(comment);
    feedReactions.appendChild(like);

    const feedLower = document.createElement('section');
    feedLower.classList.add('lower', 'none');
    const para = document.createElement('p');
    para.classList.add('char-count');
    para.innerText = "0/100";
    const cancel = document.createElement('button');
    cancel.classList.add('cancel-button');
    cancel.textContent = "Cancel";
    cancel.style.height = "35px";
    const postButton = document.createElement('button');
    postButton.classList.add('feed-button');
    postButton.textContent = "Post";
    postButton.style.height = "35px";
    feedLower.appendChild(para);
    feedLower.appendChild(cancel);
    feedLower.appendChild(postButton);


    feedContent.appendChild(feedReactions);
    feedContent.appendChild(feedLower);

    feedCard.appendChild(feedContent);

    feedContainer.appendChild(feedCard);

    const feedComments = document.createElement('section');
    feedComments.classList.add('feed-comments');
    {
        const commentBox = document.createElement('section');
        commentBox.classList.add('comment-box', 'none');
        const userIcon = document.createElement('section');
        userIcon.classList.add('user-icon');
        const icon = document.createElement('img');
        icon.src="./assets/profile_image.png";
        userIcon.appendChild(icon);
        commentBox.appendChild(userIcon);
        feedComments.appendChild(commentBox);

        const feedContent = document.createElement('section');
        feedContent.classList.add('feed-content');
        const postArea = document.createElement('section');
        postArea.classList.add('post-area');
        const post = document.createElement('textarea');
        post.classList.add('text-area');
        post.style.height = "60px";
        post.placeholder = "Write a comment...";
        postArea.appendChild(post);
        feedContent.appendChild(postArea);
        // commentBox.appendChild(feedContent);
        
        const lower = document.createElement('section');
        lower.classList.add('lower');
        const para = document.createElement('p');
        para.classList.add('char-count');
        para.innerText = "0/100";
        const cancel = document.createElement('button');
        cancel.classList.add('cancelButton');
        const commentButton = document.createElement('button');
        commentButton.classList.add("commentButton");
        commentButton.textContent = "Comment";
        cancel.textContent = "Cancel";
        cancel.style.width = "100px";
        cancel.style.height = "35px";
        commentButton.style.width = "100px";
        commentButton.style.height = "35px";
        lower.appendChild(para);
        lower.appendChild(cancel);
        lower.appendChild(commentButton);
        feedContent.appendChild(lower);

        commentBox.appendChild(feedContent);
        feedContainer.appendChild(feedComments);
        //.log("feedComments", feedComments);
        
        
    }

    
    /**
     * comment box banega
     * feedContainer me append hoga;
     */

    const Feed = document.querySelector('.feeds');
    Feed.appendChild(feedContainer);

    

    
    

    //.log("Thread Created");
    //.log(value);
}



