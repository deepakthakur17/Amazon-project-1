onst form = document.querySelector('form');
    const errorMessage = document.querySelector('#error-message');

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = document.querySelector('#email').value;
      const newPassword = document.querySelector('#new_password').value;
      const confirmPassword = document.querySelector('#confirm_password').value;

      if (newPassword !== confirmPassword) {
        errorMessage.textContent = 'Passwords do not match';
        return;
      }

      // Send request to server to reset password
      // You will need to implement this part based on your server-side technology
      fetch('/reset-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, newPassword }),
      })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          errorMessage.textContent = 'Password reset successfully!';
        } else {
          errorMessage.textContent = 'Error resetting password';
        }
      })
      .catch((error) => {
        errorMessage.textContent = 'Error resetting password';
      });
    });