<?php

    if(empty($_GET['lang'])){
        $_SESSION['lang'] = "fr";
    }
    else{
        switch($_GET['lang']){
            case "fr":
            $_SESSION['lang'] = "fr";
            break;
            case "en":
            $_SESSION['lang'] = "en";
            break;
            default :
            $_SESSION['lang'] = "fr";
            break;
        }
    }
    switch($_SESSION['lang']){
            case "fr":
            $fichier_lang = "lang/lang_fr.php";
            break;
            case "en":
            $fichier_lang = "lang/lang_en.php";
            break;
    }
    include($fichier_lang);
?>