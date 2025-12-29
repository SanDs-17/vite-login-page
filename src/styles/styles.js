const styles = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    padding: '20px',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  },

  card: {
    background: 'white',
    borderRadius: '24px',
    padding: '40px',
    width: '100%',
    maxWidth: '440px',
    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
  },

  title: {
    textAlign: 'center',
    fontSize: '32px',
    fontWeight: '700', 
    marginBottom: '8px',
    color: '#1a202c',
    letterSpacing: '-0.5px',
  },

  
  subtitle: {
    textAlign: 'center',
    color: '#718096', 
    marginBottom: '32px',
    fontSize: '15px',
    lineHeight: '1.5',
  },

  
  inputGroup: {
    position: 'relative',
    width: '100%',
    marginBottom: '20px',
  },

  
  input: {
    width: '100%',
    padding: '16px 50px 16px 16px', 
    border: '2px solid #e2e8f0', 
    borderRadius: '12px',
    fontSize: '15px',
    outline: 'none', 
    boxSizing: 'border-box', 
    fontFamily: 'inherit', 
    transition: 'all 0.3s ease',
    backgroundColor: '#fff',
  },

  
  inputFocus: {
    borderColor: '#667eea', 
    boxShadow: '0 0 0 4px rgba(102, 126, 234, 0.1)', 
  },

 
  iconButton: {
    position: 'absolute', 
    right: '16px',
    top: '50%',
    transform: 'translateY(-50%)', 
    width: '24px',
    height: '24px',
    background: 'none',
    border: 'none',
    fontSize: '18px',
    color: '#a0aec0',
    pointerEvents: 'none', 
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  
  eyeButton: {
    position: 'absolute',
    right: '16px',
    top: '50%',
    transform: 'translateY(-50%)',
    background: 'none',
    border: 'none',
    cursor: 'pointer', 
    fontSize: '22px',
    padding: '4px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'transform 0.2s',
  },

 
  error: {
    color: '#f56565', 
    fontSize: '13px',
    marginTop: '-12px', 
    marginBottom: '16px',
    paddingLeft: '4px',
  },

  
  submitButton: {
    width: '100%',
    padding: '16px',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
    border: 'none',
    borderRadius: '12px',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
    marginTop: '8px',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 15px rgba(102, 126, 234, 0.4)', 
  },

  
  submitButtonHover: {
    transform: 'translateY(-2px)', 
    boxShadow: '0 8px 25px rgba(102, 126, 234, 0.5)', 
  },

 
  divider: {
    textAlign: 'center',
    color: '#a0aec0',
    margin: '24px 0',
    fontSize: '14px',
  },


  googleWrapper: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '8px',
  },

  
  switchText: {
    textAlign: 'center',
    marginTop: '24px',
    fontSize: '14px',
    color: '#718096',
  },

  
  linkButton: {
    background: 'none',
    border: 'none',
    color: '#667eea', 
    fontWeight: '600',
    cursor: 'pointer',
    textDecoration: 'none',
    padding: '0',
    fontSize: '14px',
    transition: 'color 0.2s',
  },

 
  dashboardContainer: {
    maxWidth: '1000px',
    width: '100%',
    padding: '20px',
  },


  dashboardHeader: {
    display: 'flex',
    justifyContent: 'space-between', 
    alignItems: 'center',
    marginBottom: '40px',
    flexWrap: 'wrap',
    gap: '16px',
  },

  dashboardTitle: {
    color: 'white',
    fontSize: '40px',
    fontWeight: '700',
    margin: 0,
    letterSpacing: '-1px',
  },

 
  logoutButton: {
    padding: '12px 32px',
    background: 'white',
    border: 'none',
    color: '#667eea',
    borderRadius: '12px',
    fontSize: '15px',
    fontWeight: '600',
    cursor: 'pointer',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
    transition: 'all 0.3s ease',
  },

  logoutButtonHover: {
    transform: 'translateY(-2px)',
    boxShadow: '0 6px 20px rgba(0, 0, 0, 0.3)',
  },

  
  profileCard: {
    background: 'white',
    borderRadius: '24px',
    padding: '48px 40px',
    textAlign: 'center',
    marginBottom: '32px',
    boxShadow: '0 10px 40px rgba(0, 0, 0, 0.2)',
  },

  profileImage: {
    width: '120px',
    height: '120px',
    borderRadius: '50%', 
    margin: '0 auto 24px',
    border: '5px solid #667eea',
    display: 'block',
    objectFit: 'cover',
    boxShadow: '0 8px 24px rgba(102, 126, 234, 0.3)',
  },

  
  avatar: {
    width: '120px',
    height: '120px',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '52px',
    fontWeight: '700',
    margin: '0 auto 24px',
    boxShadow: '0 8px 24px rgba(102, 126, 234, 0.4)',
  },

  userName: {
    fontSize: '32px',
    fontWeight: '700',
    marginBottom: '8px',
    color: '#1a202c',
    letterSpacing: '-0.5px',
  },

  userEmail: {
    color: '#718096',
    fontSize: '16px',
    marginBottom: '20px',
  },

  
  badge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    background: 'linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)',
    color: '#16a34a', 
    padding: '10px 20px',
    borderRadius: '25px',
    fontSize: '14px',
    fontWeight: '600',
    border: '2px solid #86efac',
  },

 
  infoGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
    gap: '24px',
  },

  
  infoCard: {
    background: 'white',
    borderRadius: '20px',
    padding: '32px',
    boxShadow: '0 5px 20px rgba(0, 0, 0, 0.15)',
    textAlign: 'center',
    transition: 'all 0.3s ease',
  },

  infoCardHover: {
    transform: 'translateY(-5px)', 
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
  },

  infoTitle: {
    color: '#a0aec0',
    fontSize: '12px',
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    marginBottom: '12px',
  },

  infoValue: {
    fontSize: '28px',
    fontWeight: '700',
    color: '#1a202c',
    margin: 0,
  },

  statusActive: {
    fontSize: '28px',
    fontWeight: '700',
    color: '#16a34a', 
    margin: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
  },
};

export default styles;