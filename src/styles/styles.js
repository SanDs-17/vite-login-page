const styles = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    padding: '20px',
  },

  card: {
    background: 'white',
    borderRadius: '20px',
    padding: '32px',
    width: '100%',
    maxWidth: '420px',
    boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
  },

  title: {
    textAlign: 'center',
    fontSize: '26px',
    marginBottom: '8px',
    fontWeight: 'bold',
    color: '#1a202c',
  },

  subtitle: {
    textAlign: 'center',
    color: '#718096',
    marginBottom: '24px',
    fontSize: '14px',
  },

  inputGroup: {
    position: 'relative',
    width: '100%',
    marginBottom: '16px',
  },

  input: {
    width: '100%',
    padding: '14px 48px 14px 14px',
    border: '2px solid #e2e8f0',
    borderRadius: '10px',
    fontSize: '15px',
    outline: 'none',
    boxSizing: 'border-box',
    fontFamily: 'inherit',
  },

  iconButton: {
    position: 'absolute',
    right: '14px',
    top: '50%',
    transform: 'translateY(-50%)',
    width: '22px',
    height: '22px',
    background: 'none',
    border: 'none',
    pointerEvents: 'none',
    fontSize: '18px',
    color: '#718096',
  },

  eyeButton: {
    position: 'absolute',
    right: '14px',
    top: '50%',
    transform: 'translateY(-50%)',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    fontSize: '20px',
  },

  error: {
    color: '#f56565',
    fontSize: '13px',
    marginTop: '-8px',
    marginBottom: '12px',
  },

  submitButton: {
    width: '100%',
    padding: '14px',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
    border: 'none',
    borderRadius: '10px',
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'pointer',
    marginTop: '10px',
  },

  divider: {
    textAlign: 'center',
    color: '#a0aec0',
    margin: '20px 0',
    fontSize: '14px',
  },

  googleWrapper: {
    display: 'flex',
    justifyContent: 'center',
  },

  switchText: {
    textAlign: 'center',
    marginTop: '18px',
    fontSize: '14px',
    color: '#718096',
  },

  linkButton: {
    background: 'none',
    border: 'none',
    color: '#667eea',
    fontWeight: 'bold',
    cursor: 'pointer',
    textDecoration: 'underline',
  },
};

export default styles;
