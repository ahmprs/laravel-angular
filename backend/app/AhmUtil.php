<?php

namespace App;

use Illuminate\Http\Request;
use Illuminate\Http\Response;

class AhmUtil 
{
    static function getSession($key){
        if (session_status() == PHP_SESSION_NONE) {
            session_start();
        }
        if (isset($_SESSION[$key])) return $_SESSION[$key];
        else return '';
    }

    static function setSession($key, $val){
        if (session_status() == PHP_SESSION_NONE) {
            session_start();
        }
        $_SESSION[$key] = $val;        
    }

    static function resp($ok = 1, $result){
        
        $content = ["ok" => $ok, "result" => $result];
        $status = 200;

        return (new Response($content, $status))
        ->header('Content-Type', 'application/json');
        // ->header('Access-Control-Allow-Origin', '*')
        // ->header('Accept', '*/*')
        // ->header('Access-Control-Request-Method', 'POST, GET')
        // ->header('Host', 'http://127.0.0.1:8000')
        // ->header('Origin', 'http://127.0.0.1:4200')
        // ->header('Referer', 'http://127.0.0.1:4200/');


        // :*/*
        // Accept-Encoding:gzip, deflate, br
        // Accept-Language:nl-NL,nl;q=0.8,en-US;q=0.6,en;q=0.4
        // Access-Control-Request-Headers:content-type
        // 
        // Connection:keep-alive
        // Host:hp-probook
        // :
        // :
        
        
        // return Response()
        // ->json(["ok" => $ok, "result" => $result]);
    }

    static function respAccessDenied(){
        return AhmUtil::resp(0, 'Access Denied!');
    }


    static function upload(Request $req){
        if (!isset($_FILES['fileToUpload'])) return AhmUtil::resp(0, 'missing file');
        
        // TEST:
        // return AhmUtil::resp(1, $_FILES);
        // if ($_FILES['fileToUpload']['name']=='') return AhmUtil::resp(0, 'missing file name');
        // if ($_FILES['fileToUpload']['type']=='') return AhmUtil::resp(0, 'missing file type');
        // if ($_FILES['fileToUpload']['tmp_name']=='') return AhmUtil::resp(0, 'missing file name');


        $file_name = $_FILES['fileToUpload']['name'];
        $file_type = $_FILES['fileToUpload']['type'];
        $file_tmp_name = $_FILES['fileToUpload']['tmp_name'];
        $error = $_FILES['fileToUpload']['error'];
        $file_size = $_FILES['fileToUpload']['size'];
        
        $dir_destination = storage_path("mydir/");
        if (!is_dir($dir_destination)){
            if (!mkdir($dir_destination, 0777, true)) {
                return AhmUtil::resp(0, "failed to create output directory");
            }
        }
        $file_destination = "$dir_destination\\$file_name";
        
        if (file_exists($file_destination)){
            return AhmUtil::resp(0, 'file already exists');
        }
        if(!copy($file_tmp_name , $file_destination)){
            return AhmUtil::resp(0, 'file copy to destination failed');
        }
        return AhmUtil::resp(1, 'upload succeeded');
    }
}
