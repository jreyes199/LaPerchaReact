import React, { useState, useEffect } from 'react';
// Importamos useLocation para leer la "mochila" de datos que viene del Navbar
import { useNavigate, useLocation } from 'react-router-dom'; 
import "../styles/login.css";

const AuthForm = () => {
  const navigate = useNavigate(); 
  const location = useLocation();

  // --- ESTADOS ---
  const [isLogin, setIsLogin] = useState(true);
  const [sesionActiva, setSesionActiva] = useState(null); // Guarda al usuario logueado
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  // 🛠️ RUTA DE RETORNO INTELIGENTE:
  // Si venía de una sección (ej: /blusas), la guardará aquí. 
  // Nota: Si tu programa principal está en otra ruta (ej: '/dashboard'), puedes cambiar el '/' final por esa ruta.
  const rutaDestino = location.state?.from?.pathname || '/';

  // --- COMPROBAR SESIÓN AL CARGAR LA PÁGINA ---
  useEffect(() => {
    const usuarioLogueado = localStorage.getItem('usuario_actual');
    if (usuarioLogueado) {
      setSesionActiva(JSON.parse(usuarioLogueado));
    }
  }, []);

  // --- FUNCIÓN PARA CERRAR SESIÓN ---
  const handleLogout = () => {
    localStorage.removeItem('usuario_actual'); // Borra la sesión
    setSesionActiva(null); // Limpia el estado interno
    alert("Sesión cerrada correctamente.");
  };

  // Manejador de cambios en los inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) setErrors({ ...errors, [name]: '' });
    if (errors.auth) setErrors({ ...errors, auth: '' });
  };

  // Función de validación de campos
  const validate = () => {
    let activeErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!isLogin && !formData.name.trim()) activeErrors.name = 'El nombre es obligatorio';
    if (!formData.email) {
      activeErrors.email = 'El correo electrónico es obligatorio';
    } else if (!emailRegex.test(formData.email)) {
      activeErrors.email = 'El formato de correo no es válido';
    }
    if (!formData.password) {
      activeErrors.password = 'La contraseña es obligatoria';
    } else if (formData.password.length < 6) {
      activeErrors.password = 'La contraseña debe tener al menos 6 caracteres';
    }
    if (!isLogin && formData.password !== formData.confirmPassword) {
      activeErrors.confirmPassword = 'Las contraseñas no coinciden';
    }

    setErrors(activeErrors);
    return Object.keys(activeErrors).length === 0;
  };

  // Manejador del envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      if (isLogin) {
        // --- LÓGICA DE LOGIN ---
        const usuariosRegistrados = JSON.parse(localStorage.getItem('usuarios_ecommerce')) || [];
        const usuarioEncontrado = usuariosRegistrados.find(user => user.email === formData.email);

        if (usuarioEncontrado && usuarioEncontrado.password === formData.password) {
          alert(`¡Bienvenido, ${usuarioEncontrado.name || 'Usuario'}!`);
          
          const dataUsuario = {
            name: usuarioEncontrado.name,
            email: usuarioEncontrado.email
          };

          // Guardamos la sesión en localStorage y actualizamos el estado
          localStorage.setItem('usuario_actual', JSON.stringify(dataUsuario));
          setSesionActiva(dataUsuario);

          setFormData({ name: '', email: '', password: '', confirmPassword: '' });

          // 🚀 REDIRECCIÓN FORZADA: Usamos window.location.href en lugar de navigate 
          // para limpiar el estado de React y obligar a toda la app a leer el nuevo localStorage.
          window.location.href = rutaDestino;

        } else {
          setErrors({ auth: 'El correo electrónico o la contraseña son incorrectos.' });
        }
      } else {
        // --- LÓGICA DE REGISTRO ---
        const usuariosRegistrados = JSON.parse(localStorage.getItem('usuarios_ecommerce')) || [];
        const correoExiste = usuariosRegistrados.some(user => user.email === formData.email);

        if (correoExiste) {
          setErrors({ email: 'Este correo electrónico ya está registrado.' });
          return;
        }

        const nuevoUsuario = {
          name: formData.name,
          email: formData.email,
          password: formData.password
        };

        usuariosRegistrados.push(nuevoUsuario);
        localStorage.setItem('usuarios_ecommerce', JSON.stringify(usuariosRegistrados));

        alert('¡Cuenta creada con éxito!');
        setIsLogin(true);
        setFormData({ name: '', email: '', password: '', confirmPassword: '' });
      }
    }
  };

  const switchMode = () => {
    setIsLogin(!isLogin);
    setFormData({ name: '', email: '', password: '', confirmPassword: '' });
    setErrors({});
  };

  return (
    <div className="auth-container">
      
      {/* ⚠️ CONDICIÓN: Si hay una sesión activa, bloquea el formulario y muestra la opción de cerrar sesión */}
      {sesionActiva ? (
        <div className="auth-card" style={{ textAlign: 'center' }}>
          <h2>Sesión Activa</h2>
          <p style={{ color: '#1a1a1a', margin: '15px 0' }}>
            Ya estás registrado como: <br />
            <strong>{sesionActiva.name || sesionActiva.email}</strong>
          </p>
          <p style={{ color: '#6b6659', fontSize: '14px' }}>
            No puedes iniciar otra sesión a menos que cierres la actual.
          </p>
          
          <button 
            type="button" 
            className="btn-submit" 
            onClick={handleLogout}
            style={{ backgroundColor: '#d32f2f', marginTop: '20px' }}
          >
            Cerrar Sesión Activa
          </button>

          <button 
            type="button" 
            className="btn-switch" 
            onClick={() => window.location.href = rutaDestino} 
            style={{ marginTop: '20px', display: 'block', width: '100%' }}
          >
            Volver al programa
          </button>
        </div>
      ) : (
        
        /* SI NO HAY SESIÓN ACTIVA: Muestra tu formulario original intacto */
        <div className="auth-card">
          <h2>{isLogin ? 'Iniciar Sesión' : 'Crear Cuenta'}</h2>
          
          <form onSubmit={handleSubmit} noValidate>
            {errors.auth && <div className="error-text" style={{ textAlign: 'center', marginBottom: '15px' }}>{errors.auth}</div>}

            {!isLogin && (
              <div className="form-group">
                <label htmlFor="name">Nombre Completo</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className={errors.name ? 'input-error' : ''}
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Tu nombre"
                />
                {errors.name && <span className="error-text">{errors.name}</span>}
              </div>
            )}

            <div className="form-group">
              <label htmlFor="email">Correo Electrónico</label>
              <input
                type="email"
                id="email"
                name="email"
                className={errors.email ? 'input-error' : ''}
                value={formData.email}
                onChange={handleChange}
                placeholder="correo@ejemplo.com"
              />
              {errors.email && <span className="error-text">{errors.email}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="password">Contraseña</label>
              <input
                type="password"
                id="password"
                name="password"
                className={errors.password ? 'input-error' : ''}
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
              />
              {errors.password && <span className="error-text">{errors.password}</span>}
            </div>

            {!isLogin && (
              <div className="form-group">
                <label htmlFor="confirmPassword">Confirmar Contraseña</label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  className={errors.confirmPassword ? 'input-error' : ''}
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Repite tu contraseña"
                />
                {errors.confirmPassword && <span className="error-text">{errors.confirmPassword}</span>}
              </div>
            )}

            <button type="submit" className="btn-submit">
              {isLogin ? 'Ingresar' : 'Registrarse'}
            </button>
          </form>

          <p className="switch-text">
            {isLogin ? '¿No tienes cuenta?' : '¿Ya tienes una cuenta?'}
            <button type="button" className="btn-switch" onClick={switchMode}>
              {isLogin ? 'Regístrate aquí' : 'Inicia sesión'}
            </button>
          </p>
        </div>
      )}
    </div>
  );
};

export default AuthForm;