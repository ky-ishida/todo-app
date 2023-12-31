<?php

use App\Http\Controllers\ToDoController;
use App\Http\Controllers\ToDoDetailController;
use App\Http\Controllers\SearchController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use phpDocumentor\Reflection\Types\Resource_;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
// どのユーザーがエンドポイントにアクセスできるかの設定
Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

// リソースコントローラーの設定
Route::resource('toDos', ToDoController::class);
Route::resource('toDoDetails', ToDoDetailController::class);

// サーチボタンのAPIコントローラー
Route::get('search', [SearchController::class, 'search']);
