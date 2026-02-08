import { useState } from 'react';

function ContactCard({ name, id, email, imageUrl }) {
    const [isHovered, setIsHovered] = useState(false);

    const cardStyle = {
        position: 'relative',
        width: isHovered ? '340px' : '300px',
        padding: '28px 24px',
        backgroundColor: '#ffffff',
        borderRadius: '20px',
        boxShadow: isHovered
          ? '0 25px 50px -12px rgb(0 0 0 / 0.3)'
          : '0 10px 20px -5px rgb(0 0 0 / 0.15)',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        transform: isHovered ? 'translateY(-15px) scale(1.06)' : 'translateY(0)scale(1)',
        textAlign: 'center',
        cursor: 'pointer',
        margin: '20px',
        overflow: 'visible',
      };

      const imgStyle = {
        width: '120px',
        height: '120px',
        borderRadius: '50%',
        objectFit: 'cover',
        marginBottom: '20px',
        transition: 'transform 0.4s ease',
        transform: isHovered ? 'scale(1.12)' : 'scale(1)',
      };

      const nameStyle = {
        fontSize: isHovered ? '1.8rem' : '1.5rem',
        fontWeight: '700',
        margin: '0 0 6px 0',
        color: '#1f2937',
      };

      const idStyle = {
        color: '#6b7280',
        fontSize: '1rem',
        marginBottom: '12px',
      };

      const emailStyle = {
        color: '#3b82f6',
        fontSize: isHovered ? '1.15rem' : '1.05rem',
        fontWeight: '500',
        marginBottom: '20px',
      };

      const bubbleStyle = {
        position: 'absolute',
        top: '-68px',
        left: '50%',
        transform: 'translateX(-50%)',
        backgroundColor: '#1f2937',
        color: '#fff',
        padding: '10px 26px',
        borderRadius: '30px',
        fontSize: '1rem',
        whiteSpace: 'nowrap',
        boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.4)',
        opacity: isHovered ? 1 : 0,
        pointerEvents: 'none',
        transition: 'all 0.3s ease',
        display: isHovered ? 'block' : 'none',
      };

      const arrowStyle = {
        position: 'absolute',
        bottom: '-10px',
        left: '50%',
        transform: 'translateX(-50%)',
        borderLeft: '14px solid transparent',
        borderRight: '14px solid transparent',
        borderTop: '14px solid #1f2937',
      };

      return (
        <div
            style={cardStyle}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <img src={imageUrl} alt={name} style={imgStyle} />

            <h2 style={nameStyle}>{name}</h2>
            <p style={idStyle}>{id}</p>
            <p style={emailStyle}>{email}</p>

            {/* The bubble */}
            <div style={bubbleStyle}>
              Let's Connect!📬
              <div style={arrowStyle} />
            </div>
        </div>
      );
}

export default ContactCard;