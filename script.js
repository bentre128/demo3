window.addEventListener('scroll', function() {
    const boxes = document.querySelectorAll('.box');
    
    // Lặp qua tất cả các box và kiểm tra nếu chúng đã nằm trong tầm nhìn của người dùng
    boxes.forEach(function(box) {
        const boxTop = box.getBoundingClientRect().top;
        const boxHeight = box.clientHeight;

        // Nếu box đã nằm trong vùng nhìn thấy
        if (boxTop < window.innerHeight - boxHeight / 3) {
            box.style.opacity = 1; // Hiển thị box
            box.style.transform = 'translateY(0)'; // Di chuyển box lên
        }
    });
});



    document.addEventListener("DOMContentLoaded", function () {
    const commentForm = document.getElementById("commentForm");
    const commentList = document.getElementById("commentList");

    // Lấy bình luận từ localStorage khi trang được tải lại
    const savedComments = JSON.parse(localStorage.getItem("comments")) || [];

    // Hiển thị các bình luận đã lưu từ localStorage
    savedComments.forEach(function (comment) {
        addCommentToList(comment.name, comment.comment);
    });

    commentForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const nameInput = document.getElementById("nameInput");
        const commentInput = document.getElementById("commentInput");

        const name = nameInput.value.trim();
        const comment = commentInput.value.trim();

        if (name === "" || comment === "") {
            alert("Vui lòng nhập tên và bình luận!");
            return;
        }

        // Lưu bình luận vào localStorage
        savedComments.push({ name: name, comment: comment });
        localStorage.setItem("comments", JSON.stringify(savedComments));

        // Thêm bình luận vào danh sách
        addCommentToList(name, comment);

        // Xóa nội dung ô nhập sau khi gửi
        nameInput.value = "";
        commentInput.value = "";
    });

    // Hàm thêm bình luận vào danh sách
    function addCommentToList(name, comment) {
        const li = document.createElement("li");
        li.innerHTML = `<span class="comment-author">${name}:</span> ${comment}
                        <button class="delete-btn">Xóa</button>`;

        // Thêm sự kiện để xóa bình luận
        li.querySelector(".delete-btn").addEventListener("click", function () {
            li.remove();
            // Cập nhật lại localStorage khi xóa bình luận
            const index = savedComments.findIndex(c => c.name === name && c.comment === comment);
            if (index !== -1) {
                savedComments.splice(index, 1);
                localStorage.setItem("comments", JSON.stringify(savedComments));
            }
        });

        // Thêm bình luận vào danh sách
        commentList.appendChild(li);
    }
});


// Chia sẻ lên Facebook
function shareOnFacebook() {
    const url = window.location.href; // Lấy URL của trang hiện tại
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
    window.open(facebookUrl, '_blank', 'width=600,height=400');
}

// Chia sẻ lên Twitter
function shareOnTwitter() {
    const url = window.location.href; // Lấy URL của trang hiện tại
    const text = "Hãy xem trang web này!"; // Văn bản chia sẻ
    const twitterUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`;
    window.open(twitterUrl, '_blank', 'width=600,height=400');
}

// Chia sẻ lên WhatsApp
function shareOnWhatsApp() {
    const url = window.location.href; // Lấy URL của trang hiện tại
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(url)}`;
    window.open(whatsappUrl, '_blank', 'width=600,height=400');
}

