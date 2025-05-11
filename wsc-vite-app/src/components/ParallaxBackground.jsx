"use client"

import { useState, useEffect, useRef } from "react"

const ParallaxBackground = ({
  imageUrl,
  children,
  speed = 0.5,
  height = "100vh",
  overlay = true,
  overlayColor = "rgba(0, 0, 0, 0.6)",
}) => {
  const [scrollPosition, setScrollPosition] = useState(0)
  const containerRef = useRef(null)
  const [isImageLoaded, setIsImageLoaded] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const containerTop = containerRef.current.getBoundingClientRect().top
        const windowHeight = window.innerHeight

        // Only update scroll position when the element is in view
        if (containerTop < windowHeight && containerTop > -containerRef.current.offsetHeight) {
          setScrollPosition(window.pageYOffset)
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Preload the image
  useEffect(() => {
    const img = new Image()
    img.src = imageUrl
    img.onload = () => setIsImageLoaded(true)
  }, [imageUrl])

  const parallaxStyle = {
    backgroundImage: `url(${imageUrl})`,
    backgroundPosition: `center ${scrollPosition * speed}px`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height,
    position: "relative",
    transition: "opacity 0.5s ease-in-out",
    opacity: isImageLoaded ? 1 : 0,
  }

  return (
    <div ref={containerRef} style={parallaxStyle} className="parallax-container">
      {overlay && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: overlayColor,
          }}
        />
      )}
      <div className="relative z-10 h-full">{children}</div>
    </div>
  )
}

export default ParallaxBackground
