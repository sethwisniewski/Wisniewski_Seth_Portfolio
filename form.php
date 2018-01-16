<?php

if(isset($_POST['email'])) {
   $email_to = "seth@sethwisniewski.com,sethwisniewski@gmail.com";
   $email_subject = "Contact Form Submission";

    function died($error) {
        echo "Sorry! There were some errors with the information you've submitted!. ";
        echo "Here are the issues found.<br /><br />";
        echo $error."<br /><br />";
        echo "Please fix the errors and try submitting again!<br /><br />";
        die();
    }


    if(!isset($_POST['name'])
        !isset($_POST['email'])
        !isset($_POST['comments'])) {
        died("There were some problems found with the information you've submitted.");

    }

    $name = $_POST['name'];
    $email_from = $_POST['email'];
    $comments = $_POST['comments'];

    function clean_string($string) {

      $bad = array("content-type","bcc:","to:","cc:","href");

      return str_replace($bad,"",$string);

    }

    $email_message .= "Name: ".clean_string($name)."\n";
    $email_message .= "Email: ".clean_string($email_from)."\n";
    $email_message .= "Comments: ".clean_string($comments)."\n";

$headers = 'From: '.$email_from."\r\n".

'Reply-To: '.$email_from."\r\n" .

'X-Mailer: PHP/' . phpversion();

@mail($email_to, $email_subject, $email_message, $headers);

?>
<?php

}

?>
