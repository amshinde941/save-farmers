import React from "react"

const Socials = ({ isMobile }) => {
  const pascSocials = [
    {
      icon: "facebook",
      text: "Facebook",
      link: "https://www.facebook.com/acmpict/",
    },
    {
      icon: "facebook",
      text: "Facebbok",
      link: "https://www.facebook.com/acmpict/",
    },
    {
      icon: "facebook",
      text: "Facebook",
      link: "https://www.facebook.com/acmpict/",
    },
    {
      icon: "facebook",
      text: "Facebook",
      link: "https://www.facebook.com/acmpict/",
    },
  ]

  return (
    <div>
      <p >
        Our Socials
      </p>
      <div className={`grid grid-cols-2 gap-y-4`}>
        {pascSocials.map(social => (
          <a
            href={social.link}
            target="_blank"
            key={social.text}
            rel="noreferrer"
            className={`flex items-center`}
          >
            <span className={`material-icons  mr-2`} style={{fontSize:"24px"}}>{social.icon}</span>
            <p
              className={`${
                isMobile ? "paragraph2 regular" : "paragraph2 medium"
              }`}
            >
              {social.text}
            </p>
          </a>
        ))}
      </div>
    </div>
  )
}

export default Socials
