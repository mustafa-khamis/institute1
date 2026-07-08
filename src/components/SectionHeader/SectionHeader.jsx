import './SectionHeader.css';

const SectionHeader = ({ title, subtitle, alignment = 'center', className = '' }) => {
  return (
    <div className={`section-header align-${alignment} ${className}`}>
      {subtitle && <span className="section-subtitle animate-fade-in">{subtitle}</span>}
      <h2 className="section-title animate-fade-in">{title}</h2>
      <div className="section-divider animate-fade-in"></div>
    </div>
  );
};

export default SectionHeader;
