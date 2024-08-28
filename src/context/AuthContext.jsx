import { createContext, useContext, useReducer } from 'react';

const AuthContext = createContext(null);
const AuthDispatchContext = createContext(null);

export function AuthProvider({ children }) {
    const [user, dispatch] = useReducer(
        authReducer,
        initialUser
    )

    return (
        <AuthContext.Provider value={user}>
            <AuthDispatchContext.Provider value={dispatch}>
                {children}
            </AuthDispatchContext.Provider>
        </AuthContext.Provider>
    )
}

export function useAuth() {
    return useContext(AuthContext)
}

export function useAuthDispatch() {
    return useContext(AuthDispatchContext)
}

function authReducer(auth, action) {
    switch (action.type) {
        case 'signin': {
            return {
                user: action.user,
                auth: action.auth
            }
        }
        case 'signout': {
            return {
                user: null,
                auth: false
            }
        }
        default: {
            throw Error('Unknown action: ' + action.type)
        }
    }
}

const initialUser = {
    user: null,
    auth: false
}