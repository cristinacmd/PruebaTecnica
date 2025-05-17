package com.econocom.prueba.service;

import org.springframework.stereotype.Service;

import com.econocom.prueba.dto.LoginRequest;
import com.econocom.prueba.util.JwtUtil;

@Service
public class AuthService {
    private final JwtUtil jwtUtil;
    public AuthService(JwtUtil jwtUtil) {
        this.jwtUtil = jwtUtil;
    }

    public String login(LoginRequest request) {
        // Simulación de autenticación
        if ("usuario@example.com".equals(request.getEmail()) && "1234".equals(request.getPassword())) {
            return jwtUtil.generateToken(request.getEmail());
        } else {
            throw new RuntimeException("Credenciales inválidas");
        }
    }
}
