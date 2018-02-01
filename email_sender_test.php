<?php

// CLONE FOR TESTING, EXAMPLE EMAIL ADDRESSES
// echo phpversion();
// sleep(2);
// http_response_code(404);

// for calculating approximate runtime
$time_start = microtime(true);

$state = 'N/A';
$info = 'N/A';

// check headers for security
$headers = apache_request_headers();
if ($headers['X-Requested-With'] != 'XMLHttpRequest') {
    $state = 'ILLEGAL';
    $info = 'non ajax request';
}
if ($headers['Host'] != 'breadboard.yale.edu') {
    $state = 'ILLEGAL';
    $info = 'foreign referer';
}

// use this particular mailer library, https://github.com/PHPMailer/PHPMailer
require_once "email_library_phpmailer.php";

// initialize mail object with exceptions on
$mail = new PHPMailer(true);

// get form variables
$request = $_REQUEST;

try {
    // check if we have the right array keys
    if (
        array_diff(
            array('field_name', 'field_email', 'field_phone', 'field_message'),
            array_keys($request)
        )
    ) {
        throw new Exception('Missing request parameters');
    }

    $body = <<<EOT
Sender name: {$request['field_name']}
Sender email: {$request['field_email']}
Sender phone: {$request['field_phone']}

Message:
{$request['field_message']}
EOT;

    // set mailer content
    $mail->Subject = "Breadboard site message from {$request['field_email']}";
    $mail->Body = nl2br($body); // preserve linebreaks
    $mail->AltBody = $body;

    // set sender information
    $mail->From = 'admin@breadboard.yale.edu';
    $mail->FromName = 'Breadboard Admin';

    // set recipient information
    $recipient_email = 'example@example.com';
    $recipient_name = 'Foo Bar';
    $mail->AddAddress($recipient_email, $recipient_name);
    // can set cc and bcc recipients if needed
    $mail->addCC('example@example.com', 'Foo Bar');
    // $mail->addBCC('');

    // set reply-to field as email address of submitter
    $mail->AddReplyTo($request['field_email'], $request['field_name']);

    // $mail->IsHTML(false); // set plaintext
    // $mail->ContentType = 'text/plain';
    // TODO couldn't get this to preserve formatting

    // construct log info field
    $info = "sender {$request['field_email']}, recipient {$recipient_email}";
    try {
        $mail->Send();
        $state = 'SUCCESS';
        echo 'Message has been sent successfully';
    } catch (phpmailerException $e) {
        $state = 'ERROR';
        $info = $e->errorMessage();
    } catch (Exception $e) {
        $state = 'ERROR';
        $info = $e->getMessage();
    }
} catch (Exception $e) {
    // except when we don't get what we need
    $state = 'ERROR';
    $info = $e->getMessage();
}

// for calculating approximate runtime in milliseconds
$time_end = microtime(true);
$time_total = round(($time_end - $time_start) * 1000);

// write to logfile
$timestamp = @date('Ymd, H:i:s');
$line = "[$timestamp] [$state] [$time_total ms] [$info]" . PHP_EOL;
$path = 'email_log_test.txt';
$logfile = (file_exists($path)) ? fopen($path, 'a+') : fopen($path, 'w+');
fwrite($logfile, $line);
fclose($logfile);

?>