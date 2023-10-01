<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('login', [App\Http\Controllers\AuthenticationController::class, 'login'])->name('login.form');
Route::post('login', [App\Http\Controllers\AuthenticationController::class, 'execLogin'])->name('login');

Route::post('logout', [App\Http\Controllers\AuthenticationController::class, 'logout'])->name('logout')->middleware('auth');

Route::get('register', [App\Http\Controllers\RegisterController::class, 'form'])->name('register.form');
Route::post('register', [App\Http\Controllers\RegisterController::class, 'register'])->name('register');

Route::get('home', App\Http\Controllers\HomeController::class)->name('home')->middleware('auth');

Route::middleware('auth')->prefix('dashboard')->group(function() // * Rotas autenticadas
{
    Route::get('', fn() => 'welcome');

})->name('dashboard.');
