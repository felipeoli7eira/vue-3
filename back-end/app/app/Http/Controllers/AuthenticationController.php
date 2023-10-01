<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthenticationController extends Controller
{
    public function login()
    {
        return view('auth.login');
    }

    public function execLogin(Request $request)
    {
        $validated_request_data = $request->validate([
            'email'    => ['required', 'email'],
            'password' => ['required', 'max:255'],
        ]);

        // $request->filled('remember') precisa da coluna remember_token

        if (Auth::attempt($validated_request_data)) {
            $request->session()->regenerate();

            return redirect()->intended('home');
        }

        return back()->withErrors([
            'email' => 'E-mail e/ou senha incorreto(s)'
        ]);
    }

    public function logout(Request $request)
    {
        Auth::logout();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return redirect('/');
    }
}
