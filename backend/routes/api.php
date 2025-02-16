<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\MessageController;

Route::post('/generate-response', [MessageController::class, 'generateResponse']);

