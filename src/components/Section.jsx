export const Section = ({ title, titleAlign, link, children }) => {
  const titleStyles = {
    color: 'dark-gray-2',
    fontSize: '24px',
    textAlign: titleAlign,
  };

  const linkStyles = {
    color: 'primary',
    fontSize: '18px',
  };

  return (
    <div>
      <div>
        <h2 style={titleStyles}>{title}</h2>
        {link && (
          <a href={link.href} style={linkStyles}>
            {link.text}
          </a>
        )}
      </div>
      <div>
        {children}
      </div>
    </div>
  );
};