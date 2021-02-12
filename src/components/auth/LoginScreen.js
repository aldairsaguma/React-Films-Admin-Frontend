import React from 'react';
import '../../styles/components/auth/__auth.scss';
import '../../styles/components/auth/__authResponsive.scss';

export const LoginScreen = () => {

    const handleLogin = (e) => {
        e.preventDefault();
        console.log('Click');
    }

    return (
        <div className="LoginScreeen">
            <div className="LoginScreen__login">
                <div className="Ingreso_Registro">
                        <span>BIENVENIDO</span>
                </div>
                <div className="ingreso">
                    <form className="form-login" onSubmit={handleLogin}>
                        <div>
                            <input type="email" placeholder="Correo electrónico" />
                        </div>
                        <div>
                            <input type="password" placeholder="Contraseña" />
                        </div>
                        <div className="div-submit">
                            <button type="submit">Ingresar</button>
                        </div>
                    </form>
                    <div className="msg-error">
                        <span>
                            Usuario incorrecto
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
