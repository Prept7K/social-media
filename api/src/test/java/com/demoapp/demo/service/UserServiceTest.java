package com.demoapp.demo.service;

import com.demoapp.demo.model.User;
import com.demoapp.demo.repository.UserRepository;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class UserServiceTest {

    @Mock
    private UserRepository userRepository;

    @InjectMocks
    private UserService userService;

    // ==================== TESTES DE SUCESSO ====================

    @Test
    @DisplayName("B1 - Deve validar e-mail correto")
    void testIsEmailValid() {
        assertTrue(userService.isEmailValid("felipe@email.com"), "E-mail válido deve retornar true");
        assertFalse(userService.isEmailValid("emailinvalido"), "E-mail sem @ deve retornar false");
    }

    @Test
    @DisplayName("B2 - Deve criar usuário com sucesso")
    void testCreateUser() {
        when(userRepository.save(any(User.class))).thenAnswer(i -> i.getArgument(0));

        User user = userService.createUser("teste@email.com", "Senha@123");

        assertNotNull(user);
        assertEquals("teste@email.com", user.getEmail());
        verify(userRepository, times(1)).save(any(User.class));
    }

    // ==================== TESTE DE BUG ====================

    @Test
    @DisplayName("B3 - [BUG] Senha deve ser hasheada (está em texto puro)")
    void testCreateUser_passwordShouldBeHashed() {
        when(userRepository.save(any(User.class))).thenAnswer(i -> i.getArgument(0));

        User user = userService.createUser("teste@email.com", "Senha@123");

        // Este teste DEVE FALHAR enquanto o bug existir
        assertNotEquals("Senha@123", user.getPassword(),
            "BUG CONFIRMADO: A senha está sendo salva em texto puro no banco!");
    }
}