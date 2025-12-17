import './ContentCard.css'

function ContentCard() {
  const recommendations = [
    {
      id: 1,
      title: "LLM Fundamentals by Matt Pocock",
      link: "https://www.aihero.dev/llm-fundamentals",
      linkText: "aihero.dev/llm-fundamentals",
      description: "Short 3–5 minute video tutorials explaining LLM basics: why \"Hello world\" uses fewer tokens than \"Вітаю світе!\", why LLMs lose information in the middle of long prompts, and more."
    },
    {
      id: 2,
      title: "Andrej Karpathy on LLMs reshaping software",
      link: "https://www.youtube.com/watch?v=LCEmiRjPEtQ",
      linkText: "YouTube talk",
      description: "Perspective on how LLMs are a new kind of computer, programmable in natural language, and what this shift means for software development and AI-driven products."
    },
    {
      id: 3,
      title: "Cursor Visual Editor",
      link: "https://cursor.com/blog/browser-visual-editor",
      linkText: "cursor.com/blog/browser-visual-editor",
      description: "Figma-like visual editor in Cursor for quickly creating UI prototypes with drag-and-drop, point-and-prompt editing.",
      showcase: {
        text: "I even recreated a copy of this email with it — check it out",
        link: "https://example.com/showcase",
        linkText: "here"
      }
    }
  ]

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

