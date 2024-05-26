<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

// Zkontroluje, zda byly data odeslána metodou POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Přečte data z těla požadavku
    $data = json_decode(file_get_contents("php://input"));

    // Načte data z požadavku
    $firstName = $data->firstName;
    $lastName = $data->lastName;
    $birthday = $data->birthday;
    $phone = $data->phone;
    $email = $data->email;
    $car = $data->car;
    $town = $data->town;
    $from = $data->from;
    $to = $data->to;
    $groupB = $data->groupB;
    $gdpr = $data->gdpr;

    // Nastaví e-mailové proměnné
    $toEmail = "info@carentab.com";
    $subject = "Rezervace vozidla $car";
    $message = "Jméno: $firstName\n";
    $message .= "Příjmení: $lastName\n";
    $message .= "Datum narození: $birthday\n";
    $message .= "Telefon: $phone\n";
    $message .= "E-mail: $email\n";
    $message .= "Auto: $car\n";
    $message .= "Město: $town\n";
    $message .= "Od: $from\n";
    $message .= "Do: $to\n";
    $message .= "Skupina B: $groupB\n";
    $message .= "Souhlas s GDPR: $gdpr\n";
    $headers = 'From: ' . "Rezervace_Vozidla@Carentab.com" . "\r\n";
    // Odeslat e-mail
    if (mb_send_mail($toEmail, $subject, $message, $headers)) {
        http_response_code(200);
        echo json_encode(["message" => "E-mail byl úspěšně odeslán"]);
    } else {
        http_response_code(500);
        echo json_encode(["message" => "Nastala chyba při odesílání e-mailu"]);
    }
} else {
    // Pokud není požadavek typu POST, vrátí chybu
    http_response_code(405);
    echo json_encode(["message" => "Metoda požadavku není povolena"]);
}
?>