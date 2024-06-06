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
    $message = '
    <html>
    <head>
        <title>Rezervace vozidla</title>
        <style>
            .Email {
                font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
                width: 80%;
                display: flex;
                align-items: flex-start;
                flex-direction: column;
                margin-left: 50px;
            }
            .Email img {
                margin-top: 50px;
            }
            .Tittle {
                font-size: 30px;
                margin-top: 20px;
            }
            .Content {
                margin-top: 20px;
                width: 700px;
                font-size: 18px;
                display: flex;
                align-items: flex-start;
                justify-content: space-between;
            }
        </style>
    </head>
    <body>
        <div class="Email">

            <p class="Tittle">Rezervace vozidla</p>
            
            <div class="Content">
                <div>
                    <p><strong>Jméno:</strong> '.$firstName.'</p>
                    <p><strong>Příjmení:</strong> ' .$lastName.'</p>
                    <p><strong>Datum narození:</strong> '.$birthday.'</p>
                    <p><strong>Telefon:</strong> '.$phone.'</p>
                    <p><strong>E-mail:</strong> '.$email.'</p>
                </div>
                <div>
                    <p><strong>Chci auto:</strong> '.$car.'</p>
                    <p><strong>Chci přistavit auto do města:</strong> '.$town.'</p>
                    <p><strong>Pujčím od:</strong> '.$from.' <strong>do:</strong> '.$to.'</p>
                    <p><strong>Vlastním ridičský průkaz skupiny B</strong> '.$groupB.'</p>
                    <p><strong>Souhlasím s GDPR:</strong> '.$gdpr.'</p>
                </div>
            </div>
        </div>
    </body>
    </html>
    ';
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    $headers .= 'From: Rezervace_Vozidla@Carentab.com' . "\r\n";
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