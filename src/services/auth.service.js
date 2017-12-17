export const authService = {
    logout,
};

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}