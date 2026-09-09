import Icon from './Icon'

export function MediaPlaceholder({ item = {}, className = '', icon = 'image', compact = false }) {
  if (item.src) {
    return <img className={`media-real ${className}`} src={item.src} alt={item.alt || item.label || ''} />
  }
  return <div className={`media-placeholder ${compact ? 'compact' : ''} ${className}`} role="img" aria-label={item.label || 'Espacio para recurso pendiente'}>
    <span className="placeholder-icon"><Icon name={icon} size={compact ? 18 : 28} /></span>
    <span>{item.label || 'ESPACIO PARA RECURSO'}</span>
    {!compact && <small>Reemplazable desde <code>src/config.js</code></small>}
  </div>
}

export function LogoSlot({ item, label, className = '' }) {
  if (item?.src) return <img className={`logo-image ${className}`} src={item.src} alt={item.alt || label} />
  return <span className={`logo-slot ${className}`} aria-label={label}>{label}</span>
}
