import './Feature.css'
import features from '../../datas/features'

/**
 * @name Feature
 * @param {array} features
 * @param {object} feature
 * @returns {JSX}
 */

export default function Feature() {
  return (
    <>
      {features.map((feature, index) => (
        <div className="feature-item" key={index}>
          <img src={feature.icon} alt={feature.alt} className="feature-icon" />
          <h3 className="feature-item-title">{feature.title}</h3>
          <p>
            {feature.content}
          </p>
        </div>
      ))}
    </>
  )
}