<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Nhận dữ liệu từ form
    $fullname = htmlspecialchars($_POST["dataContact"]["fullname"]);
    $phone = htmlspecialchars($_POST["dataContact"]["phone"]);
    $address = htmlspecialchars($_POST["dataContact"]["address"]);
    $email = filter_var($_POST["dataContact"]["email"], FILTER_SANITIZE_EMAIL);
    $content = htmlspecialchars($_POST["dataContact"]["content"]);

    // Email nhận thông tin (THAY EMAIL CỦA BẠN VÀO ĐÂY)
    $to = "dtngan234@gmail.com"; // Thay bằng email của bạn

    // Tiêu đề email
    $mail_subject = "Liên hệ từ: $fullname";

    // Nội dung email
    $message = "Họ tên: $fullname\n";
    $message .= "Số điện thoại: $phone\n";
    $message .= "Địa chỉ: $address\n";
    $message .= "Email: $email\n";
    $message .= "Nội dung:\n$content\n";

    // Headers
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    // Gửi email
    if (mail($to, $mail_subject, $message, $headers)) {
        echo "Gửi email thành công!";
    } else {
        echo "Lỗi khi gửi email.";
    }
} else {
    echo "Truy cập không hợp lệ!";
}
?>
