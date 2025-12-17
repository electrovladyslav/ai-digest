import './ContentCard.css'
import recommendations from '../data/recommendations.js'

function ContentCard() {

  return (
    <div className="content-card">
      <p className="intro-text">
        This week's picks highlight essential AI resources for developers — from LLM fundamentals to the future of AI-driven software and practical tools for UI development.
      </p>
      
      <ul className="recommendations-list">
        {recommendations.map((item) => (
          <li key={item.id} className="recommendation-item">
            <span className="recommendation-title">{item.title}</span>
            {" — "}
            <a 
              href={item.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="recommendation-link"
            >
              {item.linkText}
            </a>
            <p className="recommendation-description">
              {item.description}
              {item.showcase && (
                <>
                  {" "}{item.showcase.text}{" "}
                  <a 
                    href={item.showcase.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="showcase-link"
                  >
                    {item.showcase.linkText}
                  </a>
                  !
                </>
              )}
            </p>
          </li>
        ))}
      </ul>
      
      <div className="footer-cta">
        <em>Explore more exciting updates in <a href="#" className="cta-link">AI Corner</a></em>
        <span className="lightbulb-icon">💡</span>
      </div>
    </div>
  )
}

export default ContentCard

