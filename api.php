<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
header("Access-Control-Allow-Credentials: true");
header("Content-Type: application/json; charset=UTF-8");

// OPTIONS request for CORS preflight
if ($_SERVER["REQUEST_METHOD"] == "OPTIONS") {
    http_response_code(200);
    exit();
}

// Zkontroluje, zda byly data odeslána metodou POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Přečte data z těla požadavku
    $data = json_decode(file_get_contents("php://input"));

    // Ladicí výpis pro kontrolu přijatých dat
    error_log("Přijatá data: " . print_r($data, true));

    if ($data) {
        // Načte data z požadavku
        $firstName = isset($data->firstName) ? $data->firstName : null;
        $lastName = isset($data->lastName) ? $data->lastName : null;
        $birthday = isset($data->birthday) ? $data->birthday : null;
        $phone = isset($data->phone) ? $data->phone : null;
        $email = isset($data->email) ? $data->email : null;
        $car = isset($data->car) ? $data->car : null;
        $town = isset($data->town) ? $data->town : null;
        $from = isset($data->from) ? $data->from : null;
        $to = isset($data->to) ? $data->to : null;
        $groupB = isset($data->groupB) ? $data->groupB : null;
        $gdpr = isset($data->gdpr) ? $data->gdpr : null;

        if (!$firstName || !$lastName || !$birthday || !$phone || !$email || !$car || !$town || !$from || !$to || !$groupB || !$gdpr) {
            http_response_code(400);
            echo json_encode(["message" => "Některé požadované údaje chybí"]);
            exit();
        }

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
        $headers .= 'Reply-To: ' . $email . "\r\n";

        // Ladicí výpisy
        error_log("Odesílání e-mailu na adresu: $toEmail");
        error_log("Předmět: $subject");
        error_log("Hlavičky: $headers");
        error_log("Zpráva: $message");

        // Odeslat e-mail
        if (mb_send_mail($toEmail, $subject, $message, $headers)) {
            http_response_code(200);
            echo json_encode(["message" => "E-mail byl úspěšně odeslán"]);
        } else {
            http_response_code(500);
            echo json_encode(["message" => "Nastala chyba při odesílání e-mailu"]);
        }
    } else {
        http_response_code(400);
        echo json_encode(["message" => "Nesprávná data v požadavku"]);
    }
} else {
    // Pokud není požadavek typu POST, vrátí chybu
    http_response_code(405);
    echo json_encode(["message" => "Metoda požadavku není povolena"]);
}
?>