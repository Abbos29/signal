<?php

//В переменную $token нужно вставить токен, который нам прислал @botFather
$token = "5433980092:AAG2D9vf23FhMooYSzjpzxlmxxj6yhBnrkY";

//Сюда вставляем chat_id
$chat_id = "-781702655";

//Определяем переменные для передачи данных из нашей формы
if ($_POST['act'] == 'order') {
    $name = ($_POST['name']);
    $phone = ($_POST['number']);
    $text = ($_POST['text']);

//Собираем в массив то, что будет передаваться боту
    $arr = array( 
        'Имя:' => $name,
        'Телефон:' => $phone,
        'Сообщение:' => $text
    );

//Настраиваем внешний вид сообщения в телеграме
    foreach($arr as $key => $value) {
        $txt .= "<b>".$key."</b> ".$value."%0A";
    };

//Передаем данные боту
    $sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

//Выводим сообщение об успешной отправке
    if ($sendToTelegram) {
        alert('Спасибо! Ваша заявка принята. Мы свяжемся с вами в ближайшее время.');
    }

//А здесь сообщение об ошибке при отправке
    else {
        alert('Что-то пошло не так. Попробуйте отправить форму ещё раз.');
    }
}

?>